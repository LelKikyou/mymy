<template>
    <div class="rightBot">
        <titleName style="height: 62px;line-height: 62px;">公共法律服务统计</titleName>
        <chart class="chart" @upInitDone="initDoneTop" ref="chartDomRightBot" :option="optionTop.option"></chart>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    export default {
        name: "rightBot",
        components: {
            titleName,
            chart
        },
        data() {
            return {
                optionTop: {
                    option: {},
                },
            }
        },
        props:{
            dataRightBot: {
                type: Object,
                default: () => {
                    return {}
                }
            },
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawBot("prisonTermConstitute");
            },
            handleNav(index) {
            },
            initDoneTop(){
                // let dom = this.$refs.chartDomRightTop.dom, index = 0, data = this.dataRightTop[this.optionTop.active];
            },
            drawBot(type) {
                // this.optionTop.active = type;
                // let data = this.dataTop[type];
                const opt = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle:{

                            },
                        }
                    },
                    grid: {
                        left: '10%',
                        right: '15%',
                        bottom: '0%',
                        containLabel: true
                    },
                    xAxis: {
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
                            },
                            show: false
                        },
                        splitLine:{
                            lineStyle:{
                                color:["#4f9efa"],
                                opacity: 0.3,
                            },
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ["12348热线", "群众诉求", "法律咨询", "全省调解员", "全省鉴定人", "全省公证员", "全省基层法律工作者", "全省律师"],
                        axisLine: {
                            lineStyle: {
                                color: '#4f9efa',
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            fontSize:16,
                            color:"#fff"
                        }
                    },
                    series: {
                        type: 'bar',
                        itemStyle:{
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#00b5b6' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#11ebbf' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                            barBorderRadius:[0, 8, 8, 0],
                        },
                        barWidth:16,
                        label:{
                            show:true,
                            position:"right",
                            color:"#fff",
                            fontSize:14,
                        },
                        data: [277938, 357, 4350, 257916, 2754, 962,8562,28688]
                    },
                };
                this.optionTop.option = opt;
            },
        },
        watch: {
            dataRightBot() {
                this.drawBot("prisonTermConstitute")
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "rightBot.stylus"
</style>
