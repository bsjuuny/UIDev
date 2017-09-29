<template>
	<section class="section-join">
		<h1 v-html="$t('join.join-title')"></h1>
		<ol class="join-step">
			<li><span>1</span> <em v-html="$t('join.join-step1')"></em></li>
			<li class="active"><span>2</span> <em v-html="$t('join.join-step2')"></em></li>
		</ol>
		<h2 class="blind" v-html="$t('join.join-step2')"></h2>
		<div class="selectbox-parent send-sms">
			<a href="#" class="design-selectbox" v-html="$t('join.join-country-canada')"></a>
			<!-- li a 선택시 selectbox 값도 함께 바뀜 -->
			<div class="div-selectbox">
				<ul>
					<li><a href="" v-html="$t('join.join-country-canada')"></a></li>
					<li><a href="" v-html="$t('join.join-country-russia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-egypt')"></a></li>
					<li><a href="" v-html="$t('join.join-country-republicofsouthafrica')"></a></li>
					<li><a href="" v-html="$t('join.join-country-netherlands')"></a></li>
					<li><a href="" v-html="$t('join.join-country-france')"></a></li>
					<li><a href="" v-html="$t('join.join-country-spain')"></a></li>
					<li><a href="" v-html="$t('join.join-country-italy')"></a></li>
					<li><a href="" v-html="$t('join.join-country-switzerland')"></a></li>
					<li><a href="" v-html="$t('join.join-country-unitedkingdom')"></a></li>
					<li><a href="" v-html="$t('join.join-country-poland')"></a></li>
					<li><a href="" v-html="$t('join.join-country-germany')"></a></li>
					<li><a href="" v-html="$t('join.join-country-peru')"></a></li>
					<li><a href="" v-html="$t('join.join-country-mexico')"></a></li>
					<li><a href="" v-html="$t('join.join-country-argentina')"></a></li>
					<li><a href="" v-html="$t('join.join-country-brazil')"></a></li>
					<li><a href="" v-html="$t('join.join-country-chile')"></a></li>
					<li><a href="" v-html="$t('join.join-country-columbia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-malaysia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-australia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-philippines')"></a></li>
					<li><a href="" v-html="$t('join.join-country-newzealand')"></a></li>
					<li><a href="" v-html="$t('join.join-country-singapore')"></a></li>
					<li><a href="" v-html="$t('join.join-country-thailand')"></a></li>
					<li><a href="" v-html="$t('join.join-country-japan')"></a></li>
					<li><a href="" v-html="$t('join.join-country-republicofkorea')"></a></li>
					<li><a href="" v-html="$t('join.join-country-vietnam')"></a></li>
					<li><a href="" v-html="$t('join.join-country-china')"></a></li>
					<li><a href="" v-html="$t('join.join-country-turkey')"></a></li>
					<li><a href="" v-html="$t('join.join-country-iran')"></a></li>
					<li><a href="" v-html="$t('join.join-country-morocco')"></a></li>
					<li><a href="" v-html="$t('join.join-country-algeria')"></a></li>
					<li><a href="" v-html="$t('join.join-country-tunisia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-senegal')"></a></li>
					<li><a href="" v-html="$t('join.join-country-nigeria')"></a></li>
					<li><a href="" v-html="$t('join.join-country-sudan')"></a></li>
					<li><a href="" v-html="$t('join.join-country-ethiopia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-kenya')"></a></li>
					<li><a href="" v-html="$t('join.join-country-greenland')"></a></li>
					<li><a href="" v-html="$t('join.join-country-czechrepublic')"></a></li>
					<li><a href="" v-html="$t('join.join-country-guatemala')"></a></li>
					<li><a href="" v-html="$t('join.join-country-panama')"></a></li>
					<li><a href="" v-html="$t('join.join-country-ecuador')"></a></li>
					<li><a href="" v-html="$t('join.join-country-papuanewguinea')"></a></li>
					<li><a href="" v-html="$t('join.join-country-solomonislands')"></a></li>
					<li><a href="" v-html="$t('join.join-country-vanuatu')"></a></li>
					<li><a href="" v-html="$t('join.join-country-fiji')"></a></li>
					<li><a href="" v-html="$t('join.join-country-palau')"></a></li>
					<li><a href="" v-html="$t('join.join-country-newcaledonia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-hongkong')"></a></li>
					<li><a href="" v-html="$t('join.join-country-taiwan')"></a></li>
					<li><a href="" v-html="$t('join.join-country-jordan')"></a></li>
					<li><a href="" v-html="$t('join.join-country-iraq')"></a></li>
					<li><a href="" v-html="$t('join.join-country-kuwait')"></a></li>
					<li><a href="" v-html="$t('join.join-country-saudiarabia')"></a></li>
					<li><a href="" v-html="$t('join.join-country-oman')"></a></li>
					<li><a href="" v-html="$t('join.join-country-unitedarabemirates')"></a></li>
					<li><a href="" v-html="$t('join.join-country-israel')"></a></li>
					<li><a href="" v-html="$t('join.join-country-catarrh')"></a></li>
				</ul>
			</div>
			<!-- 모바일에서 show -->
			<select name="" id="" class="select-national">
				<option value="001" selected="selected" v-html="$t('join.join-country-canada')"></option>
				<option value="007" v-html="$t('join.join-country-russia')"></option>
				<option value="020" v-html="$t('join.join-country-egypt')"></option>
				<option value="027" v-html="$t('join.join-country-republicofsouthafrica')"></option>
				<option value="031" v-html="$t('join.join-country-netherlands')"></option>
				<option value="033" v-html="$t('join.join-country-france')"></option>
				<option value="034" v-html="$t('join.join-country-spain')"></option>
				<option value="039" v-html="$t('join.join-country-italy')"></option>
				<option value="041" v-html="$t('join.join-country-switzerland')"></option>
				<option value="044" v-html="$t('join.join-country-unitedkingdom')"></option>
				<option value="048" v-html="$t('join.join-country-poland')"></option>
				<option value="049" v-html="$t('join.join-country-germany')"></option>
				<option value="051" v-html="$t('join.join-country-peru')"></option>
				<option value="052" v-html="$t('join.join-country-mexico')"></option>
				<option value="054" v-html="$t('join.join-country-argentina')"></option>
				<option value="055" v-html="$t('join.join-country-brazil')"></option>
				<option value="056" v-html="$t('join.join-country-chile')"></option>
				<option value="057" v-html="$t('join.join-country-columbia')"></option>
				<option value="060" v-html="$t('join.join-country-malaysia')"></option>
				<option value="061" v-html="$t('join.join-country-australia')"></option>
				<option value="063" v-html="$t('join.join-country-philippines')"></option>
				<option value="064" v-html="$t('join.join-country-newzealand')"></option>
				<option value="065" v-html="$t('join.join-country-singapore')"></option>
				<option value="066" v-html="$t('join.join-country-thailand')"></option>
				<option value="081" v-html="$t('join.join-country-japan')"></option>
				<option value="082" v-html="$t('join.join-country-republicofkorea')"></option>
				<option value="084" v-html="$t('join.join-country-vietnam')"></option>
				<option value="086" v-html="$t('join.join-country-china')"></option>
				<option value="090" v-html="$t('join.join-country-turkey')"></option>
				<option value="098" v-html="$t('join.join-country-iran')"></option>
				<option value="212" v-html="$t('join.join-country-morocco')"></option>
				<option value="213" v-html="$t('join.join-country-algeria')"></option>
				<option value="216" v-html="$t('join.join-country-tunisia')"></option>
				<option value="221" v-html="$t('join.join-country-senegal')"></option>
				<option value="234" v-html="$t('join.join-country-nigeria')"></option>
				<option value="249" v-html="$t('join.join-country-sudan')"></option>
				<option value="251" v-html="$t('join.join-country-ethiopia')"></option>
				<option value="254" v-html="$t('join.join-country-kenya')"></option>
				<option value="299" v-html="$t('join.join-country-greenland')"></option>
				<option value="420" v-html="$t('join.join-country-czechrepublic')"></option>
				<option value="502" v-html="$t('join.join-country-guatemala')"></option>
				<option value="507" v-html="$t('join.join-country-panama')"></option>
				<option value="593" v-html="$t('join.join-country-ecuador')"></option>
				<option value="675" v-html="$t('join.join-country-papuanewguinea')"></option>
				<option value="677" v-html="$t('join.join-country-solomonislands')"></option>
				<option value="678" v-html="$t('join.join-country-vanuatu')"></option>
				<option value="679" v-html="$t('join.join-country-fiji')"></option>
				<option value="680" v-html="$t('join.join-country-palau')"></option>
				<option value="687" v-html="$t('join.join-country-newcaledonia')"></option>
				<option value="852" v-html="$t('join.join-country-hongkong')"></option>
				<option value="886" v-html="$t('join.join-country-taiwan')"></option>
				<option value="962" v-html="$t('join.join-country-jordan')"></option>
				<option value="964" v-html="$t('join.join-country-iraq')"></option>
				<option value="965" v-html="$t('join.join-country-kuwait')"></option>
				<option value="966" v-html="$t('join.join-country-saudiarabia')"></option>
				<option value="968" v-html="$t('join.join-country-oman')"></option>
				<option value="971" v-html="$t('join.join-country-unitedarabemirates')"></option>
				<option value="972" v-html="$t('join.join-country-israel')"></option>
				<option value="974" v-html="$t('join.join-country-catarrh')"></option>
			</select>
			<!-- 인증요청시 disabled="disabled" 추가 -->
			<input type="number" class="input-phone-number" v-model="phoneNumber" v-on:blur="validatePhone" placeholder="1012345678" />
			<p class="save-phone-number" v-html="$t('join.join-save-phonenumber')"></p>
			<p class="error"></p>
			<div class="button-right">
				<!-- 인증요청시 disabled="disabled" 추가 -->
				<button type="button" class="button-send-sms" v-on:click="checkSms" v-html="$t('join.join-certify-button')"></button>
			</div>
		</div>
		<div class="resend-sms">
			<div class="certification">
				<h3><label for="certification-number" v-html="$t('join.join-certify-number')"></label></h3>
				<input type="number" id="certification-number" class="input-certification-number" v-model="smsCertifyNumber" placeholder="" />
				<span class="certification-count"></span>
			</div>
			<div class="certification-navigator">
				<button type="button" class="button-resend-sms" disabled="disabled" v-on:click="resendSms" v-html="$t('join.join-resend-certify-number')"></button>
				<button type="button" class="button-certification-complete" v-on:click="smsCertification" v-html="$t('join.join-certify-number-button')"></button>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'smsCertification',
		data: function() {
			return {
				phoneNumber: Number,
				selectedCountry: '082',
				smsCertifyNumber: Number
			}
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');
		},
		methods: {
			checkSms: function () {
				if (this.phoneNumber != Number) {
					$('.input-phone-number').siblings('p.error').hide();
					this.toCheckSms();
				} else {
					$('.input-phone-number').siblings('p.error').show().empty().text(this.$t('message.phonenumber-error'));
					return false;
				}
			},
			validatePhone: function() {
				this.selectedCountry = $('.select-national option:selected').val().toString();

				if (this.selectedCountry == '082') {
					this.phoneNumber = this.phoneNumber.replace(/(^0+)/, '');
				}
			},
			toCheckSms: function() {
				this.selectedCountry = $('.select-national option:selected').val().toString();

				var settings = {
					async: true,
					crossDomain: true,
					xhrFields: { withCredentials:true },
					url: "http://api-ico.kaicoin.io/auth/sendSMSCode/"+this.selectedCountry+this.phoneNumber+'/',
					method: "GET",
					headers: {
						"content-type": "application/json"
					},
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						if (data) {
							this.sendSmsCertify();
							var value = data.requestId;
							let expireDays = 1000 * 60 * 5;

							this.setCookie('__certify', value, expireDays);
						}
					}.bind(this),
					error: function(request, status, error) {
						$('.input-phone-number').siblings('p.error').show().empty().text(this.$t('message.phonenumber-error'));
						return false;
					}.bind(this),
					complete: function() {
						$.unblockUI();
					}
				}

				$.ajax(settings).done(function (data,status, xhr) {
					// console.log(xhr.getAllResponseHeaders());
					// console.log(data);
				});
			},
			sendSmsCertify: function() {
				$('.input-phone-number, .button-send-sms').prop('disabled', true);
				$('.resend-sms').show();
				this.screenHeight();
				// $('.send-sms .button-send-sms').prop('disabled', true);

				if ($('.certification-count').text() == '00:00' || $('.certification-count').text() == '') {
					var second = 1000;
					var minute = second * 60 * 15;
					var oneMinute = new Date().getTime() + minute;
					$('.certification-count').countdown(oneMinute).on('update.countdown', function(event) {
						$('.resend-sms .button-resend-sms').prop('disabled', true);
						$(this).text(event.strftime('%M:%S'));
						$(this).text(event.strftime('%M:%S')).closest('.resend-sms').find('.input-certification-number').prop('disabled', false).end().find('.button-certification-complete').prop('disabled', false);
					}).on('finish.countdown', function(event) {
						$(this).text(event.strftime('%M:%S')).closest('.resend-sms').find('.input-certification-number').prop('disabled', true).end().find('.button-certification-complete').prop('disabled', true).end().find('.button-resend-sms').prop('disabled', false);
						alert(this.$t('message.timeout-error'));
					});
				} else {
					$('.resend-sms .button-certification-complete').prop('disabled', true);
				}
			},
			resendSms: function() {
				// $('.resend-sms').hide();
				// $('.send-sms .input-phone-number').prop('disabled', false);
				// $('.send-sms .button-send-sms').prop('disabled', false)
				// $('.resend-sms .button-resend-sms').prop('disabled', false);
				// location.href = "/smsCertification";
				this.toCheckSms();
				$('.input-phone-number, .button-send-sms').prop('disabled', false);
				$('.resend-sms').hide();
			},
			smsCertification: function() {
				var obj = new Object();
				obj.mobile = this.selectedCountry + this.phoneNumber;
				obj.mobile = obj.mobile.toString();
				obj.requestId = this.getCookie('__certify');
				obj.smsCode = this.smsCertifyNumber;
				obj.email = this.getCookie('join') || this.getCookie('email');

				var json_data = JSON.stringify(obj);

				var settings = {
					async: false,
					crossDomain: true,
					url: "http://api-ico.kaicoin.io/auth/checkSMSCode",
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
						if (data) {
							if (data.isCheck) {
								alert(this.$t('message.join-complete'));
								this.setCookie('__certify', '', -1);
								this.pageMove();
							} else {
								alert(this.$t('message.input-error'));
							}
						}
					}.bind(this),
					error : function(request, status, error) {
						//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
					},
					complete: function(jqXHR, textStatus) {
						$.unblockUI();
					}
				}

				$.ajax(settings).done(function (data,status, xhr) {
					// console.log(xhr.getAllResponseHeaders());
					// console.log(data);
				});
			},
			pageMove: function() {
				this.$router.push('/login');
			}
		}
	}
</script>