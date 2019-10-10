<template>
    <div class="peoMedRight">
        <titleName>纠纷分析</titleName>
        <navChart :navData="nav" class="nav"></navChart>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>调解成功率</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>各类型协议涉及金额变化趋势</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"
    import {
        getRightTopOption
    } from "./chartOption"
    export default {
        name: "peoMedRight",
        components: {
            titleName,
            charts,
            navChart
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {},
                nav: {
                    lxgc: "纠纷类型构成",
                    rsgc: "涉及人数构成",
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
                this.drawBot();
            },
            drawTop() {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [60, 80],
                        name: '访问来源',
                        label: {
                            formatter: "{b}\n{c}，{d}%",
                            color: "#fff",
                            fontSize: 14,
                        },
                        labelLine: {
                            // length: 5,
                            // length2:3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        itemStyle:{
                            borderColor: '#05223a',
                            borderWidth: 2,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 335, name: '类型A'},
                            {value: 679, name: '类型B'},
                            {value: 1548, name: '类型C'},
                            {value: 679, name: '类型D'},
                            {value: 679, name: '类型E'},
                            {value: 679, name: '类型F'},
                            {value: 679, name: '类型G'},
                        ],
                    }
                };
                this.optTop = opt;
            },
            drawMid(type) {
                const opt = {
                    tooltip: {},
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    grid: {
                        left: '10%',
                        right: '10%',
                        top: '10%',
                        bottom: '10%',
                        containLabel: true
                    },

                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            radius: "120%",
                            detail: {
                                formatter: function (value) {
                                    return value.toFixed(2) + "%";
                                },
                                color: "#00f0f1",
                                fontSize: 24,
                                fontWeight: "bold",
                                offsetCenter: [0, '30%']
                            },
                            center: ['50%', '70%'],
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 10,
                                    color: [[0.3, "#ff6360"], [0.7, "#1fdfe9"], [1, "#00ff8c"]]
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                splitNumber: 5,
                                length: 5,        // 属性length控制线长
                                lineStyle: {        // 属性lineStyle控制线条样式
                                    color: '#fff'
                                },
                            },
                            splitLine: {           // 分隔线
                                length: 10,       // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'fff'
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                textStyle: {       // 属性lineStyle控制线条样式
                                    color: '#fff',
                                    fontSize: 16
                                },
                                show:false
                            },
                            pointer: {
                                width: 10,

                            },
                            itemStyle: {
                                color: "#ffd200",
                                borderWidth: 20
                            },
                            markPoint: {
                                symbol: "pin"
                            },
                            startAngle: 180,
                            endAngle: 0,
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontSize: 16,
                                    color: '#00fff1',
                                    // shadowColor: '#00f0f1', //默认透明
                                    // shadowBlur: 10

                                },
                                offsetCenter: [0, '-30%']
                            },
                            data: [{value: 90, name: '调解成功率'}]
                        }
                    ]
                };
                this.optMid = opt;
            },
            drawBot(){
                let opt = getRightTopOption()
                this.optBot = opt
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "peoMedRight.stylus"
</style>
