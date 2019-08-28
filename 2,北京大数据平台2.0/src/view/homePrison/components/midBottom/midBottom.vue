<template>
    <div class="midBottom">
        <boxTitle>{{`全${$parent.type === "nation"?"国":"省"}各监狱人员分布`}}</boxTitle>
        <div class="midContent scrollbar">
            <div class="content" :style="contentWidth">
                <chart :option="option"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import boxTitle from "../boxTitle"
    import chart from "@/components/charts"
    import echarts from 'echarts'

    export default {
        name: "midBottom",
        components: {
            boxTitle,
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
                    return {}
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            filWidth() {
                let xName = this.personDistribution.xName;
                xName && (this.contentWidth = `min-width:${xName.length * 50 + 150}px`);
            },
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
                                color: "#4f9efa"
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                color: ["#2857b1"]
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
                                color: "#008ec2" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#14d1f8" // 100% 处的颜色
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
                                color: "#f43560" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#db5f61" // 100% 处的颜色
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
                                color: "#ff8e14" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#f8ca74" // 100% 处的颜色
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
                this.filWidth();
                this.init();
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midBottom.stylus"
</style>
