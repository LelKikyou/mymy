<template>
    <div class="leftBot">
        <titleName style="height: 62px;line-height: 62px;">行政执法案件受理情况</titleName>
        <navChart :navData="nav" @handleNav="drawLeftBot"></navChart>
        <chart class="chart" @upInitDone="initDoneTop" ref="chartDomLeftBot" :option="option"></chart>
        <div class="caseBox">
            <div>
                收案总数：<span>{{temData.saNum}}</span>件
            </div>
            <div>
                受理案件：<span>{{temData.slNum}}</span>件
            </div>
            <div>
                完结案件：<span>{{temData.wjNum}}</span>件
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import navChart from "@/components/navChart"
    import chart from "@/components/charts"

    export default {
        name: "leftBot",
        components: {
            titleName,
            navChart,
            chart
        },
        props: {
            dataLeftBot: {
                type: Object,
                default: () => {
                    return {}
                }
            },
        },
        data() {
            return {
                nav: {
                    xzfy: "行政复议",
                    xzys: "行政应诉",
                    xzzc: "行政仲裁"
                },
                caseList:{
                    xzfy:{  
                        saNum:32746,
                        slNum:32576,
                        wjNum:23932
                    },
                    xzys:{  
                        saNum:42746,
                        slNum:12576,
                        wjNum:43932
                    },
                    xzzc:{  
                        saNum:52746,
                        slNum:12576,
                        wjNum:63932
                    },
                },
                temData:{},
                option: {},
                active: ""
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawLeftBot("xzfy");
            },
            initDoneTop() {
                // let dom = this.$refs.chartDomTop.dom, index = 0, data = this.dataTop[this.active];
            },
            drawLeftBot(type) {
                let optData = {
                    xzfy: [{value: 90, name: '结案率'}],
                    xzys: [{value: 70, name: '结案率'}],
                    xzzc: [{value: 80, name: '结案率'}]
                };
                let data = optData[type];
                this.temData = this.caseList[type]
                const opt = {
                    tooltip: {},
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    grid: {
                        left: '10%',
                        // right: '10%',
                        top: '10%',
                        // bottom: '10%',
                        containLabel: true
                    },

                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            radius: "88%",
                            detail: {
                                formatter: function (value) {
                                    return value.toFixed(2) + "%";
                                },
                                color: "#00f0f1",
                                fontSize: 30,
                                fontWeight: "bold"
                            },
                            center: ['50%', '50%'],
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 20,
                                    color: [[0.3, "#ff6360"], [0.7, "#1fdfe9"], [1, "#00ff8c"]]
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                splitNumber: 5,
                                length: 10,        // 属性length控制线长
                                lineStyle: {        // 属性lineStyle控制线条样式
                                    color: '#fff'
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'fff'
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                textStyle: {       // 属性lineStyle控制线条样式
                                    color: '#fff',
                                    fontSize: 16
                                }
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
                            startAngle: 240,
                            endAngle: -60,
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontSize: 16,
                                    color: '#00fff1',
                                    // shadowColor: '#00f0f1', //默认透明
                                    // shadowBlur: 10

                                },
                                offsetCenter: [0, '-15%']
                            },
                            data: data
                        }
                    ]
                };
                this.option = opt;
            },
        },
        watch: {
            dataTop() {
                this.drawLeftBot("prisonTermConstitute")
            },
        },
    }
</script>
<style lang="stylus">
    .leftBot
        .navChart
            padding 0 34px;
</style>
<style lang="stylus" scoped>
    @import "leftBot.stylus"
</style>
