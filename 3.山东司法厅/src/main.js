import Vue from 'vue'
import App from './App.vue'
import "@/assets/index.css" //q全局配置css
import 'swiper/dist/css/swiper.css' //swiper css
import router from './router/index'
import store from '@/store/index'
import echarts from "echarts"
echarts.registerMap('山东', require("@/api/config").shandongMap);
import {
    Button,
    Form,
    FormItem,
    Input,
    Drawer,
    DatePicker,
    Select,
    Option,
    Timeline,
    TimelineItem,
    Collapse,
    CollapseItem,
    MessageBox
} from "element-ui"

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Drawer);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
