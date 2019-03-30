import Http from "@/libs/axios"
import {CXURL} from "./config"
const httpAxios=new Http(CXURL);
import qs from 'qs'
//普通查询
export const fastQueryApi = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: 'cx/Zuifanjibenxinxi/fastQuery',
        params: data,
        paramsSerializer: params => {
            return qs.stringify(params, {indices: false})
        }
    })
};
//获取高级查询字段配置
export const getAdvancedQueryConfigVoApi = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: 'cx/Zuifanjibenxinxi/getAdvancedQueryConfigVo'
    })
};
//高级查询
export const getAdvancedQueryApi = (data) => {
    let queryVOList = data.queryVOList;
    delete data["queryVOList"];
    return httpAxios.axioseRquest({
        url: '/cx/Zuifanjibenxinxi/advancedQuery',
        data: queryVOList,
        params: data,
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
    })
};
//字典接口
export const getDicKeyApi = (dickey, topkey) => {
    topkey === dickey && (topkey = "root");
    return httpAxios.axioseRquest({
        params: {
            topkey: topkey,
            key: dickey,
            floor: 1
        },
        url: 'dicBase/getValuesByKey'
    })
}
//基本信息
export const getFxBaseInfo = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: "fxry/jbxx/"+data,
    })
}