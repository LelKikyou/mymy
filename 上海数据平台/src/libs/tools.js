/**工具类**/

//保存Sessionstorage
export const setSessionstorage = function (key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
};
//获取Sessionstorage
export const getSessionstorage = function (key) {
    return JSON.parse(window.sessionStorage.getItem(key));
};
//设置cookie
export const setCookie = function (key, value, options) {
    if (!key) return;
    options = options || {};
    if (value === null || typeof(value) === 'undefined') {
        value = '';
        options.expires = options.expires || -1;
    }
    if (typeof(options.expires) === 'number') {
        let days = options.expires;
        options.expires = new Date();
        options.expires.setTime(options.expires.getTime() + days * 864e+5);
    }
    document.cookie = [
        key, '=', encodeURIComponent(decodeURIComponent(value)),
        options.expires ? '; expires=' + options.expires.toUTCString() : '',
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join('');
};
//读取cookie
export const getCookie = function (key) {
    let result = {}, _cookies = document.cookie.split('; ');
    for (let i = 0; i < _cookies.length; i++)
        result[_cookies[i].split('=')[0]] = decodeURIComponent(_cookies[i].split('=')[1]);
    return key ? result[key] : result;
};