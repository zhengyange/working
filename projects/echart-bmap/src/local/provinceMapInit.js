
import { mapStyle } from '../utils.js';
const fromToNums = 1095;
const effectScatterNums = 43;
//获得随机数据
function random(begin, end){
    return begin + Math.floor((end - begin) * Math.random()) + 1;
}

const linesConvertDatab = function(fromTo, geoData){
    let res = [];
    let { geoCordMap } = geoData;
    for (let i = 0, len = fromTo.length / 3; i < len; i++) {
        let dataItem = fromTo[i];
        let fromCoord = geoCordMap[dataItem[0].from];
        let toCoord = geoCordMap[dataItem[1].to];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].from,
                toName: dataItem[1].to,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
}

/**
 * 网点热度
 * 显示
 */
const effectScatterConverData = function(geoData){
    const { geoCordMap, hotShop } = geoData;
    let resS = [];
    let resB = [];
    //获取hotShop最大值，及个数
    let hValue = 0;
    let count = 0;
    let hValueData = [];
    for(let h in hotShop){
        count++;
        if(hValue < hotShop[h]){
            hValue = hotShop[h];
            hValueData = geoCordMap[h]
        }
    }

    for(let k in hotShop){
        let tmpHot =  hotShop[k];
        if(count < 20 && hValue < 1){
            tmpHot = tmpHot * 8;
        }
        if(count < 20 && tmpHot < 1){
            tmpHot = tmpHot * 5;
        }
        let tmpData = geoCordMap[k];
        if(tmpHot < 1.5){
            resS.push({
                name: tmpData[2],
                value: [tmpData[0], tmpData[1], tmpHot]
            })
        }else{
            if(tmpHot > 2.5){
                tmpHot = 2.5 + tmpHot / 100;
            }
            resB.push({
                name: tmpData[2],
                value: [tmpData[0], tmpData[1], tmpHot]
            })
        }

    }
    //构造假数据
    if(hValue < 1.5){
        if(hValue == 0) hValue = 0.5;
        resB.push({
            name: hValueData[2],
            value: [hValueData[0], hValueData[1], hValue * 3]
        })
    }
    
    return {scatter: resS, effectScatter: resB};
}

const convertSeriesData = function(fromTo, geoData){
    let series = [
    {
        name: '',
        type: 'lines',
        coordinateSystem: 'bmap',
        zlevel: 3,
        effect: {
            show: true,
            period: 2,
            trailLength: 0,
            symbol: 'circle',
            symbolSize: 3,
            loop: true,
            color: '#fff'
        },
        lineStyle: {
            normal: {
                color: '#4FF7E5',
                width: 2,
                curveness: 0.2
            }
        },
        // data: linesConvertData(data)
        data: linesConvertDatab(fromTo, geoData)
        
    },
    {
        name: '',
        type: 'scatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        rippleEffect: {
            brushType: 'fill'
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] * 50 / 6;
        },
        itemStyle: {
            normal: {
                color: '#4FF7E5'
            }
        },
        data: effectScatterConverData(geoData).scatter
    },
    {
        name: '',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        rippleEffect: {
            brushType: 'fill'
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                formatter: '{b}',
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            }
        },
        symbolSize: function (val) {
            return val[2] * 50 / 6;
        },
        itemStyle: {
            normal: {
                color: '#4FF7E5'
            }
        },
        data: effectScatterConverData(geoData).effectScatter.slice(random(0, 15), random(16, 43))
    }];
    return series;
}


/**
 * provinceOptions
 * 省份地图显示时option数据
 */
const commonOptions = function(){
    let options = {
        tooltip : {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: function(params){
                if(params.componentSubType == "effectScatter" || params.componentSubType == "scatter"){
                    let html = `<div id="tooltip-wrap">
                                    <img src="/assets/css/fonts/bg_text.svg" alt="">
                                    <span class="city-name">${params.data.name}</span>
                            </div>`
                    return html
                }
                
            },
            position: function(point, params, dom){
                return [point[0], point[1] - 100]
            },
            textStyle: {
                fontFamily: '微软雅黑'
            }
        },
        bmap: {
            center: [121.609593,31.057298],
            zoom: 12,
            roam: true,
            mapStyle: mapStyle
        },
        // series: convertSeriesData(fromTo, geoData)
        series: []
    };

    return options;
}

/**
 * geoCoordMap 数据
 */
function geoCoorMapConvertData(data){
    let geoCordMap = {};
    let hotShop = {};       //网点热度数据，取前20个
    const pointIds = data[0];
    const pointNames = data[1];
    const pointJDs = data[2];
    const pointWDs = data[3];
    const pointHot = data[4];
    for(let i = 0, len = pointIds.length; i < len; i++){
        geoCordMap[pointIds[i]] = [pointWDs[i] / 10e5, pointJDs[i] / 10e5, pointNames[i]];
        // if(i < 200){
            hotShop[pointIds[i]] = pointHot[i].trim() * 1;
        // }
    }
    return { geoCordMap, hotShop };
}

/**
 * from to data
 */
function fromToData(data, geoCoorMap){
    let startIndex = window.timeInfo.startIndex;
    let endIndex = window.timeInfo.endIndex
    let fromToData = [];
    let JDS = data.hotShopList && data.hotShopList[1].slice(startIndex, endIndex)
    let from = data.vehTrackList && data.vehTrackList[1].slice(startIndex, endIndex);
    let to = data.vehTrackList && data.vehTrackList[2].slice(startIndex, endIndex);
    for(let f = 0, len = from.length; f < len; f++){
        let toNID = to[f];
        let geoTo = geoCoorMap[toNID];
        if(geoTo){
            fromToData.push([
                {from: from[f]}, {to: to[f]}
            ])
            
        }
    }
    return fromToData;
}

export { fromToData, geoCoorMapConvertData, commonOptions, convertSeriesData };

