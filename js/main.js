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

	let w = $(window).width();
		if (w < 992) {
			$('nav.navigation a').on('click', () => {
				nav.slideToggle();
			});
		}

	$('#slider-top').owlCarousel({
		singleItem: true,
		navigation: true,
		theme: 'slider-top-theme',
		navigationText: ["",""],
		slideSpeed: 800
	})

	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({highlightSelector:"nav a"
	});
});