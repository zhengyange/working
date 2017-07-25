import './map.less';
import { fromToData, geoCoorMapConvertData, commonOptions, convertSeriesData } from './local/provinceMapInit.js';
import { mapStyle, cityCenter } from './utils.js';
import datas from './local/map.local.json';

//页面中使用的svg
import './img/bg_text.svg';

window.echartIns = echarts.init(document.getElementById('container')); 

const $mapName = document.querySelector('#map-name span');
const $citysWrap = document.querySelector('.citys-wrap');

// 2分钟，4秒钟显示一次，30次
// 24小时，30次数据显示
let perTime = 24 * 60 * 60 * 1000 / 48 ;
let startTime = new Date('2016-12-31 00:00:00').getTime();
let endTime = new Date('2016-12-31 23:59:59').getTime();
let initEndTime = startTime + perTime;
let dataTimeArr = datas.vehTrackList[3];
let timeArrLen = dataTimeArr.length;
window.timeInfo = {
	startIndex: 0,
	endIndex: 0
}

for(let k = window.timeInfo.endIndex; k < timeArrLen; k ++){
	if(dataTimeArr[k] > initEndTime){
		window.timeInfo.endIndex = k;
		break;
	}
}

let opData = null;

//提前获取全国及地区common相关数据
opData = commonOptions();
let geoData = geoCoorMapConvertData(datas.hotShopList);
let fromTo = fromToData(datas, geoData.geoCordMap);
let series = convertSeriesData(fromTo, geoData);

opData.series = series; 
opData.bmap.center = cityCenter[datas.areaName];

echartIns.setOption(opData);
setTimeout(() => {
	echartIns.setOption({
			series:[{
				data: []
			}]	    				
	});
	// setIntervalShow()
}, 2300)
$mapName.innerHTML = datas.areaName;
$citysWrap.style.display = 'none';

//
document.querySelector('#start').addEventListener('click', function(){
	this.style.display = 'none';
	setIntervalShow();
	showTime();
})



//定时程序
function setIntervalShow(){
	window.timeInfo.endIndex = 0;
	let timer = setInterval(() => {
		let tmpEndIndex = window.timeInfo.endIndex;
		window.timeInfo.startIndex = tmpEndIndex;
		for(let k = tmpEndIndex - 1; k < timeArrLen; k ++){
			if(dataTimeArr[k] >= initEndTime){
				window.timeInfo.endIndex = k;
				break;
			}
		}
		//重置isClear
		let geoData = geoCoorMapConvertData(datas.hotShopList);
		let fromTo = fromToData(datas, geoData.geoCordMap);
		let series = convertSeriesData(fromTo, geoData);

		//这里，要重置地图的中心点
		echartIns.setOption({series: series});
		setTimeout(() => {
			echartIns.setOption({
					series:[{
						data: []
					}]	    				
			})
		}, 2300)
		$mapName.innerHTML = datas.areaName;
    $citysWrap.style.display = 'none';

    let tmpInitEndTime = initEndTime;
		initEndTime += perTime;
		if(initEndTime > dataTimeArr[timeArrLen - 1]){
			initEndTime = dataTimeArr[timeArrLen - 1]
		}
		if(window.timeInfo.endIndex === timeArrLen - 1){
			clearInterval(timer)
		}

			

	}, 2500)
}
//跑秒部分
function showTime(){
	let $hour = document.querySelector('.hour');
	let $minitues = document.querySelector('.minitues');
	let $second = document.querySelector('.second');
	let second = 0;
	let minitues = 0;
	let hour = 0;
	$hour.innerHTML = '00';
	$minitues.innerHTML = '00';
	$second.innerHTML = '00';
	let timer2 = null;
	let timer1 = setInterval(function(){
		second += 30;
		if(second == 60){
			second = 0;
			minitues += 1;
		}
		if(minitues == 60){
			minitues = 0;
			hour += 1;
		}
		$second.innerHTML = second < 10 ? '0' + second : second;
		$minitues.innerHTML = minitues < 10 ? '0' + minitues : minitues;
		$hour.innerHTML = hour < 10 ? '0' + hour : hour;
		
		if(window.timeInfo.endIndex === timeArrLen - 1 && !timer2){
			timer2 = setTimeout(function(){
				second = 0;
				minitues = 0;
				hour = 0;
				$second.innerHTML = second < 10 ? '0' + second : second;
				$minitues.innerHTML = minitues < 10 ? '0' + minitues : minitues;
				$hour.innerHTML = hour < 10 ? '0' + hour : hour;
				clearInterval(timer1)
			}, 2500)
		}
		
	}, 1)
}




