$(document).ready(function() {

// init variables
	var form_inner = $(".js-form");
	var map = $(".js-map-contacts");
	var header = $(".header");
	var footer = $(".footer");
	var main = $(".main");
	var cicle = $(".js-cicle-map");
	var logo = $(".header .logo");
	var form = $(".js-form-rent");
	var index_page = $("#js-index");
	var about_page = $("#js-about");
	var slider = $(".js-slider");
	var contacts_page = $("#js-contacts");
	var header_bottom = $(".header-bottom");

// show/hide form
	$(".js-rent").click(function(){
		$(".js-rent").toggleClass("is-active");
		form_inner.slideToggle("fast");
	});
	function form_rent() {
		var position = about_page.position().top;
		var position_bottom =  contacts_page.position().top;
		console.log(position_bottom); 
		if ($(window).scrollTop() >= position) {
			form.fadeIn();
		}
		if ($(window).scrollTop() >= position_bottom) {
			form.addClass("form_mod");
		}
		if ($(window).scrollTop() < position_bottom){
			form.removeClass("form_mod");
		}
		if ($(window).scrollTop() < position) {
			form.fadeOut();
		}
	}
	form_rent();

// zoom plans
	$('.zoom-target').each(function(){
		var $zoom_container = $(this).parent();
		var $zoom = $(this).easyZoom({
			parent: $zoom_container
		});
	});

// resize google map
	function resize_map() {
		var map_height = $(window).height() - header.outerHeight() - footer.outerHeight() - main.outerHeight();
		map.height(map_height);
		if ($(".js-map-contacts").hasClass("cycle-slide-active")) {
			cicle.height(map_height);
		}
	}
	resize_map();
	$("#js-about .js-tabs a").click(function(){
		resize_map();
	});
// navigation
	$(".menu a").click(function (){
	 	var page = $(this).attr("href");
	 	$(this).parents(".js-menu-list").hide();
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 500);

	 	return false;
    });
    $(".logo a").click(function (){
	 	var page = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 500);
	 	return false;
    });

// show/hide logo
	function show_logo() {
		if ($(window).scrollTop() >= header_bottom.outerHeight()) {
			logo.fadeIn();
		}
		else {
			logo.fadeOut();
		}
	}
	show_logo();

// resize slider
	function slider_resize() {
		var slider_height = $(window).height() - $(".advantage").outerHeight() - header_bottom.outerHeight() - header.outerHeight();
		slider.outerHeight(slider_height);
	}
	slider_resize();

// init functions on scroll event
	$(window).scroll(function(){
		form_rent();
		show_logo();
	}); 

// init functions on resize event
	$(window).resize(function(){
		resize_map();
		slider_resize();
	});

});