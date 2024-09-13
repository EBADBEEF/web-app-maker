/* listen on moz-extension://<uuid>/popup/<url> */
const path = "/app/"

const callback = function(details) {
  console.log(details)
  let src = URL.parse(details.url);
  let dst = decodeURIComponent(src.pathname.substring(path.length));
  if (!URL.parse(dst))
    dst = "https://" + dst

  browser.tabs.remove(details.tabId);
  //browser.tabs.update(details.tabId, { url: dst });

  browser.windows.create({
    type: 'popup',
    url: dst,
    //tabId: details.tabId,
  });
};

const filter = {
  url: [ { urlPrefix: browser.runtime.getURL(path), } ],
};

browser.webNavigation.onBeforeNavigate.addListener(callback, filter)
