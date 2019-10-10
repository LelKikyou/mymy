<template>
    <div class="pubLSBotMidR">
        <chart class="chart" ref="chartDomMidR" :option="option.midRConOption"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    export default {
        name: "pubLSBotMidR",
        components: {
            chart,
        },
        data() {
            return {
                option: {
                    midRConOption: {},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawMidR();
            },
            drawMidR(){
                let myData = ['病理', '临床', '精神病', '物证', '毒物', '医疗损害', '文书', '痕迹', '微量物证', '声像资料', '电子数据', '会计', '建设工程', '产品质量', '海事', '交通', '环境损坏']
                let lineData = [100, 100, 100, 100, 100, 100, 100]
                let opt = {
                    baseOption: {
                        timeline: {
                            show: false,
                            top: 0,
                            data: []
                        },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                                shadowStyle:{
                                },
                            }
                        },
                        legend : {
                            top : 10,
                            left : '22%',
                            itemWidth : 10,
                            itemHeight : 10,
                            itemGap: 70,
                            icon : 'none',
                            textStyle : {
                                color : '#ffffff',
                                fontSize : 16,
                            },
                            data: ['鉴定人员', '鉴定机构']
                        },
                        grid: [{
                            show: false,
                            left: '10%',
                            top: '10%',
                            bottom: 10,
                            containLabel: true,
                            width: '30%'
                        }, {
                            show: false,
                            left: '51%',
                            top: '10%',
                            bottom: 10,
                            width: '0%'
                        }, {
                            show: false,
                            right: '10%',
                            top:'10%',
                            bottom: 10,
                            containLabel: true,
                            width: '30%'
                        }],
                        xAxis: [{
                            type: 'value',
                            inverse: true,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            position: 'bottom',
                            axisLabel: {
                                fontSize:12,
                                color:"#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                },
                                show: false
                            },
                            splitLine:{
                                lineStyle:{
                                    color:["#00ffff"],
                                    opacity: 0.3,
                                },
                                show: false
                            }
                        }, {
                            gridIndex: 1,
                            show: false
                        }, {
                            gridIndex: 2,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            position: 'bottom',
                            axisLabel: {
                                fontSize:12,
                                color:"#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                },
                                show: false
                            },
                            splitLine:{
                                lineStyle:{
                                    color:["#00ffff"],
                                    opacity: 0.3,
                                },
                                show: false
                            }
                        }],
                        yAxis: [{
                            type: 'category',
                            inverse: true,
                            position: 'right',
                            axisLine: {
                                lineStyle: {
                                    color: '#00ffff',
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            data: myData
                        }, {
                            gridIndex: 1,
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: 14,
                                },
                            },
                            data: myData.map(function(value) {
                                return {
                                    value: value,
                                    textStyle: {
                                        align: 'center'
                                    }
                                }
                            })
                        }, {
                            gridIndex: 2,
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                lineStyle: {
                                    color: '#00ffff',
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false

                            },
                            data: myData
                        }],
                        series: []

                    },
                    options: []
                }
                opt.options.push({
                    series: [
                        {
                            name: '鉴定人员',
                            type: 'bar',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            barWidth: 8,
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 1,
                                    y: 1,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#ffbf35' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#f17937' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[4, 0, 0, 4],
                            },
                            label:{
                                show:true,
                                position:"left",
                                color:"#fff",
                                fontSize:14,
                            },
                            data:[3,3,22,6,14,5,35,3, 3, 8, 6, 4, 3, 3, 8, 6, 4],
                        },
                        {
                            name: '鉴定机构',
                            type: 'bar',
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            barWidth: 8,
                            label:{
                                show:true,
                                position:"right",
                                color:"#fff",
                                fontSize:14,
                            },
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00b6ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#1679f7' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[0, 4, 4, 0],
                            },
                            barGap: 10,
                            data:[3,3,22,6,14,5,35,3, 3, 8, 6, 4, 3, 3, 8, 6, 4],
                        }
                    ]
                });
                this.option.midRConOption = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSBotMidR.stylus"
</style>
