<template>
	<div class="server-error">
		<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503806805/KaicoinICO/web/icon-error.png" class="icon-error" width="100" alt="" />
		<h1 v-html="$t('error.title')"></h1>
		<p class="error-message" v-html="$t('error.content')"></p>
		<ul class="page-move">
			<li><a href="javascript:window.history.back(-1);" class="button-prev" v-html="$t('error.back')"></a></li>
			<li><router-link :to="{ path: '/'}" class="button-home" v-html="$t('error.home')"></router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
			}
		},
		mounted: function() {
			$('header').hide();
		},
		destroyed: function() {
			$('header').show();
		},
		methods: {
		}
	}
</script>