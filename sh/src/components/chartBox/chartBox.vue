<template>
    <div class="chartBox">
        <h3 class="title">{{chartData.title}}</h3>
        <div :id='chartData.id' class="chart-wrap"></div>
    </div>
</template>

<script>
    export default {
        name: "chartBox",
        props:{
            chartData:{
                type: Object,
                default: function () {
                    return {
                        title:'',
                        id:'',
                        type:'',
                        dataJson:[],
                    }
                }
            }
        },
        mounted(){
           // this.drawChart(this.chartData)
        },
        methods:{
            drawChart(chartData){
                let myChart = this.$echarts.init(document.getElementById(chartData.id))
                let mapOption;
                if(chartData.type=='pie'){
                    mapOption={
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        color:['#f88d47','#feaeaf','#9ccc66','#5282e4'],
                        series: [
                            {
                                name:chartData.title,
                                type:'pie',
                                radius: ['50%', '70%'],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data:chartData.dataJson
                            }
                        ]
                    }
                }else if(chartData.type=='bar'){
                    mapOption={
                        tooltip: {},
                        xAxis: {
                            type: 'category',
                            data: chartData.dataJson.xData,
                            axisLine: {
                                lineStyle: {
                                    color: '#9cdbff', // X轴及其文字颜色
                                }
                            }

                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                show:false,
                                lineStyle: {
                                    color: '#9cdbff', // X轴及其文字颜色
                                }
                            }
                        },
                        series: [{
                            data: chartData.dataJson.yData,
                            type: 'bar',
                            itemStyle: {
                                //通常情况下：
                                normal: {
                                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                    color: function (params) {
                                        var colorList = ['#90ebc5','#feaeaf','#5282d4']; //每根柱子的颜色
                                        return colorList[params.dataIndex];
                                    }
                                },
                                //鼠标悬停时：
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }]
                    }
                }else if(chartData.type=='ybar'){
                    mapOption={
                        tooltip: {},
                        grid: {
                            left: '3%',
                            right: '3%',
                            bottom: '3%',
                            top: '6%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#9cdbff', // X轴及其文字颜色
                                }
                            }

                        },
                        yAxis: {
                            type: 'category',
                            data: chartData.dataJson.xData,
                            axisLine: {
                                show:false,
                                lineStyle: {
                                    color: '#9cdbff', // X轴及其文字颜色
                                }
                            }
                        },
                        series: [{
                            data: chartData.dataJson.yData,
                            type: 'bar',
                            itemStyle: {
                                //通常情况下：
                                normal: {
                                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                    color: function (params) {
                                        var colorList = ['#90ebc5','#feaeaf','#5282d4']; //每根柱子的颜色
                                        return colorList[params.dataIndex];
                                    }
                                },
                                //鼠标悬停时：
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }]
                    }
                }
                myChart.setOption(mapOption)
            }
        },
        watch:{
            chartData(newData) {
                this.drawChart(this.chartData)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "chartBox.stylus"
</style>