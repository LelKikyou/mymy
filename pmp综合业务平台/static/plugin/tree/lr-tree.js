(function ($, learun) {
    "use strict";
    $.lrtree = {
        isNotNull: function (obj) {// 验证不为空
            var res = {code: true};
            obj = $.trim(obj);
            if (obj == null || obj == undefined || obj.length === 0) {
                res.code = false;
            }
            return res;
        },
        getItem: function (path, dfop) {
            var ap = path.split(".");
            var t = dfop.data;
            for (var i = 0; i < ap.length; i++) {
                if (i === 0) {
                    t = t[ap[i]];
                }
                else {
                    t = t.children[ap[i]];
                }
            }
            return t;
        },
        render: function ($self) {
            var dfop = $self[0]._lrtree.dfop;
            // 渲染成树
            var $treeRoot = $('<ul class="lr-tree-root" ></ul>');
            var _len = dfop.data.length;
            for (var i = 0; i < _len; i++) {
                var $node = $.lrtree.renderNode(dfop.data[i], 0, i, dfop);
                $treeRoot.append($node);
            }
            $self.append($treeRoot);
            $self.mCustomScrollbar({ // 优化滚动条
                theme: "minimal-dark"
            });
            dfop = null;
        },
        renderNode: function (node, deep, path, dfop) {
            node.showcheck = dfop.showcheck;
            if (!node.children) {
                node.children = [];
            }
            if (node.children.length) {
                node.hasChildren = true;
            }
            //默认变为true
            node.complete = true;

            //为isDisable开启
            if (dfop.isDisable) {
                if (node.enable) {
                    node.showcheck = true;
                }
            }

            if (node.shide) {
                return "";
            }

            node._deep = deep;
            node._path = path;
            // 渲染成单个节点
            // var nid = node.id.replace(/[^\w]/gi, "_");
            var nid = node.id;
            var title = node.title || node.name;
            var $node = $('<li class="lr-tree-node"></li>');
            var $nodeDiv = $('<div id="' + dfop.id + '_' + nid + '" tpath="' + path + '" title="' + title + '"  dataId="' + dfop.id + '"  class="lr-tree-node-el" ></div>');
            if (node.hasChildren) {
                var c = (node.isexpand || dfop.isAllExpand) ? 'lr-tree-node-expanded' : 'lr-tree-node-collapsed';
                $nodeDiv.addClass(c);
            }
            else {
                $nodeDiv.addClass('lr-tree-node-leaf');
            }
            // span indent
            var $span = $('<span class="lr-tree-node-indent"></span>');
            if (deep === 1) {
                $span.append('<img class="lr-tree-icon" src="' + dfop.cbiconpath + 's.gif"/>');
            }
            else if (deep > 1) {
                $span.append('<img class="lr-tree-icon" src="' + dfop.cbiconpath + 's.gif"/>');
                for (var j = 1; j < deep; j++) {
                    $span.append('<img class="lr-tree-icon" src="' + dfop.cbiconpath + 's.gif"/>');
                }
            }
            $nodeDiv.append($span);
            // img
            var $img = $('<img class="lr-tree-ec-icon" src="' + dfop.cbiconpath + 's.gif"/>');
            $nodeDiv.append($img);
            // checkbox
            if (node.showcheck) {
                if (node.checkstate == null || node.checkstate == undefined) {
                    node.checkstate = 0;
                }
                var $checkBox = $('<img  id="' + dfop.id + '_' + nid + '_cb" + class="lr-tree-node-cb" src="' + dfop.cbiconpath + dfop.icons[node.checkstate] + '" />');
                $nodeDiv.append($checkBox);
                //增加禁用
            } else if (dfop.isDisable) {
                var $checkBox = $('<i style="vertical-align: middle;font-size: 20px;" class="iconfont icon-jinyong"></i>');
                $nodeDiv.append($checkBox);
            }
            // 显示的小图标
            if (node.icon !== -1) {
                if (!!node.icon) {
                    $nodeDiv.append('<i class="iconfont ' + node.icon + '"></i>&nbsp;');
                } else if (node.hasChildren) {
                    if (node.isexpand || dfop.isAllExpand) {
                        $nodeDiv.append('<i class="iconfont icon-icon-test" style="width:15px">&nbsp;</i>');
                    }
                    else {
                        $nodeDiv.append('<i class="fa fa-folder" style="width:15px">&nbsp;</i>');
                    }
                }
                else {
                    $nodeDiv.append('<i class="iconfont icon-wenjian"></i>&nbsp;');
                }
            }
            // a
            var ahtml = '<a class="lr-tree-node-anchor" href="javascript:void(0);">';
            ahtml += '<span data-value="' + node.id + '" class="lr-tree-node-text" >' + node.name + '</span>';
            ahtml += '</a>';

            //当等于3级菜单时候增加只读
            if (node.level === 3 && dfop.isDisable && node.showcheck) {
                if (node.readonly) {
                    ahtml += '<div class="lr-tree-node-read" id="readonly">只读</div>'
                } else {
                    ahtml += '<div class="lr-tree-node-read" id="readonly">全部操作</div>'
                }
            }
            $nodeDiv.append(ahtml);
            // 节点事件绑定
            $nodeDiv.on('click', $.lrtree.nodeClick);

            if (!node.complete) {
                $nodeDiv.append('<div class="lr-tree-loading"><img class="lr-tree-ec-icon" src="' + dfop.cbiconpath + 'loading.gif"/></div>');
            }

            $node.append($nodeDiv);
            if (node.hasChildren) {
                var $treeChildren = $('<ul  class="lr-tree-node-ct" >');
                if (!node.isexpand && !dfop.isAllExpand) {
                    $treeChildren.css('display', 'none');
                }
                if (node.children) {
                    var l = node.children.length;
                    for (var k = 0; k < l; k++) {
                        node.children[k].parent = node;
                        var $childNode = $.lrtree.renderNode(node.children[k], deep + 1, path + "." + k, dfop);
                        $treeChildren.append($childNode);
                    }
                    $node.append($treeChildren);
                }
            }
            node.render = true;
            dfop = null;
            return $node;
        },
        renderNodeAsync: function ($this, node, dfop) {
            var $treeChildren = $('<ul  class="lr-tree-node-ct" >');
            if (!node.isexpand && !dfop.isAllExpand) {
                $treeChildren.css('display', 'none');
            }
            if (node.children) {
                var l = node.children.length;
                for (var k = 0; k < l; k++) {
                    node.children[k].parent = node;
                    var $childNode = $.lrtree.renderNode(node.children[k], node._deep + 1, node._path + "." + k, dfop);
                    $treeChildren.append($childNode);
                }
                $this.parent().append($treeChildren);
            }
            return $treeChildren;
        },
        renderToo: function ($self) {
            var dfop = $self[0]._lrtree.dfop;
            // 渲染成树
            var $treeRoot = $self.find('.lr-tree-root');
            $treeRoot.html('');
            var _len = dfop.data.length;
            for (var i = 0; i < _len; i++) {
                var $node = $.lrtree.renderNode(dfop.data[i], 0, i, dfop);
                $treeRoot.append($node);
            }
            dfop = null;
        },
        nodeClick: function (e) {
            var et = e.target || e.srcElement;
            var $this = $(this);
            var $parent = $('#' + $this.attr('dataId'));
            var dfop = $parent[0]._lrtree.dfop;
            if (et.tagName == 'IMG') {
                var $et = $(et);
                var $ul = $this.next('.lr-tree-node-ct');
                if ($et.hasClass("lr-tree-ec-icon")) {
                    if ($this.hasClass('lr-tree-node-expanded')) {
                        $ul.slideUp(200, function () {
                            $this.removeClass('lr-tree-node-expanded');
                            $this.addClass('lr-tree-node-collapsed');
                        });
                    }
                    else if ($this.hasClass('lr-tree-node-collapsed')) {
                        // 展开
                        var path = $this.attr('tpath');
                        var node = $.lrtree.getItem(path, dfop);
                        if (!node.complete) {
                            if (!node._loading) {
                                node._loading = true;// 表示正在加载数据
                                $this.find('.lr-tree-loading').show();
                                learun.httpAsync('GET', dfop.url, {parentId: node.id}, function (data) {
                                    if (!!data) {
                                        node.children = data;
                                        $ul = $.lrtree.renderNodeAsync($this, node, dfop);
                                        $ul.slideDown(200, function () {
                                            $this.removeClass('lr-tree-node-collapsed');
                                            $this.addClass('lr-tree-node-expanded');
                                        });
                                        node.complete = true;
                                        $this.find('.lr-tree-loading').hide();
                                    }
                                    node._loading = false;
                                });
                            }
                        }
                        else {
                            $ul.slideDown(200, function () {
                                $this.removeClass('lr-tree-node-collapsed');
                                $this.addClass('lr-tree-node-expanded');
                            });
                        }
                    }

                }
                else if ($et.hasClass("lr-tree-node-cb")) {
                    var path = $this.attr('tpath');
                    var node = $.lrtree.getItem(path, dfop);
                    if (node.checkstate === 1) {
                        node.checkstate = 0;
                    }
                    else {
                        node.checkstate = 1;
                    }
                    $et.attr('src', dfop.cbiconpath + dfop.icons[node.checkstate]);
                    $.lrtree.checkChild($.lrtree.check, node, node.checkstate, dfop);
                    $.lrtree.checkParent($.lrtree.check, node, node.checkstate, dfop);
                    if (!!dfop.nodeCheck) {
                        dfop.nodeCheck(node, $this);
                    }
                }
            }
            //菜单角色操作点击可读的修改
            else if ($(et).attr("id") === "readonly") {
                var path = $this.attr('tpath');
                var node = $.lrtree.getItem(path, dfop);
                if (node.readonly) {
                    node.readonly = 0;
                    $(et).text("全部操作")
                } else {
                    node.readonly = 1;
                    $(et).text("只读")
                }
            }
            else {
                var path = $this.attr('tpath');
                var node = $.lrtree.getItem(path, dfop);
                dfop.currentItem = node;
                //如果是菜单角色操作，取消点击颜色选中。
                if (!dfop.isDisable) {
                    $('#' + dfop.id).find('.lr-tree-selected').removeClass('lr-tree-selected');
                    $this.addClass('lr-tree-selected');
                }
                if (!!dfop.nodeClick) {
                    dfop.nodeClick(node, $this);
                }
            }
            return false;
        },
        check: function (item, state, type, dfop) {
            //关闭联动
            var pstate = item.checkstate;
            if (type === 1) {
                item.checkstate = state;
            }
            else {// go to childnodes
                var cs = item.children;
                var l = cs.length;
                var ch = true;
                for (var i = 0; i < l; i++) {
                    cs[i].checkstate = cs[i].checkstate || 0;
                    if ((state === 1 && cs[i].checkstate !== 1) || state === 0 && cs[i].checkstate !== 0) {
                        ch = false;
                        break;
                    }
                }
                if (ch) {
                    item.checkstate = state;
                }
                else {
                    //关闭父级联动为2
                    item.checkstate = 2;
                }
            }
            //change show
            if (item.render && pstate != item.checkstate) {
                var nid = item.id;
                var et = $("#" + dfop.id + "_" + nid + "_cb");
                if (et.length === 1) {
                    et.attr("src", dfop.cbiconpath + dfop.icons[item.checkstate]);
                }
            }
        },
        checkParent: function (fn, node, state, dfop) {
            var p = node.parent;
            while (p) {
                var r = fn(p, state, 0, dfop);
                if (r === false) {
                    break;
                }
                p = p.parent;
            }
        },
        checkChild: function (fn, node, state, dfop) {
            if (fn(node, state, 1, dfop) != false) {
                if (node.children != null && node.children.length > 0) {
                    var cs = node.children;
                    for (var i = 0, len = cs.length; i < len; i++) {
                        $.lrtree.checkChild(fn, cs[i], state, dfop);
                    }
                }
            }
        },
        search: function (keyword, data) {
            var res = false;
            $.each(data, function (i, row) {
                var flag = false;

                if (!$.lrtree.isNotNull(keyword).code || row.name.indexOf(keyword) !== -1) {

                    flag = true;
                }
                if (row.hasChildren) {
                    if ($.lrtree.search(keyword, row.children)) {
                        flag = true;
                    }
                }
                if (flag) {
                    res = true;
                    row.isexpand = true;
                    row.shide = false;
                }
                else {
                    row.shide = true;
                }
            });
            return res;
        },
        findItem: function (data, id, value) {
            var _item = null;
            _fn(data, id, value);

            function _fn(_cdata, _id, _value) {
                for (var i = 0, l = _cdata.length; i < l; i++) {
                    if (_cdata[i][id] == value) {
                        _item = _cdata[i];
                        return true;
                    }
                    if (_cdata[i].hasChildren && _cdata[i].children.length > 0) {
                        if (_fn(_cdata[i].children, _id, _value)) {
                            return true;
                        }
                    }
                }
                return false;
            }

            return _item;
        },
        listTotree: function (data, parentId, id, name, value, check) {
            // 只适合小数据计算
            var resdata = [];
            var mapdata = {};
            for (var i = 0, l = data.length; i < l; i++) {
                var item = data[i];
                mapdata[item[parentId]] = mapdata[item[parentId]] || [];
                mapdata[item[parentId]].push(item);
            }
            _fn(resdata, '0');

            function _fn(_data, vparentId) {
                var pdata = mapdata[vparentId] || [];
                for (var j = 0, l = pdata.length; j < l; j++) {
                    var _item = pdata[j];
                    var _point = {
                        id: _item[id],
                        name: _item[name],
                        value: _item[value],
                        showcheck: check,
                        checkstate: false,
                        hasChildren: false,
                        isexpand: false,
                        complete: true,
                        children: []
                    };
                    if (_fn(_point.children, _item[id])) {
                        _point.hasChildren = true;
                        _point.isexpand = true;
                    }
                    _data.push(_point);
                }
                return _data.length > 0;
            }

            return resdata;
        },
        treeTotree: function (data, id, name, value, check, childId) {
            var resdata = [];
            _fn(resdata, data);

            function _fn(todata, fromdata) {
                for (var i = 0, l = fromdata.length; i < l; i++) {
                    var _item = fromdata[i];
                    var _point = {
                        id: _item[id],
                        name: _item[name],
                        value: _item[value],
                        showcheck: check,
                        checkstate: false,
                        hasChildren: false,
                        isexpand: true,
                        complete: true,
                        children: []
                    };
                    if (_item[childId].length > 0) {
                        _point.hasChildren = true;
                        _fn(_point.children, _item[childId]);
                    }
                    todata.push(_point);
                }
            }

            return resdata;
        },

        addNode: function ($self, node, Id, index) {// 下一版本完善
            var dfop = $self[0]._lrtree.dfop;
            if (!!Id)// 在最顶层
            {
                dfop.data.splice(index, 0, node);
                var $node = $.lrtree.renderNode(node, 0, index, dfop);
                if ($self.find('.lr-tree-root>li').length === 0) {
                    $self.find('.lr-tree-root>li').append($node);
                }
                else {
                    $self.find('.lr-tree-root>li').eq(index).before($node);
                }

            }
            else {
                var $parentId = $self.find('#' + dfop.id + '_' + Id);
                var path = $parentId.attr('tpath');
                var $node = $.lrtree.renderNode(node, 0, path + '.' + index, dfop);
                if ($parentId.next().children().length === 0) {
                    $parentId.next().children().append($node);
                }
                else {
                    $parentId.next().children().eq(index).before($node);
                }
            }
        },
        setValue: function ($self) {
            var dfop = $self[0]._lrtree.dfop;
            if (dfop.data.length === 0) {
                setTimeout(function () {
                    $.lrtree.setValue($self);
                }, 100);
            }
            else {
                $self.find('span[data-value="' + dfop._value + '"]').trigger('click');
            }
        }
    };

    $.fn.lrtree = function (settings, callback) {
        var dfop = {
            isDisable: false,//是否开启禁用只读功能，菜单角色用
            isClick: false,//是否默认展开第一个，菜单模块用
            icons: ['checkbox_0.png', 'checkbox_1.png', 'checkbox_2.png'],
            method: "GET",
            showcheck: false,
            url: false,
            param: null,
            /* [{
            id,
            name,
            value,
            checkstate,int
            hasChildren,bool
            isexpand,bool
            complete,bool
            children,[]
            }]*/
            data: [],
            isAllExpand: false,
            cbiconpath: '/images/learuntree/',
            // 点击事件（节点信息）,节点$对象
            nodeClick: false,
            // 选中事件（节点信息）,节点$对象
            nodeCheck: false,
            isload: false // 数据是否加载完成
        };
        $.extend(dfop, settings);
        var $self = $(this);
        dfop.id = $self.attr("id");
        if (dfop.id == null || dfop.id == "") {
            dfop.id = "learuntree" + new Date().getTime();
            $self.attr("id", dfop.id);
        }
        $self.html('');
        $self.addClass("lr-tree");
        $self[0]._lrtree = {dfop: dfop};
        $self[0]._lrtree.dfop.backupData = dfop.data;
        if (dfop.url) {
            learun.httpAsync(dfop.method, dfop.url, dfop.param, function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    if ($self[0]._lrtree.dfop.isClick) {
                        data[0].isexpand = true;
                    }
                    $self[0]._lrtree.dfop.data = data || [];
                    $self[0]._lrtree.dfop.backupData = $self[0]._lrtree.dfop.data;
                    $.lrtree.render($self);
                    if ($self[0]._lrtree.dfop.isClick) {
                        $(".lr-tree-root").children("li:first-child").children().click();
                    }
                    if (callback) {
                        callback();
                    }
                    $self[0]._lrtree.dfop.isload = true;
                } else {
                    alert(res.message)
                }
            });
            // var data = [{
            //     icon: null,
            //     id: "a5548f15-1565-4812-ba29-403d09dfd386",
            //     text: "本人或户主",
            //     ChildNodes: [{
            //         icon: null,
            //         id: "011111",
            //         text: "本人",
            //         ChildNodes: []
            //     }, {
            //         icon: null,
            //         id: "022222",
            //         text: "本人户主",
            //         ChildNodes: []
            //     }]
            // }, {
            //     icon: null,
            //     id: "2222222",
            //     text: "大爷",
            //     ChildNodes: []
            // }];
            //     $self[0]._lrtree.dfop.data = data || [];
            //     $self[0]._lrtree.dfop.backupData = $self[0]._lrtree.dfop.data;
            //     $.lrtree.render($self);
        }
        else {
            $.lrtree.render($self);
            $self[0]._lrtree.dfop.isload = true;
            if (callback) {
                callback();
            }
        }
        // pre load the icons
        if (dfop.showcheck) {
            for (var i = 0; i < 3; i++) {
                var im = new Image();
                im.src = dfop.cbiconpath + dfop.icons[i];
            }
        }
        dfop = null;
        return $self;
    };

    $.fn.lrtreeSet = function (name, op) {
        //返回值
        var value;
        var $self = $(this);
        var dfop;
        var getCheck = function (items, buff, fn) {
            for (var i = 0, l = items.length; i < l; i++) {
                var $div = $self.find('#' + dfop.id + '_' + (items[i].id + "").replace(/-/g, '_'));
                if ($div.parent().css('display') != 'none') {
                    if (items[i].showcheck == true && (items[i].checkstate === 1 || items[i].checkstate === 2)) {
                        buff.push(fn(items[i]))
                    }
                    if (items[i].children != null && items[i].children.length > 0) {
                        getCheck(items[i].children, buff, fn);
                    }
                }
            }
        };
        var getCheck2 = function (items, buff, fn) {
            for (var i = 0, l = items.length; i < l; i++) {
                (items[i].showcheck == true && (items[i].checkstate === 1 || items[i].checkstate === 2) && !items[i].hasChildren) && buff.push(fn(items[i]));
                if (!items[i].showcheck || (items[i].showcheck == true && (items[i].checkstate === 1 || items[i].checkstate === 2))) {
                    if (items[i].children != null && items[i].children.length > 0) {
                        getCheck2(items[i].children, buff, fn);
                    }
                }
            }
        };
        var setNoCheck = function (items, buff, fn) {
            for (var i = 0, l = items.length; i < l; i++) {
                if (items[i].showcheck) {
                    items[i].checkstate = 0;
                }
                if (items[i].children != null && items[i].children.length > 0) {
                    setNoCheck(items[i].children);
                }
            }
        };

        function _fn1() {
            if (!!$self[0]._lrtree) {
                 dfop = $self[0]._lrtree.dfop;
                _fn(dfop);
            } else {
                var time = setTimeout(function () {
                    _fn1()
                    clearTimeout(time);
                }, 200)
            }
        }

        _fn1();

        function _fn(dfop) {
            if (dfop.isload === false) {
                var time = setTimeout(function () {
                    _fn(dfop);
                    clearTimeout(time);
                }, 100);
            }
            else if (dfop.isload === true) {
                switch (name) {
                    case 'allNoCheck':
                        $self.find('.lr-tree-node-cb').attr('src', dfop.cbiconpath + 'checkbox_0.png');
                        setNoCheck(dfop.data);
                        break;
                    case 'allCheck':
                        $self.find('.lr-tree-node-cb[src$="checkbox_0.png"]').trigger('click');
                        break;
                    case 'notAllCheck':
                        $self.find('.lr-tree-node-cb[src$="checkbox_1.png"]').trigger('click');
                        break;
                    case 'setCheck':
                        var list = op;
                        $.each(list, function (id, item) {
                            var $div = $self.find('#' + dfop.id + '_' + (item + "").replace(/-/g, '_'));
                            $div.find('.lr-tree-node-cb').trigger('click');
                        });
                        break;
                    case 'setCheckAndReadonly':
                        var list = op;
                        $.each(list, function (id, item) {
                            var $div = $self.find('#' + dfop.id + '_' + (item.menuid + "").replace(/-/g, '_'));
                            //触发check
                            var path = $div.attr('tpath');
                            var node = $.lrtree.getItem(path, dfop);
                            if (!node.children.length) {
                                $div.find('.lr-tree-node-cb').trigger('click');
                            }
                            //触发readonly
                            if (item.readonly) {
                                $div.find('.lr-tree-node-read').trigger('click');
                            }
                        });
                        break;
                    case 'setValue':
                        dfop._value = op;
                        $.lrtree.setValue($self);
                        break;
                    case 'currentItem':
                        return dfop.currentItem;
                        break;
                    case 'getCheckNodesEx':// 只获取最下面的选中元素
                        var buff = [];
                        getCheck2(dfop.data, buff, function (item) {
                            return item;
                        });
                        value = buff;
                        break;
                    case 'getCheckNodes':
                        var buff = [];
                        getCheck(dfop.data, buff, function (item) {
                            return item;
                        });
                        value = buff;
                        break;
                    case 'getCheckNodeIds':
                        var buff = [];
                        getCheck(dfop.data, buff, function (item) {
                            return item.id;
                        });
                        value = buff;
                        break;
                    case 'getCheckNodeIdsByPath':
                        var buff = [];
                        var pathlist
                        getCheck(dfop.data, buff, function (item) {
                            return item.id;
                        });
                        value = buff;
                        break;
                    case 'search':
                        $.lrtree.search(op.keyword, dfop.data);
                        if ($.lrtree.isNotNull(op.keyword).code) {
                            dfop._isSearch = true;
                        }
                        else if (dfop._isSearch) {
                            dfop._isSearch = false;
                        }
                        $.lrtree.renderToo($self);
                        break;
                    case 'refresh':
                        $.extend(dfop, op || {});
                        if (!!dfop.url) {
                            learun.httpAsync(dfop.method, dfop.url, dfop.param, function (res) {
                                if (res.status === 200) {
                                    var data = res.data;
                                    if ($self[0]._lrtree.dfop.isClick) {
                                        data[0].isexpand = true;
                                    }
                                    $self[0]._lrtree.dfop.data = data || [];
                                    $self[0]._lrtree.dfop.backupData = $self[0]._lrtree.dfop.data;
                                }
                                // $self[0]._lrtree.dfop.data = data || [];
                                // $self[0]._lrtree.dfop.backupData = $self[0]._lrtree.dfop.data;
                                $.lrtree.renderToo($self);
                                dfop._isSearch = false;
                            });
                        }
                        else {
                            $self[0]._lrtree.dfop.backupData = $self[0]._lrtree.dfop.data;
                            $.lrtree.renderToo($self);
                            dfop._isSearch = false;
                        }
                        break;
                    case 'addNode':

                        break;
                    case 'updateNode':

                        break;
                }
            }
        }

        return value
    }

})($, top.Sdcm);