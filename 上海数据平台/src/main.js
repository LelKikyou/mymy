import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import router from "./router/index"
import 'iview/dist/styles/iview.css';
import echarts from 'echarts'
import store from './store/index'

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
