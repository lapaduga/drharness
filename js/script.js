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
	//Mainscreen buttons
	$("#main-btn-everyday").on("click", function () {
		$("#tabs .catalog__tab").removeClass('active-tab');
		$("#erotic").removeClass('chosen');
		$('#everyday-tab').addClass('active-tab');
		$('#everyday').addClass('chosen');
	});
	$("#main-btn-ero").on("click", function () {
		$("#tabs .catalog__tab").removeClass('active-tab');
		$("#everyday").removeClass('chosen');
		$('#erotic-tab').addClass('active-tab');
		$('#erotic').addClass('chosen');
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

	//Smooth scroll
	$('.mainscreen__button').on('click', function(e){
		let fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $('#catalog').offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
	$('.header__link').on('click', function(e){
		let fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
});