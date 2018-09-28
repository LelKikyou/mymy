var sdcm = function ($, Sdcm) {
    var URL="/system/unit";//该页面接口
    //点击页面内的标题
    var title;
    var keyValue;
    var page = {
        init: function () {
            this.initLoad();
            this.event();
        },
        //事件
        event: function () {
            //刷新
            $(".sdcm-refresh").click(function () {
                location.reload();
            });
            //搜索
            $(".userBtn").click(search);
            $(".userInput").keydown(function (e) {
                if (e.which == 13) {
                    $('.userBtn').trigger("click");
                }
            });
            function search() {
                var nameValue = $(".userInput").val();
                top["listId"].name = $.trim(nameValue);
                page.refreshGirdData(top["listId"]);
            }

            //删除
            $(".sdcm-delete").click(function () {
                //获取选中的id
                var ids = $('.right-details').jfGridValue('id');
                if (!!ids) {
                    //判断选中的有没有子集
                    var value=$('.right-details').jfGridRowChildrenLength();
                    if(!value.is){
                        Sdcm.systemPrompt.layerConfirm("是否删除", function (res) {
                            if (res) {
                                ids = (ids + "").split(",");
                                Sdcm.httpAsync("post", URL+"/delete", {ids: ids}, function (data) {
                                    if (data.status === 200) {
                                        Sdcm.systemPrompt.success("成功删除" + data.data + "条数据");
                                        page.refreshGirdData(top["listId"]);
                                        $(".left-details").lrtreeSet("refresh")
                                    } else {
                                        Sdcm.systemPrompt.error("删除失败");
                                    }
                                })
                            }
                        });
                    }else {
                        Sdcm.systemPrompt.error("请先删除【"+value.name+"】的子菜单",5000);
                    }
                } else {
                    Sdcm.systemPrompt.error("请至少选择一条删除项");
                }
            });
            //新增
            $(".sdcm-add").click(function () {
                top['keyValue'] = null;
                Sdcm.layerForm({
                    title: "新增",
                    id: "from",
                    width: 800,
                    height: 600,
                    url: "system/unit/unitForm",
                    callBack: function (callBack) {
                        return top["sdcm"].confirmIng(callBack, page.refreshGirdData);
                    }
                })
            });
            //编辑
            $(".sdcm-edit").click(function () {
                keyValue = $('.right-details').jfGridValue('id');
                var id = (keyValue + "").split(",");
                if (!keyValue || id.length > 1) {
                    Sdcm.systemPrompt.error("请选择一条数据再编辑");
                    return false;
                }
                title = $('.right-details').jfGridValue('name');
                top['keyValue'] = keyValue;
                Sdcm.layerForm({
                    title: title ? title : "窗口",
                    id: "from",
                    width: 800,
                    height: 600,
                    url: "system/unit/unitForm",
                    callBack: function (callBack) {
                        return top["sdcm"].confirmIng(callBack, page.refreshGirdData);
                    }
                })
            })
        },
        //加载进来时候
        initLoad: function () {
            $(".left-details").lrtree({
                url: URL+"/rootTree",
                method: "get",
                isClick: true,
                nodeClick: function (item) {
                    $(".titleinfo").text(item.name);
                    //进来刷新jfGrid
                    top["listId"] = {
                        code: item.code,
                        level: item.level
                    };
                    page.refreshGirdData(top["listId"]);
                    var level = item.level;
                    top["upData"] = {
                        upCode: item.code,
                        level: level + 1
                    };
                }
            });
            $('.right-details').jfGrid({
                url: URL+'/children',
                isMultiselect: true,
                method: 'get',
                headData: [
                    {label: "编号", name: "code", width: 150, align: "left"},
                    {label: "名称", name: "name", width: 150, align: "left"},
                    {label: "等级", name: "level", width: 150, align: "left"},
                    {label: "排序值", name: "idx", width: 150, align: "left"},
                    {label: "备注", name: "remark", width: 150, align: "left"},
                    {
                        label: "状态", name: "enable", width: 150, align: "left", formatter: function (value) {
                            return value?"<i style='color: #ffc205;font-size: 26px' class='iconfont icon-button-on'></i>":"<i style='color: #ddd;font-size: 26px' class='iconfont icon-anniu'></i>"
                        }
                    }
                ]
            });
        },
        //刷新方法
        refreshGirdData: function (listId) {
            $('.right-details').jfGridSet('reload', {param: listId || {}});
        }
    };
    page.init();
};