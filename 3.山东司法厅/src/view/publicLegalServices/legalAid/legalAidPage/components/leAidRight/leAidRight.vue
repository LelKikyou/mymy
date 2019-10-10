<template>
    <div class="leAidRight">
        <titleName>案件类型构成</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>案件来源构成</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>案件数量变化趋势</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "leAidRight",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {}
            }
        },
        mounted() {
            this.init();
        },
        methods:{
            init() {
                this.drawTop();
                this.drawBot();
                this.drawMid();
            },
            drawTop(){
                let data = {
                    '司法鉴定':321,
                    '申请案件':511,
                    '指定案件':136,
                    '网上申请':235,
                    '公证':319,
                };
                let opt = {
                    angleAxis: {
                        type: 'category',
                        data: Object.keys(data),
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 14,
                            color: '#fff',
                            fontFamily: 'Microsoft YaHei',
                            formatter:  function (value, index) {
                                return `{a|${value}\n${data[value]}}`
                            },
                            rich: {
                                a: {
                                    align: "center",
                                    fontSize: 14,
                                    color: "#fff",
                                    lineHeight: 20,
                                },
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        z: 10
                    },
                    
                    radiusAxis: {
                        axisTick: {
                            // show: false
                        },
                        axisLabel:{
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,255,255,.6)'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,255,255,.2)'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: 'transparent'
                            }
                        }
                    },
                    polar: {
                        center: ['50%', '50%'],
                        radius: '60%',
                    },
                    series: {
                        type: 'bar',
                        data: [321, 511, 136, 235, 319],
                        itemStyle: {
                            color: function(params) {
                                var colorList = ['#41d700', '#00ffff', '#177dff', '#00ff55', '#00b6ff'];
                                return colorList[params.dataIndex];
                            }
                        },
                        coordinateSystem: 'polar',
                    },
                };
                this.optTop = opt;
            },
            drawMid() {
                let data = [
                    [5000, 14000, 28000, 31000, 42000, 21000]
                ]
                let opt = {
                    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
                    tooltip: {
                        show: false,
                    },
                    radar: {
                        center: ["50%", "50%"],
                        radius: "68%",
                        startAngle: 90,
                        splitNumber: 4,
                        shape: "circle",
                        splitArea: {
                            areaStyle: {
                                color: ["transparent"]
                            }
                        },
                        axisLabel: {
                            show: false,
                            fontSize: 20,
                            color: "#000",
                            fontStyle: "normal",
                            fontWeight: "normal"
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                type: "dotted",
                                color: "#00ffff"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "dotted",
                                color: "#00ffff"
                            }
                        },
                        // shape: 'circle',
                        name: {
                            formatter: function (value, indicator) {
                                return `{a|${value}}`
                            },
                            rich: {
                                a: {
                                    color: '#fff',
                                    fontSize: 14
                                },

                            }
                        },
                        indicator: [
                            {
                                name: '直接申请',
                                key: 0
                            },
                            {
                                name: '公安机关转交',
                                key: 1
                            },
                            {
                                name: '检察机关转交',
                                key: 2
                            },
                            {
                                name: '人民法院转交',
                                key: 3
                            },
                            {
                                name: '人民法院转交',
                                key: 4
                            },
                            {
                                name: '咨询转申请',
                                key: 5
                            },
                            {
                                name: '网上申请',
                                key: 5
                            },
                            {
                                name: '其他机构部门转交',
                                key: 5
                            }
                        ]
                    },

                    series: {
                        type: "radar",
                        symbol: "circle",
                        symbolSize: 5,
                        areaStyle: {
                            normal: {
                                color: "rgba(0,255,255, 0.4)"
                            }
                        },
                        itemStyle: {
                            color: 'rgba(0,255,255, 1)',
                            borderColor: 'rgba(0,255,255, 0.3)',
                            borderWidth: 5,
                        },
                        lineStyle: {
                            normal: {
                                color: "rgba(0,255,255, 0.3)",
                                width: 0
                            },
                        },
                        data: data
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                let xAxisData = [2014, 2015, 2016, 2017,2018], registeredCriminals = [204, 1015, 716, 3217,256],
                    releaseTheCriminals = [2014, 2015, 2016, 2017,2018], inTheCriminal = [2014, 2415, 2316, 2017,456];
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
                        bottom: '10',
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
                        data: [{name: '刑事案件', icon: "rect"}, {name: '民事案件', icon: "rect"}, {name: '行政案件', icon: "rect"}]
                    },
                    grid: {
                        top: "60px",
                        left: '20px',
                        right: '50px',
                        bottom: '50px',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: "#00fefe",
                                    width: 2
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#007a77"]
                                },
                                show: true
                            },
                            axisLabel: {
                                color: "#fff",
                                interval: 0
                            },
                            axisTick: {
                                show: false
                            },
                            boundaryGap: false,
                            data: xAxisData
                        }
                    ],
                    yAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: "#00fefe",
                                    width: 2
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#007a77"]
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: "#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                }
                            }
                        }
                    ],
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
                    series: [
                        {
                            name: '刑事案件',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(0,255,208,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,208,0)'
                                    }]
                                }
                            },
                            data: registeredCriminals
                        },
                        {
                            name: '民事案件',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(0,255,85,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,85,0)'
                                    }]
                                }
                            },
                            data: releaseTheCriminals
                        },
                        {
                            name: '行政案件',
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
                            data: inTheCriminal
                        }
                    ]
                };
                this.optBot = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leAidRight.stylus"
</style>
