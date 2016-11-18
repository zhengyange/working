<script type="text/javascript">
	import centerTop from './_parts/centerTop.js'
	export default {
		mounted(){
			centerTop.init()
		}
	}
</script>

<template>
	<div class="center-top">
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden">
		  <defs>
		  </defs>
		</svg>
		<div class="top-left">
				<div class="left-content">
					
				</div>
				<div class="highest-label"></div>
		</div>
		<div class="top-right">
			<div class="right-content">
				<div class="content-row">
					<div class="content-cell car-nums-title">
						车辆数
					</div>
					<div class="content-cell-r">
						<div id="cars" class="nums-wrap"></div>
						<p class="today-text">今日 <span id="cars-tody">800</span>辆</p>
					</div>
				</div>
				<div class="content-row">
					<div class="content-cell car-nums-title">
						订单数
					</div>
					<div class="content-cell-r">
						<div id="orders" class="nums-wrap">
						</div>
						<p class="today-text">今日 <span id="orders-today">1400</span>笔</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="css" scoped>
	@import './center-top.css'
</style>