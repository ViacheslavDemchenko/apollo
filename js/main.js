$(document).ready( () => {


	let toggle = $('#navigation-toggle');
	let nav = $('.navigation ul');

	$(toggle).on('click', (e) => {
		e.preventDefault();
		$(nav).slideToggle();
		$(toggle).toggleClass('navigation__toggle-button--active');
	});

	$(window).resize(function(){
		let w = $(window).width();
		if(w > 992 ) {
		    nav.removeAttr('style');
		    toggle.removeClass('navigation__toggle-button--active');
		}
	});

	$('#slider-top').owlCarousel({
		singleItem: true,
		navigation: true,
		theme: 'slider-top-theme',
		navigationText: ["",""],
		slideSpeed: 800
	})
});

	


	