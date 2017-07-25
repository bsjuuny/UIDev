<template>
	<header>
		<h1><a href="/">home</a></h1>
		<ul class="gnb">
			<!-- <li><a href="" v-link="{ path: '/test1?q=id' }" v-on:click="active">test1</a></li>
			<li><a href="/test2?q=password" v-on:click="active">test2</a></li>
			<li><a href="/test3?q=data" v-on:click="active">test3</a></li>
			<li><a href="/test3/sub1" v-on:click="active">test3/sub1</a></li>
			<li><a href="/test3/sub1/subsub1" v-on:click="active">test3/sub1/sub1</a></li> -->
			<li>
				<router-link :to="{ path: 'test1', query: { q: 'id' }}">test1</router-link>
			</li>
			<li>
				<router-link :to="{ path: 'test2', query: { q: 'password' }}">test2</router-link>
			</li>
			<li>
				<router-link :to="{ path: 'test3', query: { q: 'data' }}">test3</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
	export default {
		
	}
</script>