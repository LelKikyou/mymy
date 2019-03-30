import {fastQueryApi, getAdvancedQueryApi} from "@/api/intelligentSearch.api"
import {deepCopy} from "@/libs/tools"

const ADD_QUERY = "ADD_QUERY";
const CHANGE_QUERY = "CHANGE_QUERY";
export default {
    state: {
        queryResData: {},//查询结果
        queryMore: "",//More条件
        isShow: false  //是否显示搜索框
    },
    getters: {
        getQueryResData(state) {
            return state.queryResData
        },
        getIsShow(state) {
            return state.isShow;
        }
    },
    mutations: {
        handlerIsShow(state, data) {
            state.isShow = data;
        },
        handlerChangeQueryResData(state, data) {
            state.queryResData = data;
        },
        handlerAddQueryResData(state, data) {
            state.queryResData.list.push(...data.list);
        },
        handlerClearQueryResData(state) {
            Object.assign(state.queryResData, {
                total: 0,
                list: []
            })
        },
        handlerQueryMore(state, {queryVOList, zyzt}) {
            let query = {
                zyzt: zyzt,
                pageNum: 1,
                pageSize: 24,
                queryVOList: queryVOList,
                json: {
                    "zfBh": "罪犯编号",
                    "xm": "姓名",
                    "xb": "性别",
                    "nl": "年龄",
                    "zyzt": "在押状态"
                }
            };
            state.queryMore = query;
        },
        handlerAddQueryMore(state) {
            state.queryMore.pageNum++;
        }
    },
    actions: {
        handlerQueryResDataAsync(context, data) {
            delete data.data.value;
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            fastQueryApi(data.data).then(res => {
                msg();
                if (res.status === 200) {
                    switch (data.type) {
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
                msg();
                this._vm.$Message.warning("服务器错误！");
            })
        },
        handlerMoreQueryConditionsAsync(context, type) {
            const msg = this._vm.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            if (type === ADD_QUERY) {
                context.commit("handlerAddQueryMore")
            }
            getAdvancedQueryApi(deepCopy(context.state.queryMore)).then(res => {
                msg()
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
                msg();
                this._vm.$Message.warning("服务器错误！");
            })
        }
    }
}