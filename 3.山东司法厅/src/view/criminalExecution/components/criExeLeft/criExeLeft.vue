<template>
    <div class="criExeLeft">
        <cirExeHeader :cirExeHeData="cirExeHeData" @handleRouter="handleRouter"></cirExeHeader>
        <div class="top">
            <navChart :navData="navData" class="topNav" @handleNav="drawTop"></navChart>
            <span class="all">全部</span>
            <chart class="chart" ref="chartDomTop" :option="option.topConOption" @upInitDone="topInitDone"></chart>
        </div>
        <div class="mid">
            <titleNameOth class="midTitName">文化程度构成(关联财产型罪犯)</titleNameOth>
            <chart class="chart" ref="chartDomMid" :option="option.midConption"></chart>
        </div>
        <div class="bot">
            <titleNameOth class="midTitName botTitName">年龄构成(关联财产型罪犯)</titleNameOth>
            <chart class="chart" ref="chartDomBotL" :option="option.botLConption"></chart>
            <chart class="chart" ref="chartDomBotR" :option="option.botRConption"></chart>
        </div>
    </div>
</template>

<script>
    import cirExeHeader from "../cirExeHeader"
    import navChart from "@/components/navChart"
    import titleNameOth from "@/components/titleNameOth"
    import chart from "@/components/charts"

    export default {
        name: "criExeLeft",
        components: {
            cirExeHeader,
            navChart,
            titleNameOth,
            chart,
        },
        data() {
            return {
                navData: {
                    fylx: "分押类型",
                    fgdj: "分管等级",
                    aflb: "案犯类别"
                },
                option: {
                    topConOption: {},
                    midConption: {},
                    botLConption: {},
                    botRConption: {},
                },
                cirExeHeData: {
                    type: 0,
                    zyNum: 75638,
                    hb: 4.12,
                    syIn: 3,
                    syOut: 0
                }
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop("fylx");
                this.drawMid();
                this.drawBotL();
                this.drawBotR();
            },
            drawTop(type) {
                let optData = {
                    fylx: {x: ["财产型", "暴力型", "淫欲型", "涉毒型", "其他"], d: [26011, 7530, 0, 0, 4546]},
                    fgdj: {x: ["严管", "普管", "宽管", "考察级", "其它"], d: [3455, 15923, 10923, 0, 0]},
                    aflb: {x: ["危害国家安全罪犯", "重大刑事犯", "一般刑事犯", "其他"], d: [125, 251, 5, 15, 89]}
                };
                let data = optData[type]
                let max = Math.max(...data.d) * 1.1
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
                        data: data.x,
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        nameGap: 10,
                        axisLabel: {
                            interval: 0,
                            fontSize: 14,
                            color: "#fff",
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
                        barWidth: 40,
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            fontSize: 14,
                        },
                        data: data.d
                    },
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
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: [
                        {
                            type: 'pie',
                            color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                            radius: [25, 70],
                            name: '访问来源',
                            label: {
                                position: 'inside',
                                formatter: "{d}%",
                                color: "#003e71",
                                fontSize: 14,
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            hoverOffset: 5,
                            selectedOffset: 5,
                            data: [
                                {value: 335, name: '高中'},
                                {value: 679, name: '初中'},
                                {value: 1548, name: '小学'},
                                {value: 679, name: '本科'},
                                {value: 679, name: '硕士'},
                                {value: 679, name: '博士'},
                                {value: 679, name: '大专'},
                                {value: 679, name: '文盲'},
                            ],
                        },
                        {
                            type: 'pie',
                            radius: [75, 90],
                            label: {
                                formatter: "{b}：{c}",
                                color: "#fff",
                                fontSize: 14,
                            },
                            labelLine: {
                                length: 2,
                                length2: 3,
                                lineStyle: {
                                    color: "#fff",
                                }
                            },
                            itemStyle: {
                                color: '#0bdff8',
                                borderWidth: 2,
                                borderColor: '#0d1f38',
                            },
                            data: [{"name": "未满18岁", "value": 1}, {"name": "18-25", "value": 326}, {
                                "name": "25-35",
                                "value": 2581
                            }, {"name": "35-45", "value": 2762}, {"name": "45-55", "value": 2170}, {
                                "name": "55-65",
                                "value": 1720
                            }, {"name": "65岁以上", "value": 316}],
                        },
                    ]
                };
                this.option.midConption = opt;
            },
            drawBotL() {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [40, 65],
                        name: '访问来源',
                        label: {
                            formatter: "{b}\n{d}%",
                            color: "#fff",
                            fontSize: 14,
                        },
                        labelLine: {
                            length: 5,
                            // length2:3,
                            // lineStyle: {
                            //     color: "#fff",
                            // }
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 335, name: '高中'},
                            {value: 679, name: '初中'},
                            {value: 1548, name: '小学'},
                            {value: 679, name: '本科'},
                            {value: 679, name: '硕士'},
                            {value: 679, name: '博士'},
                            {value: 679, name: '大专'},
                            {value: 679, name: '文盲'},
                        ],
                    }
                };
                this.option.botLConption = opt;
            },
            drawBotR() {
                const opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow',       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {},
                        }
                    },
                    grid: {
                        left: 10,
                        right: 50,
                        bottom: 10,
                        top: 10,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'category',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff',
                            }
                        },
                        axisLabel: {
                            fontSize: 14,
                            color: "#fff",
                        },
                        axisTick: {
                            show: false
                        },
                        data: ['不满18岁', '18-25岁', '26-35岁', '36-50岁', '51-60岁', '61-64岁', '65岁以上'],
                    },
                    xAxis: {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        nameGap: 10,
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: ["#00ffff"],
                                opacity: 0.3,
                            },
                            show: false
                        }
                    },
                    series: {
                        type: 'bar',
                        itemStyle: {
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
                            barBorderRadius: [0, 4, 4, 0],
                        },
                        barWidth: 8,
                        label: {
                            show: true,
                            position: "right",
                            color: "#fff",
                            fontSize: 14,
                        },
                        data: [
                            1000,
                            1500,
                            1300,
                            1200,
                            1200,
                            1200,
                            1800
                        ]
                    },
                };
                this.option.botRConption = opt;
            },
            handleRouter() {
                this.$router.push({
                    path: "/provincePrison/criminalPrison"
                })
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "criExeLeft.stylus"
</style>
