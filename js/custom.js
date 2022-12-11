// header height to window height
$(".header").height($(window).height());
// scroll to feat
$(".header .arrow i").click(function () {
	$("html, body").animate(
		{
			scrollTop: $(".nav-bar").offset().top,
		},
		1000
	);
});
// add class active to links
$(".parnt-grid-nav nav ul li").click(function () {
	$(this).addClass("active").siblings().removeClass("active");
});
//---- scroll nav links to postion
$(".nav ul li a").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#" + $(this).data("scroll")).offset().top,
		},
		1000
	);
});
//----
//- start bx Slider
$(".bxslider").bxSlider();
//--- center bxslider
$(".title").each(function () {
	$(this).css("paddingTop", ($(window).height() - $(".bxslider").height()) / 3);
});
// add class selct to li portfolio
$(".port-area .filter ul li").click(function () {
	$(this).addClass("selct").siblings().removeClass("selct");
});
// show more work
$(".see-more .see").click(function () {
	$(".port-area .more").toggle(250);
});
// start make auto slider
(function autoSlider() {
	$(".client .show-s").each(function () {
		if (!$(this).is(":last-child")) {
			$(this)
				.delay(3000)
				.fadeOut(1000, function () {
					$(this).removeClass("show-s").next().addClass("show-s").fadeIn(1);
					autoSlider();
				});
		} else {
			$(this)
				.delay(3000)
				.fadeOut(1000, function () {
					$(this).removeClass("show-s");
					$(".client div").eq(0).addClass("show-s").fadeIn(1);
					autoSlider();
				});
		}
	});
})();
