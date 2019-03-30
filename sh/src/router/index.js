import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

Vue.use(Router);
import store from "@/store/index"

const router = new Router({
    routes,
    // mode: 'history'
});


router.beforeEach((to, from, next) => {
    if (to.name === "intelligentSearch"||to.name==="queryRes"||to.name==="moreConditions") {
        store.commit("handlerIsShow", true)
    } else {
        store.commit("handlerIsShow", false)
    }
    let LOGIN_NAME='login'
    var loginMes = JSON.parse(localStorage.getItem('newShangHaiProject'));

    if (!loginMes && to.name !== LOGIN_NAME) {
        next({
            path: '/login'
        })
    } else if (!loginMes && to.name === LOGIN_NAME) {
        next()
    } else if (loginMes && to.name === LOGIN_NAME) {
        next({
            path: "/newMain"
        })
    } else {
        next()
    }
    // next()
});
router.afterEach(to => {
    iView.LoadingBar.finish();
});

export default router
