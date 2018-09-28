var confirmIng;
var sdcm = function ($, Sdcm) {
    var URL="/system/unit";//该页面接口
    var keyValue = top["keyValue"];
    var isEnable;    //状态值
    var page = {
        init: function () {
            page.bind();
            page.initLoad();
            $("input").attr("autocomplete", "off");
        },
        bind: function () {
            //字典下拉框
            // $("#enable").lrselect({url:"111"});
        },
        event: function () {

        },
        //加载进来的时候
        initLoad: function () {
            $("#upCode").text(top["upData"].upCode);
            $("#level").text(top["upData"].level);
            if (!!keyValue) {
                Sdcm.httpAsync("get", URL+"/view", {id: keyValue}, function (data) {
                    if (data.status === 200) {
                        //状态值赋值
                        isEnable = data.data.children.length;
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
        if (!!isEnable) {
            if (postData.enable === "0") {
                Sdcm.systemPrompt.error("必须删除子集才能禁用");
                return false;
            }
        }
        postData.level = top["upData"].level;
        postData.idx = postData.idx ? parseInt(postData.idx) : postData.idx;
        if (!!keyValue) {
            postData.id = keyValue;
            Sdcm.httpAsync("post", URL+"/update", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData(top["listId"]);
                    Sdcm.systemPrompt.success("编辑成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json");
        } else {
            Sdcm.httpAsync("post", URL+"/create", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData(top["listId"]);
                    Sdcm.systemPrompt.success("新增成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json");
        }
    };
    page.init();
};