let userdata, autocomparr, acexec;
let suggestions = [
	"HCF Core para PocketMine-MP 45$",
	"Sitio web gratis",
	"Juego CLI en Python 120$",
	"Sitio web en PHP con MySQL 300$"
]
const searchWrp = document.querySelector(".searcher")
const searchInp = searchWrp.querySelector("input")
const autocomplete = searchWrp.querySelector(".autocomplete")
searchInp.addEventListener("keyup", (e) => {
	userinput = e.target.value; // user input
	autocomparr = []
	if (userinput) {
		// Filter data
		autocomparr = suggestions.filter((data) => {
			return data = data.toLocaleLowerCase().includes(userinput.toLocaleLowerCase());
		})
		// To html
		autocomparr = autocomparr.map((data) => {
			return data = `<li>${data}</li>`
		})
	} else {
		// code
	}
	acexec(autocomparr)
})
acexec = (list) => {
	let dataList;
	if (!list.length) {
		autocomplete.innerHTML = "<li>No se encotraron resultados</li>"
	} else {
		dataList = list.join('')
		autocomplete.innerHTML = dataList
	}
}
searchInp.addEventListener("click", () => {
	document.querySelector(".autocomplete").style.display = "block"
})
/*
--- Interactive navigation bar ----
*/
let fordevs = document.querySelector(".forDevs")
let fdSidebar = document.querySelector(".fordevs-sidebar")
fordevs.addEventListener("click", () => {
	if (window.getComputedStyle(fdSidebar).opacity == "0") {
		$(".fordevs-sidebar").animate({
			width: "60%",
			opacity: "1",
			transition: "50ms"
		})
		$(".forDevs").css("opacity", "1")
		$(".fd-opt").show();
	} else {
		$(".fordevs-sidebar").animate({
			width: "0",
			opacity: "0",
			transition: "50ms"
		})
		$(".fd-opt").hide()
	}
})
/*
let userdata, autocomparr, acexec;
let suggestions = [
	"HCF Core para PocketMine-MP 45$",
	"Sitio web gratis",
	"Juego CLI en Python 120$",
	"Sitio web en PHP con MySQL 300$"
]
const searchWrp = document.querySelector(".searcher")
const searchInp = searchWrp.querySelector("input")
const autocomplete = searchWrp.querySelector(".autocomplete")
searchInp.addEventListener("keyup", (e) => {
	userinput = e.target.value; // user input
	autocomparr = []
	if (userinput) {
		// Filter data
		autocomparr = suggestions.filter((data) => {
			return data = data.toLocaleLowerCase().startsWith(userinput.toLocaleLowerCase());
		})
		// To html
		autocomparr = autocomparr.map((data) => {
			return data = `<li>${data}</li>`
		})
	} else {
		// code
	}
	acexec(autocomparr)
})
acexec = (list) => {
	let dataList;
	if (!list.length) {
		autocomplete.innerHTML = "<li>No results</li>"
	} else {
		dataList = list.join('')
		autocomplete.innerHTML = dataList
	}
}
searchInp.addEventListener("click", () => {
	document.querySelector(".autocomplete").style.display = "block"
})
/*
--- Interactive navigation bar ----

let fordevs = document.querySelector(".forDevs")
let fdSidebar = document.querySelector(".fordevs-sidebar")
fordevs.addEventListener("click", () => {
	if (window.getComputedStyle(fdSidebar).opacity == "0") {
		$(".fordevs-sidebar").animate({
			width: "60%",
			opacity: "1",
			transition: "50ms"
		})
		$(".forDevs").css("opacity", "1")
		$(".fd-opt").show();
	} else {
		$(".fordevs-sidebar").animate({
			width: "0",
			opacity: "0",
			transition: "50ms"
		})
		$(".fd-opt").hide()
	}
})
*/
