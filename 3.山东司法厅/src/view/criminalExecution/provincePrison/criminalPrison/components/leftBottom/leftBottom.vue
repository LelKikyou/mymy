<template>
    <div class="leftBottom">
        <titleName>近5年罪犯数量变化</titleName>
        <div class="content">
            <!--<chart ref="chartDom" :option="option" @upInitDone="initDone"></chart>-->
            <chart ref="chartDom" :option="option"></chart>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"

    export default {
        name: "leftBottom",
        props: {
            fiveYearCCE: {
                type: Array,
                default() {
                    return [1,2,3,4,5]
                }
            }
        },
        components: {
            titleName,
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
                // if (data.length) {
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
                // }

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
                let xAxisData = [2014, 2015, 2016, 2017,2018], registeredCriminals = [3991,4798,6420,8480,13559],
                    releaseTheCriminals = [6,5,7,5,5], inTheCriminal = [22563,22387,22414,21644,22211];
                // if (this.fiveYearCCE.length) {
                //     this.fiveYearCCE.map(item => {
                //         xAxisData.push(item.year + "年");
                //         registeredCriminals.push(item.registeredCriminals);
                //         releaseTheCriminals.push(item.releaseTheCriminals);
                //         inTheCriminal.push(item.releaseTheCriminals);
                //     })
                // }
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
                                    color: "#00fefe",
                                    width: 2
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#007a77"]
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
                                    color: "#00fefe",
                                    width: 2
                                }
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
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
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
                                        offset: 0, color: 'rgba(0,255,208,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,208,0)'
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
                                        offset: 0, color: 'rgba(0,255,85,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,85,0)'
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
                                        offset: 0, color: 'rgba(23,125,255,1)'
                                    }, {
                                        offset: 1, color: 'rgba(23,125,255,0)'
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
