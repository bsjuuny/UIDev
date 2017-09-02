<template>
	<form action="./" method="post" v-on:submit.prevent.stop="checkSubmitForm">
	<fieldset>
		<legend>이메일 확인</legend>
		<section class="section-reset">
			<h1>비밀번호 재설정</h1>
			<h2>새 비밀번호를 입력하세요.</h2>
			<div class="input-password">
				<h3><label for="inputPassword">새 비밀번호 (8자 이상 입력)</label></h3>
				<input type="password" id="inputPassword" placeholder="" v-on:blur="checkPassword" />
				<p class="error"></p>
				<h3><label for="inputCheckPassword">새 비밀번호 확인</label></h3>
				<input type="password" id="inputCheckPassword" placeholder="" v-on:blur="recheckPassword" />
				<p class="error"></p>
			</div>
			<div class="button-right">
				<button type="submit" class="button-check-email">재설정</button>
			</div>
		</section>
	</fieldset>
	</form>
</template>

<script>
var SHA256 = require("crypto-js/sha256");

	export default {
		name: 'smsCertification',
		data: function() {
			return {
				resetPassword: String
			}
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');
		},
		methods: {
			checkPassword: function() {
				var objPassword = $('#inputPassword');
				var objEmail = this.getCookie('resetEmail');
				var getId = objEmail.split('@')[0];
				var getPwd = objPassword.val();

				if(!/^[a-zA-Z0-9]{8,20}$/.test(getPwd)){
					objPassword.next('p.error').show().text('숫자와 영문자 조합으로 8~20자리를 사용해야 합니다.');
					objPassword.addClass('error');
					return false;
				}

				var checkNumber = getPwd.search(/[0-9]/g);
				var checkEnglish = getPwd.search(/[a-z]/ig);

				if(checkNumber < 0 || checkEnglish < 0){
					objPassword.next('p.error').show().text('숫자와 영문자를 혼용하여야 합니다.');
					objPassword.addClass('error');
					return false;
				}

				if(getPwd.search(getId) > -1){
					objPassword.next('p.error').show().text('비밀번호에 아이디가 포함되었습니다.');
					objPassword.addClass('error');
					return false;
				}
				objPassword.next('p.error').hide();
				objPassword.removeClass('error');
				this.resetPassword = SHA256(objPassword.val()).toString();
				return true;
			},
			recheckPassword: function() {
				var objCheckPwd = $('#inputCheckPassword');
				var objPassword = $('#inputPassword');
				var checkPwd= objCheckPwd.val();
				var getPwd = objPassword.val();

				if (getPwd != checkPwd) {
					objCheckPwd.next('p.error').show().text('비밀번호가 다릅니다.');
					objCheckPwd.addClass('error');
					return false;
				}
				objCheckPwd.next('p.error').hide();
				objCheckPwd.removeClass('error');
				return true;
			},
			checkSubmitForm: function() {
				if (this.checkPassword() && this.recheckPassword()) {
					// let expireDays = 1000 * 60 * 5;
					// this.setCookie('resetPassowrd', this.resetPassword, expireDays);
					// this.$router.push({name: 'sendMail'});
					var getId = this.getCookie('resetEmail');

					var obj = new Object();
						obj.email = getId;
						obj.password = this.resetPassword;

					var json_data = JSON.stringify(obj);

					var settings = {
						async: true,
						crossDomain: true,
						url: "http://api.kaicoin.co.kr/mypage/resetPassword",
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
							if (data.isReset) {
								this.$router.push({name: 'login'});
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
	}

	$(function() {

	});
</script>