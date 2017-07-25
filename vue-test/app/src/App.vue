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
		name: 'layout',
		components: {AppNav, AppFooter}
	}
</script>

<style lang="css">
	#wrap {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		//text-align: center;
		color: #2c3e50;
		//margin-top: 60px;
	}
</style>
