document.addEventListener('DOMContentLoaded', () => {
  const sourceLang = document.getElementById('sourceLang');
  const ocrEngine = document.getElementById('ocrEngine');
  const googleKey = document.getElementById('googleKey');
  const googleKeyGroup = document.getElementById('googleKeyGroup');
  const translateEngine = document.getElementById('translateEngine');
  const geminiKey = document.getElementById('geminiKey');
  const geminiKeyGroup = document.getElementById('geminiKeyGroup');
  const btnActivate = document.getElementById('btnActivate');
  const status = document.getElementById('status');

  // Load saved configurations
  chrome.storage.local.get(['sourceLang', 'ocrEngine', 'googleKey', 'translateEngine', 'geminiKey'], (res) => {
    if (res.sourceLang) sourceLang.value = res.sourceLang;
    if (res.ocrEngine) {
      ocrEngine.value = res.ocrEngine;
      toggleGroup(ocrEngine.value, 'google', googleKeyGroup);
    }
    if (res.googleKey) googleKey.value = res.googleKey;
    if (res.translateEngine) {
      translateEngine.value = res.translateEngine;
      toggleGroup(translateEngine.value, 'gemini', geminiKeyGroup);
    }
    if (res.geminiKey) geminiKey.value = res.geminiKey;
  });

  // Event listeners for select changes
  ocrEngine.addEventListener('change', (e) => {
    toggleGroup(e.target.value, 'google', googleKeyGroup);
    saveSettings();
  });

  translateEngine.addEventListener('change', (e) => {
    toggleGroup(e.target.value, 'gemini', geminiKeyGroup);
    saveSettings();
  });

  sourceLang.addEventListener('change', saveSettings);
  googleKey.addEventListener('input', saveSettings);
  geminiKey.addEventListener('input', saveSettings);

  function toggleGroup(val, targetVal, groupEl) {
    if (val === targetVal) {
      groupEl.classList.remove('hidden');
    } else {
      groupEl.classList.add('hidden');
    }
  }

  function saveSettings() {
    chrome.storage.local.set({
      sourceLang: sourceLang.value,
      ocrEngine: ocrEngine.value,
      googleKey: googleKey.value,
      translateEngine: translateEngine.value,
      geminiKey: geminiKey.value
    });
  }

  // Activate Selection Tool
  btnActivate.addEventListener('click', () => {
    saveSettings();
    status.textContent = 'Activating selection tool...';

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        status.textContent = 'Error: No active tab found.';
        return;
      }
      const activeTab = tabs[0];
      const tabId = activeTab.id;

      // Ping to check if script is already loaded
      chrome.tabs.sendMessage(tabId, { action: 'ping' }, (response) => {
        const savedSettings = {
          sourceLang: sourceLang.value,
          ocrEngine: ocrEngine.value,
          googleKey: googleKey.value,
          translateEngine: translateEngine.value,
          geminiKey: geminiKey.value
        };

        if (chrome.runtime.lastError || !response) {
          // Script is not loaded, inject libraries and content script
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['tesseract.min.js']
          }, () => {
            if (chrome.runtime.lastError) {
              status.textContent = 'Failed to load helper library. Refresh and try again.';
              console.error(chrome.runtime.lastError);
              return;
            }
            chrome.scripting.executeScript({
              target: { tabId: tabId },
              files: ['content.js']
            }, () => {
              if (chrome.runtime.lastError) {
                status.textContent = 'Failed to load selection tool.';
                console.error(chrome.runtime.lastError);
                return;
              }
              // Send message to activate
              chrome.tabs.sendMessage(tabId, { action: 'activate', settings: savedSettings }, () => {
                window.close(); // Close popup
              });
            });
          });
        } else {
          // Script already loaded, just activate
          chrome.tabs.sendMessage(tabId, { action: 'activate', settings: savedSettings }, () => {
            window.close(); // Close popup
          });
        }
      });
    });
  });
});