<template>
	<div id="example1">
		<a href="/test1">이름</a>
		<ul>
			<li v-for="post in orderedUsers">
				<span>{{ post.id }}</span>. /
				<span>{{ post.first_name }}</span>
				<span>{{ post.last_name }}</span> /
				<span>{{ post.gender }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	const cfg = require('../assets/etc/dummy1.json');

	export default {
		name: 'example1',
		data () {
			return {
				posts: cfg
			}
		},
		created: function () {
		},
		computed: {
			reverse: function() {
				return this.posts.reverse();
			},
			orderedUsers: function () {
				return _.orderBy(this.posts, 'first_name')
			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/scss/main.scss';
	/*li {text-align:left;font-size:14px;}*/
</style>