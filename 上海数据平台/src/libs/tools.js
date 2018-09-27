/**工具类**/

//保存Sessionstorage
export const setSessionstorage = function (key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
};
//获取Sessionstorage
export const getSessionstorage = function (key) {
    return JSON.parse(window.sessionStorage.getItem(key));
};
//保存Localstorage
export const setLocalstorage = function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
};
//获取Localstorage
export const getLocalstorage = function (key) {
    return JSON.parse(window.localStorage.getItem(key));
};