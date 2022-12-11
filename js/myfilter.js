// start filter by js
let allEle = document.getElementById("all");
let travel = document.getElementById("trv");
let library = document.getElementById("lib");
let other = document.getElementById("oth");
// allEle.onclick = function () {
// 	document.getElementsByClassName("all").classList.add("one");
// };
allEle.onclick = function () {
	$(".port-area .grid3-box .all").removeClass("hidden");
};
travel.onclick = function () {
	$(".port-area .grid3-box .travel").removeClass("hidden");
	$(".port-area .grid3-box .other").addClass("hidden");
	$(".port-area .grid3-box .library").addClass("hidden");
};
library.onclick = function () {
	$(".port-area .grid3-box .library").removeClass("hidden");
	$(".port-area .grid3-box .other").addClass("hidden");
	$(".port-area .grid3-box .travel").addClass("hidden");
};
other.onclick = function () {
	$(".port-area .grid3-box .other").removeClass("hidden");
	$(".port-area .grid3-box .travel").addClass("hidden");
	$(".port-area .grid3-box .library").addClass("hidden");
};
