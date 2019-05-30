jQuery(function() {

	jQuery(document).ready(function() {

		// superfish
			$('.header-menu').superfish();
		// end superfish

		// slick
			$('.main-slider__carousel').slick({});

			$('.product-slider').on('init', function(event, slick, direction){
				
			});
			$('.product-slider').slick({
				dots: true,
				fade: true,
				appendArrows: $('.product-dislplay__nav'),
				appendDots: $('.product-nav'),
				customPaging : function(slider, i) {
			        var thumb = $(slider.$slides[i].querySelector('.product-slide')).attr('data-thumb');
			        return '<a><img src="'+thumb+'"></a>';
			    }
			});


		// end slick

		// magnific-popup
		$('.to-popup').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',

			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
		// end magnific-popup

		// selectmenu
		$( ".mich-select" ).selectmenu({
			// width: $(this).closest('.mich-form-label').width()
		});
		// end selectmenu
	
	});

	// tabs
		var $tabs = $('.tabs__link');

		$tabs.on('click', function(e) {
			e.preventDefault();

			var $th = $(this),
				tab = $th.attr('data-tab'),
				$parent = $th.parent(),
				$thTabs = $th.closest('.tabs'),
				$tabsContent = $thTabs.find('.tabs__content');
			
			$parent.addClass('tabs__item--active')
					.siblings()
					.removeClass('tabs__item--active');

			console.log(tab);
							
			$tabsContent.find('[data-tab='+tab+']')
					.removeClass('hidden')
					.siblings()
					.addClass('hidden');
		});

	// end tabs

	// Accordeon-----------------------------------
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item');

			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$currentItem
					.toggleClass('active')
					.find('.acordeon-sublist')
					.stop(true, true)
					.slideToggle(150);

				$currentItem.siblings()
					.removeClass('active')
					.find('.acordeon-sublist')
					.stop(true, true)
					.slideUp();

			}else{
				return;
			}
		});
// end Accordeon-----------------------------------

	// header search toggle
		$('.header-menu__search, .header-search').click(function(e) {
			e.stopPropagation();
			$(this).closest('.header-bottom__inner').addClass('search-open');
		});
		
		$('body').click(function() {

			$('.header-bottom__inner').removeClass('search-open');

		});

	// end header search toggle
	// slideout
	var slideout = new Slideout({
			'panel': document.querySelector('.mich-main'),
			'menu': document.querySelector('.mich-mob-nav'),
			'padding': 256,
			'tolerance': 70
		});

		// document.querySelector('.toggle').addEventListener('click', function() {
		// 	slideout.toggle();
		// });

		document.querySelector('nav').addEventListener('click', function(eve) {
			if (eve.target.nodeName === 'A') { slideout.close(); }
		});
	// end slideout

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
