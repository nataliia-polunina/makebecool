(function($){
	$('.multiple-items').slick({
		autoplay: true,
		//arrows: false,
		infinite: true,
		//autoplaySpeed: 2000,
		//speed: 1000,
		slidesToShow: 2,
  		slidesToScroll: 2
	});

	$('.single-item').slick({
		autoplay: true,
		arrows: false,
		infinite: true,
		autoplaySpeed: 2000,
		speed: 1000,
	});

	$('.menu__burger').on('click',function(e) {
		e.preventDefault();

		$('body').toggleClass('menu-opened');
	});
	
})(jQuery);