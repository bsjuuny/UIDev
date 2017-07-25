<template>
	<table class="sortAbleTable">
		<thead>
		<tr>
			<th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }" ref="clickTh"> <!-- :class="{ active: sortKey == key }"  :class="{ active: sortKey == key }" -->
				{{ key | capitalize }}
				<span class="fa"></span>
				<!--  :class="sortOrders[key] > 0 ? 'asc' : 'desc'"
				:class="sortOrders[key] > 0 ? 'fa-arrow-up' : 'fa-arrow-down'" -->
				<!-- <span class="fa fa-arrow-up" aria-hidden="true"></i> -->
			</th>
		</tr>
		</thead>
		<tbody>
		<tr v-show="! filteredData.length">
			<td class="noResult">데이터가 없습니다.</td>
		</tr>
		<tr v-for="entry in filteredData">
			<td v-for="key in columns">
				{{ entry[key] }}
			</td>
		</tr>
		</tbody>
	</table>
</template>

<script>
	import $ from 'jQuery';

	export default {
		name: 'gridtemplate',
		props: {
			data: Array,
			columns: Array,
			filterKey: String
		},
		data: function () {
			var sortOrders = {}
			this.columns.forEach(function (key) {
				sortOrders[key] = 1;
			})
			return {
				sortKey: '',
				sortOrders: sortOrders
			}
		},
		computed: {
			filteredData: function () {
				var sortKey = this.sortKey;
				var filterKey = this.filterKey && this.filterKey.toLowerCase();

				var order = this.sortOrders[sortKey] || 1;
				var data = this.data;
				if (filterKey) {
					data = data.filter(function (row) {
						return Object.keys(row).some(function (key) {
							return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
						})
					})
				}

				if (sortKey) {
					data = data.slice().sort(function (a, b) {
						a = a[sortKey];
						b = b[sortKey];
						return (a === b ? 0 : a > b ? -1 : 1) * order;
					})
				}
				return data
			}
		},
		filters: {
			capitalize: function (str) {
				return str.charAt(0).toUpperCase() + str.slice(1); 
			}
		},
		methods: {
			sortBy: function (key, event) {
				// var clickEl = this.$el.querySelectorAll('th.active span')
				// console.log(this.$el.querySelectorAll('th.active span'));
				// var i = 0;

				// for(i=0; i<clickEl.length; i++) {
				// 	clickEl[i].classList.remove('fa-arrow-down')
				// 	clickEl[i].classList.add('fa-arrow-up')
				// }

				// console.log(event);

				this.sortKey = key;
				this.sortOrders[key] = this.sortOrders[key] * -1;

				// var clickThElements = this.$refs.clickTh;

				// console.log(clickThElements);

				var clickState = this.sortOrders[key]

				setTimeout(function() { 
					// $.each(clickThElements, function() {
						

						// var clickState = this.sortOrders[key];
						var clickedThIndex = $('th.active').index();
						var tableThElement = $('.sortAbleTable th');
						var childNode = tableThElement.eq(clickedThIndex).find('span');

						tableThElement.find('span').removeClass('fa-arrow-up fa-arrow-down');
						if (clickState > 0) {childNode.removeClass('fa-arrow-down').addClass('fa-arrow-up')}
						else {childNode.removeClass('fa-arrow-up').addClass('fa-arrow-down')}
					// })
				}, 100)

				// var clickState = this.sortOrders[key];
				// var clickActive = $('.sortAbleTable th');
				// clickActive.on('click', function() {
				// 	console.log($(this));
				// 	$(this).addClass('active');
				// 	clickActive.find('span').removeClass('fa-arrow-up fa-arrow-down');
				// 	var childNode = $(this).find('span');
				// 	if (clickState > 0) {childNode.removeClass('fa-arrow-down').addClass('fa-arrow-up')}
				// 	else {childNode.removeClass('fa-arrow-up').addClass('fa-arrow-down')}
				// });

				// console.log(this.$slots)
				// if (this.sortOrders[key] > 0) {clickEl.classList.add('fa-arrow-up')}
			}
			// , test: function() {
			// 	alert('1');
			// 	// $('.sortAbleTable .noResult').addClass('a');
			// }
		},
		mounted () {
			// $('.sortAbleTable .noResult').css('background', 'red');
			var titleElement = $('.sortAbleTable th');
			var resultElement = $('.sortAbleTable .noResult');
			resultElement.attr('colspan', titleElement.length);
		},
		updated() {
			// $('.sortAbleTable .noResult').css('background', 'yellow');
		},
		created() {
		},
		beforeCreate() {
			// console.log($('.sortAbleTable th').length);
			// $('.sortAbleTable .noResult').addClass('aaaa');
			// $('.sortAbleTable .noResult').css('background', 'red');
		}
  	}

  	$(function() {
	});
</script>