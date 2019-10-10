<template>
    <div class="aLawEnfBotRight">
        <chart class="chart" ref="chartDom" :option="option.topConOption"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    export default {
        name: "aLawEnfBotRight",
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
            drawTop(){
                let xAxisData = [2014, 2015, 2016, 2017,2018,2019], registeredCriminals =  [561, 962, 123, 421, 2342, 1111],
                    releaseTheCriminals = [1122, 2341, 1232, 561, 962, 123];
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
                        right: 20,
                        top: 30,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                        data: [{name: '行政处罚', icon: "rect"}, {name: '行政强制', icon: "rect"}]
                    },
                    grid: {
                        left: 0,
                        right: 20,
                        bottom: 20,
                        top: 100,
                        containLabel: true
                    },
                    xAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: '#00ffff',
                                }
                            },
                            axisTick:{
                                show:false
                            },
                            nameGap:30,
                            axisLabel:{
                                fontSize:12,
                                color:"#fff",
                            },
                            boundaryGap: false,
                            data: xAxisData
                        }
                    ],
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show:false
                        },
                        axisLabel:{
                            fontSize:12,
                            color:"#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        },
                        splitLine:{
                            lineStyle:{
                                color:["#00ffff"],
                                opacity: 0.3,
                            }
                        }
                    },
                    color: ["#02ffd0", "#177dff"],
                    series: [
                        {
                            name: '行政处罚',
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
                            lineStyle:{
                                width:0
                            },
                            data: registeredCriminals
                        },
                        {
                            name: '行政强制',
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
                            lineStyle:{
                                width:0
                            },
                            data: releaseTheCriminals
                        },
                    ]
                };
                this.option.topConOption = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>

</style>
