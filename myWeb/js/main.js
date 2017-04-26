//nav
(function () {
    var nav = document.querySelector(".nav");
    window.onscroll = function () {
        if (document.body.scrollTop > 0) {
            nav.style.background = "rgba(0,0,0,1)";
            nav.style.height = "50px";
        } else {
            nav.style.background = "";
            nav.style.height = "80px";
        }
    };
    var nav_list = document.querySelectorAll(".nav_list li a");
    for (var i = 0; i < nav_list.length; i++) {
        +(function (i) {
            nav_list[i].onmouseenter = function () {
                this.style.animation = "moveTopDow 1s linear";
                this.style.color = "#f4d03f";
            };
            nav_list[i].onmouseleave = function () {
                this.style.animation = "";
                this.style.color = "white";
            }
        })(i)
    }
})();
// 头部
(function () {
    var faceDown = document.querySelector(".faceDown div");
    faceDown.onmouseenter = function () {
        this.style.width = "120px";
        this.style.height = "120px";
    };
    faceDown.onmouseleave=function () {
        this.style.width = "100px";
        this.style.height = "100px";
    }
})();
//基本资料
(function () {
    //封装查找所有兄弟节点的方法
    function siblings(elm) {
        var a = [];
        var p = elm.parentNode.children;//可能children不兼容
        for(var i =0,pl= p.length;i<pl;i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    }

    var myMainData=document.querySelectorAll(".myMainData>div");
    var myMain=document.querySelector(".myMain");
    for(var i=0;i<myMainData.length;i++){
       +(function (i) {
           myMainData[i].onmouseenter=function () {
               //字消失
               myMain.style.animation="zoomOutDown 0.5s forwards";
               //移动上来
               this.lastElementChild.children[0].style.top="330px";
               //给其它的兄弟附上黑色
               for (var n=0;n<siblings(this).length;n++){
                   // 兄弟的子节点加上黑
                   siblings(this)[n].lastElementChild.style.background="black";
               }
           };
           myMainData[i].onmouseleave=function () {
               //字出现
               myMain.style.animation="zoomInDown 0.7s forwards";
               //移动下去
               this.lastElementChild.children[0].style.top="400px";
               //给其它的兄弟去掉黑色
               for (var n=0;n<siblings(this).length;n++){
                   siblings(this)[n].lastElementChild.style.background=""
               }
           }
       })(i)
    }
})();