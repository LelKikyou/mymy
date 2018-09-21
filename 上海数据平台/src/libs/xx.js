import axios from 'axios';
import Qs from 'qs';

// 上一篇文章中定义的错误处理文件
import httpErrorHandler from './httpErrorHandler';

const instance = axios.create();

// 请求队列
const queue = [];
// axios内置的中断ajax的方法
const cancelToken = axios.CancelToken;
// 拼接请求的url和方法，同样的url+方法可以视为相同的请求
const token = (config) =>{
    return `${config.url}_${config.method}`
}
// 中断重复的请求，并从队列中移除
const removeQueue = (config) => {
    for(let i=0, size = queue.length; i < size; i++){
        const task = queue[i];
        if(task.token === token(config)) {
            task.cancel();
            queue.splice(i, 1);
        }
    }
}

//添加请求拦截器
instance.interceptors.request.use(config=>{
    removeQueue(config); // 中断之前的同名请求
    // 添加cancelToken
    config.cancelToken = new cancelToken((c)=>{
        queue.push({ token: token(config), cancel: c });
    });
    return config;
}, error => {
    return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(response=>{
    // 在请求完成后，自动移出队列
    removeQueue(response.config);
    return response.data
}, httpErrorHandler);

/**
 * 封装后的ajax post方法
 *
 * @param {string} url 请求路径
 * @param {object} data 请求参数
 * @param {object} config 用户自定义设置
 * @returns
 */
function post (url, data, config = {}) => {
    return instance.post(url, data, config)
}

/**
 * 封装后的ajax get方法
 *
 * @param {string} url 请求路径
 * @param {object} params 请求参数
 * @param {object} config 用户自定义设置
 * @returns
 */
function post (url, params, config = {}) => {
    return instance.get(url, {params}, config)
}

export default {
    post,
    get,
}