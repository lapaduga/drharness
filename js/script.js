$(document).ready(function () {
	//Burger behaviour
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//Slider behaviour
	$('.slider').slick({
		arrows: false,
		autoplay: true,
		centerMode: true,
		variableWidth: true,
		initialSlide: 3,
		adaptiveHeight: true
	});
});