$(document).ready(function () {
	$("#nav-home").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	})

	$("#nav-about").click(function () {
		$("html, body").animate({
			scrollTop: $("#about").offset().top
		}, 1000)
	})

	$("#nav-service").click(function () {
		$("html, body").animate({
			scrollTop: $("#service").offset().top
		}, 1000)
	})

	$("#nav-portfolio").click(function () {
		$("html, body").animate({
			scrollTop: $("#portfolio").offset().top
		}, 1000)
	})

	$("#nav-contact").click(function () {
		$("html, body").animate({
			scrollTop: $("#contact").offset().top
		}, 1000)
	})

	var $backToTop = $(".backTop");
	$backToTop.hide();

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 400) {
			$backToTop.fadeIn();
		} else {
			$backToTop.fadeOut();
		}
	});

	$backToTop.on('click', function (e) {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
	});
});