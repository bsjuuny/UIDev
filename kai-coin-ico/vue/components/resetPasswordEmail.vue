<template>
	<section class="section-reset">
		<h1 v-html="$t('resetPassword.reset-title')"></h1>
		<h2 v-html="$t('resetPassword.reset-check-mail-content')"><!-- 을 통해 가입이 완료된 회원만 이용 가능 합니다. --></h2>
		<div class="input-email">
			<h3><label for="inputEmail" v-html="$t('resetPassword.reset-check-mail-title')"></label></h3>
			<input type="text" id="inputEmail" placeholder="yourmail@address.com" v-model="getEmail" />
			<p class="error"></p>
		</div>
		<div class="button-right">
			<button type="button" class="button-check-email" v-on:click="checkState" v-html="$t('resetPassword.reset-check-mail-button')"></button>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'smsCertification',
		data: function() {
			return {
				getEmail: '',
				state: String
			}
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');
		},
		methods: {
			checkState: function() {
				var settings = {
					async: true,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/mypage/validateEmailForPasswordReset/"+this.getEmail+"/",
					method: "GET",
					headers: {},
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						let expireDays = 1000 * 60 * 60 * 1;
						this.setCookie('email', this.getEmail, expireDays);
						this.state = data.state;
						if (this.state != 'M') {
							$.unblockUI();
							alert(this.$t('message.move-certify'));
							// $('#inputEmail ~ p.error').empty().show().text('전화번호 인증이 완료되지 않았습니다.');
							// $('.button-check-email').prop('disabled', true);
							this.$router.push('/mailConfirm/'+data.state+'/'+this.getEmail); return false;
						} else {
							// $('.button-check-email').prop('disabled', false);
							this.checkSubmitForm();
						}
						
					}.bind(this),
					error : function(request, status, error) {
						// console.log(error);
						// location.href = "/resetPasswordEmail"
						// this.$router.push({name: 'resetPasswordEmail'});
						// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						alert(this.$t('message.reset-password-mail-error'));
						$.unblockUI();
					}
				}
				$.ajax(settings);
			},
			checkSubmitForm: function() {
				// 이메일 검증
				var objEmail1 = $('#inputEmail');
				var getEmail1 = objEmail1.val();

				var settings = {
					async: true,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/mypage/sendPasswordResetMail/"+getEmail1+"/",
					method: "GET",
					headers: {},
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						if (data.isSend) {
							let expireDays = 1000 * 60 * 60 * 24 * 1;
							this.setCookie('resetEmail', getEmail1, expireDays);
							this.$router.push({name: 'sendPasswordMail'});
						}
					}.bind(this),
					error : function(request, status, error) {
						// console.log(error);
						// location.href = "/resetPasswordEmail"
						// this.$router.push({name: 'resetPasswordEmail'});
						// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
					},
					complete: function() {
						$.unblockUI();
					}
				}

				if (!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(getEmail1)) {
					objEmail1.siblings('p.error').show().text(this.$t('message.join-email-error'));
					objEmail1.addClass('error');
					return false;
				} else {
					$.ajax(settings);
				}
			},
			destroyed: function() {
				$.unblockUI();
			}
		}
	}

	$(function() {

	});
</script>