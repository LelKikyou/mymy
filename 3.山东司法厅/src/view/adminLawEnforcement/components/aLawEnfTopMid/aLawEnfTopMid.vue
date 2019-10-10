<template>
    <div class="aLawEnfTopMid">
        <chart class="chart" ref="chartDom" :option="option.leftConOption"></chart>
        <chart class="chart" ref="chartDom" :option="option.rightConOption"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    export default {
        name: "aLawEnfTopMid",
        components: {
            chart,
        },
        data() {
            return {
                option: {
                    leftConOption: {},
                    rightConOption:{}
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawBot();
            },
            drawTop(){
                let data =  [
                    {value: 213, name: '一级'},
                    {value: 345, name: '二级'},
                    {value: 213, name: '三级'},
                    {value: 345, name: '四级'},
                ];
                let sum = data.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.value
                },0);
                let percent = {};
                data.map((item, idx) => {
                    return percent[item.name] = `${(item.value/sum * 100).toFixed(0)}%`
                });
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}件, 占比{d}%'
                    },
                    title: {
                        text: '仲裁员',
                        subtext: '等级分布',
                        x: 'center',
                        y: 95,
                        itemGap:15,
                        textStyle: {
                            fontSize:14,
                            color: ['#fff'],
                            fontWeight: 'normal',
                        },
                        subtextStyle: {
                            color: '#fff',
                            fontSize: 14
                        },
                    },
                    legend: {
                        orient: "vartical",
                        x: "left",
                        left: 120,
                        top: 245,
                        data: ['一级','二级','三级','四级'],
                        itemWidth: 14,
                        itemHeight: 14,
                        textStyle:{
                            color:'#fff',  
                            fontSize: 14,      
                        },
                        itemGap :16,  
                        formatter: function(data){
                            return `${data}：${percent[data]}`
                        }              
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [50, 90],
                        center:['50%', 120],
                        label: {
                            position:'inside',
                            formatter: "{c}",
                            color: "#003e71",
                            fontSize: 14,
                        },
                        itemStyle:{
                            borderColor: '#05223a',
                            borderWidth: 2,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data:data,
                    }
                };
                this.option.leftConOption = opt;
            },
            drawBot(){
                let opt = {
                    baseOption: {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                                shadowStyle:{
                                },
                            }
                        },
                        grid:{
                            left:100,
                            top:40,
                            right:40,
                            bottom:40,
                        },
                        xAxis: {
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
                        },
                        yAxis: {
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
                                color:"#fff",
                                fontSize:14,
                            },
                            data: ['其他','医疗纠纷','交通事故赔偿','电子商务','农业生产经营','物业','土地交易','股权转让','租赁','买卖','房地产','金融','建筑工程']
                        },
                        series: {
                            type: 'bar',
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
                            data:[3,3,22,6,14,5,5,6,14,5,5,5,5],
                        }
                    },
                }
                this.option.rightConOption = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "aLawEnfTopMid.stylus"
</style>
