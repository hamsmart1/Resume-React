// Ping handler to check if script is already loaded
if (window.mangaTranslatorLoaded) {
  // Script already initialized
} else {
  window.mangaTranslatorLoaded = true;

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'ping') {
      sendResponse(true);
      return;
    }

    if (request.action === 'activate') {
      startSelection(request.settings);
      sendResponse(true);
    }
  });

  function sendMessageAsync(message) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, (response) => {
        resolve(response || { error: 'No response from background script' });
      });
    });
  }

  function startSelection(settings) {
    // Prevent multiple overlays
    if (document.getElementById('manga-translator-overlay')) return;

    // Create selection overlay
    const overlay = document.createElement('div');
    overlay.id = 'manga-translator-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999999;cursor:crosshair;background:rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;';

    const selectionBox = document.createElement('div');
    selectionBox.style.cssText = 'position:absolute;border:2px dashed #ffffff;background:rgba(255,255,255,0.1);box-shadow:0 0 0 9999px rgba(0,0,0,0.5);display:none;pointer-events:none;';
    overlay.appendChild(selectionBox);

    document.body.appendChild(overlay);

    let startX, startY, endX, endY;
    let isDragging = false;

    overlay.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = true;
      selectionBox.style.left = startX + 'px';
      selectionBox.style.top = startY + 'px';
      selectionBox.style.width = '0px';
      selectionBox.style.height = '0px';
      selectionBox.style.display = 'block';
    });

    overlay.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      endX = e.clientX;
      endY = e.clientY;

      const x = Math.min(startX, endX);
      const y = Math.min(startY, endY);
      const w = Math.abs(startX - endX);
      const h = Math.abs(startY - endY);

      selectionBox.style.left = x + 'px';
      selectionBox.style.top = y + 'px';
      selectionBox.style.width = w + 'px';
      selectionBox.style.height = h + 'px';
    });

    overlay.addEventListener('mouseup', async (e) => {
      if (!isDragging) return;
      isDragging = false;

      endX = e.clientX;
      endY = e.clientY;

      const left = Math.min(startX, endX);
      const top = Math.min(startY, endY);
      const width = Math.abs(startX - endX);
      const height = Math.abs(startY - endY);

      // Clean up overlay overlay
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }

      if (width < 10 || height < 10) return; // Selection too small

      // Draw loader
      const loader = showLoader(left, top, width, height);

      try {
        // Request capture from background script
        const captureRes = await sendMessageAsync({ action: 'captureTab' });
        if (captureRes.error) {
          throw new Error('Screenshot Capture failed: ' + captureRes.error);
        }

        // Load screenshot image and crop it
        const img = new Image();
        img.src = captureRes.dataUrl;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error('Failed to load captured image'));
        });

        // Crop the screenshot using canvas
        const canvas = document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, left * dpr, top * dpr, width * dpr, height * dpr, 0, 0, width * dpr, height * dpr);

        const imageBase64 = canvas.toDataURL('image/png');
        const rawBase64 = imageBase64.replace(/^data:image\/(png|jpeg);base64,/, '');

        let translatedText = '';

        if (settings.translateEngine === 'gemini') {
          loader.querySelector('.loader-text').textContent = 'Translating with Gemini AI...';
          const geminiRes = await sendMessageAsync({
            action: 'translateGemini',
            imageBase64: rawBase64,
            key: settings.geminiKey
          });
          if (geminiRes.error) throw new Error(geminiRes.error);
          translatedText = geminiRes.text;
        } else {
          // Perform OCR first
          let detectedText = '';
          if (settings.ocrEngine === 'google') {
            loader.querySelector('.loader-text').textContent = 'Analyzing Text (Cloud)...';
            const visionRes = await sendMessageAsync({
              action: 'ocrGoogle',
              imageBase64: rawBase64,
              key: settings.googleKey
            });
            if (visionRes.error) throw new Error(visionRes.error);
            detectedText = visionRes.text;
          } else {
            loader.querySelector('.loader-text').textContent = 'Recognizing Text (Local)...';
            // Configure Tesseract local options
            const worker = await Tesseract.createWorker({
              workerPath: chrome.runtime.getURL('worker.min.js'),
              corePath: chrome.runtime.getURL(''),
              logger: m => console.log(m)
            });

            const langMap = { ja: 'jpn', en: 'eng', ko: 'kor', zh: 'chi_sim' };
            const ocrLang = langMap[settings.sourceLang] || 'eng';

            await worker.loadLanguage(ocrLang);
            await worker.initialize(ocrLang);
            const { data: { text } } = await worker.recognize(canvas);
            await worker.terminate();
            detectedText = text;
          }

          if (!detectedText || detectedText.trim() === '') {
            translatedText = 'ไม่พบข้อความ / No text detected';
          } else {
            loader.querySelector('.loader-text').textContent = 'Translating...';
            const transRes = await sendMessageAsync({
              action: 'translateFree',
              sl: settings.sourceLang,
              text: detectedText
            });
            if (transRes.error) throw new Error(transRes.error);
            translatedText = transRes.text;
          }
        }

        // Clean up loader and render result speech bubble
        if (document.body.contains(loader)) document.body.removeChild(loader);
        showTranslationBubble(translatedText, left, top, width, height);

      } catch (err) {
        console.error(err);
        if (document.body.contains(loader)) document.body.removeChild(loader);
        alert('Error: ' + err.message);
      }
    });
  }

  function showLoader(left, top, width, height) {
    const loader = document.createElement('div');
    loader.style.cssText = `
      position: absolute;
      left: ${left + window.scrollX}px;
      top: ${top + window.scrollY}px;
      width: ${width}px;
      height: ${height}px;
      z-index: 99998;
      background: rgba(10, 10, 10, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 13px;
      box-sizing: border-box;
      padding: 10px;
      text-align: center;
    `;

    const spinner = document.createElement('div');
    spinner.style.cssText = `
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-top: 2px solid #ffffff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 8px;
    `;

    const spinnerStyle = document.createElement('style');
    spinnerStyle.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(spinnerStyle);

    const loaderText = document.createElement('div');
    loaderText.className = 'loader-text';
    loaderText.textContent = 'Processing...';

    loader.appendChild(spinner);
    loader.appendChild(loaderText);
    document.body.appendChild(loader);

    return loader;
  }

  function showTranslationBubble(translatedText, left, top, width, height) {
    const bubble = document.createElement('div');
    bubble.className = 'manga-translation-bubble';
    bubble.style.cssText = `
      position: absolute;
      left: ${left + window.scrollX}px;
      top: ${top + window.scrollY}px;
      width: ${width}px;
      min-height: ${height}px;
      z-index: 99997;
      background: #ffffff;
      color: #000000;
      border: 2px solid #000000;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      padding: 12px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.45;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: move;
    `;

    const textContainer = document.createElement('div');
    textContainer.style.cssText = 'word-break: break-word;';
    textContainer.textContent = translatedText;
    bubble.appendChild(textContainer);

    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: -10px;
      right: -10px;
      width: 22px;
      height: 22px;
      background: #000000;
      color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      font-weight: 800;
      line-height: 1;
      border: 2px solid #ffffff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    `;
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.body.removeChild(bubble);
    });
    bubble.appendChild(closeBtn);

    makeDraggable(bubble);
    document.body.appendChild(bubble);
  }

  function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      if (e.target.tagName === 'SPAN') return; // Clicked close button
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      el.style.top = (el.offsetTop - pos2) + 'px';
      el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}