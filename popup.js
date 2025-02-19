document.getElementById("createSheet").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://docs.google.com/spreadsheets/create" });
});
