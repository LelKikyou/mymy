import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import tabData from './modules/tabData'
import login from './modules/login'
export default new Vuex.Store({
    modules:{
        tabData,
        login
    }
})