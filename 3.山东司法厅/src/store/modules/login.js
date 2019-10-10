import {setToken, removeToken} from "@/lib/auth"

export default {
    state: {},
    mutations: {},
    actions: {
        //登录
        handleLoginIn(ctx, {username, password}) {
            return new Promise((res, rej) => {
                if (username === "admin" && password === "admin") {
                    setToken("sdcm12346");
                    res()
                } else {
                    rej({
                        code: 500,
                        status: "密码错误"
                    })
                }
            })
        },
        //登出
        handleLoginOut() {
            return new Promise((res, rej) => {
                removeToken();
                res()
            })
        }
    }
}
