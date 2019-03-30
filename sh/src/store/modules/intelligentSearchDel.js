import {ssZhinengsousuoApi} from "@/api/homePage"

const CHANGE_QUERY = "CHANGE_QUERY";
const ADD_QUERY = "ADD_QUERY";
export default {
    state: {
        queryCondition: {
            query: "",
            pageNum: 1,
            pageSize: 24,
        },  //查询条件
        queryResData: {},
        isShow: false  //是否显示搜索框
    },
    getters: {
        getQueryRes(state) {
            return state.queryResData
        },
        getQueryCondition(state) {
            return state.queryCondition
        },
        getIsShow(state) {
            return state.isShow;
        }
    },
    mutations: {
        handlerChangeQueryResData(state, data) {
            state.queryResData = data;
        },
        handlerAddQueryResData(state, data) {
            state.queryResData.list.push(...data.list);
        },
        handlerQueryCondition(state, data) {
            Object.assign(state.queryCondition, data)
        },
        handlerIsShow(state,data) {
            state.isShow = data;
        }
    },
    actions: {
        handlerQueryResDataAsync(context, {data, type}) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            ssZhinengsousuoApi(data).then(res => {
                console.log(res)
                msg();
                if (res.status === 200) {
                    switch (type) {
                        case  ADD_QUERY:
                            context.commit('handlerAddQueryResData', res.data);
                            break;
                        case  CHANGE_QUERY:
                            context.commit('handlerChangeQueryResData', res.data);
                            break;
                    }
                } else {
                    this._vm.$Message.warning(res.message);
                }
            }).catch(err => {
                this._vm.$Message.warning("服务器错误！");
            })
        }
    }
}