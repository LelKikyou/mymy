//nav
(function () {
    var nav=document.querySelector(".nav");
    window.onscroll=function () {
        if( document.body.scrollTop>0){
            nav.style.background="rgba(0,0,0,1)";
            nav.style.height="50px";
        }else {
            nav.style.background="";
            nav.style.height="70px";
        }
    };
    var nav_list=document.querySelectorAll(".nav_list li a");
    for (var i=0;i<nav_list.length;i++){
        +(function (i) {
            nav_list[i].onmouseenter=function () {
                this.style.animation="moveTopDow 1s linear";
                this.style.color="#f4d03f";
            };
            nav_list[i].onmouseleave=function () {
                this.style.animation="";
                this.style.color="white";
            }
        })(i)
    }
})()
// 头部