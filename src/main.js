import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import VueRouter from 'vue-router';
import routes from './router/router';
import store from './store/';
import './style/common.scss'

Vue.config.productionTip = false;
/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  store,
}).$mount("#app");
