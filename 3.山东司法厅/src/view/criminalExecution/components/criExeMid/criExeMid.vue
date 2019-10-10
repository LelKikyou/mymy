<template>
    <div class="criExeMid">
        <cirExeHeader :cirExeHeData="cirExeHeData"></cirExeHeader>
        <div class="top">
            <navChart :navData="navData" class="topNav" @handleNav="drawTop"></navChart>
            <span class="all">全部</span>
            <chart class="chart" ref="chartDomTop" :option="option.topConOption" @upInitDone="topInitDone"></chart>
        </div>
        <div class="mid">
            <titleNameOth class="midTitName">吸毒年限构成(关联冰毒戒毒人员)</titleNameOth>
            <chart class="chart" ref="chartDomMid" :option="option.midConption"></chart>
        </div>
        <div class="bot">
            <titleNameOth class="midTitName botTitName">年龄构成(关联冰毒戒毒人员)</titleNameOth>
            <chart class="chart" ref="chartDomBot" :option="option.botConption"></chart>
        </div>
    </div>
</template>

<script>
    import cirExeHeader from "../cirExeHeader"
    import navChart from "@/components/navChart"
    import titleNameOth from "@/components/titleNameOth"
    import chart from "@/components/charts"

    export default {
        name: "criExeMid",
        components: {
            cirExeHeader,
            navChart,
            titleNameOth,
            chart,
        },
        data() {
            return {
                cirExeHeData: {
                    type: 1,
                    zyNum: 45896,
                    hb: 2.23,
                    syIn: 5,
                    syOut: 2
                },
                navData: {
                    dpzl: "毒品种类",
                    dplx: "毒品类型"
                },
                option: {
                    topConOption: {},
                    midConption: {},
                    botConption: {},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop("dpzl");
                this.drawMid();
                this.drawBot();
            },
            drawTop(type) {
                let dataOpt = {
                    dpzl: {
                        x: ["冰毒", "海洛因", "吗啡", "摇头丸", "可卡因", "鸦片", "大麻", "K粉", "其他合成毒品", "其他传统毒品", "其他毒品"],
                        d: [1012, 1540, 1830, 1230, 1800, 2541, 1323, 1111, 1234, 1680, 1752]
                    },
                    dplx: {
                        x: ["传统型", "合成型", "混合型", "其他"],
                        d: [1522, 2542, 2544, 2541]
                    }
                };
                let data = dataOpt[type].d;
                let xData = dataOpt[type].x;
                let max = Math.max(...data) * 1.1
                const opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow',       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {},
                        }
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        bottom: 0,
                        top: 10,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        max:max
                    },
                    xAxis: {
                        type: 'category',
                        data: xData,
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        nameGap: 30,
                        axisLabel: {
                            fontSize: 14,
                            color: "#fff",
                            rotate: 30
                        }
                    },
                    series: {
                        type: 'bar',
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#00b5b6' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#11ebbf' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                            barBorderRadius: [30, 30, 0, 0],
                        },
                        barWidth: 12,
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            fontSize: 14,
                        },
                        data: data
                    }
                };
                this.option.topConOption = opt;
            },
            topInitDone() {
                let dom = this.$refs.chartDomTop.dom;
                dom.getZr().on('click', params => {
                    const pointInPixel = [params.offsetX, params.offsetY]
                    if (this.$refs.chartDomTop.dom.containPixel('grid', pointInPixel)) {
                        let pointInGrid = this.$refs.chartDomTop.dom.convertFromPixel({seriesIndex: 0}, pointInPixel);
                        //X轴序号
                        let xIndex = pointInGrid[0];
                        let op = this.$refs.chartDomTop.dom.getOption();
                        //获得图表中我们想要的类型
                        let type = op.xAxis[0].data[xIndex];
                        //高亮指定的数据图形。
                    }
                })
            },
            //
            drawMid() {
                let data = [
                    {
                        name: "2年以下",
                        value: 754  
                    },
                    {
                        name: "2-5年",
                        value: 611
                    },
                    {
                        name: "6-10年",
                        value: 400
                    },
                    {
                        name: "11年以上",
                        value: 200
                    },
                    {
                        name: "其他",
                        value: 200
                    }
                ];
                let arr = {};
                data.map((item, idx) => {
                    return arr[item.name] = item.value
                });
                let sumNum = eval(data.map(item => {
                    return item.value
                }).join('+'));
                let yData = data.map(i => {
                    return `${(i.value / sumNum * 100).toFixed(2)}%`  //保留2位小数
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
                            color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"][i],
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
                            color: 'rgba(0,255,255,0.2)',
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
                        icon: "roundRect",
                        top: "center",
                        left: '55%',
                        data: data.map(i => {
                            return i.name
                        }),
                        width: 29,
                        height: 17,
                        itemGap: 13,
                        formatter: function (name) {
                            return "{title|" + name + "：}{title|" + (arr[name]) + "人}"
                        },
                        textStyle: {
                            rich: {
                                title: {
                                    fontSize: 14,
                                    lineHeight: 17,
                                    color: "#fff"
                                },
                                value: {
                                    fontSize: 14,
                                    lineHeight: 17,
                                    color: "#fff"
                                }
                            }
                        },
                    },
                    tooltip: {
                        show: true,
                        trigger: "item",
                        formatter: "{b}:{c}({d}%)"
                    },
                    grid: {
                        top: '1%',
                        bottom: '56%',
                        left: "36%",
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
                    series: getData(data, 20, 10, 6)
                };

                // const opt = {
                //     legend: {
                //         show: true,
                //         icon:"roundRect",
                //         top: "center",
                //         left: '55%',
                //         data: arrName,
                //         width:29,
                //         height:17,
                //         // padding: [0, 5],
                //         itemGap: 13,
                //         formatter: function(name) {
                //             return "{title|" + name + "}{value|：" + (objData[name].value) +"}  {title|人}"
                //         },

                //         textStyle: {
                //             rich: {
                //                 title: {
                //                     fontSize: 14,
                //                     lineHeight:17,
                //                     color: "#fff"
                //                 },
                //                 value: {
                //                     fontSize: 14,
                //                     lineHeight: 17,
                //                     color: "#fff"
                //                 }
                //             }
                //         },
                //     },
                //     tooltip: {
                //         show: true,
                //         trigger: "item",
                //         formatter: "{a}<br>{b}:{c}({d}%)"
                //     },
                //     color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                //     grid: {
                //         top: '1%',
                //         bottom: '58%',
                //         left: "30%",
                //         containLabel: false
                //     },
                //     yAxis: [{
                //         type: 'category',
                //         inverse: true,
                //         axisLine: {
                //             show: false
                //         },
                //         axisTick: {
                //             show: false
                //         },
                //         axisLabel: {
                //             interval: 0,
                //             inside: true,
                //             textStyle: {
                //                 color: "#fff",
                //                 fontSize: 14,
                //             },
                //             show: true,
                //         },
                //         data: optionData.yAxis
                //     }],
                //     xAxis: [{
                //         show: false
                //     }],
                //     series: optionData.series
                // };
                this.option.midConption = opt;
            },
            drawBot() {
                let myData = ['不满18岁', '18-25岁', '26-35岁', '36-50岁', '51-60岁', '61-64岁', '65岁以上'];
                let opt = {
                    baseOption: {
                        timeline: {
                            show: false,
                            top: 0,
                            data: []
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow',       // 默认为直线，可选为：'line' | 'shadow'
                                shadowStyle: {},
                            }
                        },
                        legend: {
                            top: 10,
                            left: '31%',
                            itemWidth: 10,
                            itemHeight: 10,
                            itemGap: 150,
                            icon: 'horizontal',
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 16,
                            },
                            data: ['女性', '男性']
                        },
                        grid: [{
                            show: false,
                            left: '10%',
                            top: '15%',
                            bottom: 10,
                            containLabel: true,
                            width: '30%'
                        }, {
                            show: false,
                            left: '51%',
                            top: '15%',
                            bottom: 10,
                            width: '0%'
                        }, {
                            show: false,
                            right: '10%',
                            top: '15%',
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
                                fontSize: 12,
                                color: "#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                },
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#00ffff"],
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
                                fontSize: 12,
                                color: "#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                },
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ["#00ffff"],
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
                                    fontSize: 14
                                }

                            },
                            data: myData.map(function (value) {
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
                            name: '女性',
                            type: 'bar',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            barWidth: 8,
                            itemStyle: {
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
                                barBorderRadius: [4, 0, 0, 4],
                            },
                            label: {
                                show: true,
                                position: "left",
                                color: "#fff",
                                fontSize: 14,
                            },
                            data: [3, 3, 22, 6, 14, 5, 35],
                        },
                        {
                            name: '男性',
                            type: 'bar',
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            barWidth: 8,
                            label: {
                                show: true,
                                position: "right",
                                color: "#fff",
                                fontSize: 14,
                            },
                            itemStyle: {
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
                                barBorderRadius: [0, 4, 4, 0],
                            },
                            data: [3, 3, 8, 6, 4, 5, 12],
                        }
                    ]
                });
                this.option.botConption = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "criExeMid.stylus"
</style>
