<template>
    <div class="criInfoLeftBot">
        <div class="lCon">
            <titleName>罪犯生平</titleName>
            <criminalTimeLine class="timeLine"></criminalTimeLine>
        </div>
        <div class="rCon">
            <div class="conTop">
                <titleName>考核分变化趋势</titleName>
                <chart class="chart" ref="chartDomTop" :option="option.topOption" ></chart>
            </div>
            <div class="conBot">
                <titleName>对外联络情况</titleName>
                <chart class="chart" ref="chartDomBot" :option="option.botOption" ></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    import symbol1 from "@/assets/criminalExecution/symbol1.png"
    import symbol2 from "@/assets/criminalExecution/symbol2.png"
    import symbol3 from "@/assets/criminalExecution/symbol3.png"
    import symbol4 from "@/assets/criminalExecution/symbol4.png"
    import criminalTimeLine from "../criminalTimeLine"
    import {
        getRightTopOption
    } from "./chartOption"
    export default {
        name: "criInfoLeftBot",
        components:{
            titleName,
            chart,
            criminalTimeLine
        },
        data() {
            return {
                option: {
                    botOption: {},
                    topOption: {},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawRightBot();
                this.drawRightTop();
            },
            drawRightTop(){
                let opt = getRightTopOption()
                this.option.topOption = opt
            },
            drawRightBot(){
                let name = function(){
                    //创建现在的时间
                    var data=new Date();
                    //获取年
                    var year=data.getFullYear();
                    //获取月
                    var mon=data.getMonth()+1;
                    var arry=new Array();
                    for(var i=0;i<12;i++){
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
                    title:[
                        {
                            textBaseline: 'middle',
                            top: 210,
                            left:20,
                            text:"邮件",
                            textStyle:{
                                color:"#fff",
                                fontSize:16,
                            }
                        },
                        {
                            textBaseline: 'middle',
                            top: 150,
                            left:20,
                            text:"亲情会见",
                            textStyle:{
                                color:"#fff",
                                fontSize:16
                            }
                        },
                        {
                            textBaseline: 'middle',
                            top: 90,
                            left:20,
                            text:"远程会见",
                            textStyle:{
                                color:"#fff",
                                fontSize:16
                            }
                        },
                        {
                            textBaseline: 'middle',
                            top: 30,
                            left:20,
                            text:"普通会见",
                            textStyle:{
                                color:"#fff",
                                fontSize:16
                            }
                        },
                 
                    ],
                    grid:{
                        top:40,
                        bottom:70,
                        left:140,
                        containLabel:true,
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
                    xAxis: {
                        data:name,
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        boundaryGap: false,
                        axisTick: {
                            show:false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#01ffff"
                            }
                        },
                        splitLine: {
                            show: false
                        },
                    },
                    yAxis: {
                        splitLine: {
                            show: false,
                        },
                        type: 'value',//折线坐标轴重合
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show:false
                        }
                    },
                    series: [
                        {
                            symbolSize: 20,
                            lineStyle:{
                                color:"#017683",
                                width: 1,
                            },
                            symbolOffset: [0, -9],
                            symbol:"image://" + symbol4,
                            data:[
                                {
                                    value:0,
                                    symbolSize:0,
                                }, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0
                            ],
                            type: 'line'
                        },
                        {
                            symbolSize: 20,
                            lineStyle:{
                                color:"#017683",
                                width: 1,
                            },
                            symbolOffset: [0, -9],
                            symbol:"image://" + symbol3,
                            data:[100, 100, 100, {
                                    value:100,
                                    symbolSize:0,
                                }, 100, 100, 100, 100, 100, 100, 100, 100],
                            type: 'line'
                        },
                        {
                            symbolSize: 20,
                            lineStyle:{
                                color:"#017683",
                                width: 1,
                            },
                            symbolOffset: [0, -9],
                            symbol:"image://" + symbol2,
                            data:[200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
                            type: 'line'
                        },
                        {
                            symbolSize: 20,
                            lineStyle:{
                                color:"#017683",
                                width: 1,
                            },
                            symbolOffset: [0, -9],
                            symbol:"image://" + symbol1,
                            data:[300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                            type: 'line'
                        }
                    ]
                }
                this.option.botOption = opt
            }  
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criInfoLeftBot.stylus"
</style>
