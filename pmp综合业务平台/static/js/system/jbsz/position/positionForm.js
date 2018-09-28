var confirmIng;
var sdcm=function ($,Sdcm) {
    var URL="/system/position";//该页面接口
    var keyValue=top["keyValue"];
    var page={
        init:function () {
            page.bind();
            page.initLoad();
            $("input").attr("autocomplete","off");
        },
        bind:function () {
            //字典下拉框
            // $("#enable").lrselect({url:"111"});
        },
        event:function () {

        },
        //加载进来的时候
        initLoad:function () {
            if(!!keyValue){
                Sdcm.httpAsync("get",URL+"/view",{id:keyValue},function (data) {
                    if(data.status===200){
                        $(".sdcm-from").setFrom(data.data);
                    }else {
                        Sdcm.systemPrompt.error("数据加载错误")
                    }
                })
            }
        }
    };
    confirmIng=function(callBack,refreshGirdData){
        if(!$(".sdcm-from").lrValidform()){
            return false;
        }
        var postData=$(".sdcm-from").saveFrom();
        postData.idx=postData.idx?parseInt(postData.idx):postData.idx;
        if(!!keyValue){
            postData.id=keyValue;
            Sdcm.httpAsync("post",URL+"/update",JSON.stringify(postData),function (data) {
                if(data.status===200){
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("编辑成功")
                }else {
                    Sdcm.systemPrompt.error(data.message)
                }
            },"application/json");
        }else {
            Sdcm.httpAsync("post",URL+"/create",JSON.stringify(postData),function (data) {
                if(data.status===200){
                    callBack();
                    refreshGirdData();
                    Sdcm.systemPrompt.success("新增成功")
                }else {
                    Sdcm.systemPrompt.error(data.message)
                }
            },"application/json");
        }
    };
    page.init();
};