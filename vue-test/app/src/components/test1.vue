<template>
	<!-- demo root element -->
	<div id="example-1" v-if="this.$route.query.q === 'id'"><!-- url 파라미터 값에 따라 변경 -->
		<form id="search">
			Search <input name="query" v-model="searchQuery">
			<!-- {{ q }} -->
		</form>
		<gridtemplate :data="items" :columns="gridColumns" :filter-key="searchQuery"></gridtemplate>
	</div>
	<div v-else>
		잘못된 접근입니다.
	</div>
</template>

<script>
	const cfg = require('../assets/etc/dummy1.json');
	import gridtemplate from './gridtemplate.vue';
	import $ from 'jQuery';

	export default {
		name: 'example1',
		data () {
			return {
				items: cfg,
				searchQuery: '',
				gridColumns: ['id', 'first_name', 'last_name', 'email', 'gender'],
				post: null,
				error: null
			}
		},
		// Fetches posts when the component is created.
		created: function () {
			// this.$data.q = this.$route.params.q
			// this.$data.q = this.$route.query.q;
			// console.log(this.$data.q);
		},
		mounted: function() {
			
		},
		methods: {

		},
		components: {
			gridtemplate
		}
  	}
</script>

<style lang="scss">
	@import '../assets/scss/main.scss';
	/*li {text-align:left;font-size:14px;}*/
</style>