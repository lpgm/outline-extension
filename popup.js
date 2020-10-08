document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#outline").onclick = () => {
		chrome.tabs.query({
			active: true
		}, tabs => {
			chrome.tabs.update({
				url: `https://outline.com/${tabs[0].url}`
			});
		});
	};
});