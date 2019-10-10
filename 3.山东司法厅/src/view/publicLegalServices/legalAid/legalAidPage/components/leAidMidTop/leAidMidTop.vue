<template>
    <div class="leAidMidTop">
        <lightingTit :lightingData="lightingData"></lightingTit>
        <chart :option="mapOptions" class="mapChart"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import lightingTit from "@/components/lightingTit"

    export default {
        name: "leAidMidTop",
        data() {
            return {
                mapOptions: {},
                lightingData: [{
                    icon: "iconjigou",
                    num: 156,
                    name: "法援机构"
                }, {
                    icon: "iconzhifarenyuan",
                    num: 265,
                    name: "法援人员"
                }, {
                    icon: "iconanjian1",
                    num: 369,
                    name: "法援案件"
                }, {
                    icon: "iconmianchufeiyong",
                    num: 269,
                    name: "免除费用"
                }]
            }
        },
        components: {
            chart,
            lightingTit
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawChart()
            },
            drawChart() {
                let opt = {
                    baseOption:{
                        timeline: {
                            left:0,
                            right:0,
                            data: ["2014年","2015年","2016年","2017年","2018年"],
                            axisType: 'category',
                            tooltip: {
                                trigger: 'none'
                            },
                            bottom:0,
                            lineStyle:{
                              color:"#00fdfb"
                            },
                            label:{
                                color:"#fff"
                            },
                            controlStyle:{
                                color:"#00ffff",
                                borderColor:"#00ffff"
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            borderColor: "#00ffeb",
                            borderWidth: 2,
                            backgroundColor: "#052f45",
                            formatter: (data) => {
                                let value = [];
                                let name = data.map(i => {
                                    value.push(i.value);
                                    return i.seriesName
                                });
                                return `总数:${eval(value.join("+"))}件</br>${name[0]}:${value[0]}</br>${name[1]}:${value[1]}</br>${name[2]}:${value[2]}`
                            }
                        },
                        legend: {
                            textStyle: {
                                color: "#fff"
                            },
                            icon: "rect",
                            bottom: 64,
                            right: 330,
                            orient: "vertical",
                            data: ['刑事案件', '民事案件', '行政案件']
                        },
                        xAxis: {
                            type: 'value',
                            scale: true,
                            position: 'top',
                            min: 0,
                            boundaryGap: false,
                            splitLine: {
                                show: true,
                                lineStyle: {color: "#025f64"}
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                margin: 2,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                        },
                        yAxis: {
                            type: 'category',
                            nameGap: 16,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#04fefc'
                                }
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                interval: 0,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            data: require("@/api/config").shandongMap["features"].map(i => {
                                return i.properties.name
                            })
                        },
                        grid: {
                            right: '2%',
                            top: '18%',
                            bottom: 64,
                            width: '26%'
                        },
                        geo: { // 地图配置
                            center: [120.88, 36.6],
                            map: '山东',
                            zoom: 0.8,
                            itemStyle: {
                                normal: {
                                    borderWidth: 4,//区域边框宽度
                                    borderColor: '#10fffd',//区域边框颜色
                                    shadowColor: '#046d80',
                                    shadowBlur: 14,
                                    shadowOffsetX: 10,
                                    shadowOffsetY: 5
                                }
                            }
                        },
                        series: [          //柱状图
                            {
                                name: "刑事案件",
                                type: 'bar',
                                stack: "总和",
                                color: "#01fdce",
                                barWidth: 16
                            },
                            {
                                stack: "总和",
                                name: "民事案件",
                                type: 'bar',
                                color: "#157efb",
                                barWidth: 16
                            },
                            {
                                stack: "总和",
                                name: "行政案件",
                                type: 'bar',
                                color: "#42d807",
                                barWidth: 16
                            },{
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                data: require("@/api/config").shandongMap["features"].map(i => {
                                    return {
                                        name: i.properties.name,
                                        value: i.properties.cp
                                    }
                                }),
                                itemStyle: {
                                    normal: {
                                        color: '#ff6360'
                                    }
                                },
                                symbolSize: 16,
                                symbolOffset: [0, -24],
                                tooltip: {
                                    trigger: 'none'
                                }
                            }, { // 地图配置
                                center: [120.88, 36.6],
                                tooltip: {
                                    trigger: 'none'
                                },
                                type: "map",
                                map: '山东',
                                zoom: 0.8,
                                showLegendSymbol: false,
                                label: {
                                    offset: [0, 8],
                                    fontSize: 14,
                                    show: true,//显示省份标签
                                    textStyle: {color: "#ccc"},//省份标签字体颜色
                                    emphasis: {//对应的鼠标悬浮效果
                                        fontSize: 16,
                                        show: true,
                                        textStyle: {color: "#07508c"}
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 1,//区域边框宽度
                                        borderColor: '#465f75',//区域边框颜色
                                        areaColor: "#011c31"//区域颜色
                                    },
                                    emphasis: {
                                        borderWidth: 0,
                                        areaColor: "#fffc00"
                                    }
                                }
                            }
                        ],
                    },
                    options: [
                        {
                            series: [
                                {data: [112,2,2]},
                                {data: [13,2,2]},
                                {data: [1,3,4]}
                            ]
                        },
                        {
                            series: [
                                {data: [112,2,2]},
                                {data: [1,2,3]},
                                {data: [12,3,3]}
                            ]
                        },
                        {
                            series: [
                                {data: [112,2,2]},
                                {data: [1,3,3]},
                                {data: [1,5,5]}
                            ]
                        },
                    ]
            };
                this.mapOptions = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leAidMidTop.stylus"
</style>
