<script type="text/javascript">
	export default {
		name: 'b-map',
		updated() {
			console.log(1111111)
		},
		mounted() {
			setTimeout(() => {
				console.log(document.querySelector('#map-control'))
				// 百度地图API功能
				var map = new BMap.Map("map-conotrol");    // 创建Map实例
				console.log(map.centerAndZoom)
				// map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
				// map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
				// map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
				// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			}, 0)
			
		}
	}
</script>
<template>
	<div id="map-control1">
		
	</div>
</template>
<style>
	#map-control {width: 100%; height: 100%;}
</style>
