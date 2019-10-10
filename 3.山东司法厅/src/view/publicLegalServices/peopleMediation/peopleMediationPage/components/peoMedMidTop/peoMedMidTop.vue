<template>
    <div class="peoMedMidTop">
        <lightingTit :lightingData="lightingData"></lightingTit>
        <chart :option="mapOptions"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import lightingTit from "@/components/lightingTit"

    export default {
        name: "peoMedMidTop",
        data() {
            return {
                mapOptions: {},
                lightingData: [{
                    icon: "iconjigou",
                    num: 156,
                    name: "调解机构"
                }, {
                    icon: "iconzhifarenyuan",
                    num: 265,
                    name: "调解员"
                }, {
                    icon: "iconanjian1",
                    num: 369,
                    name: "调解案件"
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
                this.drawMap()
            },
            drawMap() {
                let opt = {
                    color:["#05bacb"],
                    legend: {
                        textStyle: {
                            color: "#fff"
                        },
                        icon: "rect",
                        left: "12%",
                        bottom: "4%",
                        data: ['纠纷数量']
                    },
                    tooltip: {
                        show: true,
                        // formatter: function(params) {
                        //     if (params.data) return params.name + '：' + params.data['value']
                        // },
                    },
                    visualMap: {
                        min: 0,
                        max: 1000,
                        left: "4%",
                        bottom: "2%",
                        text: ['高', '低'],
                        calculable: true,
                        color: ["#384685", "#05bacb"],
                        itemWidth: 16,
                        itemHeight: 120,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    geo: { // 地图配置
                        center: [118, 36.46],
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
                    series: [{ // 地图配置
                        center: [118, 36.46],
                        data:[
                            {value:200,name:"济南市"}, {value:900,name:"德州市"},{value:600,name:"潍坊市"}
                        ],
                        name:"纠纷数量",
                        type: "map",
                        map: '山东',
                        zoom: 0.9,
                        showLegendSymbol: false,
                        label: {
                            offset: [0, 8],
                            fontSize: 14,
                            show: true,//显示省份标签
                            textStyle: {color: "#fff"},//省份标签字体颜色
                            emphasis: {//对应的鼠标悬浮效果
                                fontSize: 16,
                                show: true,
                                textStyle: {color: "#07508c"}
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,//区域边框宽度
                                borderColor: '#4e8fab',//区域边框颜色
                                areaColor: "#287496"//区域颜色
                            },
                            emphasis: {
                                borderWidth: 0,
                                areaColor: "#fffc00"
                            }
                        }
                    }]
                }
                this.mapOptions = opt
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peoMedMidTop.stylus"
</style>
