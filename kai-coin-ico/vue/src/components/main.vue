<template>
	<div class="main">
		<div class="bg">
			<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/w_auto,dpr_auto/v1502962750/KaicoinICO/web/bg_main.png" alt="" />
			<div class="overlay-opacity"></div>
			<div class="overlay-white"></div>
		</div>
		<section>
			<!-- <h1>{{ $t("main.hello") }}</h1> -->
			<div class="ico-main-title">
				<div class="kaicoin">
					<h2 v-html="$t('main.blockchain')"></h2>
					<p class="kaicoin-infomation" v-html="$t('main.kaicoin-infomation')"></p>
					<button type="button" class="button-apply" v-on:click="icoApply" v-html="$t('main.kaicoin-apply')"></button>
				</div>
				<div class="ico-main-date">
					<!-- <h3>2017.10.31 종료(GMT +9시간)</h3> -->
					<h3 v-html="$t('main.ico-date-title')"></h3>
					<div class="end-countdown">
						<p class="count-time"></p>
						<span class="date day">DAY</span>
						<span class="date hour">HOURS</span>
						<span class="date minute">MINUTES</span>
						<span class="date second">SECONDS</span>
					</div>
					<ul class="coin-infomation">
						<li><em>0</em>/ 200,000,000</li>
						<li><strong>1,500 KAI = 1 ETH</strong></li>
					</ul>
				</div>
			</div>
			<div id="about" class="coin-quote">
				<h3><span class="line"></span><span v-html="$t('main.coin-quote')"></span></h3>
				<p v-html="$t('main.coin-quote-text')"></p>
				<ul>
					<li>
						<span class="image-society"></span>
						<dl>
							<dt v-html="$t('main.society-title')"></dt>
							<dd v-html="$t('main.society-content')"></dd>
						</dl>
					</li>
					<li>
						<span class="image-culture"></span>
						<dl>
							<dt v-html="$t('main.culture-title')"></dt>
							<dd v-html="$t('main.culture-content')"></dd>
						</dl>
					</li>
					<li>
						<span class="image-economy"></span>
						<dl>
							<dt v-html="$t('main.economy-title')"></dt>
							<dd v-html="$t('main.economy-content')"></dd>
						</dl>
					</li>
				</ul>
			</div>
			<div class="contraction">
				<p v-html="$t('main.contraction')"></p>
			</div>
			<div id="ico" class="coin-introduce-detailinfomation">
				<div class="coin-introduce left">
					<h3><span class="line"></span><span v-html="$t('main.introduce-title')"></span></h3>
					<p v-html="$t('main.introduce-content')"></p>
				</div>
				<div class="coin-detailinfomation right">
					<h3><span class="line"></span> <span v-html="$t('main.detailinfomation-title')"></span></h3>
					<table>
						<thead>
							<tr>
								<th v-html="$t('main.detailinfomation-table-title1')"></th>
								<th v-html="$t('main.detailinfomation-table-title2')"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th v-html="$t('main.detailinfomation-name-title')"></th>
								<td v-html="$t('main.detailinfomation-name-content')"></td>
							</tr>
							<tr>
								<th v-html="$t('main.detailinfomation-unit-title')"></th>
								<td v-html="$t('main.detailinfomation-unit-content')"></td>
							</tr>
							<tr>
								<th v-html="$t('main.detailinfomation-data-title')"></th>
								<td v-html="$t('main.detailinfomation-data-content')"></td>
							</tr>
							<tr>
								<th v-html="$t('main.detailinfomation-price-title')"></th>
								<td v-html="$t('main.detailinfomation-price-content')"></td>
							</tr>
							<tr>
								<th v-html="$t('main.detailinfomation-amount-title')"></th>
								<td v-html="$t('main.detailinfomation-amount-content')"></td>
							</tr>
							<tr>
								<th v-html="$t('main.detailinfomation-flow-title')"></th>
								<td v-html="$t('main.detailinfomation-flow-content')"></td>
							</tr>
							<tr>
								<th v-html="$t('main.detailinfomation-money-title')"></th>
								<td v-html="$t('main.detailinfomation-money-content')"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="coin-equity-structure-bonus">
				<div class="coin-equity-structure">
					<h3><span class="line"></span><span v-html="$t('main.equity-structure')"></span></h3>
					<div class="left">
						<dl>
							<dt v-html="$t('main.total-flow-title')"></dt>
							<dd class="amount" v-html="$t('main.total-flow-content')"></dd>
							<dd class="imagearea" v-html="$t('main.total-flow-image')"></dd>
						</dl>
					</div>
					<div class="right">
						<dl>
							<dt v-html="$t('main.total-mining-title')"></dt>
							<dd class="amount" v-html="$t('main.total-mining-content')"></dd>
							<dd class="imagearea" v-html="$t('main.total-mining-image')"></dd>
						</dl>
					</div>
				</div>
				<div class="coin-bonus">
					<h3><span class="line"></span><span v-html="$t('main.bonus-title')"></span></h3>
					<div class="bonus-timetable">
						<p class="week one" v-html="$t('main.bonus-content1')"></p>
						<p class="week two" v-html="$t('main.bonus-content2')"></p>
						<p class="week three" v-html="$t('main.bonus-content3')"></p>
						<p class="week four" v-html="$t('main.bonus-content4')"></p>
						<p class="week five" v-html="$t('main.bonus-content5')"></p>
					</div>
				</div>
			</div>
			<div id="roadmap" class="coin-roadmap">
				<h3><span class="line"></span><span v-html="$t('main.roadmap-title')"></span></h3>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
				<div class="roadmap swiper-container">
					<div class="timeline"></div>
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="roadmap1">
								<h4 v-html="$t('main.roadmap-content1-date1')"></h4>
								<dl>
									<dt v-html="$t('main.roadmap-content1-title1')"></dt>
									<dd v-html="$t('main.roadmap-content1-content1')"></dd>
									<dt v-html="$t('main.roadmap-content1-title2')"></dt>
									<dd v-html="$t('main.roadmap-content1-content2')"></dd>
									<dt v-html="$t('main.roadmap-content1-title3')"></dt>
									<dd v-html="$t('main.roadmap-content1-content3')"></dd>
								</dl>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="roadmap1">
								<h4 v-html="$t('main.roadmap-content2-date1')"></h4>
								<dl>
									<dt v-html="$t('main.roadmap-content2-title1')"></dt>
									<dd v-html="$t('main.roadmap-content2-content1')"></dd>
									<dt v-html="$t('main.roadmap-content2-title2')"></dt>
									<dd v-html="$t('main.roadmap-content2-content2')"></dd>
									<dt v-html="$t('main.roadmap-content2-title3')"></dt>
									<dd v-html="$t('main.roadmap-content2-content3')"></dd>
								</dl>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="roadmap1">
								<h4 v-html="$t('main.roadmap-content3-date1')"></h4>
								<dl>
									<dt v-html="$t('main.roadmap-content3-title1')"></dt>
									<dd v-html="$t('main.roadmap-content3-content1')"></dd>
									<dt v-html="$t('main.roadmap-content3-title2')"></dt>
									<dd v-html="$t('main.roadmap-content3-content2')"></dd>
									<dt v-html="$t('main.roadmap-content3-title3')"></dt>
									<dd v-html="$t('main.roadmap-content3-content3')"></dd>
								</dl>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="roadmap1">
								<h4 v-html="$t('main.roadmap-content4-date1')"></h4>
								<dl>
									<dt v-html="$t('main.roadmap-content4-title1')"></dt>
									<dd v-html="$t('main.roadmap-content4-content1')"></dd>
									<dt v-html="$t('main.roadmap-content4-title2')"></dt>
									<dd v-html="$t('main.roadmap-content4-content2')"></dd>
									<dt v-html="$t('main.roadmap-content4-title3')"></dt>
									<dd v-html="$t('main.roadmap-content4-content3')"></dd>
								</dl>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="roadmap1">
								<h4 v-html="$t('main.roadmap-content5-date1')"></h4>
								<dl>
									<dt v-html="$t('main.roadmap-content5-title1')"></dt>
									<dd v-html="$t('main.roadmap-content5-content1')"></dd>
									<dt v-html="$t('main.roadmap-content5-title2')"></dt>
									<dd v-html="$t('main.roadmap-content5-content2')"></dd>
									<dt v-html="$t('main.roadmap-content5-title3')"></dt>
									<dd v-html="$t('main.roadmap-content5-content3')"></dd>
								</dl>
							</div>
						</div>
					</div>
					<!-- Add Arrows -->
				</div>
			</div>
			<!-- <div id="team" class="coin-team">
				<h3><span class="line"></span>팀구성</h3>
				<ul class="kaii">
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503034561/KaicoinICO/web/chairman.png" alt="" />
						<strong>박주용 한국투자자협회 Chairman</strong>
						<span>한국투자자협회(Kaii) 설립 카이코인 투자 및 전문 경영</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503034561/KaicoinICO/web/director.png" alt="" />
						<strong>김미남 Director</strong>
						<span>암호화폐별 블록체인 분석 COIN 컨설팅</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503034561/KaicoinICO/web/academydirector.png" alt="" />
						<strong>황선원 KAii Academy Director</strong>
						<span>블록체인과 암호화폐 연구 암호화폐 Business 및 강의</span>
					</li>
				</ul>
				<ul class="greenstage">
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035116/KaicoinICO/web/ceo.png" alt="" />
						<strong>김경민 GREENSTAGE CEO</strong>
						<span>블록체인 전문가 카이코인<br />프로젝트 연구</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035116/KaicoinICO/web/cto.png" alt="" />
						<strong>조성훈 GREENSTAGE CTO</strong>
						<span>카이코인 프로젝트 리더<br />블록체인기술 부분 리딩<br />전문분야: 데이터베이스,<br />분산서버 프로그래밍 설계,<br />게임서버 설계</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035116/KaicoinICO/web/pm.png" alt="" />
						<strong>최경은 Project Manager</strong>
						<span>사업 및 전략기획<br />카이코인 서비스 기획</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035116/KaicoinICO/web/designer.png" alt="" />
						<strong>박가현 Designer</strong>
						<span>웹, 모바일 UI/UX 디자이너<br />카이코인 BI 및 수석디자인 담당</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035116/KaicoinICO/web/frontend.png" alt="" />
						<strong>백승준 카이코인 frontend UX / UI 개발담당</strong>
						<span>전문분야 : JavaScript Vue.js 웹표준 크로스 브라우징</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035117/KaicoinICO/web/blockchain.png" alt="" />
						<strong>권순민 Blockchain Engineer</strong>
						<span>카이코인 리모델링 테스트 및 bitcoin 분석가</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035117/KaicoinICO/web/blockchain1.png" alt="" />
						<strong>한건국 Blockchain Engineer</strong>
						<span>카이코인 서버프로그래밍 담당 및 ethereum 분석가</span>
					</li>
					<li>
						<img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1503035116/KaicoinICO/web/hr.png" alt="" />
						<strong>박안나 Assistant</strong>
						<span>회계 및 매니저<br />KAICOIN 사업 관리</span>
					</li>
				</ul>
			</div> -->
			<div id="faq" class="coin-faq">
				<h3><span class="line"></span><span v-html="$t('main.faq-title')"></span></h3>
				<dl>
					<dt><a href="#" v-html="$t('main.faq-question1')"></a></dt>
					<dd v-html="$t('main.faq-answer1')"></dd>
					<dt><a href="#" v-html="$t('main.faq-question2')"></a></dt>
					<dd v-html="$t('main.faq-answer2')"></dd>
					<dt><a href="#" v-html="$t('main.faq-question3')"></a></dt>
					<dd>
						<ul>
							<li v-html="$t('main.faq-answer3-1')"></li>
							<li v-html="$t('main.faq-answer3-2')"></li>
							<li v-html="$t('main.faq-answer3-3')"></li>
							<li v-html="$t('main.faq-answer3-4')"></li>
							<li v-html="$t('main.faq-answer3-5')"></li>
							<li v-html="$t('main.faq-answer3-6')"></li>
						</ul>
					</dd>
					<dt><a href="#" v-html="$t('main.faq-question4')"></a></dt>
					<dd v-html="$t('main.faq-answer4')"></dd>
					<dt><a href="#" v-html="$t('main.faq-question5')"></a></dt>
					<dd v-html="$t('main.faq-answer5')"></dd>
					<dt><a href="#" v-html="$t('main.faq-question6')"></a></dt>
					<dd v-html="$t('main.faq-answer6')"></dd>
					<dt><a href="#" v-html="$t('main.faq-question7')"></a></dt>
					<dd v-html="$t('main.faq-answer7')"></dd>
				</dl>
			</div>
			<div id="whitepaper" class="coin-whitepaper">
				<h3><span class="line"></span><span>WHITEPAPER</span></h3>
				<ul>
					<li>
						<a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504232846/KaicoinICO/web/whitepaper_kr.pdf" target="_blank"><img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504250602/KaicoinICO/web/flag_kor.png" alt="한국어" /></a>
					</li>
					<li>
						<a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504251123/KaicoinICO/web/whitepaper_en.pdf" target="_blank"><img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504250602/KaicoinICO/web/flag_eng.png" alt="English" /></a>
					</li>
					<li>
						<a href="" target="_blank"><img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504250602/KaicoinICO/web/flag_jap.png" alt="日本語" /></a>
					</li>
					<li>
						<a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504251123/KaicoinICO/web/whitepaper_ch.pdf" target="_blank"><img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504250602/KaicoinICO/web/flag_chn.png" alt="中文" /></a>
					</li>
					<li>
						<a href="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504251123/KaicoinICO/web/whitepaper_es.pdf" target="_blank"><img src="http://res.cloudinary.com/dhjjs2uz3/image/upload/v1504250602/KaicoinICO/web/flag_esp.png" alt="Español" /></a>
					</li>
				</ul>
			</div>
			<div class="partners">
				<h3><span class="line"></span><span v-html="$t('main.partners-title')"></span></h3>
				<ul class="list-partners">
					<li v-html="$t('main.partners-content1')"></li>
					<li v-html="$t('main.partners-content2')"></li>
					<li v-html="$t('main.partners-content3')"></li>
					<li v-html="$t('main.partners-content4')"></li>
					<li v-html="$t('main.partners-content5')"></li>
					<li v-html="$t('main.partners-content6')"></li>
					<li v-html="$t('main.partners-content7')"></li>
					<li v-html="$t('main.partners-content8')"></li>
					<li v-html="$t('main.partners-content9')"></li>
					<li v-html="$t('main.partners-content10')"></li>
					<li v-html="$t('main.partners-content11')"></li>
					<li v-html="$t('main.partners-content12')"></li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'main',
		data: function() {
			return {
				getAboutTop: 0,
				getIcoTop: 0,
				getRoadmapTop: 0,
				// getTeamTop: 0,
				getFaqTop: 0,
				getWhitepaperTop: 0
			}
		},
		created: function () {
			window.addEventListener('scroll', this.headerStyle);
		},
		mounted: function () {
			this.getAboutTop = parseInt($('#about').position().top);
			this.getIcoTop = parseInt($('#ico').position().top);
			this.getRoadmapTop = parseInt($('#roadmap').position().top);
			// this.getTeamTop = parseInt($('#team').position().top);
			this.getFaqTop = parseInt($('#faq').position().top);
			this.getWhitepaperTop = parseInt($('#whitepaper').position().top);

			$('body').removeClass('background-gray').addClass('main');
			$('header').addClass('main state');

			this.dateCountdown();
			// this.headerStyle();
			this.faq();
			this.bonusTimeLine();

			var swiper = new Swiper('.swiper-container', {
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				paginationType: 'progress',
				slidesPerView: 1,
			});
		},
		destroyed: function () {
			window.removeEventListener('scroll', this.headerStyle);
		},
		methods: {
			icoApply: function() {
				if (this.getCookie('_t')) {
					var isLogin = this.getCookie('_t').split('%20')[5];
					if(isLogin == 'M') {
						this.$router.push('/dashboard');
					}
				} else {
					this.$router.push('/login');
				}
			},
			dateCountdown: function() {
				var icoDate = moment.tz("2017-10-31 12:00:00", "asia/seoul");
				var icoDate1 = moment.tz("2017-09-07 11:59:59", "asia/seoul");

				$('.end-countdown .count-time').countdown(icoDate1.toDate()).on('update.countdown', function(event) {
					$(this).text(event.strftime('%D : %H : %M : %S'));
				}).on('finish.countdown', function(event) {
					// $(this).text(event.strftime('00 : 00 : 00 : 00'));
					$(this).countdown(icoDate.toDate()).on('update.countdown', function(event) {
						$(this).text(event.strftime('%D : %H : %M : %S'));
					}).on('finish.countdown', function(event) {
						$(this).text(event.strftime('00 : 00 : 00 : 00'));
					});
				});
			},
			headerStyle: function() {
				var windowScrollTop = parseInt($(window).scrollTop()) + 50;
				if (windowScrollTop > 100) {
					$('header').removeClass('main state');
				} else {
					$('header').addClass('main state');
				}

				if (this.getAboutTop > windowScrollTop) {$('header .header-gnb li a').removeClass('active');}
				if (this.getAboutTop - 10 < windowScrollTop && windowScrollTop < this.getIcoTop) {
					$('header .header-gnb li a').removeClass('active');
					$('header .header-gnb li:nth-child(1) a').addClass('active');
				}
				if (this.getIcoTop - 10 < windowScrollTop && windowScrollTop < this.getRoadmapTop) {
					$('header .header-gnb li a').removeClass('active');
					$('header .header-gnb li:nth-child(2) a').addClass('active');
				}
				if (this.getRoadmapTop - 10 < windowScrollTop && windowScrollTop < this.getFaqTop) {
					$('header .header-gnb li a').removeClass('active');
					$('header .header-gnb li:nth-child(3) a').addClass('active');
				}
				// if (this.getFaqTop - 10 < windowScrollTop && windowScrollTop < this.getFaqTop) {
				// 	$('header .header-gnb li a').removeClass('active');
				// 	$('header .header-gnb li:nth-child(4) a').addClass('active');
				// }
				if (this.getFaqTop - 10 < windowScrollTop && windowScrollTop < this.getWhitepaperTop) {
					$('header .header-gnb li a').removeClass('active');
					$('header .header-gnb li:nth-child(4) a').addClass('active');
				}
				if (windowScrollTop > this.getWhitepaperTop) {
					$('header .header-gnb li a').removeClass('active');
					$('header .header-gnb li:nth-child(5) a').addClass('active');
				}
			},
			faq: function() {
				$('.coin-faq dt a').on('click', function(e) {
					e.preventDefault();
					if ($(this).hasClass('active')) {
						$(this).toggleClass('active').closest('dt').next('dd').toggle();
					} else {
						$('.coin-faq dt a').removeClass('active');
						$('.coin-faq dd').hide();
						$(this).toggleClass('active').closest('dt').next('dd').toggle();
					}
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
			}
		}
	}
</script>