// Listen for navigation to the special domain "popup.example.com"
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    let src = URL.parse(details.url);
    let dst = src.protocol + "//" + src.pathname.substring(1) + src.search;
    chrome.windows.create({
      type: 'popup',
      url: dst,
    });
    browser.tabs.remove(details.tabId);
    return { cancel: true };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
