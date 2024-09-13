const path = "/app/"
const anchor = document.createElement("a");
browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
  anchor.href = path + encodeURIComponent(tabs[0].url);
  anchor.text = "copy this link";
  document.body.appendChild(anchor);
});
