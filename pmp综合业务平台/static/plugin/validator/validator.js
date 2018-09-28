(function ($, Sdcm) {
    "use strict";
    Sdcm.lrValidformMessage = function ($this, errormsg) {
        /*错误处理*/
        $this.addClass('sdcm-file-error');
        var top = $this.outerHeight(true) + 12;
        $this.parent().append('<div class="sdcm-file-error-info" style="top:' + top + 'px"><i class="iconfont icon-baocuo sdcm-file-error-info-i"></i><p class="sdcm-file-error-info-p">' + errormsg + '</p></div>');
        if ($this.attr('type') == 'lrselect' || $this.attr('type') == 'lrselectUser') {
            $this.on('change', function () {
                removeErrorMessage($(this));
            });
        }
        //时间插件
        else if ($this.hasClass('sdcm-input-wdatepicker')) {
            $this.on('change', function () {
                removeErrorMessage($(this));

            });
        }
        else if ($this.attr('type') == 'userMenuRole') {
            $this.on("click", function () {
                var $input = $(this);
                if (!$input.data("bt")) {
                    removeErrorMessage($input);
                }
            })
        }
        else {
            $this.on('input propertychange', function () {
                removeErrorMessage($(this));

            });
        }
    };
    $.fn.lrValidform = function () {
        var validateflag = true;
        var validHelper = Sdcm.validator;
        $(this).find("[isvalid=yes]").each(function () {
            var $this = $(this);
            //防止重复
            if ($this.parent().find('.sdcm-file-error-info').length > 0) {
                validateflag = false;
                return true;
            }
            var checkexpession = $(this).attr("checkexpession");
            var checkfn = validHelper['is' + checkexpession];
            if (!checkexpession || !checkfn) {
                return false;
            }
            var errormsg = $(this).attr("errormsg") || "";
            var value;
            //不同类型值的验证
            var type = $this.attr('type');
            // 有字典的情况下
            if (type == 'lrselect') {
                value = $this.lrselectGet();
                value === "-1" ? value = "" : value;
            } else if (type == 'lrselectUser') {
                //用户特殊情况
                value = $this.lrselectGet();
                value === "-1" ? value = "" : value;
            } else if (type == 'select') {
                value = $this.find("option:selected").text();
            } else if (type == 'userMenuRole') {
                value = $this.data("bt");
                value === 0 ? value = "" : value;
            }
            else {
                value = $this.val();
            }
            var r = {code: true, msg: ''};
            if (checkexpession == 'LenNum' || checkexpession == 'LenNumOrNull' || checkexpession == 'LenStr' || checkexpession == 'LenStrOrNull') {
                var len = $this.attr("length");
                r = checkfn(value, len);
            } else {
                r = checkfn(value);
            }
            if (!r.code) {
                validateflag = false;
                if (errormsg) {
                    Sdcm.lrValidformMessage($this, errormsg);
                } else {
                    Sdcm.lrValidformMessage($this, r.msg);
                }
            }
        });
        return validateflag;
    }

    function removeErrorMessage($obj) {
        $obj.removeClass('sdcm-file-error');
        $obj.parent().find('.sdcm-file-error-info').remove();
    }

})($, top.Sdcm)