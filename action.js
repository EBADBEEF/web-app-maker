const urlPrefix = browser.runtime.getURL("/app/");

browser.tabs.query({active: true, currentWindow: true}).then(function(tabs) {
  document.getElementById("popout").onclick = function(click) {
    browser.windows.create({
      type: 'popup',
      tabId: tabs[0].id,
    });
    return false;
  };

  let make = document.getElementById("linkify");
  make.href = urlPrefix + encodeURIComponent(tabs[0].url);
  make.onclick = function(click) {
    navigator.clipboard.writeText(click.target.href);
    make.children[0].innerText = "☑";
    return false;
  };
});
