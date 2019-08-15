<template>
    <div class="midBottom">
        <boxTitle>全国各省监狱人员分布</boxTitle>
        <div class="midContent scrollbar" v-if="$parent.type==='nation'">
            <div class="content">
                <chart :option="option"></chart>
            </div>
        </div>
        <div class="midCon" v-if="$parent.type==='province'">
            <div class="zfMax">罪犯总数： <b>{{filZyzfMax}}</b> 人</div>
            <div class="zfContent scrollbar">
                <div class="nav">
                    <div class="tit">各监狱人数：</div>
                    <ul class="navCon">
                        <li v-for="(item,i) in navData" :class="{active:i===navActive}" @click="drawProvince(i)">
                            {{item}}
                        </li>
                    </ul>
                </div>
                <div class="charts">
                    <chart :option="option"></chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import boxTitle from "../boxTitle"
    import chart from "@/components/charts"
    import echarts from 'echarts'

    export default {
        name: "midBottom",
        components: {
            boxTitle,
            chart
        },
        data() {
            return {
                option: {},
                navActive: "",
                navData: {
                    majorCriminal: "在押人数",
                    strictManagementNumber: "严管级人数",
                    seriousCriminal: "重大型事犯",
                    juvenileDelinquent: "未成年犯",
                    femaleCrime: "女性犯罪",
                    aidsInmate: "艾滋病犯"
                }
            }
        },
        props: {
            //全国各省监狱
            qggsjyryfbData: {
                type: Array,
                default: () => {
                    return []
                }
            },
            //全省各监狱人员分布
            qsgjyryfb: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            //在押罪犯总数
            zyzfMax: String
        },
        mounted() {
            this.init()
        },
        computed: {
            filZyzfMax() {
                return this.zyzfMax.replace(/\d+/, function (n) {
                    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
                        return $1 + ",";
                    });
                })
            }
        },
        methods: {
            init() {
                if (this.$parent.type === "nation") {
                    this.drawNation()
                } else if (this.$parent.type === "province") {
                    this.drawProvince("majorCriminal")
                }
            },
            drawNation() {
                let xName = [], zyData = [], ygData = [];
                if (this.qggsjyryfbData.length) {
                    this.qggsjyryfbData.map(i => {
                        xName.push(i.provinceName);
                        zyData.push({
                            name: i.provinceName,
                            value: i.data.criminalCount
                        })
                        ygData.push({
                            name: i.provinceName,
                            value: i.data.strictCount
                        })
                    })
                }
                let opt = {
                    legend: {
                        textStyle: {
                            color: "#fff"
                        },
                        left: 50,
                        data: ['在押人数', '严管级人数']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 60,
                        top: 40,
                        bottom: 30,
                        right: 40
                    },
                    xAxis: {
                        data: xName,
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#4f9efa"
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                color: ["#2857b1"]
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
                        name: "在押人数",
                        type: 'bar',
                        barWidth: "30%",
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#008ec2" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#14d1f8" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [5, 5, 0, 0]
                        },
                        data: zyData
                    }, {
                        name: "严管级人数",
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#ff8e14" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#f8ca74" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: ygData
                    }]
                };
                this.option = opt
            },
            drawProvince(i) {
                this.navActive = i;
                let optData = [], xName = [];
                if (Object.keys(this.qsgjyryfb).length) {
                    this.qsgjyryfb[i].map(item => {
                        xName.push(item.name)
                        optData.push({
                            name: item.name,
                            value: item.count
                        })
                    })
                }
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: (v) => {
                            console.log(v)
                            if (v.length) {
                                let data = v[0];
                                return `${data.name}<br/>${this.navData[i]} : ${data.value}人`
                            }
                        }
                    },
                    grid: {
                        left: 60,
                        top: 20,
                        bottom: 30,
                        right: 40
                    },
                    xAxis: {
                        data: xName,
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#4f9efa"
                            }
                        }
                    },
                    yAxis: {
                        minInterval: 1,
                        name: "人",
                        splitLine: {
                            lineStyle: {
                                color: ["#2857b1"]
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fff"
                        }
                    },
                    series: [{
                        type: 'bar',
                        barWidth: "40%",
                        data: optData,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#008ec2" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#14d1f8" // 100% 处的颜色
                            }], false)
                        }
                    }]
                };
                this.option = opt
            }
        },
        watch: {
            qggsjyryfbData() {
                this.init()
            },
            qsgjyryfb() {
                this.init()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midBottom.stylus"
</style>
