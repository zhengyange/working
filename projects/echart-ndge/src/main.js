
import echarts from 'echarts';
// import echarts from 'echarts/dist/echarts.min.js';

const myCharts = echarts.init(document.querySelector('#main'));

// const options = {
// 	backgroundColor: '#2c343c',		//图标整体背景
// 	textStyle: {
// 		color: 'rgba(255, 255, 255, 0.3)'
// 	},
// 	visualMap: {
// 	    // 不显示 visualMap 组件，只用于明暗度的映射
// 	    show: true,
// 	    // 映射的最小值为 80
// 	    min: 80,
// 	    // 映射的最大值为 600
// 	    max: 600,
// 	    inRange: {
// 	        // 明暗度的范围是 0 到 1
// 	        colorLightness: [0, 1]
// 	    }
// 	},
// 	series: [
// 		{
// 			name: '访问资源',
// 			type: 'pie',					//饼状图
// 			radius: ['20px', '55%'],		//饼图的半径
// 			roseType: 'area',
// 			labelLine: {
// 			    normal: {
// 			        lineStyle: {
// 			            color: 'rgba(255, 255, 255, 0.3)'
// 			        }
// 			    }
// 			},
// 			itemStyle: {
// 			    normal: {
// 			        // 设置扇形的颜色
// 			        color: '#c23531',
// 			        shadowBlur: 200,
// 			        shadowColor: 'rgba(0, 0, 0, 0.5)'
// 			    },
// 			    emphasis: {
			  //   	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					//   offset: 0, color: 'red' // 0% 处的颜色
					// }, {
					//   offset: 1, color: 'blue' // 100% 处的颜色
					// }], false)
					// 	径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
					// color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
					//   offset: 0, color: 'red' // 0% 处的颜色
					// }, {
					//   offset: 1, color: 'blue' // 100% 处的颜色
					// }], false)
					// 纹理填充
					// color: new echarts.graphic.Pattern(
					//   imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
					//   'repeat' // 是否平铺, 可以是 repeat-x, repeat-y, no-repeat
					// )
// 					// color: '#777'
// 					shadowBlur: 20,
//         			shadowColor: 'rgba(255, 255, 255, 0.5)'
					
// 			    }

// 			},
// 			data: [
// 				{
// 					value:400, 
// 					name:'搜索引擎',
// 					label: {
// 						// normal: {
// 						// 	show: true, 		//是否显示提示标签，默认显示，文档上错了
// 						// 	position: 'inside',	//标签显示位置
// 						// 	textStyle: {
// 						// 		color: '#000'
// 						// 	}
// 						// },
// 						emphasis: {
// 							show: false
// 						}
// 					},
// 					labelLine: {
// 					    normal: {
// 					        lineStyle: {
// 					            color: 'rgba(255, 255, 255, 1)'
// 					        }
// 					    }
// 					},
// 					itemStyle: {
// 						normal: {
// 							// color: '#fff'
// 						}
// 					}
// 				},
//                 {value:335, name:'直接访问'},
//                 {value:310, name:'邮件营销'},
//                 {value:274, name:'联盟广告'},
//                 {value:235, name:'视频广告'}
// 			]
// 		}
// 	]
// }
const options = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
        },
        // {
        //     type: 'inside',
        //     xAxisIndex: 0,
        //     start: 10,
        //     end: 60
        // }
    ],
    series: [
        {
            type: 'scatter', // 这是个『散点图』
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
        }
    ]
}

myCharts.setOption(options);





