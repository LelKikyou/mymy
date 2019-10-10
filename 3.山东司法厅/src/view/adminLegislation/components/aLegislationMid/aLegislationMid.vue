<template>
    <div class="aLegislationMid">
        <div class="aLegTop">
            <titleName>立法文件在各区域分布</titleName>
            <charts class="topCharts" :option="option.tConOption"></charts>
        </div>
        <div class="aLegBot">
            <titleName>有效性立法文件数量变化趋势</titleName>
            <charts class="botCharts" :option="option.mConOption"></charts>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    export default {
        name: "aLegislationMid",
        components:{
            titleName,
            charts
        },
        data(){
            return {
                option: {
                    tConOption:{},
                    mConOption:{},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
            },
            drawTop(){
                const opt = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle:{

                            },
                        }
                    },
                    legend: {
                        left: 374,
                        top: 30,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                        data: [{name: '规章', icon: "rect"},  {name: '规范性文件', icon: "rect"}]
                    },
                    grid: {
                        left: 40,
                        right: 40,
                        bottom: 20,
                        top: 80,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show:false
                        },
                        axisLabel:{
                            fontSize:12,
                            color:"#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        },
                        splitLine:{
                            lineStyle:{
                                color:["#00ffff"],
                                opacity: 0.3,
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ["省直","济南市", "青岛市", "潍坊市", "烟台市", "临沂市", "济宁市", "淄博市", "泰安市",  "威海市", "东营市", "聊城市", "滨州市", "德州市", "枣庄市", "日照市", "菏泽市", "莱芜市"],
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff',
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        nameGap:30,
                        axisLabel:{
                            fontSize:12,
                            color:"#fff",
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            name: "规章",
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#0fbe83' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#00efc5' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[3, 3, 0, 0],
                            },
                            barWidth:6,
                            data: [
                                197,
                                674,
                                1300,
                                1200,
                                1800,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1200,
                                1500,
                                1300,
                                1200,
                            ]
                        },
                        {
                            type: 'bar',
                            name: "规范性文件",
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00b6ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#177dff' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[3, 3, 0, 0],
                            },
                            barWidth:6,
                            data: [
                                1000,
                                1500,
                                1500,
                                1300,
                                1200,
                                1300,
                                1200,
                                1800,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1200,
                            ]
                        },
                    ]
                };
                this.option.tConOption = opt;
            },
            drawMid(){
                let registeredCriminals = function(){
                    let arry=new Array();
                    for(let i=0;i<360;i++){
                        arry[i] = (Math.random()*15).toFixed(0) 
                    }
                    return arry
                }();
                let releaseTheCriminals = function(){
                    let arry=new Array();
                    for(let i=0;i<360;i++){
                        arry[i] = (Math.random()*15).toFixed(0) 
                    }
                    return arry
                }();

                let xAxisData = function(){
                    //创建现在的时间
                    var data=new Date();
                    //获取年
                    var year=data.getFullYear();
                    //获取月
                    var mon=data.getMonth()+1;
                    var arry=new Array();
                    for(var i=0;i<360;i++){
                        mon=mon-1;
                        if(mon<=0){
                            year=year-1;
                            mon=mon+12;
                        }
                        if(mon<10){
                            mon="0"+mon;
                        }
                        
                        arry[i]=year+"/"+mon;
                    }
                    
                    return arry.reverse();
                }();    
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    dataZoom: {
                        bottom: '20',
                        height: '30',
                        dataBackground: {
                            lineStyle: {
                                color: '#00ffff',
                                opacity: 1,
                            },
                            areaStyle: {
                                color: '#00ffff',
                                opacity: 0.4,
                            }
                        },
                        fillerColor: 'rgba(0,255,255,.3)',
                        borderColor: '#017683',
                        textStyle: {
                            color: '#fff',
                        },
                        end: 100,
                        // xAxisIndex: [0, 1, 2, 3, 4]
                    },
                    legend: {
                        top: "20px",
                        textStyle: {
                            color: "#fff"
                        },
                        data: [{name: '规章', icon: "rect"}, {name: '规范性文件', icon: "rect"}]
                    },
                    grid: {
                        top: "80px",
                        left: '14px',
                        right: '46px',
                        bottom: '60px',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: '#00ffff',
                                }
                            },
                            axisTick:{
                                show:false
                            },
                            nameGap:30,
                            axisLabel:{
                                fontSize:12,
                                color:"#fff",
                            },
                            boundaryGap: false,
                            data: xAxisData
                        }
                    ],
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show:false
                        },
                        axisLabel:{
                            fontSize:12,
                            color:"#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        },
                        splitLine:{
                            lineStyle:{
                                color:["#00ffff"],
                                opacity: 0.3,
                            }
                        }
                    },
                    color: ["#02ffd0", "#177dff"],
                    series: [
                        {
                            name: '规章',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 1,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(0,255,208,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,208,0)'
                                    }]
                                }
                            },
                            lineStyle:{
                                width:0
                            },
                            data: registeredCriminals
                        },
                        {
                            name: '规范性文件',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(23,125,255,1)'
                                    }, {
                                        offset: 1, color: 'rgba(23,125,255,0)'
                                    }]
                                }
                            },
                            lineStyle:{
                                width:0
                            },
                            data: releaseTheCriminals
                        },
                    ]
                };
                this.option.mConOption = opt;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "aLegislationMid.stylus"
</style>
