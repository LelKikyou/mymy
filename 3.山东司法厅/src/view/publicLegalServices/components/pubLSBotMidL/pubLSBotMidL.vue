<template>
    <div class="pubLSBotMidL">
        <chart class="chart" ref="chartDomMidL" :option="option.leftConOption"></chart>
        <div class="wordArea" id="wordArea">
            <!-- <div>
                <span class="color_1 fontSize16">买卖合同纠纷</span>
            </div>
            <div>
                <span class="color_1 fontSize16">抚养纠纷</span>
                <span class="color_2 fontSize16">不动产登记纠纷</span>
                <span class="color_1 fontSize16">离婚纠纷</span>
            </div>
            <div>
                <span class="color_3 fontSize14">法定继承纠纷</span>
                <span class="color_1 fontSize20">劳动合同纠纷</span>
                <span class="color_3 fontSize14">民间借贷纠纷</span>
            </div>
            <div>
                <span class="color_3 fontSize14">物权确认纠纷</span>
                <span class="color_1 fontSize16">土地承包经营纠纷</span>
            </div>
            <div>
                <span class="color_2 fontSize16">机动车交通事故责任纠纷</span>
                <span class="color_3 fontSize14">租赁合同纠纷</span>
            </div>
            <div>
                <span class="color_1 fontSize14">监护权纠纷</span>
                <span class="color_2 fontSize16">肖像权权纠纷</span>
            </div> -->
        </div>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import wordcloud from "wordcloud"

    export default {
        name: "pubLSBotMidL",
        components: {
            chart,
        },
        data() {
            return {
                option: {
                    leftConOption: {},
                },
            }
        },
        mounted() {
            this.init();
            this.wordcloud();
        },
        methods: {
            init() {
                this.drawMidL();
            },
            drawMidL() {
                const opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow',       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {},
                        }
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        bottom: 0,
                        top: 20,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            fontSize: 12,
                            color: "#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            },
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: ["#00ffff"],
                                opacity: 0.3,
                            },
                            show: false
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ["委员会类型1", "委员会类型1", "委员会类型1", "委员会类型1", "委员会类型1", "委员会类型1", "委员会类型1", "委员会类型1"],
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        nameGap: 30,
                        axisLabel: {
                            fontSize: 14,
                            color: "#fff",
                        }
                    },
                    series: {
                        type: 'bar',
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#00b5b6' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#11ebbf' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                            barBorderRadius: [30, 30, 0, 0],
                        },
                        barWidth: 12,
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            fontSize: 14,
                        },
                        data: [
                            1000,
                            1500,
                            1300,
                            1200,
                            1800,
                            1500,
                            1300,
                            1200,
                        ]
                    },
                };
                this.option.leftConOption = opt;
            },
            wordcloud() {
                // setInterval( function(){
                let list = [['买卖合同纠纷', 16], ['抚养纠纷', 16], ['不动产登记纠纷', 16], ['离婚纠纷', 16], ['法定继承纠纷', 16], ['劳动合同纠纷', 16]]
                let wc = new wordcloud(document.getElementById('wordArea'), {
                    list: list,
                    color: 'random-light',

                    maxFontSize: 16,                                        // 最大fontSize，用来控制weightFactor，默认60

                    minFontSize: 12,

                    gridSize: 10,

                    backgroundColor: 'rgba(0, 0, 0, 0)',

                });
                // }, 3000)
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSBotMidL.stylus"
</style>
