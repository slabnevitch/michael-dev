jQuery(function() {

	jQuery(document).ready(function() {

		// superfish
			$('.header-menu').superfish();
		// end superfish

		// slick
			$('.main-slider__carousel').slick({
				autoplay: true
			});

			$('.partners-content').slick({
				slidesToShow: 4,
				autoplay: true,
				autoplaySpeed: 4000,
				responsive: [

				{
					breakpoint: 981,
					settings: {

						slidesToShow: 3

					}	
				},
				{
					breakpoint: 769,
					settings: {

						slidesToShow: 2
					}	
				}
				]

			});
			

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
	
	});/* end DOCUMENT READY*/

	// mobile search toggle
		$('.header-top__right .icon-mag').click(function() {
			$('.mob-search-form').fadeIn(100);
			return false;
		});

		$('.mob-search-form .icon-close').click(function() {
			$(this).parent().fadeOut(100);
			return false;
		});
	// end mobile search toggle

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

	// mobile menu toggle
		$(".toggle-mnu").click(function() {
			$(this).toggleClass("on");
			return false;
		});
	// end mobile menu toggle

	// slideout
	var slideout = new Slideout({
			'panel': document.querySelector('.mich-main'),
			'menu': document.querySelector('.mich-mob-nav'),
			'padding': 256,
			'tolerance': 70
		});

		document.querySelector('.header .toggle-mnu').addEventListener('click', function() {
			slideout.toggle();
		});

		document.querySelector('.mich-mob-nav').addEventListener('click', function(eve) {
			if (eve.target.nodeName === 'A') { slideout.close(); }
		});

		function close(eve) {
			eve.preventDefault();
			slideout.close();
		}

		slideout
		.on('beforeopen', function() {
			this.panel.classList.add('panel-open');
		})
		.on('open', function() {
			this.panel.addEventListener('click', close);
			document.querySelector('.header .toggle-mnu')
				.classList.add('on');
		})
		.on('beforeclose', function() {
			this.panel.classList.remove('panel-open');
			this.panel.removeEventListener('click', close);
			document.querySelector('.header .toggle-mnu')
				.classList.remove('on');
		});
	// end slideout

	// map-text display
		 function mapTextDisplay(){
			var _self = this,
					mapContainer = document.querySelector('.mich-map'),
					textToggleButton = mapContainer.querySelector('.map-disclose'),
					tabsButtons = document.querySelectorAll('.mich-mapview-handler'),
					tabsHandlers = document.querySelector('.mich-mapview-handlers');
			
			this.init = function() {
				this.binds();
			},

			this.binds = function() {
				textToggleButton.addEventListener('click', this.buttonListener);
				
				[].forEach.call(tabsButtons, function(item, i) {
					item.addEventListener('click', _self.tabsListener);
				});
			},

			this.buttonListener = function(e) {
				_self.textToggle();
				_self.textToggleButtonStatus();

			}

			this.tabsListener = function(e) {
				e.preventDefault();

				if(this.getAttribute('id') === 'text-open'){
					if(!mapContainer.classList.contains('trans')){
						_self.textToggleButtonStatus();
					} 
						_self.textShow()
				}else{
					 if(mapContainer.classList.contains('trans')){
						_self.textToggleButtonStatus();
					} 
					 _self.textHide();
				}

			}

			this.textToggleButtonStatus = function() {
				var thisSpan = textToggleButton.querySelector('.map-disclose__text'),
						thisIcon = textToggleButton.querySelector('.icon-expand');

				textToggleButton.classList.toggle('contracted');

				if(thisSpan.textContent == 'Показать списком'){
					thisSpan.textContent = 'Раскрыть карту';
				}else{
					thisSpan.textContent = 'Показать списком';
				}
			}

			this.textToggle = function() {	
				mapContainer.classList.toggle('trans');
				tabsHandlers.classList.toggle('list-opened');
			}

			this.textShow = function(e) {
				mapContainer.classList.add('trans');
				tabsHandlers.classList.add('list-opened');
			}
			this.textHide = function() {
				mapContainer.classList.remove('trans');
				tabsHandlers.classList.remove('list-opened');
			}
		}

		if(document.querySelectorAll('.mich-map').length > 0){
			var mapTextDisplaySample = new mapTextDisplay();
			mapTextDisplaySample.init();
		}
	
	// end map-text display

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
