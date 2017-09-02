// This is your plugin object. It can be exported to be used anywhere.
const MyPlugin = {
// The install method is all that needs to exist on the plugin object.
// It takes the global Vue object as well as user-defined options.
	install(Vue, options) {
	// We call Vue.mixin() here to inject functionality into all components.
		Vue.mixin({
		// Anything added to a mixin will be injected into all components.
		// In this case, the mounted() method runs when the component is added to the DOM.
			name:'gPlugin',
			created: function () {
			},
			mounted: function() {
				$('.popup .button-read').on('click', function() {$.unblockUI();});
				$('.button-send-sms').on('click', this.screenHeight);

				this.screenHeight();
				this.scrollNavigation;
			},
			methods: {
				screenHeight: function() {
					setTimeout(function() {
						$('footer').removeClass('fixed');
						var getHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
						var getScollHeight = parseInt($('body').css("height"));
						screenHeightInstance(getHeight, getScollHeight);
					}, 300);
				}
			},
			computed: {
				scrollNavigation: function() {
					// 스크롤 네비게이션
					setTimeout(function() {
						// Position Indicator
						var getMax = function(){
							return $(document).height() - $(window).height();
						}
						var getValue = function(){
							return $(window).scrollTop();
						}
						scrollNav(getMax, getValue);				
					}, 300);
				}
			}
		// created: function() {
		//   console.log('Mounted!');
		// }
		});
		function screenHeightInstance(getHeight, getScollHeight) {
			if (getScollHeight < getHeight) {
				$('footer').addClass('fixed');
			} else {
				$('footer').removeClass('fixed');
			}
		}
		function scrollNav(getMax, getValue) {
			if('max' in document.createElement('progress')){
				// Browser supports progress element
				var progressBar = $('progress');

				// Set the Max attr for the first time
				progressBar.attr({ max: getMax() });
				progressBar.attr({ value: getValue() });

				$(document).on('scroll', function(){
					// On scroll only Value attr needs to be calculated
					progressBar.attr({ value: getValue() });
				});

				$(window).resize(function(){
					// On resize, both Max/Value attr needs to be calculated
					progressBar.attr({ max: getMax(), value: getValue() });
				});
			}
			else {
				var progressBar = $('.progress-bar'),
				max = getMax(),
				value, width;

				var getWidth = function(){
					// Calculate width in percentage
					value = getValue();
					width = (value/max) * 100;
					width = width + '%';
					return width;
				}

				var setWidth = function(){
					progressBar.css({ width: getWidth() });
				}

				$(document).on('scroll', setWidth);
				$(window).on('resize', function(){
				// Need to reset the Max attr
					max = getMax();
					setWidth();
				});
			}
		}
	}
};

export default MyPlugin;