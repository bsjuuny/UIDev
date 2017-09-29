<template>
	<form action="./" method="post" v-on:submit.prevent="login">
	<fieldset>
		<legend>Login</legend>
		<section class="section-login">
			<h1 v-html="$t('login.login-title')"></h1>
			<div class="input-email">
				<h2><label for="loginEmail" v-html="$t('login.login-title-email')"></label></h2>
				<input type="text" id="loginEmail" placeholder="yourmail@address.com" />
				<span class="icon-email"></span>
			</div>
			<!-- 패스워드 입력 -->
			<div class="input-password">
				<h2><label for="loginPassword" v-html="$t('login.login-title-password')"></label></h2>
				<input type="password" id="loginPassword" placeholder="password" />
				<span class="icon-password"></span>
			</div>
			<!-- 패스워드 에러 -->
			<!-- <div class="input-password error">
				<h2><label for="loginPassword">비밀번호</label></h2>
				<input type="password" id="loginPassword" placeholder="password" />
				<span class="icon-password"></span>
			</div> -->
			<div class="login-service">
				<ul class="login-menu">
					<li class="find-password"><router-link :to="{ path: 'resetPasswordEmail'}" v-html="$t('login.login-findPassword')"></router-link></li>
					<li class="join"><router-link :to="{ path: 'join'}" v-html="$t('login.login-join')"></router-link></li>
				</ul>
				<button type="submit" class="button-login" v-html="$t('login.login-button')"></button>
			</div>
		</section>
	</fieldset>
	</form>
</template>

<script>
var Axios = require('axios');
var SHA256 = require("crypto-js/sha256");

	export default {
		name: 'login',
		data: function() {
			return {
				isLoging: false,
				email: String,
				password: String,
				errors: []
			}
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main state');

			$('.input-email input').on({
				focus: function() {
					$(this).next('.icon-email').addClass('focus');
				},
				blur: function() {
					$(this).next('.icon-email').removeClass('focus');
				}
			});

			$('.input-password input').on({
				focus: function() {
					$(this).next('.icon-password').addClass('focus');
				},
				blur: function() {
					$(this).next('.icon-password').removeClass('focus');
				}
			});
		},
		methods: {
			login: function() {
				this.email = $('#loginEmail').val().trim();
				this.password = SHA256($('#loginPassword').val().trim()).toString();

				if(this.email != '' && this.password != ''){
					this.toLogin();
				}
				else {
					if (this.email == '') {
						$('#loginEmail').addClass('error');
					}
					else if (this.password == '') {
						$('#loginPassword').addClass('error');
					}
				}
			},
			toLogin: function() {
				var obj = new Object();
				obj.email = this.email;
				obj.password = this.password;

				var json_data = JSON.stringify(obj);

				var settings = {
					async: true,
					crossDomain: true,
					url: "http://api-ico.kaicoin.io/auth/signin",
					// url: "http://192.168.1.140:8080/auth/signin",
					method: "POST",
					xhrFields: { withCredentials:true },
					headers: {
						"Content-Type" : "application/json; charset=UTF-8"
					},
					processData: true,
					data: json_data,
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						if (data) {
							this.isLoging = true;
							var email = data.email;
							var idfAccount = data.authToken + ' ' + data.idfAccount + ' ' + this.password + ' ' + SHA256(data.email).toString() + ' ' + this.password + ' ' + data.state;
							var token = data.authToken;

							let expireDays = 1000 * 60 * 60 * 7;
							let expireDays1 = 1000 * 60 * 60 * 100;
							let expireDays2 = 1000 * 60 * 60 * 1;
							this.setCookie('email', email, expireDays);
							this.setCookie('_t', idfAccount, expireDays);
							this.setCookie('__t', token, expireDays);
							this.setCookie('wallet', data.ethereumAddr, expireDays);

							switch (data.state) {
								case 'R':
									$.ajax({
										url:"http://api-ico.kaicoin.io/auth/sendSignupMail/"+email+"/",
										type:"get",
										contentType : "application/json; charset=UTF-8",
										async: true,
										beforeSend: function() {
											setTimeout(function() {$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});}, 300);
										},
										success : function(data, status, response) {
											if (data.isEmail) {
												this.$router.push('/sendMail');
											}
										}.bind(this),
										error: function(request, status, error) {
											// console.log(request.status);
											// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
										},
										complete: function() {
											$.unblockUI();
										}
									});
									alert(this.$t('message.move-certify'));

									break;
								case 'E': alert(this.$t('message.move-certify'));this.$router.push('/mailConfirm/'+data.state+'/'+email); break;
								case 'M': this.$router.push('/dashboard'); break;
								default: this.$router.push('/login'); break;
							}
						}
					}.bind(this),
					error : function(request, status, error) {
						// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						// callPopup("로그인 할 수 없습니다.", "error");
						if(request.status==401 || request.status==500){
							alert(this.$t('message.login-error'));
						}
					}.bind(this),
					complete: function(jqXHR, textStatus) {
						$.unblockUI();
					}
				}
				$.ajax(settings).done(function (response) {
				});

			}
		}
	}

	function callPopup(popupMessage, state) {
		// 알림창 호출 - 확인 버튼 클릭시 동작은 index.js에서
		$.blockUI({message: $('.popup'), centerY: true, css: {left:'50%', width:'320px', border:0, margin:'0 0 0 -160px'}});
		$('.popup .content').empty().append('<p>'+popupMessage+'</p>').closest('.popup').addClass(state);
	}
</script>