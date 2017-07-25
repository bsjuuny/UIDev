// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "babel-polyfill"
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import App from './App'
import router from './router'


// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import VueResource from 'vue-resource'

Vue.use(VueLodash, lodash)
// Vue.use(VueAxios, axios)
// Vue.use(VueResource)

Vue.config.productionTip = false;

// Vue.config.errorHandler = function (err, vm, info) {
// 	console.log(err, vm, info)
// }
// Vue.config.warnHandler = function (msg, vm, trace) {
//   // trace는 컴포넌트 계층 구조를 추적합니다.
// 	console.log(msg, vm, trace)
// }

/* eslint-disable no-new */
new Vue({
	el: '#vueApp',
	router,
	template: '<App/>',
	components: { 
		App
	}
})
