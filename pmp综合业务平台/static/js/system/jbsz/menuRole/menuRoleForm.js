var confirmIng;
var sdcm = function ($, Sdcm) {
    var keyValue = top["keyValue"];
    var page = {
        init: function () {
            page.bind();
            page.initLoad();
            $("input").attr("autocomplete", "off");
        },
        bind: function () {
        },
        event: function () {

        },
        //加载进来的时候
        initLoad: function () {
            Sdcm.httpAsync("get","/system/menu/rootTree/3",{},function (res) {
              if(res.status===200){
                  var data=res.data[0].children;
                  $(".right-content").lrtree({
                      data:data,
                      isAllExpand: true,
                      isDisable: true
                  },load);
              }
            });
            function load() {
                if (!!keyValue) {
                    Sdcm.httpAsync("get", "/system/menuRole/view", {id: keyValue}, function (data) {
                        if (data.status === 200) {
                            $(".sdcm-from").setFrom(data.data);
                            //给树形结构赋值
                            if(data.data.linkMenuList.length){
                                var arr=[];
                                $.each(data.data.linkMenuList, function (index,value) {
                                    arr.push({
                                        readonly:value.readonly,
                                        menuroleid:value.menuroleid,
                                        menuid:value.menuid
                                    })
                                });
                                $(".right-content").lrtreeSet("setCheckAndReadonly",arr);
                            }
                            $(".right-content").find(".lr-tree-root>li>div").each(function (index,item) {
                                var path = $(item).attr('tpath');
                                var node = $.lrtree.getItem(path,$(".right-content")[0]._lrtree.dfop);
                                if(!node.checkstate){
                                    $(item).find(".lr-tree-ec-icon").trigger('click');
                                }
                            });
                        } else {
                            Sdcm.systemPrompt.error("数据加载错误")
                        }
                    })
                }
            }
        }
    };
    confirmIng = function (callBack, refreshGirdData) {
        if(!$(".sdcm-from").lrValidform()){
            return false;
        }
        var postData = $(".sdcm-from").saveFrom();
        var linkMenuList = [];
        var getData = $(".right-content").lrtreeSet("getCheckNodes");
        // return false;
        $.each(getData, function (index, value) {
            var menuList = {
                "id":0,
                "menuid": value.id,
                "menuroleid": keyValue?keyValue:0,
                "readonly": value.readonly
            };
            linkMenuList.push(menuList);
        });
        postData.linkMenuList = linkMenuList;
        postData.enable = parseInt(postData.enable);
        if (!keyValue) {
            Sdcm.httpAsync("post", "/system/menuRole/create", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("新增成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json")
        }else {
            postData.id=keyValue;
            Sdcm.httpAsync("post", "/system/menuRole/update", JSON.stringify(postData), function (data) {
                if (data.status === 200) {
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("修改成功")
                } else {
                    Sdcm.systemPrompt.error(data.message)
                }
            }, "application/json")
        }
    };
    page.init();
};