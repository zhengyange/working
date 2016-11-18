
import echarts from 'echarts';
// import echarts from 'echarts/dist/echarts.min.js';

const myChart = echarts.init(document.querySelector('#main'));
const app = {};
app.title = '正负条形图';

let option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
        //这里面可以设置好多的东西
    },
    legend: {
        data:['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true			//是否包含坐标轴的刻度标签，设置为true，防止标签溢出
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},		//坐标轴刻度相关配置
            data : ['周一','周二','周三','周四','周五','周六','周日']		//只有在type='category'时有效
        }
    ],
    series : [
        {
            name:'利润',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            name:'收入',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'支出',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'	//标签的显示位置
                }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};

myChart.setOption(option)

const myChart2 = echarts.init(document.querySelector('#main2'));

app.title = '柱状图框选';

var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
    data3.push((Math.random() * 5).toFixed(2));
    data4.push((Math.random() + 0.3).toFixed(2));
}

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        align: 'left',
        left: 10
    },
    brush: {	//区域选择控件
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0		//在指定的坐标第内筛选
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {
            	show: true			//控制显示数据视图，默认true
            }
        }
    },
    tooltip: {},
    xAxis: {
    	type: 'category',
        data: xAxisData,
        name: 'X Axis',
        silent: false,					//坐标轴是否是静态无法交互
        axisLine: {onZero: true},		//是否显示坐标轴，轴线，默认显示，是否在另一个轴的0刻度上
        splitLine: {show: false},		//是否显示分割线
        splitArea: {show: false}		//是否显示分割区域
    },
    yAxis: {
        inverse: true,					//是否反向坐标轴
        splitArea: {show: false}
    },
    grid: {
        left: 100
    },
    visualMap: {
    	show: true,
        type: 'continuous',
        dimension: 1,		//指定用数据的哪个维度，映射到视觉元素上
        text: ['High', 'Low'],
        inverse: true,
        itemHeight: 200,
        calculable: true,		//是否显示拖拽的手柄
        min: -2,				//必须指定，最小值
        max: 6,					//必须指定，最大值
        top: 60,
        left: 10,
        inRange: {				//定义在选中范围内的视觉元素
            colorLightness: [0.4, 0.8]		//颜色的明暗度	
        },
        outOfRange: {			//定义在选中范围外的视觉元素
            color: '#bbb'					
        },
        controller: {
            inRange: {
                color: '#2f4554'
            }
        }
    },
    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data1
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data2
        },
        {
            name: 'bar3',
            type: 'bar',
            stack: 'two',
            itemStyle: itemStyle,
            data: data3
        },
        {
            name: 'bar4',
            type: 'bar',
            stack: 'two',
            itemStyle: itemStyle,
            data: data4
        }
    ]
};
myChart2.setOption(option)
myChart.on('brushSelected', renderBrushed);

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart2.setOption({
        title: {
            backgroundColor: '#333',
            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
            bottom: 0,
            right: 0,
            width: 100,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    });
}




