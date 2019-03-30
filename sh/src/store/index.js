
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import login from './modules/login'
import intelligentSearch from "./modules/intelligentSearch"
import criminal from "./modules/criminal"
export default new Vuex.Store({
    modules:{
        login,
        intelligentSearch,
        criminal
    }
})