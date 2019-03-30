//下载exc方法
export const downExcel = (res, name, that) => {
    let blob = res;
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(blob);
    link.download = `${name}.xlsx`;
    // 触发点击
    document.body.appendChild(link);
    link.click();
    // 然后移除
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
    that.$loading.close();
};

// timeType表示 所取时间格式为ymd(年月日)、hm（年月日 时分）、hms(年月日 时分秒)
// lineType表示年月日之间连接字符 eg:- / .
// hasTime 表示有后台时间格式 ,进行时间格式化转换
export const CurentTime = (timeType, lineType, hasTime) => {
    if (hasTime) {
        var now = new Date(hasTime);
    } else {
        var now = new Date();
    }

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds()           //秒
    var clock = year + lineType;

    if (month < 10)
        clock += "0";

    clock += month + lineType;

    if (day < 10)
        clock += "0";

    clock += day + " ";
    switch (timeType) {
        case 'ymd':
            break;
        case 'hm'    :
            if (hh < 10)
                clock += "0";

            clock += hh + ":";
            if (mm < 10) clock += '0';
            clock += mm;
            break;
        case 'hms':
            if (hh < 10)
                clock += "0";

            clock += hh + ":";
            if (mm < 10) clock += '0';
            clock += mm + ":";
            if (ss < 10) clock += '0';
            clock += ss;
    }
    return (clock);
}


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

