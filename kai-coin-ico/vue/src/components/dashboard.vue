<template>
	<div class="dashboard">
		<h2 class="blind">kaicoin ICO Infomation</h2>
		<div class="time-infomation">
			<!-- <span class="end-infomation">2017.10.31 종료(GMT +9시간)</span> -->
			<span class="end-infomation" v-html="$t('main.ico-date-title')"></span>
			<div class="end-countdown">
				<p class="count-time"></p>
				<span class="date day">D</span>
				<span class="date hour">H</span>
				<span class="date minute">M</span>
				<span class="date second">S</span>
			</div>
			<p class="exchange-infomation" v-html="$t('dashboard.exchange-coin')"></p>
		</div>
		<div class="ico-infomation">
			<dl class="ico-data">
				<dt v-html="$t('dashboard.sales-rate-title')"></dt>
				<dd><em>0</em> <span class="total-sell">/ 200,000,000</span></dd>
				<dt v-html="$t('dashboard.sales-people-title')"></dt>
				<dd>
					<div class="ready">
						<span class="total-sell" v-html="$t('dashboard.sales-people-count')"></span>
					</div>
					<div class="person">
						<span class="ico-person">850</span> <span class="text-small" v-html="sales-people-unit"></span>
					</div>
				</dd>
				<dt v-html="$t('dashboard.sales-price-title')"></dt>
				<dd>
					<div class="ready">
						<span class="total-sell" v-html="$t('dashboard.sales-price-count')"></span>
					</div>
					<div class="price">
						<p><span class="ico-kai">12,345,678</span> <span class="text-small">KAI</span></p>
						<p><span class="ico-eth">5,678</span> <span class="text-small">ETH</span></p>
					</div>
				</dd>
			</dl>
		</div>
		<div class="ico-bonus">
			<h3 v-html="$t('main.bonus-title')"></h3>
			<div class="bonus-timetable">
				<p class="week one" v-html="$t('main.bonus-content1')"></p>
				<p class="week two" v-html="$t('main.bonus-content2')"></p>
				<p class="week three" v-html="$t('main.bonus-content3')"></p>
				<p class="week four" v-html="$t('main.bonus-content4')"></p>
				<p class="week five" v-html="$t('main.bonus-content5')"></p>
			</div>
		</div>
		<div class="ico-buy-address">
			<h3 v-html="$t('dashboard.buy-address-title')"></h3>
			<ul class="address-detail-infomation">
				<!-- <li class="address" v-html="$t('dashboard.buy-address-content')"></li> -->
				<li class="address" v-html="$t('dashboard.buy-address-ready')"></li>
				<li><button type="button" class="button-copy-url" data-clipboard-target=".address" v-html="$t('dashboard.buy-address-copy')"></button> <span></span></li>
				<li class="infomation" v-html="$t('dashboard.buy-address-infomation')"></li>
			</ul>
			<!-- <img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504006527/KaicoinICO/web/qrcode.png" width="96" height="97" class="qrcode" alt="Eth QrCode" /> -->
		</div>
		<div class="ico-investment-application-form">
			<h3 v-html="$t('dashboard.ico-participation-title')"></h3>
			<p class="investment-infomation" v-html="$t('dashboard.ico-participation-infomation')"></p>
			<div class="input-form" v-if="ethAddress">
				<input type="text" class="etherium-address" v-on:blur="checkAddress" disabled="disabled" /><button type="button" v-on:click="icoApply" disabled="disabled" v-html="$t('dashboard.ico-participation-button')"></button>
				<span class="error" v-html="$t('dashboard.ico-participation-error')"></span>
			</div>
			<p class="send-ethereum-infomation" v-html="$t('dashboard.ico-participation-infomation1')"></p>
		</div>
		<div class="ico-investment-application-form">
			<h3 v-html="$t('dashboard.ico-check-title')"></h3>
			<p class="investment-infomation" v-html="$t('dashboard.ico-check-infomation')"></p>
			<p class="ehterium-wallet"><span>https://etherscan.io/address/Your ETH Address</span></p>
			<!-- <div class="input-form">
				<input type="text" /><button type="button">확인</button>
			</div>
			<p class="check-ethereum-infomation">참여하신 주소 <em class="wallet">0xd2982ba909a717bf59851b7a82e86b342380f9c2</em> 로 <em><span class="eth">0.5</span> ETH 참여가 확인</em> 되었습니다.<br />
			자세한 내용은 ICO Presale 기간 종료 후 재안내 드리겠습니다.<br />
			참여해주셔서 감사드립니다.</p>
			<p class="check-ethereum-infomation tablet">참여하신 주소<br />
			<em class="wallet">0xd2982ba909a717bf59851b7a82e86b342380f9c2</em> 로<br />
			<em><span class="eth">0.5</span> ETH 참여가 확인</em> 되었습니다.<br />
			자세한 내용은 ICO Presale 기간 종료 후 재안내 드리겠습니다.<br />
			참여해주셔서 감사드립니다.</p> -->
		</div>
	</div>
</template>

<script>
var Web3 = require('web3');

	export default {
		name: '',
		data () {
			return {
				ethAddress: String
			}
		},
		created: function () {
		},
		mounted: function () {
			$('body').addClass('background-gray').removeClass('main');
			$('header').removeClass('main');

			var clipboard = new Clipboard('.button-copy-url');
			clipboard.on('success', function(e) {
				e.clearSelection();
				$('.button-copy-url ~ span').addClass('active');
			});

			this.dateCountdown();
			this.bonusTimeLine();
		},
		methods: {
			dateCountdown: function() {
				var icoDate = moment.tz("2017-10-31 12:00", "asia/seoul");
				var icoDate1 = moment.tz("2017-09-07 11:59:59", "asia/seoul");

				$('.end-countdown .count-time').countdown(icoDate1.toDate()).on('update.countdown', function(event) {
					$(this).text(event.strftime('%D : %H : %M : %S'));
				}).on('finish.countdown', function(event) {
					$(this).countdown(icoDate.toDate()).on('update.countdown', function(event) {
						$(this).text(event.strftime('%D : %H : %M : %S'));
					}).on('finish.countdown', function(event) {
						$(this).text(event.strftime('00 : 00 : 00 : 00'));
					});
				});
			},
			bonusTimeLine: function() {
				var startdate1 = moment.tz("2017-09-07 12:00:00", "asia/seoul"),
					enddate1 = moment.tz("2017-09-14 11:59:59", "asia/seoul"),

					startdate2 = moment.tz("2017-09-14 12:00:00", "asia/seoul"),
					enddate2 = moment.tz("2017-09-21 11:59:59", "asia/seoul"),

					startdate3 = moment.tz("2017-09-21 12:00:00", "asia/seoul"),
					enddate3 = moment.tz("2017-09-28 11:59:59", "asia/seoul"),

					startdate4 = moment.tz("2017-09-28 12:00:00", "asia/seoul"),
					enddate4 = moment.tz("2017-10-05 11:59:59", "asia/seoul"),

					startdate5 = moment.tz("2017-10-05 12:00:00", "asia/seoul");

				$('.bonus-timetable .week').removeClass('active');
				if (moment().isBetween(startdate1, enddate1)) {
					$('.bonus-timetable').find('.one').addClass('active');
				} else if (moment().isBetween(startdate2, enddate2)) {
					$('.bonus-timetable').find('.two').addClass('active');
				} else if (moment().isBetween(startdate3, enddate3)) {
					$('.bonus-timetable').find('.three').addClass('active');
				} else if (moment().isBetween(startdate4, enddate4)) {
					$('.bonus-timetable').find('.four').addClass('active');
				} else if (moment().isAfter(startdate5)) {
					$('.bonus-timetable').find('.five').addClass('active');
				};
			},
			checkAddress: function() {
				var web3 = new Web3(new Web3.providers.HttpProvider("http://13.124.216.49:8545"));
				var getAddress = $('.etherium-address').val();

				//저기 파라미터에 주소값을 넣어줘야 합니다! 
				var isAddress = web3.isAddress(getAddress);
				if (isAddress) {
					$('.etherium-address ~ span.error').css('visibility', 'hidden');
					$('.etherium-address ~ button').prop('disabled', false);
					this.ethAddress = getAddress;
				}
				else {
					$('.etherium-address ~ span.error').css('visibility', 'visible').text('유효하지 않은 주소 입니다.');
					$('.etherium-address ~ button').prop('disabled', true);
				}
			},
			icoApply: function() {
				var getId = this.getCookie('_t').split('%20')[1];
				var getAuth = this.getCookie('__t').replace('%3D','=');
				var getEmail = this.getCookie('email');

				var obj = new Object();
				obj.idfAccount = getId;
				obj.ethereumAddr = this.ethAddress;

				var json_data = JSON.stringify(obj);

				var settings = {
					async: true,
					crossDomain: true,
					url: "http://api.kaicoin.co.kr/mypage/registICO",
					xhrFields: { withCredentials:true },
					method: "POST",
					headers: {
						"content-type": "application/json; charset=utf-8",
						"X-Auth-Token": getEmail + "=" + getAuth
					},
					processData: true,
					data: json_data,
					beforeSend: function() {
						$.blockUI({message: $('#loader'), centerY: true, css: {left:'50%', width:'200px', border:0, margin:'0 0 0 -100px'}});
					},
					success : function(data, status, response) {
						if (data.ethereumAddr) {
							$('.etherium-address, .etherium-address ~ button').prop('disabled', true);
							alert(this.$t('message.participation-complete'));
							$('.ico-investment-application-form .ehterium-wallet').html('<a href=https://etherscan.io/address/"'+this.ethAddress+'" target="_blank">https://etherscan.io/address/'+this.ethAddress+'</a>')
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
			}
		}
	}
</script>