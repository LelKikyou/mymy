<template>
    <div class="basLeSerMidBot">
        <titleName>执业人员变化趋势图</titleName>
        <charts :option="optCharts" class="mbChart"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "basLeSerMidBot",
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
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
            },
            drawTop(){
                const opt = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle:{

                            },
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
                    legend: {
                        left: 'center',
                        top: 10,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                        data: [{name: '城市所职业人员', icon: "rect"},  {name: '农村所职业人员', icon: "rect"}]
                    },
                    grid: {
                        left: 50,
                        right: 40,
                        bottom: 60,
                        top: 50,
                        containLabel: true
                    },
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
                    xAxis: {
                        type: 'category',
                        data: [2014, 2015, 2016, 2017,2018,2019],
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
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            name: "城市所职业人员",
                            stack: '总量',
                            itemStyle:{
                                color: '#00ffd0'
                            },
                            barWidth:22,
                            data: [
                                197,
                                674,
                                1300,
                                1200,
                                1800,
                                1500,
                            ]
                        },
                        {
                            type: 'bar',
                            stack: '总量',
                            name: "农村所职业人员",
                            itemStyle:{
                                color: '#177dff'
                            },
                            barWidth:22,
                            data: [
                                1000,
                                1500,
                                1500,
                                1300,
                                1200,
                                1300,
                            ]
                        },
                    ]
                };
                this.optCharts = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "basLeSerMidBot.stylus"
</style>
