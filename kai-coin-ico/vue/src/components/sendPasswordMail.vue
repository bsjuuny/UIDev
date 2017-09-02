<template>
	<section class="section-join">
		<article class="mailCertification">
			<h1>비밀번호 재설정</h1>
			<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503805660/KaicoinICO/web/icon-send-mail_qdid1p.png" class="icon-send-mail" width="143" height="52" alt="" />
			<h2>메일발송 완료</h2>
			<p class="message-send-mail">등록하신 메일주소로<br />
			비밀번호 재설정 메일을 발송했습니다.<br />
			<em>메일함을 확인해주세요.</em></p>
		</article>
		<div class="button-right">
			<button type="button" class="resend-mail" v-on:click="reSendMail">메일 재발송</button>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'sendPasswordMail',
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');
		},
		methods: {
			reSendMail: function() {
				var getEmail = this.getCookie('resetEmail');

				$.ajax({
					url:"http://api.kaicoin.co.kr/mypage/sendPasswordResetMail/"+getEmail+"/",
					type:"get",
					contentType : "application/json; charset=UTF-8",
					async: true,
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
						$('.resend-mail').prop('disabled', true);
					},
					success : function(data, status, response) {
						if (data.isSend) {
							alert('재전송 되었습니다.');
						} else {
							this.$router.push({name: 'resetPasswordEmail'});
						}
					}.bind(this),
					error: function(request, status, error) {
						// console.log(request.status);
						// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						this.$router.push({name: 'resetPasswordEmail'});
					}.bind(this),
					complete: function() {
						$.unblockUI();
						$('.resend-mail').prop('disabled', false);
					}
				});
			}
		}
	}
</script>