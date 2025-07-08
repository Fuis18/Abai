"use strict";
const html = document.querySelector("html");

// Mode
// localStorage.setItem("mode","dark");
let mode = localStorage.getItem("mode");
if (mode === null) {
	localStorage.setItem("mode", "light");
} else if (mode === "dark") {
	localStorage.setItem("mode", "dark");
	html.setAttribute("data-theme", "dark");
	document.querySelector(".moon").style.display = "block";
	document
		.querySelectorAll(".sun")
		.forEach((element) => (element.style.display = "none"));
}
document.querySelector(".mode").addEventListener("click", () => {
	if (html.getAttribute("data-theme") == "light") {
		localStorage.setItem("mode", "dark");
		html.setAttribute("data-theme", "dark");
		document.querySelector(".moon").style.display = "block";
		document
			.querySelectorAll(".sun")
			.forEach((element) => (element.style.display = "none"));
	} else {
		localStorage.setItem("mode", "light");
		html.setAttribute("data-theme", "light");
		document.querySelector(".moon").style.display = "none";
		document
			.querySelectorAll(".sun")
			.forEach((element) => (element.style.display = "block"));
	}
});
