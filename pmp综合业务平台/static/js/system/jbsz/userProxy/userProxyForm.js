var confirmIng;
var sdcm = function ($, Sdcm) {
    var URL="/system/lUserProxy";//该页面接口
    var keyValue = top["keyValue"];
    var page = {
        init: function () {
            page.bind();
            page.initLoad();
            $("input").attr("autocomplete", "off");
        },
        bind: function () {
            //授权人与代理人字典
            Sdcm.httpAsync("get", "/system/user/list", {}, function (res) {
                var data = res.data;
                $("#userid").lrselect({
                    data: data,
                    text: "nickname"
                });
                $("#proxyid").lrselect({
                    data: data,
                    text: "nickname"
                });
            }, "application/json")
        },
        event: function () {

        },
        //加载进来的时候
        initLoad: function () {
            if (!!keyValue) {
                Sdcm.httpAsync("get", URL+"/view", {id: keyValue}, function (data) {
                    if (data.status === 200) {
                        $(".sdcm-from").setFrom(data.data);
                    } else {
                        Sdcm.systemPrompt.error("数据加载错误")
                    }
                })
            }
        }
    };
    confirmIng = function (callBack, refreshGirdData) {
        if (!$(".sdcm-from").lrValidform()) {
            return false;
        }
        var postData = $(".sdcm-from").saveFrom();
        if (postData.userid === postData.proxyid) {
            Sdcm.systemPrompt.error("授权人不能和代理人一样", 5000);
            return false;
        }
        if (!!keyValue) {
            postData.id = keyValue;
            Sdcm.httpAsync("post", URL+"/update", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("编辑成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json");
        } else {
            Sdcm.httpAsync("post", URL+"/create", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("新增成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json");
        }
    };
    page.init();
};
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}