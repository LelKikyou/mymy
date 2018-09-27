import {loginApi, logOffApi} from "../../api/loginApi";
import {TOKEN} from "../../api/URL";
import Cookies from 'js-cookie'

export default {
    state: {
        userInfo: {
            username:"湖北省武汉市管理员"
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo
        }
    },
    mutations: {
        setUserInfo(state, userinfo) {
            state.userInfo = userinfo;
        },
        //注销
        cancellation(state) {
            // let token = Cookies.get(TOKEN);
            // logOffApi(token).then((res) => {
            //     if (res.status === 200) {
            //         // //清除token跳转到登录
            //         Cookies.remove(TOKEN);
            //         window.location.href = '/login';
            //     }
            // }).catch((err) => {
            //     console.log(err)
            // })

            Cookies.remove(TOKEN);
            window.location.href = '/login';
        }
    },
    actions: {
        //登录
        loginUser({state}, login) {
            return new Promise((resolve, reject) => {
                loginApi(login).then((res) => {
                    if (res.status === 200) {
                        //设置token
                        Cookies.set(TOKEN, res.data.token);
                        //保存登录信息
                        state.userInfo = res.data.userInfo;
                        resolve({
                            mes: ""
                        });
                    } else {
                        reject({
                            mes: res.message
                        })
                    }
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
}