<template>
	<div class="join">
		<h2>Presale 참여자를 위한 회원가입</h2>
		<p>※ 카이코인 잔액 확인을 위해 회원가입이 필요합니다.</p>
		<dl class="form-join">
			<!-- <dt>이메일</dt>
			<dd>
				<input type="text" class="input-email" placeholder="yourmail@address.com" v-model="mail" />
				<span class="email-check"></span>
				<p class="error"></p>
				<button type="button" v-on:click="checkEmail">메일확인</button>
			</dd>
			<dt>이름</dt>
			<dd>
				<input type="text" class="input-name" placeholder="홍길동" v-model="name" v-on:blur="checkName" />
				<p class="error"></p>
			</dd> -->
			<dt>비밀번호</dt>
			<dd>
				<input type="password" class="input-password" placeholder="8자 이상 , 영문/숫자 조합" v-on:blur="checkPassword" />
				<p class="error"></p>
			</dd>
			<dt>비밀번호 확인</dt>
			<dd>
				<input type="password" class="input-check-password" placeholder="8자 이상 , 영문/숫자 조합" v-on:blur="recheckPassword" />
				<p class="error"></p>
			</dd>
			<!-- <dt>휴대폰 번호</dt>
			<dd>
				<input type="number" class="input-phone-number" placeholder="1012345678" />
				<p class="error"></p>
				<button type="button" class="button-send-sms" v-on:click="sendSms">인증번호받기</button>
			</dd>
			<dt class="certification-code-title"><p>인증코드</p></dt>
			<dd class="certification-code-content">
				<p>
					<input type="number" placeholder="" class="code" />
					<span class="certification-count"></span>
				</p>
				<div class="certification-navigator">
					<button type="button" class="button-resend-sms" disabled="disabled" v-on:click="sendSms">SMS 재전송</button>
					<button type="button" class="button-certification-complete fill" v-on:click="smsCertification">확인</button>
				</div>
			</dd>
			<dt class="blind">약관동의</dt>
			<dd>
				<p class="agree-policy">
					<input type="checkbox" id="agree" v-on:change="checkTerm" /><span></span>
					<label for="agree">카이코인 Presale <a href="https://res.cloudinary.com/dhjjs2uz3/image/upload/v1505285720/KaicoinICO/web/service.pdf" target="_blank">서비스 이용약관</a>, <a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1505893137/KaiCoinPresale/web/privacyStatement.pdf" target="_blank">개인정보 취급방침</a>에 동의합니다.</label>
				</p>
			</dd> -->
			<dt class="blind">가입완료</dt>
			<dd>
				<button type="button" class="button-complete fill" v-on:click="checkSubmitForm">Presale 회원가입</button>
			</dd>
		</dl>
	</div>
</template>

<script>
import axios from 'axios';
var SHA256 = require("crypto-js/sha256");
var countdown = require('jquery-countdown');

	export default {
		name: 'join',
		data: function() {
			return {
				mail: '',
				isMail: false,
				name: '',
				password: '',
				personalPhone: '',
				isTerm: false,
				requestId: '',
				isSmsCheck: false
			}
		},
		mounted: function() {
		},
		methods: {
			checkEmail: function() {
				// 이메일 검증
				var getEmailObject = $('.input-email');

				getEmailObject.removeClass('error');
				getEmailObject.siblings('p.error').hide();

				if (!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(this.mail)) {
					getEmailObject.siblings('p.error').show().text('이메일 주소를 정확히 입력해 주세요.');
					getEmailObject.addClass('error');

					return false;
				}

				axios({
					method: 'GET',
					url: 'http://api-presale.kaicoin.io/auth/validateEmail/'+this.mail+'/',
					headers: {
						'content-type': 'application/json; charset=utf-8'
					},
					withCredentials: true
				}).then(function (response) {
					$('.form-join .email-check').show();
					getEmailObject.prop('disabled', true);
					getEmailObject.siblings('button').prop('disabled', true);
					this.isMail = true;
				}.bind(this))
				.catch(function (error) {
					if (error.response.data.errorCode === 101) {
						getEmailObject.siblings('p.error').show().text('이미 존재하는 이메일 입니다.');
						getEmailObject.addClass('error');
					} else if (error.response.data.errorCode === 201) {
						getEmailObject.siblings('p.error').show().text('실제 존재하지 않는 이메일 입니다.');
						getEmailObject.addClass('error');
					}
				});

				return this.isMail;
			},
			checkName: function() {
				var getNameObject = $('.input-name');

				getNameObject.siblings('p.error').hide();
				getNameObject.removeClass('error');

				if (this.name.trim() === '') {
					getNameObject.siblings('p.error').show().text('정확히 입력해 주세요.');
					getNameObject.addClass('error');
					return false;
				}
				
				return true;
			},
			checkPassword: function() {
				var objPassword = $('.input-password');
				var getId = this.mail.split('@')[0];
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
				this.password = SHA256(objPassword.val()).toString();
				return true;
			},
			recheckPassword: function() {
				var objCheckPwd = $('.input-check-password');
				var objPassword = $('.input-password');
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
			checkTerm: function() {
				if (!$('#agree').prop('checked')) {
					alert('약관에 동의해 주세요.');
					return false;
				}
				return true;
			},
			sendSms: function() {
				var getObjectNumber = $('.input-phone-number');
				this.personalPhone = ('82' + getObjectNumber.val().replace(/(^0+)/, '')).toString();

				axios({
					method: 'GET',
					url: 'http://api-presale.kaicoin.io/auth/sendSMSCode/'+this.personalPhone+'/',
					headers: {
						'content-type': 'application/json; charset=utf-8'
					},
					withCredentials: true
				}).then(function (response) {
					this.requestId = response.data.requestId;

					$('.button-send-sms').hide();
					$('.form-join .certification-code-title, .form-join .certification-code-content').show();

					if ($('.certification-count').text() == '00:00' || $('.certification-count').text() == '') {
						var second = 1000;
						var minute = second * 60 * 5;
						var fiveMinute = new Date().getTime() + minute;

						$('.certification-code-content p .certification-count').countdown(fiveMinute).on('update.countdown', function(event) {
							$(this).text(event.strftime('%M:%S'));
						}).on('finish.countdown', function(event) {
							$(this).text(event.strftime('%M:%S'));
							$('.certification-code-content .button-resend-sms').prop('disabled', false);
						});
					}
				}.bind(this))
				.catch(function (error) {
				});
			},
			smsCertification: function() {
				if ($('.form-join .input-phone-number').val().trim() != '') {
					axios({
						method: 'POST',
						url: 'http://api-presale.kaicoin.io/auth/checkSMSCode',
						headers: {
							'content-type': 'application/json; charset=utf-8'
						},
						withCredentials: true,
						data: {
							mobile: this.personalPhone,
							requestId: this.requestId,
							smsCode: $('.certification-code-content .code').val()
						}
					}).then(function (response) {
						if (response.data.isCheck) {
							this.isSmsCheck = true;
							$('.form-join p.error').hide();
							$('.certification-code-content p .certification-count').countdown('remove').text('');
							$('.join .button-certification-complete, .certification-code-content .code').prop('disabled', true);
						} else if (response.data.isCheck === false && this.isSmsCheck === false) {
							alert('입력이 정확하지 않습니다.');
						}
					}.bind(this))
					.catch(function (error) {
					});
				} else {
					$('.form-join .input-phone-number').addClass('error').next('p.error').show().text('SMS 인증이 필요합니다.');
				}
				
				return this.isSmsCheck;
			},
			checkSubmitForm: function() {
				// this.checkEmail();
				// this.checkName();
				// this.checkPassword();
				// this.recheckPassword();
				// this.smsCertification();
				// this.checkTerm();

				if (this.checkEmail() && this.checkName() && this.checkPassword() && this.recheckPassword() && this.smsCertification() && this.checkTerm()) {
					axios({
						method: 'POST',
						url: 'http://api-presale.kaicoin.io/auth/signup',
						headers: {
							'content-type': 'application/json; charset=utf-8'
						},
						withCredentials: true,
						data: {
							email: this.mail,
							name: this.name,
							password: this.password,
							mobile:this.personalPhone
						}
					}).then(function (response) {
						if (response.data.idfAccount) {
							alert('회원가입이 완료되었습니다.');
							this.$router.push({name: 'main'});
						}
					}.bind(this))
					.catch(function (error) {
					});
				}
			}
		}
	}
</script>