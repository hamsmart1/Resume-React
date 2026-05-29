chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'captureTab') {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
      if (chrome.runtime.lastError) {
        sendResponse({ error: chrome.runtime.lastError.message });
      } else {
        sendResponse({ dataUrl: dataUrl });
      }
    });
    return true; // Keep connection open for asynchronous response
  }

  if (request.action === 'translateFree') {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${request.sl}&tl=th&dt=t&q=${encodeURIComponent(request.text)}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Network error: ' + res.statusText);
        return res.json();
      })
      .then((data) => {
        const translatedText = data[0].map((s) => s[0]).join('');
        sendResponse({ text: translatedText });
      })
      .catch((err) => {
        sendResponse({ error: err.message });
      });
    return true;
  }

  if (request.action === 'translateGemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${request.key}`;
    const payload = {
      contents: [{
        parts: [
          { text: `You are an expert manga and comic translator. Translate the text inside the provided image crop to natural, modern Thai. Output only the translated Thai text. Do not write any explanations, notes, or HTML tags.` },
          {
            inlineData: {
              mimeType: 'image/png',
              data: request.imageBase64
            }
          }
        ]
      }]
    };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Gemini API Error: ' + res.statusText);
        return res.json();
      })
      .then((data) => {
        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
          const text = data.candidates[0].content.parts[0].text.trim();
          sendResponse({ text: text });
        } else {
          throw new Error('Invalid response structure from Gemini API');
        }
      })
      .catch((err) => {
        sendResponse({ error: err.message });
      });
    return true;
  }

  if (request.action === 'ocrGoogle') {
    const url = `https://vision.googleapis.com/v1/images:annotate?key=${request.key}`;
    const payload = {
      requests: [{
        image: { content: request.imageBase64 },
        features: [{ type: 'TEXT_DETECTION' }]
      }]
    };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Google Vision API Error: ' + res.statusText);
        return res.json();
      })
      .then((data) => {
        if (data.responses && data.responses[0] && data.responses[0].textAnnotations) {
          const text = data.responses[0].textAnnotations[0].description;
          sendResponse({ text: text });
        } else {
          sendResponse({ text: '' }); // No text detected
        }
      })
      .catch((err) => {
        sendResponse({ error: err.message });
      });
    return true;
  }
});