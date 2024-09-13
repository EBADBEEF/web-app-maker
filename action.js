const path = "/app/"
const anchor = document.createElement("a");
const copyText = "copy this link "
anchor.onclick = (click) => {
  navigator.clipboard.writeText(click.target.href);
  if (!anchor.value) {
    anchor.text = copyText + "☑";
    anchor.value = 1;
  }
  return false;
};
browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
  anchor.href = path + encodeURIComponent(tabs[0].url);
  anchor.text = copyText + "☐"
  document.body.appendChild(anchor);
});
