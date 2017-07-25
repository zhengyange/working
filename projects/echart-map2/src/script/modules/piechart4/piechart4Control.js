
const piechart4Control = {
	initPiechart4: function() {
		let echartIns = echarts.init(document.getElementById('piechart4'));
		echartIns.setOption({
	    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
        orient: 'vertical',
        x: 'left',
        top: '5%',
        left: '5%',
        data:['实际支付','E币','优惠券'],
        textStyle: {
	      	color: '#fff'
	      }
	    },
	    series: [
        {
          name:'金额比例',
          type:'pie',
          selectedMode: 'single',
          radius: [0, '30%'],

          label: {
            normal: {
                position: 'inner'
            }
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          data:[
            {value:679, name:'实际支付', selected:true},
            {value:548, name:'E币'},
            {value:311, name:'优惠券'}
          ]
        },
        {
          name:'金额比例',
          type:'pie',
          radius: ['40%', '55%'],
          data:[
            {value:679, name:'实际支付'},
            {value:548, name:'E币'},
            {value:311, name:'优惠券'}
          ]
        }
    	]
		})
	}
}

export default piechart4Control