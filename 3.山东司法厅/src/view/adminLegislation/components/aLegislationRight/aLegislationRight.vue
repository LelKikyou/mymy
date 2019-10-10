<template>
    <div class="aLegislationRight">
        <titleName>规章草案征集状态分布</titleName>
        <charts class="rightTopChart" :option="option.tConOption"></charts>
        <titleName>立法草案征集状态分布</titleName>
        <charts class="rightMidChart" :option="option.mConOption"></charts>
        <titleName>草案反馈状态分布</titleName>
        <navChart :navData="botNav" @handleNav="drawBot"></navChart>
        <charts class="rightBotChart" :option="option.bConOption"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"

    export default {
        name: "aLegislationRight",
        components: {
            titleName,
            charts,
            navChart
        },
        data(){
            return {
                botNav:{
                    gzcafk:"规章草案反馈",
                    zcgc:"立法草案反馈"
                },
                option: {
                    tConOption:{},
                    mConOption:{},
                    bConOption:{},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot('gzcafk');
            },
            drawTop(){
                let data =  [
                    {value: 64, name: '征集结束'},
                    {value: 6, name: '未发布'},
                    {value: 13, name: '正在征集'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
                    series: {
                        type: 'pie',
                        radius: [15, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data,
                        label:{
                            formatter:'{b}\n{b|{c}}条',
                            color: '#fff',
                            fontSize: 14,
                            rich:{
                                b:{
                                    fontSize:18,
                                }
                            }
                        },
                        labelLine: {
                            smooth: true,
                            length: 6,
                            length2: 4,
                            lineStyle:{
                                color:'#fff'
                            }
                        }
                    }
                };
                this.option.tConOption = opt;
            },
            drawMid(){
                let data =  [
                    {value: 100, name: '征集结束'},
                    {value: 345, name: '未发布'},
                    {value: 213, name: '正在征集'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
                    series: {
                        type: 'pie',
                        radius: [15, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data,
                        label:{
                            formatter:'{b}\n{b|{c}}条',
                            color: '#fff',
                            fontSize: 14,
                            rich:{
                                b:{
                                    fontSize:18,
                                }
                            }
                        },
                        labelLine: {
                            smooth: true,
                            length: 6,
                            length2: 4,
                            lineStyle:{
                                color:'#fff'
                            }
                        }
                    }
                };
                this.option.mConOption = opt;
            },
            drawBot(type) {
                let optData = {
                    gzcafk: [
                        {value: 1093, name: '未发布'},
                        {value: 3530, name: '已发布'},
                    ],
                    zcgc: [
                        {value: 1203, name: '未发布'},
                        {value: 3130, name: '已发布'},
                    ],
                };
                let data = optData[type]
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: [ "#00ffd0","#00ff55"],
                        radius: [60, 80],
                        center:['50%', '50%'],
                        label: {
                            position: 'outerside',
                            formatter: '{b|{b}}\n{c|{c}}\n {b|占比：{d}%}',
                            rich: {
                                b: {
                                    fontWeight: "normal",
                                    align: "center",
                                    fontSize: 16,
                                    color: "#fff",
                                    lineHeight: 20,
                                },
                                c: {
                                    fontWeight: "normal",
                                    align: "center",
                                    fontSize: 16,
                                    lineHeight: 20,
                                }
                            }
                        },
                        labelLine: {
                            length: 5,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data:data,
                    }
                };
                this.option.bConOption = opt;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "aLegislationRight.stylus"
</style>
