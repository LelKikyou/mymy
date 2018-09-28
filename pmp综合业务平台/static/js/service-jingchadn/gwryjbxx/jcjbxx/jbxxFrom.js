var confirmIng;
var sdcm = function ($, Sdcm) {
    var URL = "/basicdata/police/police";//该页面接口
    var keyValue = top["keyValue"];
    var page = {
        init: function () {
            page.bind();
            page.initLoad();
            page.event();
            $("input").attr("autocomplete", "off");
        },
        bind: function () {
            //滚动条
            $(".sdcm-from").mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
        },
        event: function () {
            $(".btn").click(function () {
                uploadPic()
            })
            function uploadPic() {
                var form = document.getElementById('upload'),
                    formData = new FormData(form);
                $.ajax({
                    url: "/common/fdfs/upload",
                    type: "post",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (res) {
                        if (res) {
                            alert("上传成功！");
                        }
                        console.log(res);
                        $("#pic").val("");
                        $(".showUrl").html(res);
                        $(".showPic").attr("src", res);
                    },
                    error: function (err) {
                        alert("网络连接失败,稍后重试", err);
                    }

                })
            }
        },
        //加载进来的时候
        initLoad: function () {
            if (!!keyValue) {
                Sdcm.httpAsync("get", URL + "/view", {id: keyValue}, function (data) {
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
        if (!!keyValue) {
            postData.id = keyValue;
            Sdcm.httpAsync("post", URL + "/update", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("编辑成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json");
        } else {
            Sdcm.httpAsync("post", URL + "/create", postData, function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("新增成功")
                } else {
                    Sdcm.systemPrompt.error(data.message, 5000)
                }
            });
        }
    };
    page.init();
};