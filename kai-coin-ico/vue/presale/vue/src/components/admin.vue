<template>
	<div class="admin">
		<dl class="form">
			<dt>이메일</dt>
			<dd>
				<input type="text" class="input-email" placeholder="yourmail@address.com" v-on:blur="inputEmail" />
				<p class="error"></p>
			</dd>
			<dt>이름</dt>
			<dd>
				<input type="text" class="input-name" placeholder="홍길동" v-on:blur="inputName" />
				<p class="error"></p>
			</dd>
			<dt>생년월일</dt>
			<dd>
				<input type="number" class="input-snn-number" placeholder="170922" v-on:blur="inputSnn" />
				<p class="error"></p>
			</dd>
			<dt>휴대폰번호</dt>
			<dd>
				<input type="number" class="input-phone-number" placeholder="01012345678" v-on:blur="inputPhone" />
				<p class="error"></p>
			</dd>
			<dt>지급액</dt>
			<dd>
				<input type="number" class="input-kaicoin-number" placeholder="" v-on:blur="inputKai" />
				<p class="error"></p>
			</dd>
			<dt><span class="blind">입력완료</span></dt>
			<dd>
				<button type="button" class="button-complete" v-on:click="formJoin">입력완료</button>
			</dd>
		</dl>

		<div class="kaicoin-infomation">
			<v-client-table :data="tableData" :columns="columns" :options="options">
				<template slot="state" scope="props">
					<span v-if="props.row.state === 0">N</span><span v-else>Y</span>
				</template>
				<template slot="etc" scope="props">
					<button type="button" v-on:click="contentsModify(props)">수정</button>&nbsp;&nbsp;<button type="button" v-on:click="erase(props)">삭제</button>
				</template>
			</v-client-table>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import axios from 'axios';
var SHA256 = require("crypto-js/sha256");

Vue.use(ClientTable, {}, false);

	export default {
		data: function() {
			return {
				pagging: 10,
				columns: ['No', 'email', 'name', 'ssn', 'mobile', 'amount', 'state', 'etc'],
				tableData: [],
				options: {
					// see the options API
					pagination: {chunk:this.pagging},
					orderBy: {ascending:false, column:'No'}
				}
			}
		},
		created: function() {
			this.addJsonNumber();
			axios({
				method: 'GET',
				url: 'http://api-presale.kaicoin.io/admin/list',
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			}).then(function (response) {
				this.tableData = response.data;
				this.addJsonNumber();
			}.bind(this))
			.catch(function (error) {
			});
		},
		mounted: function() {
			
		},
		methods: {
			inputEmail: function() {
				if ($('.input-email').val().trim() == '') {
					$('.input-email ~ p.error').show().empty().text('이메일을 입력해주세요.');
					return false;
				}
				else {
					$('.input-email ~ p.error').hide();
					return true;
				}
			},
			inputName: function() {
				if ($('.input-name').val().trim() == '') {
					$('.input-name ~ p.error').show().empty().text('이름을 입력해주세요.');
					return false;
				}
				else {
					$('.input-name ~ p.error').hide();
					return true;
				}
			},
			inputSnn: function() {
				if ($('.input-snn-number').val().trim() == '') {
					$('.input-snn-number ~ p.error').show().empty().text('생년월일을 입력해주세요.');
					return false;
				}
				else {
					$('.input-snn-number ~ p.error').hide();
					return true;
				}
			},
			inputPhone: function() {
				if ($('.input-phone-number').val().trim() == '') {
					$('.input-phone-number ~ p.error').show().empty().text('휴대폰번호를 입력해주세요.');
					return false;
				}
				else {
					$('.input-phone-number ~ p.error').hide();
					return true;
				}
			},
			inputKai: function() {
				if ($('.input-kaicoin-number').val().trim() == '') {
					$('.input-kaicoin-number ~ p.error').show().empty().text('지급액을 입력해주세요.');
					return false;
				}
				else {
					$('.input-kaicoin-number ~ p.error').hide();
					return true;
				}
			},
			formJoin: function() {
				var getPhoneNumber = $('.input-phone-number').val();
				var getSnnNumber = $('.input-snn-number').val();
				var changePhoneNumber = getPhoneNumber.replace(/(^010+)/, '').replace(/(^10+)/, '');
				var setPassword = getSnnNumber + changePhoneNumber;

				if (this.inputEmail() && this.inputName() && this.inputSnn() && this.inputPhone() && this.inputKai()) {
					axios({
						method: 'POST',
						url: 'http://api-presale.kaicoin.io/admin/insert',
						headers: {
							'content-type': 'application/json; charset=utf-8'
						},
						withCredentials: true,
						data: {
							name: $('.input-name').val().trim(),
							email: $('.input-email').val().trim(),
							password: SHA256(setPassword).toString(),
							amount: $('.input-kaicoin-number').val().trim(),
							ssn: $('.input-snn-number').val().trim(),
							mobile: $('.input-phone-number').val().trim()
						}
					}).then(function (response) {
						location.href = "/admin";
					}.bind(this))
					.catch(function (error) {
					});
				}
			},
			addJsonNumber: function() {
				for (var i = 0; i < this.tableData.length; i++) {
					this.tableData[i].No = this.tableData.length - i;
				}
			},
			contentsModify: function(object) {
				$('.input-email').val(object.row.email);
				$('.input-name').val(object.row.name);
				$('.input-snn-number').val(object.row.ssn);
				$('.input-phone-number').val(object.row.mobile);
				$('.input-kaicoin-number').val(object.row.amount);
			},
			erase: function(object) {
				axios({
					method: 'GET',
					url: 'http://api-presale.kaicoin.io/admin/delete/?email='+object.row.email,
					headers: {
						'content-type': 'application/json; charset=utf-8'
					}
				}).then(function (response) {
					location.href = "/admin";
				}.bind(this))
				.catch(function (error) {
				});
			}
		}
	}
</script>