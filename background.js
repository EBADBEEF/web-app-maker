const callback = function(req) {
  let src = URL.parse(req.url);
  let dst = src.protocol + "//" + src.pathname.substring(1) + src.search;
  browser.tabs.remove(req.tabId);
  chrome.windows.create({
    type: 'popup',
    url: dst,
  });
  return ({
    cancel: true
  });
};

const filter = {
  urls: ["<all_urls>"],
  types: ["main_frame"],
};

const extraInfoSpec = [
  "blocking",
];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, extraInfoSpec);
