<template>
    <div class="aLawEnfTopRight">
        <chart class="chart" ref="chartDom" :option="option.topConOption"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"

    export default {
        name: "aLawEnfTopRight",
        components: {
            chart,
        },
        data() {
            return {
                option: {
                    topConOption: {},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
            },
            drawTop() {
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
                        radius: "70%",
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
                                return `{a|${value}}\n{b|${data[0][indicator.key]}}`
                            },
                            rich: {
                                a: {
                                    color: '#00ffff',
                                    fontSize: 16
                                },
                                b: {
                                    color: '#fff',
                                    fontSize: 16
                                },

                            }
                        },
                        indicator: [
                            {
                                name: '业务类型1',
                                key: 0
                            },
                            {
                                name: '业务类型2',
                                key: 1
                            },
                            {
                                name: '业务类型3',
                                key: 2
                            },
                            {
                                name: '业务类型4',
                                key: 3
                            },
                            {
                                name: '业务类型5',
                                key: 4
                            },
                            {
                                name: '业务类型6',
                                key: 5
                            }
                        ]
                    },

                    series: {
                        type: "radar",
                        symbol: "circle",
                        symbolSize: 10,
                        areaStyle: {
                            normal: {
                                color: "rgba(0,255,255, 0.4)"
                            }
                        },
                        itemStyle: {
                            color: 'rgba(0,255,255, 1)',
                            borderColor: 'rgba(0,255,255, 0.3)',
                            borderWidth: 10,
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
                this.option.topConOption = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "aLawEnfTopRight.stylus"
</style>
