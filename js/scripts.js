(function($){
	$('.multiple-items').slick({
		autoplay: true,
		arrows: false,
		infinite: true,
		//autoplaySpeed: 2000,
		//speed: 1000,
		slidesToShow: 5,
  		slidesToScroll: 2,
  		responsive: [
  		{
	  		breakpoint: 992,
	      	settings: {
	      		slidesToShow: 3,
	  			slidesToScroll: 2
	      	}				
  		},
  		{
	  		breakpoint: 768,
	      	settings: {
	      		slidesToShow: 2,
	  			slidesToScroll: 2
	      	}				
  		}
  		]
	});

	$('.single-item').slick({
		autoplay: true,
		infinite: true,
		autoplaySpeed: 1000,
		speed: 1000,
		fade:true,
		cssEase: 'ease-in-out'
	});

	$('.menu__burger').on('click',function(e) {
		e.preventDefault();

		$('body').toggleClass('menu-opened');
	});

	$('.menu__dropdown1').on('click',function(e) {
		e.preventDefault();

		$('.menu__item--dropdown1').toggleClass('submenu-opened');
	});

	$('.menu__dropdown2').on('click',function(e) {
		e.preventDefault();

		$('.menu__item--dropdown2').toggleClass('submenu-opened');
	});

	$(document).ready( function() {
    $("#fl__input").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         console.log(filename);
         $("#fl__name").html(filename);
    });
});
	
})(jQuery);