import {
        getFxShInfo,
        getJyData,
        getJfkhData,
        getJwcfxxData,
        getJyxxData,
        getXfbdData,
        getYzjcData,
        getJdData,
        getLjxxData,
        getQkxxData,
        getSjData,
        getJcxxData} from "@/api/homePage"
import {getFxBaseInfo} from "@/api/intelligentSearch.api"
import router from '../../router/routers' 

export default {
    state: {
        //查询条件
        fxBaseData: {},
        shData:{},
        jyData:{},
        // jdData:{},
    },
    getters: {
        getBaseRes(state) {
            return state.fxBaseData
        },
        getShRes(state) {
            return state.shData
        },
        getJyRes(state) {
            return state.jyData
        },
        // getJdRes(state) {
        //     return state.jdData
        // },
    },
    mutations: {
        handlerBaseRes(state, data) {
            return state.fxBaseData = data
        },
        handlerShRes(state, data) {
            return state.shData = data
        },
        handlerJyRes(state, data) {
            return state.jyData = data
        },
        // handlerJdRes(state, data) {
        //     return state.jdData = data
        // },
    },
    actions: {
        // 基本信息
        handlerZfGetInfo(context, id) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });

            getFxBaseInfo(id).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerBaseRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                msg();
                this._vm.$Message.warning("服务器错误！");
            })

            // // 犯法 社会关系
            // if(url==="/fxry"||url==="/jdry"||url==="/sjry"){
            //     getFxShInfo(id,url).then(res => {
            //         if (res.status === 200) {
            //             context.commit('handlerShRes', res.data);
            //         } else {
            //             this._vm.$Message.warning(res.message);
            //         }
            //     }).catch(err => {
            //         this._vm.$Message.warning("服务器错误！");
            //     })
            // }
        },

        // 罪犯当前状态、捕前简历、犯罪逮捕、判决信息
        handlerJyData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getJyData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },
        //罪犯计分考核信息
        handlerJfkhData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getJfkhData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },

        //既往处罚信息 
        handlerJwcfxxData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getJwcfxxData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },
        //既往处罚信息 
        handlerJyxxData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };

            getJyxxData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },
        //刑罚变动
        handlerXfbdData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getXfbdData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },   
        //狱政奖惩
        handlerYzjcData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getYzjcData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },   
        //本案信息、特别关注
        handlerJdData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getJdData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },  
        //劣迹信息
        handlerLjxxData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getLjxxData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },  
        //本案信息、特别关注
        handlerQkxxData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getQkxxData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        }, 
        //法律文书信息、刑罚执行信息、解除矫正信息、再犯罪信息
        handlerSjData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getSjData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },  
        //奖惩信息
        handlerJcxxData(context, {id,url}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            let type = {
                type: url
            };
            getJcxxData(id,type).then(res => {
                msg();
                if (res.status === 200) {
                    context.commit('handlerJyRes', res.data);
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })         
        },  
    }
}