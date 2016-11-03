import Vue from "vue";

import App from './App.vue';

Vue.config.debug = true;//开启错误提示

window.vapp = new Vue({
	el: '#app',
	render: h => h(App)
});
