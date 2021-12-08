let defaultBlockList = ["npmcompare.com", "npmtrends.com"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ blockList: defaultBlockList });
  console.log(`Default block list set: ${defaultBlockList.join(", ")}`);
});
