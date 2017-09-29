import Vue from 'vue';
import Router from 'vue-router';
import main from '../components/main';
import join from '../components/join';
import admin from '../components/admin';

import axios from 'axios';
var SHA256 = require("crypto-js/sha256");

Vue.use(Router)

const defaultRouter = new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'main', component: main },
		{ path: '/join', name: 'join', component: join, meta: { requiresAuth: true } },
		// { path: '/admin', name: 'admin', component: admin },
		{ path: '*', redirect: '/' }
	]
});
export default defaultRouter;

defaultRouter.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
		// 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
		var id = null;
		if (getCookie('s_t')) {
			var cookie = getCookie('s_t');
			var email = cookie.split('%20')[2];
			var login = cookie.split('%20')[3];
			var password = cookie.split('%20')[5];

			var obj = new Object();
			obj.email = email;
			obj.password = password;
			var json_data = JSON.stringify(obj);

			var settings = {
				async: false,
				crossDomain: true,
				url: "http://api-presale.kaicoin.io/auth/signin",
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
						path: '/'
						, query: { redirect: to.fullPath }
					});
				},
				complete: function(jqXHR, textStatus) {
				}
			}
			$.ajax(settings);

			if (login == id ) {
				next();
			} else {
				next({
					path: '/'
					, query: { redirect: to.fullPath }
				});
			}

		} else {
			next({
				path: '/'
				, query: { redirect: to.fullPath }
			});
		}
		
	} else {
		next(); // 반드시 next()를 호출하십시오!
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