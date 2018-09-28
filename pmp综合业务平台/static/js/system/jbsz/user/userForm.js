var confirmIng;
var sdcm = function ($, Sdcm) {
    var URL="/system/user";//该页面接口
    var keyValue = top["keyValue"];
    var datalinkMenuRoleList = {};//菜单角色变量
    var datalinkWfRoleList = {};//工作流角色变量
    var datalinkUnitList = {};//兼职部门
    var datalinkPositionList = {};//兼职职务
    //编辑时候的变量
    var linkMenuRoleList = {};
    var linkWfRoleList = {};
    var linkPositionList = {};
    var linkUnitList = {};
    var password;
    var page = {
        init: function () {
            page.initLoad();
            page.bind();
            page.event();
            $("input").attr("autocomplete", "off");
        },
        bind: function () {
            //优化滚动条
            //滚动条
            $(".sdcm-from").mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
            $("#linkMenuRoleList").mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
            $("#linkWfRoleList").mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
            $("#linkUnitList").mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
            $("#linkPositionList").mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
            //字典下拉框菜单角色
            Sdcm.httpAsync("get", "/system/menuRole/list", {}, function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    $(".linkMenuRoleList").lrtree({
                        data: data,
                        isAllExpand: true,
                        showcheck: true,
                        nodeCheck: function (data) {
                            if (data.checkstate) {
                                datalinkMenuRoleList[data.id] = {
                                    menuroleid: data.id,
                                    name: data.name,
                                    enable: 0,
                                    id: 0,
                                    userid: 0
                                };
                            } else {
                                datalinkMenuRoleList[data.id] = "";
                            }
                            var _html = page.addUserShow(datalinkMenuRoleList);
                            $(".linkMenuRoleListBox").html(_html).find(".showDomIcon").click(function () {
                                var dataId = $(this).parent().data("id");
                                datalinkMenuRoleList.dataId = "";
                                $(this).parent().remove();
                                $(".linkMenuRoleList").lrtreeSet("setCheck", [dataId]);
                            });
                            //菜单角色必填验证
                            var btArr = $(".linkMenuRoleList").lrtreeSet("getCheckNodes");
                            $(".btMenu").data("bt", btArr.length);
                        }
                    });
                }
            }, "application/json");
            //字典下拉工作流角色
            Sdcm.httpAsync("get", "/system/workflowRole/list", {}, function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    $(".linkWfRoleList").lrtree({
                        data: data,
                        isAllExpand: true,
                        showcheck: true,
                        nodeCheck: function (data) {
                            if (data.checkstate) {
                                datalinkWfRoleList[data.id] = {
                                    wfroleid: data.id,
                                    name: data.name,
                                    enable: 0,
                                    id: 0,
                                    userid: 0
                                };
                            } else {
                                datalinkWfRoleList[data.id] = "";
                            }
                            var _html = page.addUserShow(datalinkWfRoleList);
                            $(".linkWfRoleListBox").html(_html).find(".showDomIcon").click(function () {
                                var dataId = $(this).parent().data("id");
                                datalinkWfRoleList.dataId = "";
                                $(this).parent().remove();
                                $(".linkWfRoleList").lrtreeSet("setCheck", [dataId]);
                            });
                        }
                    });
                }
            }, "application/json");
            //字典下拉兼职部门
            Sdcm.httpAsync("get", "/system/unit/list", {}, function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    //所属部门字典
                    $("#unitFromtype").lrselect({
                        data: data,
                        text: "name"
                    }).attr("type", "lrselectUser");
                    $(".linkUnitList").lrtree({
                        data: data,
                        isAllExpand: true,
                        showcheck: true,
                        nodeCheck: function (data) {
                            if (data.checkstate) {
                                datalinkUnitList[data.id] = {
                                    unitid: data.id,
                                    name: data.name,
                                    enable: 0,
                                    id: 0,
                                    userid: 0
                                };
                            } else {
                                datalinkUnitList[data.id] = "";
                            }
                            var _html = page.addUserShow(datalinkUnitList);
                            $(".linkUnitListBox").html(_html).find(".showDomIcon").click(function () {
                                var dataId = $(this).parent().data("id");
                                datalinkUnitList.dataId = "";
                                $(this).parent().remove();
                                $(".linkUnitList").lrtreeSet("setCheck", [dataId]);
                            });
                        }
                    });
                }
            }, "application/json");
            //字典下拉兼职职务
            Sdcm.httpAsync("get", "/system/position/list", {}, function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    //所属职务字典
                    $("#positionFromtype").lrselect({
                        data: data,
                        text: "name"
                    }).attr("type", "lrselectUser");
                    $(".linkPositionList").lrtree({
                        data: data,
                        isAllExpand: true,
                        showcheck: true,
                        nodeCheck: function (data) {
                            if (data.checkstate) {
                                datalinkPositionList[data.id] = {
                                    positionid: data.id,
                                    name: data.name,
                                    enable: 0,
                                    id: 0,
                                    userid: 0
                                };
                            } else {
                                datalinkPositionList[data.id] = "";
                            }
                            var _html = page.addUserShow(datalinkPositionList);
                            $(".linkPositionListBox").html(_html).find(".showDomIcon").click(function () {
                                var dataId = $(this).parent().data("id");
                                datalinkPositionList.dataId = "";
                                $(this).parent().remove();
                                $(".linkPositionList").lrtreeSet("setCheck", [dataId]);
                            });
                        }
                    });
                }
            }, "application/json");
        },
        event: function () {
            //菜单角色切换
            $(".userCheck").click(function (event) {
                $(".userPos").slideUp(100);
                $(".icon-xiangzuoxiangyou-copy").css("transform", "rotate(0)");
                var _this = $(this).siblings(".userPos");
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
            $('.userPos').click(function (event) {
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
            if (!!keyValue) {
                $("#pwd").prop("type", "password");
                Sdcm.httpAsync("get", URL+"/view", {id: keyValue}, function (data) {
                    if (data.status === 200) {
                        $(".sdcm-from").setFrom(data.data);
                        linkMenuRoleList = data.data.linkMenuRoleList;
                        $(".linkMenuRoleList").lrtreeSet("setCheck", page.objToArr(linkMenuRoleList, "menuroleid"));
                        linkWfRoleList = data.data.linkWfRoleList;
                        $(".linkWfRoleList").lrtreeSet("setCheck", page.objToArr(linkWfRoleList, "wfroleid"));
                        linkPositionList = data.data.linkPositionList;
                        $(".linkPositionList").lrtreeSet("setCheck", page.objToArr(linkPositionList, "positionid"));
                        linkUnitList = data.data.linkUnitList;
                        $(".linkUnitList").lrtreeSet("setCheck", page.objToArr(linkUnitList, "unitid"));
                        //密码处理
                        password = data.data.pwd;
                        //第一次按下删除键全部删除
                        $("#pwd").keydown(function (e) {
                            if (e.keyCode === 8) {
                                $(this).val("").unbind("keydown");
                            }
                        })
                    } else {
                        Sdcm.systemPrompt.error("数据加载错误")
                    }
                })
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
        //转换数据
        objToArr: function (obj, type) {
            var arr = [];
            $.each(obj, function (index, item) {
                if (item.fromtype === 1) {
                    type === "positionid" ? $("#positionFromtype").lrselectSet(item[type]) : $("#unitFromtype").lrselectSet(item[type])
                } else {
                    arr.push(item[type])
                }
            });
            return arr;
        },
        //得到保存数据
        getData: function (data, fromtype) {
            var arrData = [];
            $.each(data, function (index, item) {
                if (item) {
                    if (fromtype) {
                        item.fromtype ? item["fromtype"] = 1 : item["fromtype"] = 0;
                        arrData.push(item)
                    } else {
                        arrData.push(item)
                    }
                }
            });
            return arrData;
        }
    };
    confirmIng = function (callBack, refreshGirdData) {
        if (!$(".sdcm-from").lrValidform()) {
            return false;
        }
        var postData = $(".sdcm-from").saveFrom();
        //装载菜单角色datalinkMenuRoleList
        postData.linkMenuRoleList = page.getData(datalinkMenuRoleList);
        //装载工作流角色变量datalinkWfRoleList
        postData.linkWfRoleList = page.getData(datalinkWfRoleList);
        //装载兼职部门datalinkUnitList
        var unitId = $("#unitFromtype").lrselectGet("tree");
        if (datalinkUnitList[unitId]) {
            Sdcm.systemPrompt.error("部门不能相同");
            return false;
        } else {
            datalinkUnitList[unitId] = {
                unitid: unitId,
                fromtype: 1,
                enable: 0,
                id: 0,
                userid: 0,
                name: "string"
            };
        }
        postData.linkUnitList = page.getData(datalinkUnitList, true);
        datalinkUnitList[unitId] = "";
        //装载兼职职务datalinkPositionList
        var positionId = $("#positionFromtype").lrselectGet("tree");
        if (datalinkPositionList[positionId]) {
            Sdcm.systemPrompt.error("职务不能相同");
            return false;
        } else {
            datalinkPositionList[positionId] = {
                positionid: positionId,
                fromtype: 1,
                enable: 0,
                id: 0,
                userid: 0,
                name: "string"
            };
        }
        postData.linkPositionList = page.getData(datalinkPositionList, true);
        datalinkPositionList[positionId] = "";

        //判断创建还是保存
        if (!!keyValue) {
            postData.id = keyValue;
            if (postData.pwd != password) {
                postData.pwd = $.md5(postData.pwd);
            }
            Sdcm.httpAsync("post", URL+"/update", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("修改成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json")
        } else {
            postData.pwd = $.md5(postData.pwd);
            Sdcm.httpAsync("POST", URL+"/create", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("新增成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json")
        }
    };
    page.init();
};