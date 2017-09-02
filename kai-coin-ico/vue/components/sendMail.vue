<template>
	<section class="section-join">
		<article class="mailCertification">
			<h1 v-html="$t('join.join-title')"></h1>
			<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503805660/KaicoinICO/web/icon-send-mail_qdid1p.png" class="icon-send-mail" width="143" height="52" alt="" />
			<h2 v-html="$t('join.join-sendmail-title')"></h2>
			<p class="message-send-mail" v-html="$t('join.join-sendmail-content')"></p>
		</article>
		<div class="button-right">
			<button type="button" class="resend-mail" v-on:click="reSendMail" v-html="$t('join.join-resend-mail-button')"></button>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'sendMail',
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');
		},
		methods: {
			reSendMail: function() {
				var getEmail = this.getCookie('join');

				$.ajax({
					url:"http://api.kaicoin.co.kr/auth/sendSignupMail/"+getEmail+"/",
					type:"get",
					contentType : "application/json; charset=UTF-8",
					async: true,
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
						$('.resend-mail').prop('disabled', true);
					},
					success : function(data, status, response) {
						if (data.isEmail) {
							alert(this.$t('message.resend-mail'));
						}
					}.bind(this),
					error: function(request, status, error) {
						// console.log(request.status);
						// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
					},
					complete: function() {
						$.unblockUI();
						$('.resend-mail').prop('disabled', false);
					}
				});
			}
		}
	}
</script>