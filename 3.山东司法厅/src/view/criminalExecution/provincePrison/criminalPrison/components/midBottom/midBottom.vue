<template>
    <div class="midBottom">
        <titleName>各监狱人员分布</titleName>
        <div class="midContent sdcmScrollbar">
            <div class="content" :style="filWidth">
                <chart :option="option"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    import echarts from 'echarts'

    export default {
        name: "midBottom",
        components: {
            titleName,
            chart
        },
        data() {
            return {
                option: {},
                contentWidth: ""
            }
        },
        props: {
            //各监狱人员分布
            personDistribution: {
                type: Object,
                default: () => {
                    return {
                        xName: ["未成年犯管教所", "济南监狱", "德州监狱", "聊城监狱", "泰安监狱", "菏泽监狱", "临沂监狱", "北墅监狱", "鲁中监狱", "运河监狱", "微湖监狱", "鲁南监狱", "滕州监狱",
                            "潍北监狱", "齐州监狱", "鲁宁监狱", "烟台监狱", "济宁监狱", "枣庄监狱", "邹城监狱", "鲁西监狱", "威海监狱", "新康监狱", "任城监狱", "山东第二女子监狱", "昌潍监狱", "湖田监狱", "青岛监狱", "潍坊监狱", "淄博监狱",
                            "女子监狱"],
                        zyData: [1107,2654,2693,3307,2814,3370,3762,3433,3192,2257,904,3596,2523,2400,766,2054,2954,2088,1005,2797,1606,1447,267,1377,2449,470,358,3312,3749,3313,3700],
                        nxData: [254, 245, 757, 474, 44, 245, 14, 242, 75, 57, 575, 14, 575, 757, 41, 252, 142, 423, 325, 452, 142, 254, 142, 532, 142, 142, 352, 452, 74, 652, 456],
                        wcnData: [125, 235, 251, 212, 124, 25, 89, 151, 241, 245, 142, 142, 142, 142, 142, 142, 145, 542, 254, 21, 54, 422, 142, 425, 424, 75, 65, 875, 174, 474, 123]
                    }
                }
            }
        },
        mounted() {
            this.init()
        },
        computed: {
            filWidth() {
                console.log(this.personDistribution.xName.length)
                return `min-width:${this.personDistribution.xName.length * 80 + 150}px`
            }
        },
        methods: {
            init() {
                this.draw()
            },
            draw() {
                let opt = {
                    legend: {
                        textStyle: {
                            color: "#fff"
                        },
                        left: 50,
                        top: 6,
                        data: [{name: '在押罪犯', icon: "rect"}, {name: '女性罪犯', icon: "rect"}, {name: "未成年犯", icon: "rect"}]
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 60,
                        top: 40,
                        bottom: 30,
                        right: 20
                    },
                    xAxis: {
                        data: this.personDistribution.xName || [],
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#00fefe"
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                color: ["#007a77"]
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        }
                    },
                    series: [{
                        name: "在押罪犯",
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#17bd7f" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#00f0be" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: this.personDistribution.zyData || []
                    }, {
                        name: "女性罪犯",
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#0053b8" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#1d79e6" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: this.personDistribution.nxData || []
                    }, {
                        name: "未成年犯",
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#0db232" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#04e77b" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: this.personDistribution.wcnData || []
                    }]
                };
                this.option = opt
            }
        },
        watch: {
            personDistribution() {
                this.init();
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midBottom.stylus"
</style>
