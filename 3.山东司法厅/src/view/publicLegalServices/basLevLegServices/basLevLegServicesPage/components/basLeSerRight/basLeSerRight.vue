<template>
    <div class="basLeSerRight">
        <titleName>法律服务所区域分布</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>法律服务所规模分布</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>执业人员执业时间分布</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "basLeSerRight",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {}
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop() {
                let opt = {
                    series: [
                        {
                            color: ["#02ffd0", "#00ff56"],
                            type: 'pie',
                            radius: [45, 70],
                            label: {
                                show: true,
                                formatter: ['{b|{b}}', '{c|{c}人}', '{d|占比:{d}%}'].join('\n'),
                                rich: {
                                    b: {
                                        color: '#fff',
                                        fontSize: 16,
                                        width: 40,
                                        lineHeight: 40,
                                        align: "center",
                                        height: 40,
                                        borderWidth: 1,
                                        borderRadius: 50,
                                        borderColor: "#21cbdc"
                                    },
                                    c: {
                                        width: 40,
                                        height: 28,
                                        lineHeight: 28,
                                        align: "center",
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    },
                                    d: {
                                        width: 40,
                                        align: "center",
                                        color: '#fff',
                                        fontSize: 16
                                    }
                                },
                            },
                            itemStyle: {
                                borderWidth: 2,
                                borderColor: "#2b2026"
                            },
                            data: [
                                {value: 1023, name: '城市'},
                                {value: 173, name: '农村'}
                            ]
                        }
                    ]
                };
                this.optTop = opt;
            },
            //
            drawMid(){
                let data = [1452,596,38,22,123];
                let max = Math.max(...data) * 1.3
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
                            top:20,
                            bottom:40,
                            right:20
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
                            },
                            max:max
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
                            data: ['5人以内','5-15人','15-25人','25-35人','35人以上']
                        },
                        series: {
                            type: 'bar',
                            barWidth: 12,
                            label:{
                                show:true,
                                position:"right",
                                color:"#fff",
                                fontSize:14,
                            },
                            itemStyle:{
                                color: function (params) {
                                    var colorList =[ "#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"];
                                    return colorList[params.dataIndex];
                                },
                                barBorderRadius:[0, 6, 6, 0],
                            },
                            barGap: 10,
                            data:data,
                        }
                    },
                }
                this.optMid = opt;
            },
            drawBot() {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [60, 80],
                        name: '访问来源',
                        label: {
                            formatter: "{b}\n{c}，{d}%",
                            color: "#fff",
                            fontSize: 14,
                        },
                        labelLine: {
                            // length: 5,
                            // length2:3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        itemStyle:{
                            borderColor: '#05223a',
                            borderWidth: 2,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 335, name: '1年以内'},
                            {value: 679, name: '1-3年'},
                            {value: 1548, name: '3-8年'},
                            {value: 679, name: '8-10年'},
                            {value: 679, name: '10年以上'},
                            {value: 679, name: '未知'},
                        ],
                    }  
                };
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "basLeSerRight.stylus"
</style>
