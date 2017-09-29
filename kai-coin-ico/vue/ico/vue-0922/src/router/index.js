import Vue from 'vue';
import Router from 'vue-router';
import scrollNavigation from '../plugins/global.js'

import main from '../components/main';
import login from '../components/login';
import join from '../components/join';
import sendMail from '../components/sendMail';
import sendPasswordMail from '../components/sendPasswordMail';
import smsCertification from '../components/smsCertification';
import resetPasswordEmail from '../components/resetPasswordEmail';
import resetPasswordSms from '../components/resetPasswordSms';
import resetPasswordPage from '../components/resetPasswordPage';
import dashboard from '../components/dashboard';
import error from '../components/error';
import mailConfirm from '../components/mailConfirm';
import resetPassword from '../components/resetPassword';

Vue.use(Router);
Vue.use(scrollNavigation);

const defaultRouter = new Router({
	mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'active',
	scrollBehavior: function(to, from, savedPosition) {
		if (to.hash) {
			setTimeout(function() {
				$('html,body').stop().animate({scrollTop: ($(to.hash).offset().top)-100}, 1);
			}, 300);

			$('.below-tablet a').removeClass('active');
			$('header').removeClass('main').end().find('progress').show();
			document.ontouchmove = function(e){ return true; }
			$('body').removeClass('stop-scrolling');
			$('.below-table-menu').removeClass('active');
		} else {
			return { x: 0, y: 0 }
		}
	},
	routes: [
		{path: '/', name: 'main', component: main},
		{path: '/login', name: 'login', component: login},
		{path: '/join', name: 'join', component: join},
		{path: '/sendMail', name: 'sendMail', component: sendMail},
		{path: '/sendPasswordMail', name: 'sendPasswordMail', component: sendPasswordMail},
		{path: '/smsCertification', name: 'smsCertification', component: smsCertification},
		{path: '/resetPasswordEmail', name: 'resetPasswordEmail', component: resetPasswordEmail},
		{path: '/resetPasswordPage', name: 'resetPasswordPage', component: resetPasswordPage},
		{path: '/resetPasswordSms', name: 'resetPasswordSms', component: resetPasswordSms},
		{path: '/dashboard', name: 'dashboard', component: dashboard, meta: { requiresAuth: true }},
		{path: '/error', name: 'error', component: error},
		{path: '/mailConfirm/:number/:email', name: 'mailConfirm', component: mailConfirm},
		{path: '/resetPassword/:email/:number', name: 'resetPassword', component: resetPassword},
		{path: '*', redirect: '/error'}
	]
})

export default defaultRouter;

defaultRouter.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
		// 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
		var id = null;
		if (getCookie('_t')) {
			var email = getCookie('email');
			var cookie = getCookie('_t');
			cookie = cookie.split('%20')[1];
			var password = getCookie('_t');
			password = password.split('%20')[2];

			var obj = new Object();
			obj.email = email;
			obj.password = password;
			var json_data = JSON.stringify(obj);

			var settings = {
				async: false,
				crossDomain: true,
				url: "http://api-ico.kaicoin.io/auth/signin",
				method: "POST",
				xhrFields: { withCredentials:true },
				headers: {
					"Content-Type" : "application/json; charset=UTF-8"
				},
				processData: true,
				data: json_data,
				success : function(data, status, response) {
					if (data) {
						id = data.idfAccount;
						// alert('id');
					}
				}.bind(this),
				error : function(request, status, error) {
					// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
					next({
						path: '/login'
						, query: { redirect: to.fullPath }
					});
				},
				complete: function(jqXHR, textStatus) {
				}
			}
			$.ajax(settings);

			if (cookie == id ) {
				next();
			} else {
				next({
					path: '/login'
					, query: { redirect: to.fullPath }
				});
			}

		} else {
			next({
				path: '/login'
				, query: { redirect: to.fullPath }
			});
		}
		
	} else {
		next(); // 반드시 next()를 호출하십시오!
	}

	if (to.fullPath == '/resetPasswordPage') {
		var getFrom = from.fullPath.split('/')[1].toString();

		if (getFrom != 'resetPasswordSms') {
			next({path: '/error'});
		} else {
			next();
		}
	}
	if (to.fullPath == '/smsCertification') {
		var getFrom = from.fullPath.split('/')[1].toString();

		if (getFrom != 'mailConfirm') {
			next({path: '/error'});
		} else {
			next();
		}
	}
});

Vue.prototype.setCookie = function(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return (arr[2]);
	else
		return null;
}
Vue.prototype.getCookie = getCookie;