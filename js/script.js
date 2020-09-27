$(document).ready(function () {
	//Burger
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//Slider
	$('.slider').slick({
		arrows: false,
		autoplay: true,
		centerMode: true,
		variableWidth: true,
		initialSlide: 3,
		adaptiveHeight: true
	});
	//Tabs
	$("#tabs").on("click", ".catalog__tab", function () {
		$("#tabs .catalog__tab").removeClass('active-tab');
		$(this).addClass('active-tab');
		if ($('#everyday-tab').hasClass('active-tab')) {
			$('#everyday').addClass('chosen');
			$('#erotic').removeClass('chosen');
		} else {
			$('#everyday').removeClass('chosen');
			$('#erotic').addClass('chosen');
		}
	});
	//Sizes
	$('.card-size').on('click', function () {
		if (!$(this).hasClass('passive')) {
			$(this).toggleClass('clicked');
		}
	});
	//Colors & Images

});