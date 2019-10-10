<template>
    <div class="peoSupPageMidTop">
        <div class="boxTitle">
            <p class="t">{{boxTitle}}</p>
            <p class="m">{{`截止日期:${afterDate}`}}</p>
        </div>
        <lightingTit :lightingData="lightingData"></lightingTit>
        <chart :option="mapOptions" class="mapChart"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import {afterDate} from "@/lib/tools"
    import lightingTit from "@/components/lightingTit"

    export default {
        name: "peoSupPageMidTop",
        data() {
            return {
                mapOptions: {},
                //监狱名
                boxTitle: "山东省",
                lightingData: [{
                    icon: "iconzhifarenyuan",
                    num: 1196,
                    name: "人民监督员"
                }, {
                    icon: "iconanjian1",
                    num: 328,
                    name: "监督案件"
                }]
            }
        },
        components: {
            chart,
            lightingTit
        },
        computed: {
            afterDate
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawMap()
            },
            drawMap() {
                let opt = {
                    geo: { // 地图配置
                        map: '山东',
                        zoom: 0.9,
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
                    tooltip: {
                        show: true,
                        formatter({data, componentSubType}) {
                            if (data && componentSubType === "map") {
                                return `罪犯数量 : ${data.value} 人`
                            }
                        }
                    },
                    visualMap: {
                        name: "map",
                        min: 0,
                        max: 200,
                        left: "20px",
                        bottom: "40px",
                        calculable: true,
                        color: ["#3b4b7f", "#05bfba"],
                        itemWidth: 16,
                        itemHeight: 120,
                        seriesIndex: 1,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    legend: {
                        bottom: "40px",
                        left: "80px",
                        textStyle: {
                            color: "#fff"
                        },
                        data: [{name: '案件数量', icon: "rect"}]
                    },
                    series: [{
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
                        symbolOffset: [0, -24]
                    }, { // 地图配置
                        name: '案件数量',
                        color: ["#00bacb"],
                        type: "map",
                        map: '山东',
                        zoom: 0.9,
                        data: [{name: "济南市", value: 158}, {name: "泰安市", value: 80}, {
                            name: "烟台市",
                            value: 40
                        }, {name: "威海市", value: 125}],
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
                                areaColor: "#00bacb"//区域颜色
                            },
                            emphasis: {
                                borderWidth: 0,
                                areaColor: "#fffc00"
                            }
                        }
                    }]
                };
                this.mapOptions = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peoSupPageMidTop.stylus"
</style>
