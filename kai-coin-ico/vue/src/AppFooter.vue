<template>
	<footer>
		<div class="footer-laout">
			<ul class="infomation">
				<li><address v-html="$t('footer.address')"></address></li>
				<li><em>&copy; 2017 KAICOIN</em> - <a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503393214/KaicoinICO/web/GS_%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80.pdf" target="_blank"><em v-html="$t('footer.policy')"></em></a>, <a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504233016/KaicoinICO/web/GS_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B7%A8%EA%B8%89%EB%B0%A9%EC%B9%A8.pdf" target="_blank"><em v-html="$t('footer.privacy-policy')"></em></a></li>
			</ul>
			<ul class="sns">
				<li><a href="mailto:support@greenstage.co.kr" class="letter">support@greenstage.co.kr</a></li>
				<li><a href="https://www.facebook.com/kaicoin.gs/" class="facebook" target="_blank">facebook</a></li>
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