/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()
//深拷贝
export const deepCopy = (source) => {
    var target = Array.isArray(source) ? [] : {};
    for (var k in source) {
        if (source.hasOwnProperty(k)) {   // __proto__上面的属性不拷贝
            var sourceVal = source[k];
            var typeSource = Object.prototype.toString.call(sourceVal).slice(8, -1);
            if (typeSource === 'Object' || typeSource === 'Array') {
                target[k] = deepCopy(sourceVal)
            } else {
                target[k] = sourceVal
            }
        }
    }
    return target
};
/**
 * 获取当前年月日
 * fmt输入"yyyy--mm--ddd--hh-ii-ss",也可以单个显示比如yyyy-mm-dd，符号自己可选
 * **/
export const Format = function (fmt) {
    var date = new Date();
    fmt = fmt || "yyyy-mm-dd";
    var o = {
        "m+": date.getMonth() + 1,//月份
        "d+": date.getDate(),//日
        "h+": date.getHours(),//小时
        "i+": date.getMinutes(),//分
        "s+": date.getSeconds()//秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
/**
 * 返回前一天的年月日
 * **/
export const afterDate = function () {
    let day = new Date();
    day.setTime(day.getTime() - 24 * 60 * 60 * 1000);
    return day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + (day.getDate() < 10 ? "0" + day.getDate() : (day.getDate()));
}
