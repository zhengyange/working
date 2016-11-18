import Vue from "vue";

import App from './App.vue';

Vue.config.debug = true;//开启错误提示

window.vapp = new Vue({
	el: '#app',
	render: h => h(App)
});

function myPromise (){
	return new Promise(function(resolve, reject){
		if(false){
			setTimeout(function(){
				resolve('This is true')
			}, 1000)
		}else{
			setTimeout(function(){
				reject('This is false')

			}, 2000)
		}
	}) 
}

myPromise()
	.then( res => {
		console.log(res);
	})
	.catch( error => {
		console.log(error);
	})

	// http://dcapi.weiweitao.net/v1/seller/index.html?sellerId=10000&tableId=154677
var getting = {

    url:'http://dcapi.weiweitao.net/v1/seller/index.html?sellerId=10000&tableId=154677',

    dataType:'json',

    success:function(res) {

     	console.log(res);

     	$.ajax(getting); //关键在这里，回调函数内再次请求Ajax

	}

};
// $.ajax(getting);