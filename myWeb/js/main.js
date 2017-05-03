//nav
(function () {
    var nav = document.querySelector(".nav");
    window.onscroll = function () {
        if (document.body.scrollTop > 0||document.documentElement.scrollTop >0) {
            console.log(1);
            nav.style.background = "rgba(0,0,0,1)";
            nav.style.height = "50px";
        } else {
            nav.style.background = "";
            nav.style.height = "80px";
        }
    };
    var nav_list = document.querySelectorAll(".nav_list li a");
    for (var i = 0; i < nav_list.length; i++) {
            nav_list[i].onmouseenter = function () {
                this.style.animation = "moveTopDow 1s linear";
                this.style.color = "#f4d03f";
            };
            nav_list[i].onmouseleave = function () {
                this.style.animation = "";
                this.style.color = "white";
            }
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
//封装查找所有兄弟节点的方法
function siblings(elm) {
    var a = [];
    var p = elm.parentNode.children;//可能children不兼容
    for(var i =0,pl= p.length;i<pl;i++) {
        if(p[i] !== elm) a.push(p[i]);
    }
    return a;
}
//基本资料
(function () {

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
//项目经验
(function () {
    //展示项目部分
    var proChange=document.querySelectorAll(".projectImg ul li");
    var proImg=document.querySelectorAll(".proImg");
    var proFilm=document.querySelectorAll(".proFilm");
    var proSearch=document.querySelectorAll(".proFilm>div");
    for(var i=0;i<proChange.length;i++){
        +function (i) {
            proChange[i].onmouseenter=function () {
                proImg[i].style.left="-30px";
                proImg[i].style.top="-30px";
                proImg[i].style.width="410px";
                proImg[i].style.height="410px";
            //    改变黑色的膜
                proFilm[i].style.left="-30px";
                proFilm[i].style.top="-30px";
                proFilm[i].style.width="410px";
                proFilm[i].style.height="410px";
                proFilm[i].style.background="rgba(0,0,0,0.5)";
            //    搜索跳出来
                proSearch[i].style.animation="bounceInDown 0.5s";
                proSearch[i].style.animationFillMode="forwards";
            };
            proChange[i].onmouseleave=function () {
                proImg[i].style.left=0;
                proImg[i].style.top=0;
                proImg[i].style.width="350px";
                proImg[i].style.height="350px";
                //    改变黑色的膜
                proFilm[i].style.left=0;
                proFilm[i].style.top=0;
                proFilm[i].style.width="350px";
                proFilm[i].style.height="350px";
                proFilm[i].style.background="rgba(0,0,0,0)";
            //    跳走
                proSearch[i].style.animation="bounceOutUp 0.5s";
                proSearch[i].style.animationFillMode="forwards";
            }
        }(i)
    }
    //展示导航部分
    var projectNav=document.querySelectorAll(".projectNav li");
    for (var n=0;n<projectNav.length;n++){
        +function (n) {
            projectNav[n].onclick=function () {
                //nav颜色
                this.classList.add("addColor");
                for (var m=0;m<siblings(this).length;m++){
                    siblings(this)[m].classList.remove("addColor");
                }
                //    展示部分的
                if(n===0){
                    proChange[0].style.display="block";
                    proChange[1].style.display="block";
                    proChange[2].style.display="block"
                }else if(n===1){
                    proChange[0].style.display="block";
                    proChange[1].style.display="block";
                    proChange[2].style.display="none"
                }else if(n===2){
                    proChange[0].style.display="none";
                    proChange[1].style.display="none";
                    proChange[2].style.display="block"
                }
            }
        }(n)
    }
})();