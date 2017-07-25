import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

const IframeDemo = resolve => require(['@/pages/IframeDemo.vue'], resolve)

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: IframeDemo,
    },
    {
      path: '/iframe-demo',
      name: 'IframeDemo',
      component: IframeDemo,
    },
  ],
});
