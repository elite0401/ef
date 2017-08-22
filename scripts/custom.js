$(document).ready(function() {

	jQuery(document).on('click', '.mega-dropdown', function(e) {
	  e.stopPropagation()
	});

	$(".navbar-toggle").click(function(){
		$(".hdrBtm").toggleClass("show-menu");
	});

	$(".social-media-toggle").click(function(){
		$(".social-media-encl ul").slideToggle(300);
	});

	$(".bx-tab-slider li a.btns").click(function(){
		$(".bx-tab-slider > li > ul").toggleClass("show-more");
	});

	$(".search-btn").click(function(){
		$(".hdrBtm .nav.navbar-nav").hide();
		$(this).parent(".search-encl").addClass("show");
		$(this).siblings().fadeIn(500);
	});

	$(".search-close-btn").click(function(){
		$(this).parent(".search-encl").removeClass("show");
		$(".hdrBtm .nav.navbar-nav").fadeIn(400);
		$(this).fadeOut(500);
		$(this).siblings(".input-box").fadeOut(500);
	});


	var slider = $('.mainslider.bxSlider').bxSlider( {
		auto:true,
		speed: 800,
		pause: 30000,
		responsive:true,
		infiniteLoop: true,
		prevSelector: '.home-slider-prev',
		nextSelector: '.home-slider-next',
		pagerCustom: '.slide-content-wrap'
	});

	$('.ban-search-section .form-control').click(function(e){
	    slider.stopAuto();
	    restart=setTimeout(function(){
	        slider.startAuto();
	        },70000);

	    return false;
	});

	$(".bx-tab-slider").bxSlider({
		nextSelector: '#tab-slider-next',
		prevSelector: '#tab-slider-prev',
	});

	$(".search-btn").click(function() {
		$("#searchtext").fadeToggle(500);
	});

	$(".filter-drop").click(function() {
		$(".option-wrap").slideToggle();
		$(this).toggleClass("rotate-arrow");
	});

	$(".option-title").click(function() {
		$(this).siblings().slideToggle();
		$(this).children(".toggle").toggleClass("change-color");
	});


	$(".product-features ul").bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true,
		adaptiveHeight: true
	});


	if ($(window).width() < 768) {
		$(".footer-top address").remove().insertAfter(".footer-top .form-group.last");
		$(".info-detail.bottom").remove().insertAfter(".product-features");
	}
	else {
		$(".footer-top address").remove().insertAfter(".footer-top .container > div > p");
		$(".info-detail.bottom").remove().insertAfter("#functionality");
	}

	if ($(window).width() < 992) {
		$(".surfactant h2").remove().insertBefore(".surfactant .icon-img img");
		$(".polymer h2").remove().insertBefore(".polymer .icon-img img");
	}
	else {
		$(".surfactant h2").remove().insertBefore(".surfactant p");
		$(".polymer h2").remove().insertBefore(".polymer p");
	}

	/**/

	$('.sticky-set').simpleScrollFollow();

	/* Product info scroll function Starts */
	var sections = $('.info-detail')
	, nav = $('.sticky-set')
	, nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function() {
		var top = $(this).offset().top - nav_height,
		    bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
		  nav.find('a').removeClass('active');
		  sections.removeClass('active');
		  
		  $(this).addClass('active');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
		});
	});

	nav.find('a').on('click', function () {
		var $el = $(this)
		, id = $el.attr('href');

		$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height +2
		}, 500);

		return false;
	});

	/* Product info scroll function Ends */



	
});

$(window).resize(function() {
	if ($(window).width() < 768) {
		$(".footer-top address").remove().insertAfter(".footer-top .form-group.last");
		$(".info-detail.bottom").remove().insertAfter(".product-features");
	}
	else {
		$(".footer-top address").remove().insertAfter(".footer-top .container > div > p");
		$(".info-detail.bottom").remove().insertAfter("#functionality");
	}

	if ($(window).width() < 992) {
		$(".surfactant h2").remove().insertBefore(".surfactant .icon-img img");
		$(".polymer h2").remove().insertBefore(".polymer .icon-img img");
	}
	else {
		$(".surfactant h2").remove().insertBefore(".surfactant p");
		$(".polymer h2").remove().insertBefore(".polymer p");
	}

});

