<template>
	<div class="echarts">
		<IEcharts :option="candlestick"></IEcharts> <!-- :loading="loading" @ready="renderItem" @click="onClick" -->
		<!-- <div id="graph"></div> -->
		<!-- <button @click="doRandom">Random</button> -->
		<p>123asdf;laksf;lkasdfqwr</p>
	</div>
</template>

<script type="text/babel-polyfill">
	const cfg = require('../assets/etc/stock-DJI1.json');

	import IEcharts from 'vue-echarts-v3/src/lite.vue';
	import 'echarts/lib/chart/line'; 
	import 'echarts/lib/chart/bar';
	// import 'echarts/lib/chart/pie'; 
	// import 'echarts/lib/chart/scatter'; 
	// import 'echarts/lib/chart/radar'; 
	 
	// import 'echarts/lib/chart/map'; 
	// import 'echarts/lib/chart/treemap'; 
	import 'echarts/lib/chart/graph'; 
	// import 'echarts/lib/chart/gauge'; 
	// import 'echarts/lib/chart/funnel'; 
	// import 'echarts/lib/chart/parallel'; 
	// import 'echarts/lib/chart/sankey'; 
	// import 'echarts/lib/chart/boxplot'; 
	import 'echarts/lib/chart/candlestick'; 
	// import 'echarts/lib/chart/effectScatter'; 
	// import 'echarts/lib/chart/lines'; 
	// import 'echarts/lib/chart/heatmap'; 
	 
	// import 'echarts/lib/component/graphic'; 
	import 'echarts/lib/component/grid'; 
	import 'echarts/lib/component/legend'; 
	import 'echarts/lib/component/tooltip'; 
	// import 'echarts/lib/component/polar'; 
	// import 'echarts/lib/component/geo'; 
	// import 'echarts/lib/component/parallel'; 
	import 'echarts/lib/component/singleAxis'; 
	import 'echarts/lib/component/brush'; 
	 
	import 'echarts/lib/component/title';
	 
	import 'echarts/lib/component/dataZoom'; 
	import 'echarts/lib/component/visualMap'; 
	 
	// import 'echarts/lib/component/markPoint'; 
	// import 'echarts/lib/component/markLine'; 
	// import 'echarts/lib/component/markArea'; 
	 
	import 'echarts/lib/component/timeline'; 
	import 'echarts/lib/component/toolbox'; 
	 
	// import 'zrender/lib/vml/vml'; 

	export default {
		name: 'view',
		components: {
			IEcharts
		},
		props: {
		},
		data() {
			// let data = [];
	let data = [];
	const categoryData = [];
	const values = [];
	const volumes = [];

	for (var i = 0; i < cfg.length; i++) {
		categoryData.push(cfg[i].splice(0, 1)[0]);
		values.push(cfg[i]);
		volumes.push([i, cfg[i][4], cfg[i][0] > cfg[i][1] ? 1 : -1]);
	}

	data.categoryData = categoryData;
	data.values = values;
	data.volumes = volumes;

			return {
				// loading: true,
				// bar: {
				// 	title: {
				// 		text: 'ECharts Hello'
				// 	},
				// 	tooltip: {},
				// 	xAxis: {
				// 		data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
				// 	},
				// 	yAxis: {},
				// 	series: [{
				// 		name: 'Sales',
				// 		type: 'bar',
				// 		data: [5, 20, 36, 10, 10, 20]
				// 	}]
				// }

				candlestick: {
	backgroundColor: '#eee',
	animation: true,

	legend: {
		top: 10,
		left: 'center',
		data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross'
		},
		backgroundColor: 'rgba(245, 245, 245, 0.8)',
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		textStyle: {
			color: '#000'
		},
		position: function(pos, params, el, elRect, size) {
			var obj = {
				top: 10
			};
			obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
			return obj;
		},
		extraCssText: 'width: 270px'
	},
	axisPointer: {
		link: {
			xAxisIndex: 'all'
		},
		label: {
			backgroundColor: '#777'
		}
	},
	toolbox: {
		feature: {
			dataZoom: {
				yAxisIndex: false
			},
			brush: {
				type: ['lineX', 'clear']
			}
		}
	},
	brush: {
		xAxisIndex: 'all',
		brushLink: 'all',
		outOfBrush: {
			colorAlpha: 0.1
		}
	},
	visualMap: {
		seriesIndex: 5,
		dimension: 2,
		pieces: [{
			value: 1,
			color: '#2f4554'
		}, {
			value: -1,
			color: '#c23531'
		}]
	},
	grid: [{
		left: '10%',
		right: '8%',
		height: '50%'
	}, {
		left: '10%',
		right: '8%',
		top: '63%',
		height: '16%'
	}],
	xAxis: [{
		type: 'category',
		data: data.categoryData,
		scale: true,
		boundaryGap: false,
		axisLine: {
			onZero: false
		},
		splitLine: {
			show: false
		},
		splitNumber: 20,
		min: 'dataMin',
		max: 'dataMax',
		axisPointer: {
			z: 100
		}
	}, {
		type: 'category',
		gridIndex: 1,
		data: data.categoryData,
		scale: true,
		boundaryGap: false,
		axisLine: {
			onZero: false
		},
		axisTick: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		splitNumber: 20,
		min: 'dataMin',
		max: 'dataMax'
		// ,axisPointer: {
		// 	label: {
		// 		formatter: function(params) {
		// 			var seriesValue = (params.seriesData[0] || {}).value;
		// 			return params.value + (seriesValue != null ? '\n' + IEcharts.format.addCommas(seriesValue) : '');
		// 		}
		// 	}
		// }
	}],
	yAxis: [{
		scale: true,
		splitArea: {
			show: true
		}
	}, {
		scale: true,
		gridIndex: 1,
		splitNumber: 2,
		axisLabel: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		splitLine: {
			show: false
		}
	}],
	dataZoom: [{
		type: 'inside',
		xAxisIndex: [0, 1],
		start: 99,
		end: 100
	}, {
		show: true,
		xAxisIndex: [0, 1],
		type: 'slider',
		top: '85%',
		start: 99,
		end: 100
	}],
	series: [{
		name: 'Dow-Jones index',
		type: 'candlestick',
		data: data.values,
		itemStyle: {
			normal: {
				borderColor: null,
				borderColor0: null
			}
		},
		tooltip: {
			formatter: function(param) {
				param = param[0];
				return ['Date: ' + param.name + '<hr size="1" style="margin: 3px 0">', 'Open: ' + param.data[0] + '<br/>', 'Close: ' + param.data[1] + '<br/>', 'Lowest: ' + param.data[2] + '<br/>', 'Highest: ' + param.data[3] + '<br/>'].join('');
			}
		}
	}, {
		name: 'MA5',
		type: 'line',
		data: this.calculateMA(5, data),
		smooth: true,
		lineStyle: {
			normal: {
				opacity: 0.5
			}
		}
	}, {
		name: 'MA10',
		type: 'line',
		data: this.calculateMA(10, data),
		smooth: true,
		lineStyle: {
			normal: {
				opacity: 0.5
			}
		}
	}, {
		name: 'MA20',
		type: 'line',
		data: this.calculateMA(20, data),
		smooth: true,
		lineStyle: {
			normal: {
				opacity: 0.5
			}
		}
	}, {
		name: 'MA30',
		type: 'line',
		data: this.calculateMA(30, data),
		smooth: true,
		lineStyle: {
			normal: {
				opacity: 0.5
			}
		}
	}, {
		name: 'Volume',
		type: 'bar',
		xAxisIndex: 1,
		yAxisIndex: 1,
		data: data.volumes
	}]

				}
			}
		},
		created() {

		},
		beforeMount() {
		},
		mounted() {

		},
		methods: {
			// doRandom() {
			// 	// const that = this;
			// 	let data = [];
			// 	// console.log(data);
			// 	for (let i = 0, min = 5, max = 999; i < 6; i++) {
			// 		data.push(Math.floor(Math.random() * (max + 1 - min) + min));
			// 	}
			// 	this.bar.series[0].data = data;
			// 	// this.loading = !this.loading;
			// },
			// onReady(instance) {
			// 	// loading: false;
			// 	console.log(instance);
			// },
			// onClick(event, instance, echarts) {
			// 	console.log(arguments);
			// }

calculateMA: function(dayCount, data) {
	const result = [];
	for (var i = 0, len = data.values.length; i < len; i++) {
		if (i < dayCount) {
			result.push('-');
			continue;
		}
		var sum = 0;
		for (var j = 0; j < dayCount; j++) {
			sum += data.values[i - j][1];
		}
		result.push(+(sum / dayCount).toFixed(3));
	}
	return result;
}

		// 	renderItem(params, api) {
		// 		console.log(api);
		// 		const xValue = api.value(0);
		// 		const openPoint = api.coord([xValue, api.value(1)]);
		// 		const closePoint = api.coord([xValue, api.value(2)]);
		// 		const lowPoint = api.coord([xValue, api.value(3)]);
		// 		const highPoint = api.coord([xValue, api.value(4)]);
		// 		const halfWidth = api.size([1, 0])[0] * 0.35;
		// 		const style = api.style({
		// 			stroke: api.visual('color')
		// 		});
		// 		return {
		// 			type: 'group',
		// 			children: [{
		// 				type: 'line',
		// 				shape: {
		// 					x1: lowPoint[0],
		// 					y1: lowPoint[1],
		// 					x2: highPoint[0],
		// 					y2: highPoint[1]
		// 				},
		// 				style: style
		// 			}, {
		// 				type: 'line',
		// 				shape: {
		// 					x1: openPoint[0],
		// 					y1: openPoint[1],
		// 					x2: openPoint[0] - halfWidth,
		// 					y2: openPoint[1]
		// 				},
		// 				style: style
		// 			}, {
		// 				type: 'line',
		// 				shape: {
		// 					x1: closePoint[0],
		// 					y1: closePoint[1],
		// 					x2: closePoint[0] + halfWidth,
		// 					y2: closePoint[1]
		// 				},
		// 				style: style
		// 			}]
		// 		};
		// 	}
		}

	
	// components: {
	// chart: ECharts
	// }
	}
</script>
<style lang="scss">
	.echarts {height:800px;}
</style>