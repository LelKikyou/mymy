<template>
    <div class="peoMedMidBot">
        <titleName>各市调解机构及调解员分布</titleName>
        <charts class="mbChart" :option="optCharts"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "peoMedMidBot",
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
                    legend: {
                        left: 'center',
                        top: 10,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                        data: [{name: '机构', icon: "rect"},  {name: '人员', icon: "rect"}]
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        bottom: 20,
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
                        data: ["省直","济南市", "青岛市", "潍坊市", "烟台市", "临沂市", "济宁市", "淄博市", "泰安市",  "威海市", "东营市", "聊城市", "滨州市", "德州市", "枣庄市", "日照市", "菏泽市", "莱芜市"],
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
                            name: "机构",
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#0fbe83' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#00efc5' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[5, 5, 0, 0],
                            },
                            barWidth:10,
                            data: [
                                197,
                                674,
                                1300,
                                1200,
                                1800,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1200,
                                1500,
                                1300,
                                1200,
                            ]
                        },
                        {
                            type: 'bar',
                            name: "人员",
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00b6ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#177dff' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[5, 5, 0, 0],
                            },
                            barWidth:10,
                            data: [
                                1000,
                                1500,
                                1500,
                                1300,
                                1200,
                                1300,
                                1200,
                                1800,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1500,
                                1300,
                                1200,
                                1200,
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
    @import "peoMedMidBot.stylus"
</style>
