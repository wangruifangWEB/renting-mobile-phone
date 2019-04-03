$(function(){
	$('.navbar-brand').click(function(){
		$('.city-box').toggleClass('a')
	})
	var mySwiper = new Swiper('.c .swiper-container', {	

		speed: 800,
		slidesPerView : 1.7,
		freeMode : true,
		preventClicks : false,//默认true

	});
	
	var mySwiper2 = new Swiper('.banner .swiper-container', {	
		autoplay:3000,
		loop:true,
		speed: 800,
	});
	
	var mySwiper3 = new Swiper('.fyxq .swiper-container', {	
		autoplay:2000,
		loop:true,
		speed: 800,
	});
	
	var mySwiper4 = new Swiper('.fw-swiper .swiper-container', {	

		speed: 800,
		slidesPerView : 2.3,
		freeMode : true,
		preventClicks : false,//默认true

	})
	
	$('.px>div').click(function(){
		$(this).toggleClass('active')
		$(this).addClass('active').siblings().removeClass('active')
		
	})
	$('.lxwm-text h1').on('click',function(){
		
		$(this).parent('.lxwm-text').toggleClass('active')
		
	})
	$('.x').click(function(){
		$('.fixed').hide()
	})
})