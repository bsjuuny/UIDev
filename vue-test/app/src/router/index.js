import Vue from 'vue'
import Router from 'vue-router'
// import VueResource from 'vue-resource'
import test from '../components/test.vue'
import test1 from '../components/test1.vue'
import test2 from '../components/test2.vue'
import test3 from '../components/test3.vue'
import test3sub1 from '../components/test3_sub1.vue'
// import Hello from '@/components/Hello'

Vue.use(Router)
// Vue.use(VueResource)

const defaultRouter = new Router({
	mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'active',
	routes: [
		{path: '/', name: 'test', component: test
			
		},
		{path: '/test1', name: 'test1', component: test1
			// , props: (route) => ({ query: route.query.q })
			// , scrollBehavior (to, from, savedPosition) {
			// 	if (savedPosition) { return savedPosition; } else { return { x: 0, y: 0 } }
			// }
		},
		{path: '/test2', name: 'test2', component: test2
			, beforeEnter (to, from, next) {
				next();
				// console.log('1');
				// alert(next);
			}
		},
		{path: '/test3', name: 'test3', component: test3 
			// , children: [
			// 	{path:'sub1', name:'test3sub1', component:test3sub1}
			// ]
		},
		{path:'/test3/sub1', name:'test3sub1', component:test3sub1},
		{path: '*', redirect: '/'}
		// {path: '/', name: 'Hello', component: Hello},
		// {path: '/test', name: 'test', component: test},
	]
	, scrollBehavior (to, from, savedPosition) {
		if (savedPosition) { return savedPosition; } else { return { x: 0, y: 0 } }
	}
})

export default defaultRouter

defaultRouter.beforeEach((to, from, next) => {
  // ...
  next();
});

// Router.beforeEnter((to, from, next) => {
	// beforeEnter: function (to, from, next) {
// 		console.log(from);
	// }
// })

// const rechazosRouter = new Router({
//   routes: [
//     // Rechazos
//     {path: '/', name: 'Hello', component: Hello},
//     {path: '/rechazos', name: 'rechazosIndex', component: rechazosIndex}
//   ]
// })

// export default rechazosRouter