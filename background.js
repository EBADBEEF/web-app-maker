const urlPrefix = browser.runtime.getURL("/link/");

const callback = function(details) {
  let dst = decodeURIComponent(details.url.substring(urlPrefix.length));
  if (!URL.parse(dst))
    dst = "https://" + dst

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
