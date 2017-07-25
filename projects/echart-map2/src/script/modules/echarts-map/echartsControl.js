import { mapStyle } from './map.config.js'
import { BJData, geoCoordMap } from './mock.js'
const echartsControl = {
  initEcharts: function() {
	let echartIns = echarts.init(document.getElementById('echarts-map'));
	const effectScatter = this.forMatEffectScatter()
	echartIns.setOption({
	  bmap: {
	    center: [86.605247,32.224231],
	    zoom: 5,
	    roam: true,
	    mapStyle: mapStyle
	  },
	  series: [effectScatter]
	})
  },

  forMatEffectScatter: function() {
	return {
      name: 'Top10',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: '#a6c84c'
        }
      },
      data: BJData.map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    }
  }
	
} 

export default echartsControl