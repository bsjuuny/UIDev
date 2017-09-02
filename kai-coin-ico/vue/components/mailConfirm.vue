<template>
	<div></div>
</template>

<script>
	export default {
		created: function() {
			$('header, footer').hide();
		},
		mounted: function() {
			if (this.$route.params.number == 'E') {
				this.$router.push({name: 'smsCertification'});
			} else {
				var settings = {
					async: false,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/auth/confirmMail/"+this.$route.params.number+"/"+this.$route.params.email+"/",
					method: "GET",
					headers: {},
					success: function() {
						this.$router.push({name: 'smsCertification'});
					}.bind(this), error: function() {
						this.$router.push({name: 'sendMail'});
					}.bind(this)
				}

				$.ajax(settings);
			}
		},
		destroyed: function () {
			$('header, footer').show();
		}
	}
</script>