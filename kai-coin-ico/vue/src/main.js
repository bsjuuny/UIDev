// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import "babel-polyfill";
import lodash from 'lodash';
import VueLodash from 'vue-lodash/dist/vue-lodash.min';
import App from './App';
import router from './router';

import axios from 'axios';
import VueCookie from 'vue-cookie';
import VueI18n from 'vue-i18n';


// Tell Vue to use the plugin
Vue.use(VueCookie);
Vue.use(VueI18n);
Vue.config.productionTip = false;

const messages = require('./assets/etc/language.json');

// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: 'kr', // set locale
	messages, // set locale messages
});

/* eslint-disable no-new */
new Vue({
	i18n,
	el: '#app',
	router,
	data: function() {
		return {
			isLoging: false
		}
	},
	watch:{
		"$route" : 'checkDefault'
	},
	created: function() {
		
	},
	template: '<App/>',
	components: { App },
	mounted: function() {
		this.checkDefault();
	},
	methods: {
		checkDefault: function(){
			// if(!this.getCookie('session')) {
			// 	this.$router.push('/login');
			// }
			if (this.getCookie('_t')) {
				var isLogin = this.getCookie('_t').split('%20')[5];
				if(isLogin == 'M') {
					var getEmail = this.getCookie('email').split('@')[0];

					$('.header-lnb .login').hide();
					$('.header-lnb .logout').show('slow', function() {$(this).css('display', 'block').text(getEmail + '님')});
					this.isLoging = true;
				}
			} else {
				$('.header-lnb .login').show();
				$('.header-lnb .logout').hide();
			}

			// $('header').removeClass('main').end().find('progress').show();
			document.ontouchmove = function(e){ return true; }
			$('body').removeClass('stop-scrolling');
			$('.below-tablet a, .below-table-menu').removeClass('active');

			// console.clear();
		}
	}
})
