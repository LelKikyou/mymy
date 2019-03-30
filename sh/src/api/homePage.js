import Http from "@/libs/axios"
import {URL} from "./config";

const httpAxios = new Http(URL);
//大屏首页，全市司法执行力量
export const getDaPingZXLL = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/index/qssfzxll',
    })
}
//查询接口
export const ssZhinengsousuoApi = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/ssZhinengsousuo01/pageList',
        params: data
    })
}
//全市司法行政刑事执行对象
export const getDaPingXZXSZXDX = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/index/qssfxzxszxdx',
    })
};

//大屏首页，全市司法行政机构
export const getDaPingXZJG = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/index/qssfxzjg',
    })
};

//今日关注
export const getDaPingJRGZ = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/index/jrgz',
    })
};

//重点关注
export const getDaPingZDGZ = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/index/zdgz',
    })
};
//全市司法行政设备
export const getDaPingXZSB = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/index/qssfxzsb',
    })
};


//社会关系
export const getFxShInfo = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev' + url + '/shgx/' + data,
    })
}


//罪犯当前状态、捕前简历、犯罪逮捕、判决信息
export const getJyData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jy/' + data,
        params: url
    })
}

//罪犯计分考核信息
export const getJfkhData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jy/jfkh/' + data,
        params: url
    })
}

//既往处罚信息 
export const getJwcfxxData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jy/jwcfxx/' + data,
        params: url
    })
}

//教育信息
export const getJyxxData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jy/jyxx/' + data,
        params: url
    })
}

//刑罚变动
export const getXfbdData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jy/xfbd/' + data,
        params: url
    })
}

//狱政奖惩
export const getYzjcData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jy/yzjc/' + data,
        params: url
    })
}


//本案信息、特别关注
export const getJdData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jd/' + data,
        params: url
    })
}

//劣迹信息
export const getLjxxData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jd/ljxx' + data,
        params: url
    })
}

//前科信息
export const getQkxxData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/jd/qkxx' + data,
        params: url
    })
}

//法律文书信息、刑罚执行信息、解除矫正信息、再犯罪信息
export const getSjData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/sj/' + data,
        params: url
    })
}

//奖惩信息
export const getJcxxData = (data, url) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/v1/dev/yryd/sj/jcxx/' + data,
        params: url
    })
}