<template>
	<div></div>
</template>

<script>
	export default {
		created: function() {
			$('header, footer').hide();
		},
		mounted: function() {
			var settings = {
				"async": false,
				"crossDomain": true,
				"url": "http://api-ico.kaicoin.io/mypage/checkPasswordResetMail/"+this.$route.params.email+"/"+this.$route.params.number,
				"method": "GET",
				"headers": {},
				success : function(data, status, response) {
					// if (data.isCheck) {
						var value = this.$route.params.email;
						let expireDays = 1000 * 60 * 5;
						this.setCookie('resetEmail', value, expireDays);

						$.ajax(settings1);
					// } else {
					// 	this.$router.push({name: 'resetPasswordEmail'});
					// }
				}.bind(this),
				error : function(request, status, error) {
					// console.log(error);
					// location.href = "/resetPasswordEmail"
					// this.$router.push({name: 'resetPasswordEmail'});
					console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}.bind(this)
			}

			var getEmail = this.getCookie('resetEmail');
			var settings1 = {
				async: true,
				crossDomain: true,
				url: "http://api-ico.kaicoin.io/mypage/sendSMSCode/"+getEmail+"/",
				method: "GET",
				headers: {},
				beforeSend: function() {
					$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
				},
				success : function(data, status, response) {
					if (data.requestId) {
						let expireDays = 1000 * 60 * 60 * 2;
						this.setCookie('resetCertify', data.requestId, expireDays);
						this.$router.push({name: 'resetPasswordSms'});
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
		destroyed: function () {
			$('header, footer').show();
		}
	}
</script>