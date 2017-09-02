<template>
	<header>
		<div class="header-layout">
			<h1><a href="/">kaicoin</a></h1>
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
					<select name="" id="" class="select-language">
						<option value="eng">ENG</option>
						<option value="kor">KOR</option>
					</select>
				</li>
				<li class="selectbox">
					<!-- 로그인 -->
					<span class="login"><router-link :to="{ path: 'login'}">LOGIN</router-link></span>

					<!-- 로그아웃 -->
					<span class="logout">ICO님</span>
					<!-- PC에서 show -->
					<div class="div-menu">
						<ul>
							<li><router-link :to="{ path: 'dashboard'}">DASHBOARD</router-link></li>
							<li><a href="#" v-on:click="logout">LOGOUT</a></li>
						</ul>
					</div>
					<!-- 모바일에서 show -->
					<select name="" id="" class="select-menu">
						<option value="dashboard">DASHBOARD</option>
						<option value="logout">LOGOUT</option>
					</select>
				</li>
				<li class="below-tablet">
					<a href="#" v-on:click.prevent.capture="menuHeader"><span></span><span></span><span></span></a>
				</li>
			</ul>
		</div>

		<progress value="0" id="progressBar">
			<div class="progress-container">
				<span class="progress-bar"></span>
			</div>
		</progress>
	</header>
</template>

<script>
	export default {
		data: function() {
			return {
				main: ''
			}
		},
		mounted: function() {
			

			// if ($('header').hasClass('main')) {
			// 	main = 'main';
			// 	console.log('1');
			// }
		},
		methods: {
			menuHeader: function() {
				$('.below-table-menu li a').removeClass('active');

				if ($('header').hasClass('state')) {
					this.main = 'main'
				} else {
					this.main = ''
				}

				$('body').addClass('stop-scrolling');
				document.ontouchmove = function(e){ e.preventDefault(); }
				$('header').addClass('main');
				$('.below-tablet a').toggleClass('active').end().find('progress').hide();

				if ($('.below-table-menu').hasClass('active')) {
					if (this.main == 'main') {
						$('header').find('progress').show();
					} else {
						$('header').removeClass('main').end().find('progress').show();
					}
					
					document.ontouchmove = function(e){ return true; }
					$('body').removeClass('stop-scrolling');
					$('.below-table-menu').removeClass('active');
				} else {
					$('.below-table-menu').addClass('active');
				}
			},
			logout: function() {
				let expireDays = 1000 * 60 * 60 * 24 * -1;
				this.setCookie('email', '', expireDays);
				this.setCookie('_t', '', expireDays);
				this.setCookie('__t', '', expireDays);
				// this.$router.push('/');
				window.location.href = '/';
			}
		}
	}


</script>