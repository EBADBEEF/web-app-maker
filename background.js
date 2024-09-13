const urlPrefix = browser.runtime.getURL("/app/");

const callback = function(details) {
  let dst = decodeURIComponent(details.url.substring(urlPrefix.length));
  browser.tabs.remove(details.tabId);
  browser.windows.create({
    type: 'popup',
    url: dst,
  });
};

const filter = {
  url: [ { urlPrefix: urlPrefix, } ],
};

browser.webNavigation.onBeforeNavigate.addListener(callback, filter)
