let blockListEl = document.getElementById("blockList");

chrome.storage.sync.get("blockList", ({ blockList }) => {
  blockListEl.innerText = blockList.join(", ");
});

chrome.omnibox.onInputEntered.addListener(
  function(text, disposition) {
    console.log("Omnibox", text);
    alert("Test")
  }
)

/*chrome.webRequest.onBeforeRequest.addListener(
  // Callbak
  function(details) {
    console.log("Request to", details.url)
    // return true;
    // return {cancel: details.url.indexOf("://www.evil.com/") != -1};
  },
  // Filter
  { urls: ["<all_urls>"] },
  // Prevent continuing until callback has completed
  ["blocking"]
);*/
