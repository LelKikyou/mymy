
export default {
    state: {
        userInfo: {
            username:"上海司法局"
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

        }
    },
    actions: {

    }
}