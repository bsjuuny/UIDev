<template>
	<div id="wrap">
		<app-nav></app-nav>
		<hr />
		<div id="contents">
			<router-view></router-view>
		</div>
		<hr />
		<app-footer></app-footer>
	</div>
</template>

<script>
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'

export default {
	name: 'app',
	mounted: function() {
		this.scrollNavigation;
	},
	methods: {
			
	},
	components: {
		AppNav,
		AppFooter
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
</script>

<style lang="scss">
	@import './assets/scss/main.scss'; 
</style>