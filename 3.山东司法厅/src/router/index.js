import Vue from "vue"
import Router from "vue-router"
import routes from "./routes"
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({showSpinner: false}); //Turn off loading spinner by setting it to false. (default: true)
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes
});

import {getToken} from "@/lib/auth"
//路由权限
router.beforeEach((to, from, next) => {
    NProgress.start(); //进度条开始
    if (getToken()) {
        next()
    } else {
        if (to.path === "/login") {
            next()
        } else {
            next({
                path: "/login"
            });
            NProgress.done() // 进度条结束
        }
    }
})
router.afterEach(() => {
    NProgress.done() // 进度条结束
})
export default router
