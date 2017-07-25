import datas from './mock.js'

const curves4Control = {
	initCurves4: function() {
		let echartIns = echarts.init(document.getElementById('curves4'));
		let curves4Series = this.formatSeries()
		echartIns.setOption({
			title: {
        text: ' '
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	      data:['总金额', '实际支付', 'E币', '优惠券'],
	      top: '5%',
	      textStyle: {
	      	color: '#fff'
	      }
	    },
	    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
	    },
	    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二','周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
        	textStyle: {
        		color: '#fff'
        	}
        },
        axisLine: {
        	lineStyle: {
        		color: '#fff'
        	}
        }
	    },
	    yAxis: {
        type: 'value',
        axisLabel: {
        	textStyle: {
        		color: '#fff'
        	}
        },
        splitLine: {
        	lineStyle: {
        		type: 'dotted',
        		opacity: '0.5'
        	}
        },
        axisLine: {
        	lineStyle: {
        		color: '#fff'
        	}
        }
	    },
		  series: curves4Series
		})
	},
	formatSeries: function() {
		return [
      {
          name:'总金额',
          type:'line',
          stack: '总量',
          data: datas.all
      },
      {
          name:'实际支付',
          type:'line',
          stack: '总量',
          data: datas.actual,
          lineStyle: {
          	normal: {
          		color: 'red'
          	}
          },
          itemStyle: {
          	normal: {
          		color: 'red'
          	}
          }
      },
      {
          name:'E币',
          type:'line',
          stack: '总量',
          data: datas.coupon
      },
      {
          name:'优惠券',
          type:'line',
          stack: '总量',
          data: datas.ecurrency
      }
    ]
	}
}

export default curves4Control