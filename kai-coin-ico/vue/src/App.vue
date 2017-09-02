<template>
	<div id="wrap">
		<app-nav></app-nav>
		<hr />
		<div id="contents">
			<router-view></router-view>
		</div>
		<hr />
		<app-footer></app-footer>
		<div class="below-table-menu">
			<ul class="header-gnb">
				<li>
					<router-link :to="{ path: '/#about'}">ABOUT</router-link>
				</li>
				<li>
					<router-link :to="{ path: '/#ico'}">ICO</router-link>
				</li>
				<li>
					<router-link :to="{ path: '/#roadmap'}">ROADMAP</router-link>
				</li>
				<!-- <li>
					<router-link :to="{ path: '/#team'}">TEAM</router-link>
				</li> -->
				<li>
					<router-link :to="{ path: '/#faq'}">FAQ</router-link>
				</li>
				<!-- <li v-if="isLogin">
					<router-link :to="{ path: '/dashboard'}">DASHBOARD</router-link>
				</li>
				<li v-if="isLogin">
					<router-link :to="{ path: '/dashboard'}">DASHBOARD</router-link>
				</li> -->
				<li>
					<router-link :to="{ path: '/#whitepaper'}">WHITEPAPER</router-link>
				</li>
			</ul>
			<ul class="header-lnb">
				<!-- <li><a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504232846/KaicoinICO/web/whitepaper_kr.pdf" class="button-whitepaper" target="_blank">WHITEPAPER</a></li> -->
				<li class="languageArea selectbox-parent">
					<!-- PC에서 show -->
					<a href="" class="design-selectbox">KOR</a>
					<div class="div-selectbox">
						<ul>
							<li><a href="#">ENG</a></li>
							<li><a href="#">KOR</a></li>
						</ul>
					</div>
					<!-- 모바일에서 show -->
					<select name="" id="" class="select-language">
						<option value="eng">ENG</option>
						<option value="kor">KOR</option>
					</select>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'

export default {
	name: 'layout',
	mounted: function() {
		$(document).on('click', '.design-selectbox', function(e) {
			e.stopPropagation();
			e.preventDefault();

			$(this).closest('.selectbox-parent').find('.div-selectbox').toggle();
		});
		$(document).on('click', '.div-selectbox a', function(e) {
			e.preventDefault();
			$(this).closest('.selectbox-parent').find('.design-selectbox').text($(this).text());
			var counter = parseInt($(this).closest('li').index()) + 1;
			$(this).closest('.selectbox-parent').find('select option:nth-child(' + counter + ')').prop('selected', true).trigger('change');
			$(this).closest('.div-selectbox').hide();
		});
		$('.logout').on('click', function(e) {
			e.stopPropagation();
			$('.div-menu').toggle();
		});
		$('.div-menu a').on('click', function(e) {
			e.preventDefault();
			$(this).closest('.div-menu').hide();
		})
		$(document).on('click', function() {
			$('.div-menu, .div-selectbox').hide();
		});
	},
	destroyed: function () {
	},
	components: {
		AppNav,
		AppFooter
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
	@import './assets/scss/main.scss';
	/*li {text-align:left;font-size:14px;}*/
</style>