<template>
    <div class="peoSupPageLeft">
        <titleName>人员性别构成</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>人员文化程度构成</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>案件类型分布</titleName>
        <charts :option="optBot" class="leftBot"></charts>
        <div class="botList">
            <div :class="['list','list_'+i]" v-for="(data,i) in botChartsData">
                <div class="cir">{{data.value}}</div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import echarts from 'echarts'

    export default {
        name: "peoSupPageLeft",
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
        props: {
            botChartsData: {
                type: Array,
                default() {
                    return [
                        {
                            name: "案件类型1",
                            value: 754
                        },
                        {
                            name: "案件类型2",
                            value: 388
                        },
                        {
                            name: "案件类型3",
                            value: 458
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
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
                            radius: ['50%', '65%'],
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
                                {value: 1023, name: '男'},
                                {value: 173, name: '女'}
                            ]
                        }
                    ]
                };
                this.optTop = opt
            },
            drawMid() {
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 60,
                        top: 40,
                        bottom: 40,
                        right: 40
                    },
                    xAxis: {
                        data: ["大专以下", "大专", "本科", "本科以上"],
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#00fdfb"
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                color: ["#007d7c"]
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        }
                    },
                    series: [{
                        type: 'bar',
                        barWidth: 12,
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff"
                        },
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#00b5be" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#14f5c9" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [6, 6, 0, 0]
                        },
                        data: [70, 189, 386, 551]
                    }]
                };
                this.optMid = opt
            },
            drawBot() {
                let data = this.botChartsData;
                let sumNum = eval(data.map(item => {
                    return item.value
                }).join('+'));

                /*
                data 数据来源
                initRadius 初始化圆心的宽度
                initSpace 饼图之间的间隔
                initWidth 饼图的宽度
                 */
                function getData(data, initRadius, initWidth, initSpace) {
                    var res = []
                    for (let i = 0; i < data.length; i++) {
                        res.push({
                            name: data[i].name,
                            type: 'pie',
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            legendHoverLink: false,
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["34%", "56%"],
                            label: {
                                show: false
                            },
                            color: ["#147cff", "#08ff56", "#01fecf"][i],
                            data: [{
                                value: sumNum / 2,
                                name: '',
                                itemStyle: {
                                    color: "#011c31"
                                }
                            }, {
                                value: data[i].value,
                                name: data[i].name,
                                itemStyle: {
                                    color: ["#147cff", "#08ff56", "#01fecf"][i]
                                }
                            }, {
                                value: sumNum - data[i].value,
                                name: '',
                                itemStyle: {
                                    color: "#03475a"
                                }
                            }, {
                                value: sumNum / 2,
                                name: '',
                                itemStyle: {
                                    color: "#011c31"
                                }
                            }]
                        })
                    }
                    return res;
                }

                const opt = {
                    series: getData(data, 36, 6, 5),
                    legend: {
                        bottom: "68px",
                        right: "60px",
                        textStyle: {
                            color: "#fff"
                        },
                        selectedMode:false,
                        orient: "vertical",
                        data: data.map(i => {
                            return {name: i.name, icon: "rect"}
                        })
                    },
                };
                this.optBot = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peoSupPageLeft.stylus"
</style>
