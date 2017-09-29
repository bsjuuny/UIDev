<template>
	<div class="main">
		<div class="title">
			<div class="main-header">
				<div class="left">
					<h2>블록체인과 문화의 결합</h2>
					<p><em>kaicoin Presale</em>에 참여하신<br />
					여러분, 환영합니다!<br />
					다양한 체험을 지금 시작하세요.</p>
				</div>
				<div class="right" v-if="isLogin === false">
					<form action="" v-on:submit.prevent.stop="loginForm">
						<fieldset>
							<legend>로그인</legend>
							<!--label for="id" class="login-title">주민번호 여섯자리와<br />
							010을 제외한 전화번호 뒷자리를<br />
							입력해주세요.</label-->
							<input type="text" id="id" placeholder="yourmail@address.com" v-model="id" />
							<input type="password" placeholder="80010112345678" v-model="password" />
							<button type="submit" class="button-login">로그인</button>
						</fieldset>
					</form>
				</div>
				<div class="right" v-else-if="isLogin === true">
					<p class="welcome-message">
						<span>{{name}}</span>님!<br />
						환영합니다.
					</p>
					<a class="button-change-password" v-bind:href="'/join'">비밀번호 변경</a>
					<button type="button" class="button-logout" v-on:click="logout">로그아웃</button>
				</div>
			</div>
		</div>
		<section class="wallet" v-if="isLogin === true">
			<article>
				<h3>카이코인 잔액</h3>
				<p class="balance"><span class="number">{{kaiBalance}}</span> <small>KAI</small></p>
				<h4>※ 카이코인 월렛주소&nbsp;&nbsp;&nbsp;&nbsp;{{kaiWallet}}</h4>
				<ul class="wallet-history" v-if="kaiHistory.length !== 0">
					<li v-for="post in kaiHistory">
						<span class="date">{{post.time}}</span>
						<span class="contents">한국투자자협회 입금</span>
						<span class="price">
							<span class="deposit" v-if="post.amount > 0">+</span>
							<span class="withdraw" v-else>-</span>
							<span>{{post.stringAmount}}</span> KAI
						</span>
					</li>
				</ul>
				<ul class="wallet-history" v-else>
					<li class="history-0">
						입금된 내역이 없습니다.
					</li>
				</ul>
			</article>
		</section>
		<section class="future">
			<article>
				<h3>앞으로의<br />카이코인</h3>
				<p>한국적인 컨텐츠와 문화를 결합한 블록체인 시스템을 기반으로, 언제 어디에서나 손쉽게 통용되는 국제 표준형 암호화폐로 활용될 것입니다.</p>
			</article>
		</section>
		<section class="faq">
			<article>
				<h3>FAQ</h3>
				<dl>
					<dt>Q. 이메일주소, 비밀번호를 잊었습니다.</dt>
					<dd>한국투자자협회 02)512-9037 또는 master@kaicoin.co.kr 으로 문의해주세요.</dd>
					<dt>Q. 내 카이코인 잔액은 어떻게 확인하나요?</dt>
					<dd>카이코인 Presale 회원가입이 필요합니다. 가입하시고 로그인을 하시면 지급된 카이코인 지급내역과 잔액을 확인하실 수 있습니다.</dd>
					<dt>Q. 카이코인으로 무엇을 할 수 있나요?</dt>
					<dd>현재 게임 아이템 구매, 온라인 쇼핑몰, 병원 등의 가맹점을 확보하였고 문화 컨텐츠와 연계된 전자상거래를 중심으로 온/오프라인 가맹점을 확대해 나갈 예정입니다. 확보된 가맹점에서 카이코인을 사용하실 수 있습니다.</dd>
					<dt>Q. 다른 문의를 하고싶어요.</dt>
					<dd>한국투자자협회 02)512-9037 또는 master@kaicoin.co.kr 으로 문의주시면 답변드립니다.</dd>
				</dl>
			</article>
		</section>
	</div>
</template>

<script>
import axios from 'axios';
var SHA256 = require("crypto-js/sha256");

	export default {
		name: 'main',
		data: function() {
			return {
				id: '',
				password: '',
				email: '',
				name: '',
				authToken: '',
				kaiWallet: '',
				kaiBalance: 0,
				kaiHistory: {},
				isLogin: false
			}
		},
		mounted: function() {
			if (this.getCookie('s_t')) {
				let idfAccount = this.getCookie('s_t').split('%20')[3];
				let email = this.getCookie('s_t').split('%20')[2];
				let name = this.getCookie('s_t').split('%20')[1];
				let wallet = this.getCookie('s_t').split('%20')[4];
				let auth = this.getCookie('s_t').split('%20')[0];

				this.isLogin = true;
				this.email = email;
				// this.name = email.split('@')[0];
				this.name = decodeURIComponent(unescape(name));
				this.authToken = auth.replace('%3D','=');
				this.kaiWallet = wallet;

				this.viewBalance();
				this.viewHistory();
			}
		},
		methods: {
			loginForm: function() {
				axios({
					method: 'POST',
					url: 'http://api-presale.kaicoin.io/auth/signin',
					headers: {
						'content-type': 'application/json; charset=utf-8'
					},
					withCredentials: true,
					data: {
						email: this.id,
						password: SHA256(this.password).toString()
					}
				}).then(function (response) {
					if (response.data.authToken) {
						var idfAccount = response.data.authToken + ' ' + response.data.name + ' ' + response.data.email + ' ' + response.data.idfAccount + ' ' + response.data.kaicoinAddr + ' ' + SHA256(this.password).toString();

						let expireDays = 1000 * 60 * 60 * 7;
						this.setCookie('s_t', idfAccount, expireDays);

						this.isLogin = true;
						this.email = response.data.email;
						this.name = response.data.name;
						this.authToken = response.data.authToken.replace('%3D','=');
						this.kaiWallet = response.data.kaicoinAddr;

						this.viewBalance();
						this.viewHistory();
					}
				}.bind(this))
				.catch(function (error) {
					alert('로그인 정보가 올바르지 않습니다.');
				});
			},
			logout: function() {
				let expireDays = 1000 * 60 * 60 * 24 * -1;
				this.setCookie('s_t', '', expireDays);
				window.location.href = '/';
			},
			viewBalance: function() {
				axios({
					method: 'GET',
					url: 'http://api-presale.kaicoin.io/mypage/getAddressBalances/'+this.kaiWallet+'/',
					headers: {
						'content-type': 'application/json; charset=utf-8',
						'X-Auth-Token': this.email + "=" + this.authToken
					},
					withCredentials: true
				}).then(function (response) {
					var parts = response.data.toString().split(".");
					this.kaiBalance = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
				}.bind(this))
				.catch(function (error) {
					
				});
			},
			viewHistory: function() {
				axios({
					method: 'POST',
					url: 'http://api-presale.kaicoin.io/mypage/getListAddressTx',
					headers: {
						'content-type': 'application/json; charset=utf-8',
						'X-Auth-Token': this.email + "=" + this.authToken
					},
					withCredentials: true,
					data: {
						address: this.kaiWallet,
						// address: '116Kx47NsWHpvAMecrSB3KL5exzxQSMHMNHMNU',
						cnt: 10
					}
				}).then(function (response) {
					this.kaiHistory = response.data;
					this.kaiAccountComma();
				}.bind(this))
				.catch(function (error) {
					
				})
			},
			kaiAccountComma: function() {
				for (var i = 0; i < this.kaiHistory.length; i++) {
					var number = 0;

					if (this.kaiHistory[i].amount > 0) {
						number = this.kaiHistory[i].amount;
					} else {
						number = this.kaiHistory[i].amount * -1;
					}

					var parts = number.toString().split(".");
					this.kaiHistory[i].stringAmount = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
				}
			}
		}
	}
</script>