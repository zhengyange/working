
import echarts from 'echarts';
// import echarts from 'echarts/dist/echarts.min.js';

const myCharts = echarts.init(document.querySelector('#main'));

const option = {
	title: {
		text: 'ECHARTS-demo',
		// show: false
		// link: 'http://www.baidu.com'
		// subtext: 'http://www.baidu.com\ngmf go qr '
		// left: '20%',
		backgroundColor: '#ccc',
		textStyle: {color: '#fff'}
	},
	tooltip: {},
	legend: {
		data: ['销量', '价格'],
		// orient: 'vertical'
	},
	grid: {
		show: true
	},
	xAxis: {
		data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
		// position: 'top'
		name: '品牌',
		// inverse: true
	},
	yAxis: {},
	series: [
		{
	        name: '销量',
	        type: 'bar',
	        data: [35, 20, 46, 10, 10, 20]
	    },
		{
	        name: '价格',
	        type: 'bar',
	        data: [5, 25, 26, 30, 20, 40]
	    }
    ]

}

myCharts.resize();
myCharts.setOption(option);
// myCharts.showLoading('default', {
// 	text: 'loading',
//   color: '#c23531',
//   textColor: '#000',
//   maskColor: 'rgba(255, 255, 255, 0.8)',
//   zlevel: 0
// })
const w = myCharts.getWidth();
console.log(w);

console.log(window.location.href);






