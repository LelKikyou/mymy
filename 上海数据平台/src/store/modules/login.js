export  default {
    state:{
        token:'',
        login:{
            userName:'',
            passWord:''
        },
        getters:{
            getToken(state){
                return state.token;
            },
            getUser(state){
                return state.login
            }
        },
        actions:{
            // setToken(state,token){
            //     state.token=token;
            // },
            loginUser({ commit }, {userName, password}){

            }
        }
    },

}