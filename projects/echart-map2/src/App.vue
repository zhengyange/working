<script>
	import echartsControl from './script/modules/echarts-map/echartsControl.js'
	import curves4Control from './script/modules/curves-4/curves4Control.js'
	import piechart4Control from './script/modules/piechart4/piechart4Control.js'
	export default {
	  name: 'app',
	  components: {
	  	// BMap
	  },
	  methods: {
	  	initAll() {
	  		echartsControl.initEcharts()
	  		curves4Control.initCurves4()
	  		piechart4Control.initPiechart4()
	  	}
	  },
	  mounted() {
	  	this.initAll()
		}
	};
</script>
<template>
	<div style="width: 100%; height: 100%;">
		<div id="echarts-map">
  	</div>
  	<div class="ects-bg">
  		<div id="curves4"></div>
  	</div>
  	<div class="ects-bg piechart-4">
  		<div id="piechart4"></div>
  	</div>
	</div>
  
</template>

<style>
*{padding: 0; margin: 0;}
::-webkit-scrollbar{width:0px}
html, body, #app, #iframe-demo{ width: 100%; height: 100%; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ects-bg{width: 500px; height: 350px; background-color: rgba(255, 255, 255, .1); position: absolute; left: 50px; top: 50px; border: 1px solid rgba(255, 255, 255, .5); padding: 5px;}
#echarts-map{width: 100%; height: 100%;}
#curves4, #piechart4{width: 100%; height: 100%;}
.piechart-4{bottom: 50px; top: auto;}
.anchorBL{display: none;}
</style>
