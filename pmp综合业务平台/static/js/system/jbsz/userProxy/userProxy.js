var sdcm = function ($, Sdcm) {
    var URL="/system/lUserProxy";//该页面接口
    var pageNum = 1;//默认显示的页数
    var pageSize = 15;//默认每页显示多少条
    var userid="";
    var proxyid="";
    var page = {
        init: function () {
            this.initLoad();
            this.event();
        },
        //事件
        event: function () {
            //搜索
            var lock = false;
            $(".top-search").click(function () {
                if (lock) {
                    $(".search-content").fadeOut(200);
                    lock = false;
                } else {
                    $(".search-content").fadeIn(200);
                    lock = true;
                }
            });
            $(".userBtn").click(function () {
                $(".search-content").fadeOut(200);
                lock = false;
                userid=$("#userid").val();
                proxyid=$("#proxyid").val();
                page.initLoad(userid,proxyid);
            });
            //新增
            $(".sdcm-add").click(function () {
                top['keyValue'] = null;
                Sdcm.layerForm({
                    title: "新增",
                    id: "from",
                    width: 800,
                    height: 600,
                    url: "/system/lUserProxy/userProxyForm",
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
            //分页每页显示多少切换
            $(".girdSelect").change(function () {
                pageSize = $(".girdSelect option:selected").text();
                pageNum=1;
                page.initLoad();
            });
        },
        //加载进来时候
        initLoad: function () {
            var headData = [{name: "", width: "3%"},
                {name: "序号",width: "5%"},
                {name: "授权人", width: "10%"},
                {name: "代理人", width: "10%"},
                {name: "工作流模板", width: "10%"},
                {name: "有效日期始",width: "21%"},
                {name: "有效日期止", width: "21%"},
                {name: "操作", width: "20%"}];

            //渲染表单头部
            page.myTemplate("gird-head", "gird-head-view", {
                headData: headData
            });

            //渲染内容
            function loadGrid() {
                Sdcm.httpAsync("get", URL+"/pageList", {
                    pageNum: pageNum,
                    pageSize: pageSize,
                    userid:userid,
                    proxyid:proxyid
                }, function (data) {
                    if (data.status === 200) {
                        data.data.width = headData;
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
                                width: 800,
                                height: 600,
                                url: "/system/lUserProxy/userProxyForm",
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
            //引入方法
            template.defaults.imports.parseDate = Sdcm.parseDate;
            $("." + uuid + "").html(template(viewId, data));
        }
    };
    page.init();
};