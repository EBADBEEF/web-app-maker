const urlPrefix = "/app/";

browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
  document.getElementById("open").onclick = function(click) {
    browser.windows.create({
      type: 'popup',
      tabId: tabs[0].id,
    });
    return false;
  };

  let make = document.getElementById("make");
  make.href = urlPrefix + encodeURIComponent(tabs[0].url);
  make.onclick = function(click) {
    navigator.clipboard.writeText(click.target.href);
    document.getElementById("check").innerText = "☑";
    return false;
  };
});
