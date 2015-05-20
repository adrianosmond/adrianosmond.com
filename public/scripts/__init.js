var body = document.body;
var bodyClasses = document.body.classList;

function pageLoaded () {
	if (document.readyState === "complete") {
		setTimeout(function () {
			bodyClasses.add("page-loaded");
		}, 500);
	}
}

if (document.readyState === "complete") {
	pageLoaded();
} else {
	document.addEventListener("readystatechange", pageLoaded);
}