chrome.browserAction.onClicked.addListener(() => {
  const playbackRate = prompt('배속 입력: ', '1.0');
  const code = `
    document.querySelectorAll('video').forEach(v => {
      v.playbackRate = ${playbackRate};
    })
  `;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null, { code });
  });
});