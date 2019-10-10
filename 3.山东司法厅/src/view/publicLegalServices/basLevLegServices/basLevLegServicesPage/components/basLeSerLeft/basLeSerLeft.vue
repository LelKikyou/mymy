<template>
    <div class="basLeSerLeft">
        <titleName>执业人员性别构成</titleName>
        <div  class="leftTop">
            <div class="iconBox">
                <div class="iconItem">
                    <div class="man cir">
                        <img :src="require('@/assets/publicLegalServices/man.png')" alt="">
                    </div>
                    <p>占比65%</p>
                </div>
                <div class="iconItem">
                    <div class="woman cir">
                        <img :src="require('@/assets/publicLegalServices/woman.png')" alt="">
                    </div>
                    <p>占比35%</p>
                </div>
            </div>
            <charts class="leftMidC" :option="optTop" ></charts>
        </div>
        <titleName>执业人员专业分析</titleName>
        <charts :option="optMid"  class="leftMid"></charts>
        <titleName>执业人员职业分析</titleName>
        <charts :option="optBot"  class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "basLeSerLeft",
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
                    xAxis: {
                        type: 'value',
                        show: false,
                    },
                    yAxis: {
                        type: 'category',
                        show: false,
                        axisTick: {
                            show: false
                        }
                    },
                    grid: {
                        left:"80px",
                        right:"190px",
                        bottom:"40px",
                        top:"20px",
                        containLabel: true
                    },
                    series: [{
                        type: 'bar',
                        name: '男性',
                        data: [40],
                        stack: 'income',
                        barWidth: 20,
                        label: {
                            show: true,
                            position: [-40, -10],
                            //TODO 
                            offset: [40, 40],
                            formatter: '{a|{a}：}{c|{c}}',
                            rich: {
                                a: {
                                    // align: "center",
                                    fontSize: 16,
                                    color: "#fff",
                                    lineHeight: 20,
                                    borderColor: '#fff'
                                },
                                c: {
                                    fontWeight: "bold",
                                    // align: "center",
                                    fontSize: 20,
                                    lineHeight: 20,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#177dff',
                                barBorderRadius: [10, 0, 0, 10],

                            }
                        },
                    }, {
                        type: 'bar',
                        name: '女性',
                        data: [60],
                        stack: 'income',
                        barWidth: 20,
                        label: {
                            show: true,
                            position: [-40, -10],
                            //TODO 
                            offset: [40, 40],
                            formatter: '{a|{a}：}{c|{c}}',
                            rich: {
                                a: {
                                    // align: "center",
                                    fontSize: 16,
                                    color: "#fff",
                                    lineHeight: 20,
                                    borderColor: '#fff'
                                },
                                c: {
                                    fontWeight: "bold",
                                    // align: "center",
                                    fontSize: 20,
                                    lineHeight: 20,
                                }
                            }
                        },

                        itemStyle: {
                            normal: {
                                color: '#ff6360',
                                barBorderRadius: [0, 10, 10, 0],

                            }
                        }
                    }]
                };
                this.optTop = opt;
            },
            //
            drawMid() {
                let data = [
                    {value: 601, name: '其他'},
                    {value: 121, name: '法律专业'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#177dff", "#00ff55"],
                        radius: [64, 73],
                        center: ['50%', '50%'],
                        label: {
                            position: 'outside',
                            formatter: '{b|{b}：}{c|{c}}\n {b|占比:{d}%}',
                            rich: {
                                b: {
                                    align: "center",
                                    fontSize: 14,
                                    color: "#fff",
                                    lineHeight: 20,
                                    borderColor: '#fff'
                                },
                                c: {
                                    fontWeight: "bold",
                                    align: "center",
                                    fontSize: 18,
                                    lineHeight: 20,
                                }
                            }
                        },
                        labelLine: {
                            length: 5,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: data,
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                let data =  [
                    {value: 64, name: '普通执业人员'},
                    {value: 6, name: '高级执业人员'},
                    {value: 13, name: '所主任'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
                    series: {
                        type: 'pie',
                        radius: [18, 100],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        data: data,
                        label:{
                            formatter:'{b}\n{c}人',
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
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "basLeSerLeft.stylus"
</style>
