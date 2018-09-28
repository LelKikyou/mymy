var confirmIng;
var sdcm = function ($, Sdcm) {
    var URL = "/system/menu";//该页面接口
    var keyValue = top["keyValue"];
    var level = top["upData"].level;//状态值
    var isEnable;//状态值
    var directionData = {};//direction字段
    var page = {
        init: function () {
            page.bind();
            page.initLoad();
            page.event();
            $("input").attr("autocomplete", "off");
        },
        bind: function () {
        },
        event: function () {
            //菜单角色切换
            $(".menuCheck").click(function (event) {
                $(".menuPos").slideUp(100);
                $(".icon-xiangzuoxiangyou-copy").css("transform", "rotate(0)");
                var _this = $(this).siblings(".menuPos");
                var _icon = $(this).children("i");
                if (_this.css("display") === "none") {
                    _this.slideDown(100);
                    _icon.css("transform", "rotate(-90deg)")
                }
                stopBubble(event);
                document.onclick = function () {
                    _this.slideUp(100);
                    _icon.css("transform", "rotate(0)");
                    document.onclick = null;
                }
            });
            $('.menuPos').click(function (event) {
                stopBubble(event);
            });

            function stopBubble(e) {
                if (e && e.stopPropagation) {
                    e.stopPropagation();  //w3c
                } else {
                    window.event.cancelBubble = true; //IE
                }
            }
        },
        //加载进来的时候
        initLoad: function () {
            $("#upCode").text(top["upData"].upCode);
            $("#level").text(level);
            if (level === 4) {
                $(".fLevel").css("display", "block");
            }
            if (!!keyValue) {
                Sdcm.httpAsync("get", URL+"/view", {id: keyValue}, function (data) {
                    if (data.status === 200) {
                        var data = data.data;
                        //状态值赋值
                        isEnable = data.children.length;
                        $(".sdcm-from").setFrom(data);
                        //判断数据并设置值
                        if (level === 4) {
                            Sdcm.httpAsync("get", URL+"/brother", {
                                "pCode": top["upData"].upCode,
                                "pLevel": 3
                            }, function (res) {
                                var res = res.data;
                                if (res) {
                                    var delIndex;
                                    $.each(res, function (index, item) {
                                        if (data.position === item.position) {
                                            delIndex = index;
                                            return false;
                                        }
                                    });
                                    res.splice(delIndex, 1);
                                }
                                $("#direction").lrtree({
                                    data: res,
                                    isAllExpand: true,
                                    showcheck: true,
                                    nodeCheck: function (data) {
                                        if (data.checkstate) {
                                            directionData[data.id] = {
                                                "name": data.name,
                                                "direction": keyValue + "-" + data.id
                                            }
                                        } else {
                                            directionData[data.id] = "";
                                        }
                                        var _html = page.addUserShow(directionData);
                                        $(".directionBox").html(_html).find(".showDomIcon").click(function () {
                                            var dataId = $(this).parent().data("id");
                                            directionData.dataId = "";
                                            $(this).parent().remove();
                                            $("#direction").lrtreeSet("setCheck", [dataId]);
                                        });
                                    }
                                }).lrtreeSet("setCheck", page.arrData(data.direction, res));
                            });
                        }
                    } else {
                        Sdcm.systemPrompt.error("数据加载错误")
                    }
                })
            } else {
                if (level === 4) {
                    Sdcm.httpAsync("get", URL+"/brother", {
                        "pCode": top["upData"].upCode,
                        "pLevel": 3
                    }, function (res) {
                        var res = res.data;
                        $("#direction").lrtree({
                            data: res,
                            isAllExpand: true,
                            showcheck: true,
                            nodeCheck: function (data) {
                                if (data.checkstate) {
                                    directionData[data.id] = {
                                        "name": data.name,
                                        "direction": data.position
                                    }
                                } else {
                                    directionData[data.id] = "";
                                }
                                var _html = page.addUserShow(directionData);
                                $(".directionBox").html(_html).find(".showDomIcon").click(function () {
                                    var dataId = $(this).parent().data("id");
                                    directionData.dataId = "";
                                    $(this).parent().remove();
                                    $("#direction").lrtreeSet("setCheck", [dataId]);
                                });
                            }
                        });
                    });
                }
            }
        },
        //生成dom
        addUserShow: function (list) {
            var _html = "";
            var _dom;
            $.each(list, function (index, item) {
                if (item) {
                    _dom = '<div class="showDom" data-id="' + index + '">' + item.name + '<i class="iconfont icon-cha showDomIcon"></i></div>';
                    _html += _dom;
                }
            });
            return _html;
        },
        arrData: function (data, res) {
            var arr = [];
            if (data && res) {
                $.each(JSON.parse(data), function (index, item) {
                    var itemId = item.split("-")[1];
                    $.each(res, function (i, t) {
                        if (itemId == t.id) {
                            arr.push(t.id);
                        }
                    })
                })
            }
            return arr;
        }
    };
    confirmIng = function (callBack, refreshGirdData) {
        if (!$(".sdcm-from").lrValidform()) {
            return false;
        }
        var postData = $(".sdcm-from").saveFrom();
        //有第四级保存directionData
        if (level === 4) {
            var directionArr = [];
            $.each(directionData, function (index, item) {
                if (item) {
                    directionArr.push(item.direction);
                }
            });
            postData.direction = JSON.stringify(directionArr);
        }
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