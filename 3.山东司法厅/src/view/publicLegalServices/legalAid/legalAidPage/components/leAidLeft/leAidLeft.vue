<template>
    <div class="leAidLeft">
        <titleName>机构人员文化程度构成</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>受援人类型构成</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>机构类型构成</titleName>
        <charts :option="optBot" class="leftBot"></charts>
        <div class="botList">
            <div class="list" :style="countList(i)" v-for="(data,i) in botChartsData">
                <div class="num">{{data.value+` (${(data.value/botChartsDataSum*100).toFixed(2)}%)`}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "leAidLeft",
        components: {
            titleName,
            charts
        },
        props: {
            botChartsData: {
                type: Array,
                default() {
                    return [
                        {
                            name: "省(自治区法律援助中心)",
                            value: 152
                        },
                        {
                            name: "地区(市)法律援助中心",
                            value: 70
                        },
                        {
                            name: "县(区)法律援助中心",
                            value: 30
                        },
                        {
                            name: "其他",
                            value: 458
                        }
                    ]
                }
            }
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {},
                botChartsDataSum: 0 //和
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
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [65, 90],
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
                        itemStyle: {
                            borderColor: '#05223a',
                            borderWidth: 2,
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
                this.optTop = opt;
            },
            drawMid() {
                let data = [{
                    name: "其他",
                    value: 2331
                }, {
                    name: "残疾人",
                    value: 1855
                }, {
                    name: "老年人（60岁以上）",
                    value: 1870
                }, {
                    name: "未成年人",
                    value: 1153
                }, {
                    name: "妇女",
                    value: 2219
                }, {
                    name: "农民工",
                    value: 729
                }, {
                    name: "农民",
                    value: 327
                }, {
                    name: "少数民族",
                    value: 227
                }, {
                    name: "军人家属",
                    value: 627
                }, {
                    name: "外国人",
                    value: 827
                }];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141", "#d35ee8", "#6683ff"],
                    series: {
                        type: 'pie',
                        radius: [20, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data || [],
                        labelLine: {
                            smooth: true,
                            length: 2,
                            length2: 3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        label: {
                            color: "#fff",
                            fontSize: 14,
                        },
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                let data = this.botChartsData;
                let sumNum = this.botChartsDataSum = eval(data.map(item => {
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
                            hoverAnimation: false, //鼠标移入变大
                            legendHoverLink: false,
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["30%", "50%"],
                            label: {
                                show: false
                            },
                            color: ["#02ffd0", "#00ff56", "#177cfe", "#00b6ff"][i],
                            data: [{
                                value: sumNum / 3,
                                name: '',
                                itemStyle: {
                                    color: "rgba(0,0,0,0)"
                                }
                            }, {
                                value: data[i].value,
                                name: data[i].name,
                            }, {
                                value: sumNum - data[i].value,
                                name: '',
                                itemStyle: {
                                    color: "#03475a"
                                }
                            }]
                        })
                    }
                    return res;
                }

                const opt = {
                    series: getData(data, 22, 6, 6),
                    legend: {
                        selectedMode:false,
                        bottom: "20px",
                        right: "16px",
                        textStyle: {
                            color: "#fff"
                        },
                        orient: "vertical",
                        data: data
                    },
                };
                this.optBot = opt;
            },
            countList(i) { //计算样式
                return `width:${86 - i * 18}px;height:${112 - i * 18}px;left:${i * 18}px;top:${i * 18}px;border-color:${["#02ffd0", "#00ff56", "#177cfe", "#00b6ff"][i]}`
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "leAidLeft.stylus"
</style>
