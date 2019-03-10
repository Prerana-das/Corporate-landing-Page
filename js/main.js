(function ($) {
	"use strict";
	
	jQuery(document).ready(function( $ ) {
		
		//promo carousel
		$(".promo-slider").owlCarousel({
			items:1,
			loop: true,
			dots: true,
			nav:true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		
		//isotope portfolio
		$('.portfolio-list').isotope({
			itemSelector:'.item'
		});

		$('.all-portfolio li').click(function(){
			$('.all-portfolio li').removeClass('active-portfolio');
			$(this).addClass('active-portfolio');
			
			var selector = $(this).attr('data-filter');
			$('.portfolio-list').isotope({
				filter:selector
			});
			return false;
		});
		
			//Magnific popup 
		$('.portfolio-list').each(function() {
			$(this).magnificPopup({
				delegate: 'a', // 
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});
		
		
		//team carousel
		$(".team-slider").owlCarousel({
			dots:true,
			items:1,
			loop:true,
			nav:false,
		});
		
		//testimonial carousel
		$(".testimonials-slider").owlCarousel({
			dots:true,
			items:1,
			loop:true,
			nav:true,
			navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
			autoplay:true
		});
		
		//mobile menu
		var ulNav= "#nav", openNav= "activeNav";
		
		$('.toggle-menu').on('click', function(e){
			if($(ulNav).hasClass(openNav)){
				$(ulNav).removeClass(openNav);
			}else{
				$(ulNav).addClass(openNav);
			}
			e.preventDefault();
		});
		
		
		
		//wow js
		new WOW().init();	

});

$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});
	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	
	
	
}(jQuery));		
	
	