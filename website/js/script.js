/*
Theme Name:     NTHEME
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "ntheme".
	For demo 1 to demo 3, it uses "ntheme".
	For demo 2, it uses "nthemeD2". 
	For demo 3, it uses "nthemeD3".
	For index page, it uses "nthemeIndex".
	For documentation page, it uses "nthemeDoc".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 for demo 1 to demo 3
			1.1.1 .ntheme-owl-1
			1.1.2 .ntheme-owl-2
			1.1.3 .ntheme-owl-3
			1.1.4 .ntheme-owl-4
		1.2 for demo 2
			1.2.1 .nthemeD2-owl-1
	2. wow
	3. navigation
		3.1 for demo 1 to demo 3
			3.1.1 #ntheme-navbar-1
	
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".ntheme-owl-1").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		slideTransition: 'ease-in-out',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				nav: false
			},
			576: {
				items: 2,
				slideBy: 2,
				nav: false
			},
			768: {
				items: 4,
				slideBy: 4,
				nav: false
			},
			992: {
				items: 5,
				slideBy: 5,
				nav: false
			},
			1200: {
				items: 5,
				slideBy: 5,
				nav: false
			}
		}
	});
	$(".ntheme-owl-2").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
	$(".ntheme-owl-3").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 3,
				nav: false
			},
			768: {
				items: 4,
				nav: false
			},
			992: {
				items: 5,
				nav: false
			},
			1200: {
				items: 5,
				nav: false
			}
		}
	});
	$(".ntheme-owl-4").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
$(".nthemeD2-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		smartSpeed: 1500,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 10,
				nav: false
			},
			576: {
				items: 1,
				stagePadding: 90,
				nav: false
			},
			768: {
				items: 1,
				stagePadding: 150,
				nav: false
			},
			992: {
				items: 1,
				stagePadding: 200,
				nav: false
			},
			1200: {
				items: 1,
				stagePadding: 250,
				nav: false
			}
		}
	});
/* END OF OWL CAROUSEL */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#ntheme-navbar-1').addClass('solid');
	    } else {
	        $('#ntheme-navbar-1').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#ntheme-navbar-1').hide();
	    }
	    else{
	    	$('#ntheme-navbar-1').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* END OF CUSTOM JS */