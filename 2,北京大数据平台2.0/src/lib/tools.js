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
