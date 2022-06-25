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