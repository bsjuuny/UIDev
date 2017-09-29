<template>
	<footer>
		<div class="footer-laout">
			<ul class="infomation">
				<li><address v-html="$t('footer.address')"></address></li>
				<li><em>&copy; 2017 KAICOIN</em> - <a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1505285720/KaicoinICO/web/service.pdf" target="_blank"><em v-html="$t('footer.policy')"></em></a>, <a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1505285720/KaicoinICO/web/privacyStatement.pdf" target="_blank"><em v-html="$t('footer.privacy-policy')"></em></a></li>
			</ul>
			<ul class="sns">
				<li><a href="mailto:support@kaicoin.io" class="letter">support@kaicoin.io</a></li>
				<!-- <li><a href="https://www.facebook.com/kaicoin.gs/" class="facebook" target="_blank">facebook</a></li> -->
				<!-- <li><a href="" class="slack">slack</a></li> -->
			</ul>
		</div>
	</footer>
</template>

<script>
	
	export default {
		mounted: function() {
		},
		updated: function() {
		},
		ready: function() {
		},
		computed: {
			
		}
	}
</script>