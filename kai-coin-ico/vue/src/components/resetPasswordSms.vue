<template>
	<form action="./" method="post" v-on:submit.prevent.stop="checkSubmitForm">
	<fieldset>
		<legend>이메일 확인</legend>
		<section class="section-reset">
			<h1>비밀번호 재설정</h1>
			<p class="sms-infomation">SMS로 발송된 코드를 입력하시면 새 비밀번호 사용이 가능합니다.</p>
			<div class="input-password">
				<h3><label for="inputPassword">코드입력</label></h3>
				<input type="password" id="inputPassword" class="input-certification-number" v-model="code" placeholder="" />
				<span class="certification-count"></span>
			</div>
			<div class="certification-navigator">
				<button type="button" class="button-resend-sms" disabled="disabled" v-on:click="resendSms">SMS 재전송</button>
				<button type="submit" class="button-certification-complete">입력완료</button>
			</div>
		</section>
	</fieldset>
	</form>
</template>

<script>
	export default {
		name: 'smsCertification',
		data: function() {
			return {
				code: null
			}
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');

			this.checkSms();
		},
		methods: {
			checkSms: function() {
				var second = 1000;
				var minute = second * 60 * 5;
				var oneMinute = new Date().getTime() + minute;
				$('.certification-count').countdown(oneMinute).on('update.countdown', function(event) {
					$(this).text(event.strftime('%M:%S'));
					$(this).text(event.strftime('%M:%S')).closest('.section-reset').find('.input-certification-number').prop('disabled', false).end().find('.button-certification-complete').prop('disabled', false);
				}).on('finish.countdown', function(event) {
					$(this).text(event.strftime('%M:%S')).closest('.section-reset').find('.input-certification-number').prop('disabled', true).end().find('.button-certification-complete').prop('disabled', true).end().find('.button-resend-sms').prop('disabled', false);
					alert('시간이 초과 되었습니다.');
				});
			},
			resendSms : function() {
				var getEmail = this.getCookie('resetEmail');
				var settings = {
					async: true,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/mypage/sendSMSCode/"+getEmail+"/",
					method: "GET",
					headers: {},
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						if (data.requestId) {
							let expireDays = 1000 * 60 * 60 * 2;
							this.setCookie('resetCertify', data.requestId, expireDays);

							this.checkSms();
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
				$.ajax(settings);
			},
			checkSubmitForm: function() {
				var getId = this.getCookie('resetCertify');
				var getEmail = this.getCookie('resetEmail');

				var obj = new Object();
					obj.requestId = getId;
					obj.smsCode = this.code;
					obj.email = getEmail;

				var json_data = JSON.stringify(obj);

				var settings = {
					async: true,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/mypage/checkSMSCode",
					xhrFields: { withCredentials:true },
					method: "POST",
					headers: {
						"content-type": "application/json; charset=utf-8"
					},
					processData: true,
					data: json_data,
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						if (data.isCheck) {
							let expireDays = 1000 * 60 * 60 * 24 * -1;
							this.setCookie('resetCertify', '', expireDays);
							this.$router.push({name: 'resetPasswordPage'});
						} else {
							alert('인증번호가 다릅니다.');
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
				$.ajax(settings);
			}
		}
	}

	$(function() {

	});
</script>