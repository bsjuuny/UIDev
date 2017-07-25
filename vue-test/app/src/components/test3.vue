<template>
	<!-- demo root element -->
	<div>
		<h2>test3</h2>
		<parentChart></parentChart>
	</div>
</template>

<script>
	import parentChart from './chart.vue'

	export default {
		components: {
			parentChart
		}
  	}
</script>

<style lang="scss">
	@import '../assets/scss/main.scss';
	/*li {text-align:left;font-size:14px;}*/
</style>