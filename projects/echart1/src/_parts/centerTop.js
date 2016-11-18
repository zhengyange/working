import echarts from 'echarts';

let echartsIns = null;
let xAxisData = ['JAN.', 'FEB', 'MAR.', 'APR.', 'MAY.', 'JUN.'];
let data = [];
for (var i = 9; i < 15; i++) {
    // xAxisData.push('5月' + i + '日');
    data.push(i*4 * 10 + 20 * i);
}
let option = {
    title: {
        text: '营收增长',
        // subtext: '（万元）',
        textStyle: {
        	color: 'rgb(122,135,144)',
        	fontWeight: 'normal',
        	fontFamily: 'Microsoft YaHei',
        	// fontSize: '65rem'
        },
        left: '10rem'
    },
    legend: {
    	data: ['（万元）'],
    	itemWidth: 0,
    	textStyle: {
    		color: 'rgb(122,135,144)'
    	},
    	selectedMode: false,
    	left: '80rem',
    	padding: 8
    },
    xAxis: {
        data: xAxisData,		//x轴显示数据
        axisLabel: {				//x轴标签显示设置
            textStyle: {
                color: 'rgb(153,166,175)'
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
          oneZero: false,
          lineStyle: {
          	type: 'dotted'
          }
        },
        axisTick: {
        	show: false
        }
    },
    yAxis: {
        max: 1000,
        axisLabel: {
        	textStyle: {
        		color: 'rgb(153,166,175)'
        	},
        	formatter: function(params){
        		if(params){
        			return params
        		}
        	}
        },
        axisLine: {
            show: false
        },
        splitLine: {
        	lineStyle: {
        		type: 'dotted',
        		width: 1,
        		color: '#5E6164'
        	}
        }
    },
    series: [{
    		name: '（万元）',
        type: 'bar',
        data: data,
        barWidth: '30%',
        itemStyle: {
            normal: {
                barBorderRadius: 100,
                color: '#FF005B',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            }
        },
        label: {
        	normal: {
        		show: true,
        		position: 'top',
        		formatter: function(params){   
        			if (params.value == Math.max.apply(null, data)){
        				return '';
        			}  			
        			return params.value + '万元'
        		},
        		textStyle: {
        			color: '#fff'
        		}
        	}
        	
        }
    }]
};

function numsInit(nums){
	let numsArr = nums.toString().split('');
	let html = [];
	let counter = 0;
	let sp = '';
	for(let i = numsArr.length; i--;){
		counter++;
		html.unshift(`<span class="num-bg">${numsArr[i]}</span>`);
		if(!(counter % 3) && i != 0){
			html.unshift(`<span class="num-dot">,</span>`)
		}
	}
	html = html.join('');
	return html;
}

/**
 * 这里应该是请求接口
 * @return {[type]} [description]
 */
let tempData = {
    carData: {aNum: 19251, tNum: 810},
    orderData: {aNum: 19801251, tNum: 1405} 
};
function getData(){
    return new Promise(function(resolve, rejected){
        if(true){
            setTimeout(function(){
                resolve({
                    carData: {aNum: tempData.carData.aNum + 10, tNum: tempData.carData.tNum + 10},
                    orderData: {aNum: tempData.orderData.aNum + 20, tNum: tempData.orderData.tNum + 20}
                })
            }, 0)
        }
    })
}

/**
 * 间隔处理车辆增量显示
 */
function carNumsUpdate($dom, $domToday, oldData, newData){
    let unit = '笔';
    if($dom.id == 'cars'){
        unit = '辆';
    }
    let oldNum = oldData.aNum;
    let oldTNum = oldData.tNum;
    let newNum = newData.aNum;
    let timer = setInterval(function(){
        oldNum++;
        oldTNum++;
        if(oldNum > newNum){
            clearInterval(timer)
        }
        $dom.innerHTML = numsInit(oldNum) + `<span class="nums-unit">${unit}</span>`;
        $domToday.innerHTML = oldTNum;
    }, 20)
}
/**
 * 订单增量显示
 */

const centerTop = {
	init(){ 
		const echartIns = echarts.init(document.querySelector('.left-content'));
		echartIns.setOption(option);
        let $highestLabel = document.querySelector('.highest-label');
        let $cars = document.querySelector('#cars');
        let $carsToday = document.querySelector('#cars-tody');
        let $orders = document.querySelector('#orders');
        let $ordersToday = document.querySelector('#orders-today');

		$highestLabel.innerHTML = Math.max.apply(null, data) + '万元';
		$cars.innerHTML = numsInit(19231) + '<span class="nums-unit">辆</span>';
		$orders.innerHTML = numsInit(19801231) + '<span class="nums-unit">笔</span>';

        let oldData = {
            carData: {aNum: 19231, tNum: 800},
            orderData: {aNum: 19801231, tNum: 1400} 
        };
        setInterval(function(){
            getData()
                .then(data => {
                    carNumsUpdate($cars, $carsToday, oldData.carData, data.carData);
                    carNumsUpdate($orders, $ordersToday, oldData.orderData, data.orderData);
                    //模拟增量数据
                    oldData = data;
                    tempData = data;
                })

        }, 5000)
	}
}

export default centerTop;


