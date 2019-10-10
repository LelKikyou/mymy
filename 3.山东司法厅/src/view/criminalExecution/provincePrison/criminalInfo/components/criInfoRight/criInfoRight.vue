<template>
    <div class="criInfoRight">
        <div class="topC">
            <titleName>罪犯事件</titleName>
            <timelineCollapse></timelineCollapse>
        </div>
        <div class="botC">
            <titleName>联络密度分布</titleName>
            <chart class="chart" ref="chartDomBot" :option="option.botOption"></chart>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import timelineCollapse from "@/components/timelineCollapse"
    import chart from "@/components/charts"

    export default {
        name: "criInfoRight",
        components: {
            titleName,
            timelineCollapse,
            chart
        },
        data() {
            return {
                option: {
                    botOption: {},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawBot();
            },
            drawBot() {
                let years =  function(){
                    //创建现在的时间
                    var data=new Date();
                    //获取年
                    var year=data.getFullYear();
                    //获取月
                    var mon=data.getMonth()+1;
                    var arry=new Array();
                    for(var i=0;i<9;i++){
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
                const opt = {
                    baseOption: {
                        timeline: {
                            axisType: 'category',
                            orient: 'vertical',
                            autoPlay: false,
                            inverse: true,
                            playInterval: 1000,
                            left: null,
                            right: 10,
                            top: 30,
                            bottom: 20,
                            width: 55,
                            height: null,
                            padding:5,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#aabbcc'
                                    },
                                    fontSize:14,
                                    padding:[-10,-20],
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#1fdfe9'
                                    },
                                    fontSize:14,
                                }
                            },
                            symbol: 'none',
                            lineStyle: {
                                color: '#aabbcc'
                            },
                            checkpointStyle: {
                                color: '#1fdfe9',
                                borderColor: '#1fdfe9',
                                borderWidth: 1,
                            },
                            controlStyle: {
                                show:false
                            },
                            data: years
                        },
                    },
                    options: [{
                        grid:{
                            left:40,
                            right:147,
                        },
                        xAxis: [{
                            zlevel: 20,
                            type: 'value',
                            min: -10,
                            max: 10,
                            interval: 16.7,
                            axisLabel: {
                                show:false,
                            },
                            axisLine:{
                                lineStyle:{
                                    color:"#00ffff",
                                    width:2,
                                },
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine: {
                                show: false,
                            },
                            splitArea: {
                                show: false,
                            },
                        }],
                        yAxis: [{
                            min: -10,
                            max: 10,
                            show: false,
                            splitLine: {
                                show: false
                            },
                            splitArea: {
                                show: false
                            }
                        }],
                        legend: {
                            show: false,
                            data: []
                        },
                        tooltip: {
                            showContent: false
                        },
                        sendDataSetting: {
                            selectParams: false,
                            selectCell: false
                        },
                        visualMap: [{
                            show: false,
                            dimension: 2,
                            min: 1,
                            max: 3,
                            precision: 0.01,
                            // "inRange": {
                            //     "symbolSize": [10, 50]
                            // }
                        }],
                        series: [{
                            zlevel: 20,
                            type: 'scatter',
                            symbol: 'circle',
                            symbolSize: 90,
                            hoverAnimation:false,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function(param) {
                                        return param.data[2];
                                    },
                                    color: '#003e71',
                                    fontSize:20,
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00faff',
                                    opacity:1,
                                },
                            },
                            data: [
                                [0, 0, '频繁', '#003e71', 19]
                            ],
                        }, {
                            zlevel: 30,
                            name: '下降',
                            type: 'effectScatter',
                            symbol: 'circle',
                            symbolSize: 10,
                            itemStyle: {
                                normal: {
                                    color:"#ffff00",
                                },
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        fontSize: 14,
                                    },
                                    color: '#fff',
                                    position: 'bottom',
                                    show: true,
                                    formatter: function(param) {
                                        return param.data[2];
                                    },
                                },
                            },

                        data: [
                            [-5, -1, "父亲：顾建国"],
                            [-5, -6, "妻子：赵梅红"],
                            [3, -7, "母亲：张菊英"],
                            [5, 8, "儿子：顾凯"],
                        ],
                        },{
                            type: "pie",
                            radius: [0, 70],
                            center: [180, "50%"],
                            zlevel: 2,
                            hoverAnimation:false,
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: "center"
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: "bold"
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00faff',
                                    opacity:0.6,
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                value: 3357
                            }]
                        }, {
                            type: "pie",
                            radius: [0, 96],
                            center: [180, "50%"],
                            zlevel: 2,
                            hoverAnimation:false,
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: "center"
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: "bold"
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00faff',
                                    opacity:0.4,
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                value: 3235
                            }]
                        }, {
                            type: "pie",
                            radius: [0, 122],
                            center: [180, "50%"],
                            zlevel: 2,
                            hoverAnimation:false,
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: "center"
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: "bold"
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00faff',
                                    opacity:0.2,
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                value: 3235
                            }]
                        }],
                    }],
                }
                this.option.botOption = opt;
            },
        },
    }
</script>
<style lang="stylus">
    .criInfoRight
        .topC .timelineCollapse
            padding 20px 16px 20px 20px
            width 100%
            height calc(100% - 46px)
</style>
<style lang="stylus" scoped>
    @import "criInfoRight.stylus"
</style>
