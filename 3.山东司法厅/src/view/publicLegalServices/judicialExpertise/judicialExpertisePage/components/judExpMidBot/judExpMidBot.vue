<template>
    <div class="judExpMidBot">
        <titleName>鉴定案件变化趋势</titleName>
        <charts class="mbChart" :option="optCharts"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "judExpMidBot",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optCharts: {}
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.draw()
            },
            draw() {
                let xAxisData = [2014, 2015, 2016, 2017,2018,2019], data = [204, 1015, 716, 321,500,456]
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        formatter:"{b}年:{c}",
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    dataZoom: {
                        type:"slider",
                        bottom: '16',
                        height: '30',
                        dataBackground: {
                            lineStyle: {
                                color: '#00ffff',
                                opacity: 1,
                                width:1
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
                    },
                    grid: {
                        top: "20px",
                        left: '20px',
                        right: '40px',
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
                                show:false
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
                                show:false
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
                    color: ["#02ffd0"],
                    series: [
                        {
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
                            data: data
                        }
                    ]
                };
                this.optCharts = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "judExpMidBot.stylus"
</style>
