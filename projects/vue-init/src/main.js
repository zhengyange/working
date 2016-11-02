// import Vue from 'vue'
// import App from './App'

//  eslint-disable no-new 
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
//es6语法：
import Vue from "vue";

import App from './pages/app.vue';

Vue.config.debug = true;//开启错误提示

window.vapp = new Vue({
	el: '#app',
	render: h => h(App)
});
