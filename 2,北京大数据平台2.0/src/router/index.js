import Vue from "vue"
import Router from "vue-router"
import routes from "./routes"
import iView from 'iview';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes
});
iView.LoadingBar.config({
    color: '#5cb85c'
});
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
export default router
