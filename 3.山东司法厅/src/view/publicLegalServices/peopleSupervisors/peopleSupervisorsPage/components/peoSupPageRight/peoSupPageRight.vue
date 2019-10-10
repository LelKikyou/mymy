<template>
    <div class="peoSupPageRight">
        <titleName>人员类别构成</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>人员类型构成</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>案件监督人员规模分布</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "peoSupPageRight",
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
            this.init()
        },
        methods: {
            init() {
                this.drawTop()
                this.drawMid()
                this.drawBot()
            },
            drawTop() {
                let data = [
                    {
                        name: "基层干部群众",
                        value: 551
                    },
                    {
                        name: "社会贤达",
                        value: 314
                    },
                    {
                        name: "专业人士",
                        value: 331
                    }
                ];
                let sumNum = eval(data.map(item => {
                    return item.value
                }).join('+'));
                let yData = data.map(i => {
                    return `${i.value}人,占比:${(i.value / sumNum * 100).toFixed(2)}%`  //保留2位小数
                });

                function getData(data, initRadius, initWidth, initSpace) {
                    var res = [];
                    for (let i = 0; i < data.length; i++) {
                        res.push({
                            type: 'pie',
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["36%", "50%"],
                            label: {
                                show: false
                            },
                            color: ["#147cff", "#08ff56", "#01fecf"][i],
                            data: [{
                                value: data[i].value,
                                name: data[i].name
                            }, {
                                value: sumNum - data[i].value,
                                itemStyle: {
                                    color: "rgba(0,0,0,0)"
                                },
                                tooltip: {
                                    show: false
                                }
                            }]
                        });
                        res.push({
                            name: '',
                            type: 'pie',
                            silent: true,
                            z: 1,
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["36%", "50%"],
                            label: {
                                show: false
                            },
                            color: ["#03475a"],
                            data: [{
                                value: 0,
                                tooltip: {
                                    show: false
                                },
                            }]
                        });
                    }
                    return res;
                }

                const opt = {
                    legend: {
                        show: true,
                        icon: "roundRect",
                        top: "center",
                        right: '40px',
                        data: data.map(i => {
                            return i.name
                        }),
                        orient: "vertical",
                        itemGap: 8,
                        textStyle: {
                            color: "#fff"
                        },
                    },
                    tooltip: {
                        show: true,
                        trigger: "item",
                        formatter: "{b}:{c}({d}%)"
                    },
                    grid: {
                        top: '38px',
                        left: "160px",
                        bottom: "170px",
                        containLabel: false
                    },
                    yAxis: [{
                        z: 10,
                        type: 'category',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            inside: true,
                            textStyle: {
                                color: "#fff",
                                fontSize: 14,
                            },
                            show: true,
                        },
                        data: yData
                    }],
                    xAxis: [{
                        show: false
                    }],
                    series: getData(data, 28, 10, 6)
                };
                this.optTop = opt;
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
                        left: 40,
                        top: 20,
                        bottom: 40,
                        right: 40
                    },
                    xAxis: {
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#004a55"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        data: ["律师", "非机关、团体、事业单位工作人员", "机关、团体、事业单位工作人员"],
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            padding: [0, 0, 30, 4],
                            inside: true,
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
                            position: "right",
                            color: "#fff"
                        },
                        itemStyle: {
                            barBorderRadius: [0, 6, 6, 0]
                        },
                        data: [{value: 112, itemStyle: {color: "#177dff"}}, {
                            value: 515,
                            itemStyle: {color: "#00ff55"}
                        }, {value: 569, itemStyle: {color: "#00ffd0"}}]
                    }]
                };
                this.optMid = opt
            },
            drawBot() {
                let opt = {
                    tooltip: {
                        formatter:"{b}:{c}人<br />占比:{d}%"
                    },
                    series: [
                        {
                            color: ["#02ffd0", "#04ff50","#177cfe","#00b6ff","#41d801"],
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                color:"#fff"
                            },
                            itemStyle: {
                                borderWidth: 2,
                                borderColor: "#011c31"
                            },
                            labelLine:{
                                lineStyle:{
                                    color:"#fff"
                                }
                            },
                            data: [
                                {value: 0, name: '3人以下'},
                                {value: 312, name: '3-5(不含)人'},
                                {value: 16, name: '5-8(不含)人'},
                                {value: 0, name: '8-10(不含)人'},
                                {value: 0, name: '10人以上'}
                            ]
                        }
                    ]
                };
                this.optBot = opt
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peoSupPageRight.stylus"
</style>
