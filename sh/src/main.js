import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts'
import router from './router'
import vis from 'vis'
Vue.prototype.$vis = vis;
// import 'echarts-gl';
import 'echarts/map/js/world.js';
import 'echarts/map/js/china.js';
import 'echarts/map/js/province/shanghai.js';
import "@/mock/index"
import store from './store/index'
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
