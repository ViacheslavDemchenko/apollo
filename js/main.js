$(document).ready(function(){
	
	let hamIcon = $('#menu-mobile__toggle'),
		nav = $('.menu__list');
	
	$(hamIcon).click( (e) => {
		e.preventDefault();
		$(nav).slideToggle(1000);
		$(hamIcon).toggleClass('menu-mobile__toggle-btn--active');
	});

	$(window).resize(function(){
	    let w = $(window).width();
	    if (w > 992) {
	        nav.removeAttr('style');
	    }
	});
	
});