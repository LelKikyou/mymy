<template>
    <div class="flow-chart">
        <div class="box1 boxSame">
            公安看守所
        </div>
         <div class="line1 lineSame">
           
        </div>
         <div class="tip1 tipSame">
            <p class="tip-p1">送入</p>
            <p class="tip-p2">500</p>
        </div>
        <div class="box2 boxSame2">
            <p class="box-title">监狱</p>
            <p class="box-add">
                <span class="add">增加</span>
                <span>566</span>
            </p>
            <p class="box-raduce">
                <span class="raduce">减少</span>
                <span>778</span>
            </p>
        </div>
        <div class="line2">
           
        </div>
         <div class="tip2">
            <p class="tip-p1">刑满释放</p>
            <p class="tip-p2">500</p>
        </div>
         <div class="line3">
           
        </div>
         <div class="tip3">
            <p class="tip-p1">假释<span class="tip-sp1">100</span></p>
            <p class="tip-p2">暂与监外执行<span class="tip-sp2">50</span></p>
        </div>
        <div class="box3 boxSame">
            法院
        </div>
         <div class="line4 lineSame">
           
        </div>
         <div class="tip4 tipSame">
            <p class="tip-p1">送入</p>
            <p class="tip-p2">500</p>
        </div>
        <div class="box4 boxSame2">
            <p class="box-title">社区矫正</p>
            <p class="box-add">
                <span class="add">增加</span>
                <span>566</span>
            </p>
            <p class="box-raduce">
                <span class="raduce">减少</span>
                <span>778</span>
            </p>
        </div>
        <div class="line5 lineSame">
           
        </div>
         <div class="tip5 tipSame">
            <p class="tip-p1">矫正期满</p>
            <p class="tip-p2">500</p>
        </div>
         <div class="box5 boxSame2">
            <p class="box-title">安置帮教</p>
            <p class="box-add">
                <span class="add">增加</span>
                <span>566</span>
            </p>
            <p class="box-raduce">
                <span class="raduce">减少</span>
                <span>778</span>
            </p>
        </div>
        <div class="line6 lineSame">
           
        </div>
        <div class="tip6 tipSame">
            <p class="tip-p1">完成改造</p>
            <p class="tip-p2">500</p>
        </div>
         <div class="box6 boxSame">
            社会
        </div>
        <div class="box7 boxSame">
            公安戒毒所
        </div>
        <div class="line7 lineSame">
           
        </div>
        <div class="tip7 tipSame">
            <p class="tip-p1">送入</p>
            <p class="tip-p2">500</p>
        </div>
        <div class="box8 boxSame2">
            <p class="box-title">戒毒</p>
            <p class="box-add">
                <span class="add">增加</span>
                <span>566</span>
            </p>
             <p class="box-raduce">
                <span class="raduce">减少</span>
                <span>778</span>
            </p>
        </div>
        <div class="line8">
           
        </div>
        <div class="tip8 tipSame">
            <p class="tip-p1">刑满解除</p>
            <p class="tip-p2">500</p>
        </div>
    </div>
</template>

<script>
  

    export default {
        name: "flowChart",
    }
</script> 
<style scoped>
    .flow-chart{
        position: relative;
        width: 756px;
        height: 540px;     
    }
    .flow-chart div{
        position: absolute;         
    }
    .box1{
        left:20px;
        top:20px;
    }
    .box2{
        left:202px;
        top:20px;
    }
    .box3{
        left:20px;
        top:208px;
    }
    .box4{
        left:202px;
        top:208px;  
    }
    .box5{
        left:418px;
        top:208px;  
    }
    .box6{
        left:634px;
        top:208px;  
    }
    .box7{
        left:20px;
        top:390px;
    }
    .box8{
        left:202px;
        top:390px;
    }
    .boxSame{
        width:100px;
        height:100px;
        background:#0c826a;
        border:1px solid #bdbdbd;
        border-radius:4px;
        box-sizing: border-box;
        text-align: center;
        line-height: 100px;
        opacity:0.6;
        cursor:pointer;
    }
     .boxSame:hover{
       opacity:1
    }
    .boxSame2{
        width:132px;
        height:100px;
        background:#2c5279;
        border:1px solid #576679;
        border-radius:4px;
        box-sizing: border-box;
        cursor:pointer;
        opacity:0.6
    }
    .boxSame2:hover{
        opacity:1
    }
    .boxSame2 .box-title{
        height:30px;
        line-height:30px;
        width:100%;
        text-align:center;
        background:#223651;
        font-size: 16px;
    }
    .boxSame2 .box-add{
        height: 34px;
        line-height: 34px;
    }
    .boxSame2 .box-add .add{
        color:#fe8618;
        display: inline-block;
        margin: 0 32px 0 22px;
    }
    .boxSame2 .box-raduce{
        height: 34px;
        line-height: 34px;
    }
    .boxSame2 .box-raduce .raduce{
        color:#75f73f;
        display: inline-block;
        margin: 0 32px 0 22px;
    }
    .line1{
        left:127px;
        top:74px;
    }
    .line2{
        left:340px;
        top:74px;
        width:148px;
        height:134px;
        background:url("../../../../../assets/shzxjzpt/activeLine2.png") no-repeat;
        background-size:100% 100%;
    }
    .line3{
        left:266px;
        top:130px;
        width:10px;
        height:70px;
        background:url("../../../../../assets/shzxjzpt/activeLine4.png") no-repeat;
        background-size:100% 100%;
    }
    .line4{
        left:127px;
        top:252px;
    }
    .line5{
        left:340px;
        top:252px;
    }
    .line6{
        left:554px;
        top:252px;
    }
    .line7{
        left:127px;
        top:436px;
    }
    .line8{
        left:340px;
        top:308px;
        width:340px;
        height:134px;
        background:url("../../../../../assets/shzxjzpt/activeLine3.png") no-repeat;
        background-size:100% 100%;
    }
    .lineSame{
        width:70px;
        height:10px;
        background:url("../../../../../assets/shzxjzpt/activeLine.png") no-repeat;
    }
    .tip1{
        left:137px;
        top:88px;
    }
    .tip2{
        left:492px;
        top:72px;
        width:64px;
        height:50px;
        background:url("../../../../../assets/shzxjzpt/tipBg2.png") no-repeat;
        background-size:100% 100%;
        font-size:12px;
        cursor:pointer;
    }
    .tip2 .tip-p1{
        padding-left:12px;
        margin-top:6px;
    }
    .tip2 .tip-p2{
        padding-left:26px;
        margin-top:0;
    }
    .tip3{
        left:280px;
        top:144px;
        width:160px;
        height:50px;
        background:url("../../../../../assets/shzxjzpt/tipBg3.png") no-repeat;
        background-size:100% 100%;
        font-size:12px;
        cursor:pointer;
    }
    .tip3 .tip-p1{
        padding-left: 24px;
        margin-top: 4px;
    }
    .tip3 .tip-p1 .tip-sp1{
        padding-left: 66px;
    }
    .tip3 .tip-p2{
        padding-left: 24px;
    }
    .tip3 .tip-p2 .tip-sp2{
        padding-left: 20px;
    }
    .tip4{
        left:137px;
        top:270px;
    }
    .tip5{
        left:352px;
        top:270px;
    }
    .tip6{
        left:566px;
        top:270px;
    }

    .tip7{
        left:137px;
        top:450px;
    }
    .tip8{
        left:460px;
        top:450px;
    }
    .tipSame{
        width: 60px;
        height: 50px;
        background:url("../../../../../assets/shzxjzpt/tipBg1.png") no-repeat;
        font-size: 12px;
        background-size: 100% 100%;
        cursor:pointer;
    }
    .tipSame .tip-p1{
        margin-top: 10px;
        text-align: center;       
    }
    .tipSame .tip-p2{
        margin-top: 0px;
        text-align: center;
        
    }
</style>