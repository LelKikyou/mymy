<template>
    <div class="leftBottom">
        <boxTitle>近5年罪犯变化数量趋势</boxTitle>
        <div class="content">
            <chart ref="chartDom" :option="option" @upInitDone="initDone"></chart>
        </div>
    </div>
</template>

<script>
    import boxTitle from "../boxTitle"
    import chart from "@/components/charts"

    export default {
        name: "leftBottom",
        props: {
            fiveYearCCE: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            boxTitle,
            chart
        },
        data() {
            return {
                option: {}
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawPie()
            },
            //图形初始化后的回调
            initDone() {
                let dom = this.$refs.chartDom.dom, index = 0, data = this.fiveYearCCE, _time;
                if (data.length) {
                    _time = setInterval(chartHover, 2000);
                    dom.on('mouseover', function () {
                        clearInterval(_time);
                        dom.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: index === 0 ? data.length - 1 : index - 1
                        });
                    });
                    dom.on('mouseout', function () {
                        _time = setInterval(chartHover, 2000);
                    })
                }

                function chartHover() {
                    dom.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: index === 0 ? data.length - 1 : index - 1
                    });
                    dom.dispatchAction({
                        type: 'highlight',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    dom.dispatchAction({
                        type: 'showTip',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    index < data.length - 1 ? index++ : index = 0
                }
            },
            drawPie() {
                let xAxisData = [], registeredCriminals = [], releaseTheCriminals = [], inTheCriminal = [];
                if (this.fiveYearCCE.length) {
                    this.fiveYearCCE.map(item => {
                        xAxisData.push(item.year+"年");
                        registeredCriminals.push(item.registeredCriminals);
                        releaseTheCriminals.push(item.releaseTheCriminals);
                        inTheCriminal.push(item.releaseTheCriminals);
                    })
                }
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        top: "6px",
                        textStyle: {
                            color: "#fff"
                        },
                        data: [{name: '在押罪犯', icon: "rect"}, {name: '释放罪犯', icon: "rect"}, {name: '入监罪犯', icon: "rect"}]
                    },
                    grid: {
                        top: "40px",
                        left: '14px',
                        right: '46px',
                        bottom: '22px',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: "#334e9f",
                                    width: 2
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#2b4fa3"]
                                },
                                show: true
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
                                lineStyle: {
                                    color: "#334e9f",
                                    width: 2
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#2b4fa3"]
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
                    color: ["#15deff", "#f76b64", "#fac961"],
                    series: [
                        {
                            name: '在押罪犯',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(21,222,255,1)'
                                    }, {
                                        offset: 1, color: 'rgba(21,222,255,0)'
                                    }]
                                }
                            },
                            data: registeredCriminals
                        },
                        {
                            name: '释放罪犯',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(247,107,100,1)'
                                    }, {
                                        offset: 1, color: 'rgba(247,107,100,0)'
                                    }]
                                }
                            },
                            data: releaseTheCriminals
                        },
                        {
                            name: '入监罪犯',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(250,201,97,1)'
                                    }, {
                                        offset: 1, color: 'rgba(250,201,97,0)'
                                    }]
                                }
                            },
                            data: inTheCriminal
                        }
                    ]
                };
                this.option = opt;
            }
        },
        watch: {
            fiveYearCCE() {
                this.drawPie()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftBottom.stylus"
</style>
