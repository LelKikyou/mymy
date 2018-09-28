var sdcm = function ($, Sdcm) {
    var URL="/basicdata/police/police";//该页面接口
    var readOnly = Sdcm.DecodeHashString(location.search.replace(/^[?#]/, '')).readonly;//可读还是可操作
    var pageNum = 1;//默认显示的页数
    var pageSize = 15;//默认每页显示多少条
    var code = "";
    var name = "";
    var typeid = "";
    var status = "";
    var syoufk = "";
    var dutyid = "";
    var page = {
        init: function () {
            this.initLoad();
            this.event();
        },

        //事件
        event: function () {
            //点击展示
            var lock = false;
            $(".dropDown").click(function () {
                if (!lock) {
                    $(this).addClass("dropLock");
                    $(".dropBlack").css("display", "block");
                    $(".edit-gird").css("height", "calc(100% - 152px)");
                    lock = true;
                } else {
                    $(this).removeClass("dropLock");
                    $(".dropBlack").css("display", "none");
                    $(".edit-gird").css("height", "calc(100% - 82px)");
                    lock = false;
                }
            });
            // 查询
            $("#query").click(function () {
                code = $(".code").val();
                name = $(".name").val();
                typeid = $(".typeid").val();
                status = $(".status").val();
                syoufk = $(".syoufk").val();
                dutyid = $(".dutyid").val();
                page.refreshGirdData();
            });
            //重置
            $("#reset").click(function () {
                $(".search-input").val("");
            });
            //当为只读的时候只有查看功能
            if (readOnly !== "1") {
                //新增
                $(".sdcm-add").click(function () {
                    top['keyValue'] = null;
                    Sdcm.layerForm({
                        title: "新增",
                        id: "from",
                        width: 850,
                        height: 600,
                        url: "/basicdata/police/police/jbxxForm",
                        callBack: function (callBack) {
                            return top["sdcm"].confirmIng(callBack, page.refreshGirdData);
                        }
                    })
                });
                //    删除方法
                $(".sdcm-allDelete").click(function () {
                    var ids = [];
                    $(".check").each(function (index, value) {
                        if ($(value).prop("checked")) {
                            ids.push($(value).parent().parent().attr("data-id"));
                        }
                    });
                    if (!ids.length) {
                        Sdcm.systemPrompt.error("请选择再进行删除");
                    } else {
                        Sdcm.systemPrompt.layerConfirm("是否删除这" + ids.length + "条数据", function (res) {
                            if (res) {
                                Sdcm.httpAsync("post", URL+"/delete", {ids: ids}, function (data) {
                                    if (data.status === 200) {
                                        Sdcm.systemPrompt.success("成功删除" + data.data + "条数据");
                                        page.refreshGirdData();
                                    } else {
                                        Sdcm.systemPrompt.error("删除失败");
                                    }
                                })
                            }
                        })
                    }
                });
            }
            //分页每页显示多少切换
            $(".girdSelect").change(function () {
                pageSize = $(".girdSelect option:selected").text();
                pageNum = 1;
                page.initLoad();
            });
        },
        //加载进来时候
        initLoad: function () {
            if (readOnly === "1") {
                $(".sdcm-list").css("display", "none");
            }
            var headData = readOnly === "0" ? [{name: "", width: "3%"},
                {name: "序号", width: "5%"},
                {name: "警号/编号", width: "10%"},
                {name: "姓名", width: "10%"},
                {name: "人员类型", width: "10%"},
                {name: "人员状态", width: "10%"},
                {name: "所属部门", width: "16%"},
                {name: "职务", width: "15%"},
                {name: "操作", width: "21%"}] : [{name: "序号", width: "5%"},
                {name: "警号/编号", width: "10%"},
                {name: "姓名", width: "10%"},
                {name: "人员类型", width: "10%"},
                {name: "人员状态", width: "10%"},
                {name: "所属部门", width: "16%"},
                {name: "职务", width: "18%"},
                {name: "操作", width: "21%"}];
            //渲染表单头部
            page.myTemplate("gird-head", "gird-head-view", {
                headData: headData
            });

            //渲染内容
            function loadGrid() {
                Sdcm.httpAsync("get",URL+"/pageList", {
                    pageNum: pageNum,
                    pageSize: pageSize,
                    code: code,
                    name: name,
                    typeid: typeid,
                    status: status,
                    syoufk: syoufk,
                    dutyid:dutyid
                }, function (data) {
                    if (data.status === 200) {
                        data.data.width = headData;
                        data.data.readOnly = readOnly;
                        page.myTemplate("gird-body", "gird-body-view", {
                            bodyData: data.data
                        });
                        //滚动条
                        $(".girdBox").mCustomScrollbar({ // 优化滚动条
                            theme: "minimal-dark"
                        });
                        //渲染分页
                        $(".pageNum").text(data.data.pages);
                        $(".total").text(data.data.total);
                        $.myPaginbar({ // 分页条
                            num: 3,//显示能点击的页码数
                            size: pageSize,//每页多少条数据
                            total: data.data.pages,//总共多少页
                            index: pageNum, // 当前页码
                            paginbar: "rolePaginbar", // 容器ID
                            callback: function (obj, index, size, total) { // 点击页码回调
                                pageNum = index;
                                loadGrid();
                            }
                        });
                        //查看功能
                        $(".sdcm-look").click(function () {

                        });
                        //当为只读的时候只有查看功能
                        if (readOnly !== "1") {
                            //单个删除事件
                            $(".sdcm-delete").click(function () {
                                var $this = $(this);
                                Sdcm.systemPrompt.layerConfirm("是否删除", function (res) {
                                    if (res) {
                                        var ids = [$this.parent().attr("data-id")];
                                        Sdcm.httpAsync("post", URL+"/delete", {ids: ids}, function (data) {
                                            if (data.status === 200) {
                                                Sdcm.systemPrompt.success("成功删除" + data.data + "条数据");
                                                page.refreshGirdData();
                                            } else {
                                                Sdcm.systemPrompt.error("删除失败");
                                            }
                                        })
                                    }
                                })
                            });
                            //单个编辑
                            $(".sdcm-edit").click(function () {
                                var id = $(this).parent().attr("data-id");
                                top['keyValue'] = id;
                                Sdcm.layerForm({
                                    title: "编辑",
                                    id: "from",
                                    width: 850,
                                    height: 600,
                                    url: "/basicdata/police/police/jbxxForm",
                                    callBack: function (callBack) {
                                        return top["sdcm"].confirmIng(callBack, page.refreshGirdData);
                                    }
                                });
                            });
                            //批量删除
                            //    点击按钮全部选择还有关闭
                            $(".allCheck").click(function () {
                                if ($(this).prop("checked")) {
                                    $(".check").prop("checked", true);
                                } else {
                                    $(".check").prop("checked", false);
                                }
                            });
                        }
                    } else {
                        Sdcm.systemPrompt.error(data.message, 4000);
                    }
                })
            }

            loadGrid();
        },
        //刷新方法
        refreshGirdData: function () {
            page.initLoad();
        },
        //模板封装
        myTemplate: function (uuid, viewId, data) {
            $("." + uuid + "").html(template(viewId, data));
        }
    };
    page.init();
};