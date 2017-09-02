<template>
	<form action="./" method="post" v-on:submit.prevent.stop="checkSubmitForm">
	<fieldset>
		<legend>회원가입</legend>
		<section class="section-join">
			<h1 v-html="$t('join.join-title')"></h1>
			<ol class="join-step">
				<li class="active"><span>1</span> <em v-html="$t('join.join-step1')"></em></li>
				<li><span>2</span> <em v-html="$t('join.join-step2')"></em></li>
			</ol>
			<!-- 잘못입력 했을 땐 error class 추가 -->
			<div class="join-email">
				<h2><label for="joinEmail" v-html="$t('join.join-email')"></label></h2>
				<input type="text" id="joinEmail" placeholder="yourmail@address.com" v-on:blur="checkEmail" />
				<span class="checkOk"></span>
				<p class="error"></p>
			</div>
			<div class="join-name">
				<div class="left">
					<h2><label for="joinName" v-html="$t('join.join-name')"></label></h2>
					<input type="text" id="joinName" placeholder="길동" v-on:blur="checkName" />
					<p class="error"></p>
				</div>
				<div class="right">
					<h2><label for="joinFamilyName" v-html="$t('join.join-family-name')"></label></h2>
					<input type="text" id="joinFamilyName" placeholder="홍" v-on:blur="checkFamilyName" />
					<p class="error"></p>
				</div>
			</div>
			<div class="join-password">
				<h2><label for="joinPassword" v-html="$t('join.join-password')"></label></h2>
				<input type="password" id="joinPassword" placeholder="" v-on:blur="checkPassword" />
				<p class="error"></p>
				<h2 class="checkPassword"><label for="joinCheckPassword" v-html="$t('join.join-recheck-password')"></label></h2>
				<input type="password" id="joinCheckPassword" placeholder="" v-on:blur="recheckPassword" />
				<p class="error"></p>
			</div>
			<p class="agree-policy">
				<input type="checkbox" id="agree" v-on:change="checkTerm" /><span></span>
				<label for="agree">
					<a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503393214/KaicoinICO/web/GS_%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80.pdf" target="_blank" v-html="$t('join.join-terms-of-service')"></a>, <a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504233016/KaicoinICO/web/GS_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B7%A8%EA%B8%89%EB%B0%A9%EC%B9%A8.pdf" target="_blank" v-html="$t('join.join-privacy-statement')"></a><span v-html="$t('join.join-policy-infomation')"></span>
				</label>
			</p>
			<div class="page-navigator">
				<router-link :to="{ path: 'login'}" class="button-login" v-html="$t('join.join-login-button')"></router-link>
				<button type="submit" class="button-next" v-html="$t('join.join-next-button')"></button>
			</div>
		</section>
	</fieldset>
	</form>
</template>

<script>
var axios = require('axios');
var SHA256 = require("crypto-js/sha256");
var submitButton;

	export default {
		name: 'join',
		data: function() {
			return {
				email: String,
				name: String,
				familyName: String,
				password: String,
				errors: []
			}
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');

			submitButton = $('.page-navigator .button-next');
		},
		methods: {
			checkEmail: function() {
				// 이메일 검증
				var objEmail = $('#joinEmail');
				var getEmail = objEmail.val();
				var flag = false;

				if (!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(getEmail)) {
					objEmail.siblings('p.error').show().text(this.$t('message.join-email-error'));
					objEmail.addClass('error');

					return false;
				}

				var settings = {
					async: false,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/auth/validateEmail/"+getEmail+"/",
					method: "GET",
					headers: {},
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					error: function(request, status, error) {
						$('.join-email .checkOk').css('display', "none");
						flag = false;
						// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						var code = request.responseJSON.errorCode;
						if (code === 101) {
							objEmail.siblings('p.error').show().text(this.$t('message.join-aready-email-error'));
							objEmail.addClass('error');
						} else if (code === 201) {
							objEmail.siblings('p.error').show().text(this.$t('message.join-real-email-error'));
							objEmail.addClass('error');
						}
					},
					success: function(data, status, response) {
						if (data) {
							flag = true;
							objEmail.siblings('p.error').hide();
							objEmail.removeClass('error');
							$('.join-email .checkOk').css('display', "block");
						}
					},
					complete: function() {
						$.unblockUI();
					}
				}

				$.ajax(settings);
				this.email = objEmail.val();
				return flag;
			},
			checkName: function() {
				var objName = $('#joinName');
				var getName = objName.val().trim();

				if (getName === '') {
					objName.siblings('p.error').show().text(this.$t('message.join-name-error'));
					objName.addClass('error');
					return false;
				}
				objName.siblings('p.error').hide();
				objName.removeClass('error');
				this.name = objName.val().trim();
				return true;
			},
			checkFamilyName: function() {
				var objFamilyName = $('#joinFamilyName');
				var getFamilyName = objFamilyName.val().trim();

				if (getFamilyName === '') {
					objFamilyName.siblings('p.error').show().text(this.$t('message.join-name-error'));
					objFamilyName.addClass('error');
					return false;
				}
				objFamilyName.siblings('p.error').hide();
				objFamilyName.removeClass('error');
				this.familyName = objFamilyName.val().trim();
				return true;
			},
			checkPassword: function() {
				var objPassword = $('#joinPassword');
				var objEmail = $('#joinEmail');
				var getId = objEmail.val().split('@')[0];
				var getPwd = objPassword.val();

				if(!/^[a-zA-Z0-9]{8,20}$/.test(getPwd)){
					objPassword.next('p.error').show().text(this.$t('message.join-password-error1'));
					objPassword.addClass('error');
					return false;
				}

				var checkNumber = getPwd.search(/[0-9]/g);
				var checkEnglish = getPwd.search(/[a-z]/ig);

				if(checkNumber < 0 || checkEnglish < 0){
					objPassword.next('p.error').show().text(this.$t('message.join-password-error2'));
					objPassword.addClass('error');
					return false;
				}

				if(getPwd.search(getId) > -1){
					objPassword.next('p.error').show().text(this.$t('message.join-password-error3'));
					objPassword.addClass('error');
					return false;
				}
				objPassword.next('p.error').hide();
				objPassword.removeClass('error');
				this.password = SHA256(objPassword.val()).toString();
				return true;
			},
			recheckPassword: function() {
				var objCheckPwd = $('#joinCheckPassword');
				var objPassword = $('#joinPassword');
				var checkPwd= objCheckPwd.val();
				var getPwd = objPassword.val();

				if (getPwd != checkPwd) {
					objCheckPwd.next('p.error').show().text(this.$t('message.join-password-error4'));
					objCheckPwd.addClass('error');
					return false;
				}
				objCheckPwd.next('p.error').hide();
				objCheckPwd.removeClass('error');
				return true;
			},
			checkTerm: function() {
				if (!$('#agree').prop('checked')) {
					alert(this.$t('message.join-checkTerm-error'))
					return false;
				}
				return true;
			},
			checkSubmitForm: function() {
				if (this.checkEmail() && this.checkName() && this.checkFamilyName() && this.checkPassword() && this.recheckPassword() && this.checkTerm()) {

					$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					submitButton.prop('disabled', true);

					var obj = new Object();
					obj.email = this.email;
					obj.name1 = this.name;
					obj.name2 = this.familyName;
					obj.password = this.password;

					var json_data = JSON.stringify(obj);

					$.ajax({
						url:"http://api.kaicoin.co.kr/auth/signup",
						type:"post",
						contentType : "application/json; charset=UTF-8",
						dataType: "json",
						async: true,
						data:json_data,
						beforeSend: function() {
							$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
							submitButton.prop('disabled', true);
						},
						success : function(data, status, response) {
							var value = this.email;
							let expireDays = 1000 * 60 * 60 * 24 * 7;
							this.setCookie('join', value, expireDays);

							this.$router.push({name: 'sendMail'});
						}.bind(this),
						error: function(request, status, error) {
							// console.log(request.status);
							// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						},
						complete: function() {
							$.unblockUI();
							submitButton.prop('disabled', false);
						}
					});
				} else {
					// $.unblockUI();
					// submitButton.prop('disabled', false);
				}
			},
			emailComplete: function() {
				this.$router.push({name: 'sendMail'});
			}
		}
	}
	function stck(str, limit, obj1) {
		var o, d, p, n = 0, l = limit == null ? 4 : limit;
		for (var i = 0; i < str.length; i++) {
			var c = str.charCodeAt(i);
			if (i > 0 && (p = o - c) > -2 && p < 2 && (n = p == d ? n + 1 : 0) > l - 3) {
			}
			d = p, o = c;
		}
	}

	function callPopup(popupMessage, state) {
		// 알림창 호출 - 확인 버튼 클릭시 동작은 index.js에서 
		$.blockUI({message: $('.popup'), centerY: true, css: {left:'50%', width:'320px', border:0, margin:'0 0 0 -160px'}});
		$('.popup .content').empty().append('<p>'+popupMessage+'</p>').closest('.popup').addClass(state);
	}
</script>