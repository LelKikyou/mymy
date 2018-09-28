top.Sdcm = (function ($) {
    var Sdcm = {
        frameTab: {},
        // ajax封装
        httpAsync: function (type, url, param, callback, contentType) {
            $.ajax({
                url: url,
                data: param,
                type: type,
                dataType: "json",
                contentType: contentType ? contentType : "application/x-www-form-urlencoded",
                async: true,
                cache: false,
                success: function (res) {
                    if (res.status === 401) {
                        location.href = "";
                        return false;
                    }
                    callback(res)
                },
                error: function (data) {
                },
                beforeSend: function () {
                },
                complete: function () {
                }
            });
        },
        //表单弹窗封装
        layerForm: function (op) {
            var dfop = {
                id: null,
                title: '系统窗口',
                width: 550,
                height: 400,
                url: '/error/404',
                btn: ['确认', '关闭'],
                callBack: false,
                end: false
            };
            $.extend(dfop, op || {});
            /*适应窗口大小*/
            dfop.width = dfop.width > $(window).width() ? $(window).width() - 10 : dfop.width;
            dfop.height = dfop.height > $(window).height() ? $(window).height() - 10 : dfop.height;
            top.layer.open({
                id: dfop.id,
                type: 2,
                title: dfop.title,
                area: [dfop.width + 'px', dfop.height + 'px'],
                btn: dfop.btn,
                content: dfop.url,
                skin: "sdcm_layer",
                success: function (layero, index) {
                    var id = layero.find("iframe").attr("id");
                    top["sdcm"] = top.frames[id];
                },
                btn1: function (index, layero) {
                    dfop.callBack(close);

                    function close() {
                        top.layer.close(index)
                    }
                }
            })
        },
        //系统弹出提示
        systemPrompt: {
            // 错误提示
            error: function (mes, time) {
                var timeValue = time ? time : 2000;
                $this = $('<div class="systemInfo err systemNum' + top["prompt1"] + '"><div class="systemIcon"><i class="iconfont icon-gantanhao3"></i></div><div class="systemMes"> 用户操作错误，<br/>' + mes + ' </div><div class="systemCha"><i class="iconfont icon-cha"></i></div></div>');
                if ($("body").find(".systemPrompt").length > 0) {
                    $(".systemPrompt").prepend($this);
                    $this.animate({opacity: 1}, 300)
                } else {
                    $("body").append('<div class="systemPrompt"></div>');
                    $(".systemPrompt").prepend($this);
                    $this.animate({opacity: 1}, 300)
                }
                var _time = setTimeout(function () {
                    $('.systemNum' + top["prompt2"] + '').animate({opacity: 0}, 300, function () {
                        $(this).remove();
                        clearTimeout(_time);
                    });
                    top["prompt2"]++;
                }, timeValue);
                top["prompt1"]++;
            },
            //成功提示
            success: function (mes, time) {
                var timeValue = time ? time : 2000;
                $this = $('<div class="systemInfo suc systemNum' + top["prompt1"] + '"><div class="systemIcon"><i class="iconfont icon-ziyuan"></i></div><div class="systemMes mesSuc">' + mes + ' </div><div class="systemCha"><i class="iconfont icon-cha"></i></div></div>');
                if ($("body").find(".systemPrompt").length > 0) {
                    $(".systemPrompt").prepend($this);
                    $this.animate({opacity: 1}, 300)
                } else {
                    $("body").append('<div class="systemPrompt"></div>');
                    $(".systemPrompt").prepend($this);
                    $this.animate({opacity: 1}, 300)
                }
                var _time = setTimeout(function () {
                    $('.systemNum' + top["prompt2"] + '').animate({opacity: 0}, 300, function () {
                        $(this).remove();
                        clearTimeout(_time);
                    });
                    top["prompt2"]++;
                }, timeValue);
                top["prompt1"]++;
            },
            //删除等需要二次确认的弹窗封装
            layerConfirm: function (mes, callback) {
                top.layer.confirm(mes, {
                    id: "layerConfirm",
                    title: '温馨提示',
                    btn: ['确认', '关闭'],
                    area: ["260px", "140px"],
                    icon: 0,
                    skin: "sdcm_layer"
                }, function (index) {
                    callback(true);
                    top.layer.close(index); //再执行关闭
                }, function (index) {
                    callback(false);
                    top.layer.close(index); //再执行关闭
                });
            }
        },
        //时间格式化 对 2018-08-02T06:33:25.000+0000 进行转换为yy-mm-dd hh：mm：ss
        parseDate: function (value) {
            if (!!value) {
                var d = new Date(value);
                var times = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
                return times;
            } else {
                return "时间格式错误";
            }
        },
        //获取url后面的值转换为hash对象,键值对转对象
        DecodeHashString: function (str, sign, flag) {
            var arr = str ? str.split(sign == null ? '&' : sign) : [];
            var hashs = {};
            var reg = new RegExp('(^|' + (flag || '&') + ')([^' + (sign || '=') + ']*)' + (sign || '=') + '([^' + (flag || '&') + ']*)(' + (flag || '&') + '|$)', 'i');
            for (var i = 0, l = arr.length; i < l; i++) {
                var parts = arr[i].match(reg) || [];
                if (parts[2] !== '') {
                    hashs[parts[2]] = decodeURI(parts[3] == null ? '' : parts[3]);
                }
            }
            return hashs;
        }
    };
    return Sdcm;
})
(window.$);