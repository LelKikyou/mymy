<template>
    <div class="midTop">
        <div class="boxTitle">
            <p class="t">{{boxTitle}}</p>
            <p class="m">{{`截止日期:${afterDate}`}}</p>
        </div>
        <chart ref="chartDom" :option="option"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import {afterDate} from "@/lib/tools"

    export default {
        name: "midTop",
        components: {
            chart
        },
        data() {
            return {
                option: {},
                //监狱名
                boxTitle: "山东省"
            }
        },
        mounted() {
            this.init()
        },
        props: {
            chartOpt: {
                type: Array,
                default: () => {
                    return [{
                        name: "未成年犯管教所",
                        value: [117.153753, 36.692743],
                        registeredCC: 1107,
                        focus: 6
                    }, {
                        name: "济南监狱",
                        value: [116.962287, 36.625311],
                        registeredCC: 2654,
                        focus: 12
                    }, {
                        name: "德州监狱",
                        value: [116.303548, 37.467975],
                        registeredCC: 2693,
                        focus: 13
                    }, {
                        name: "聊城监狱",
                        value: [116.034553, 36.495498],
                        registeredCC: 3307,
                        focus: 18
                    }, {
                        name: "泰安监狱",
                        value: [116.986165, 36.20324],
                        registeredCC: 2814,
                        focus: 15
                    }, {
                        name: "菏泽监狱",
                        value: [115.474868, 35.225605],
                        registeredCC: 3370,
                        focus: 17
                    }, {
                        name: "临沂监狱",
                        value: [118.327297, 35.058363],
                        registeredCC: 3762,
                        focus: 8
                    }, {
                        name: "北墅监狱",
                        value: [120.533303, 36.677361],
                        registeredCC: 3433,
                        focus: 1
                    }, {
                        name: "鲁中监狱",
                        value: [118.137265, 36.798494],
                        registeredCC: 3192,
                        focus: 4
                    }, {
                        name: "运河监狱",
                        value: [117.094725, 34.892812],
                        registeredCC: 2257,
                        focus: 12
                    }, {
                        name: "微湖监狱",
                        value: [117.092756, 34.910197],
                        registeredCC: 904,
                        focus: 2
                    },{
                        name: "鲁南监狱",
                        value: [117.101146,34.856918],
                        registeredCC: 3596,
                        focus: 2
                    },{
                        name: "滕州监狱",
                        value: [117.084422,35.099541],
                        registeredCC: 2523,
                        focus: 2
                    }, {
                        name: "潍北监狱",
                        value: [119.176637, 36.93818],
                        registeredCC: 2400,
                        focus: 4
                    }, {
                        name: "齐州监狱",
                        value: [116.936282, 36.882981],
                        registeredCC: 766,
                        focus: 0
                    }, {
                        name: "鲁宁监狱",
                        value: [116.443856, 35.381514],
                        registeredCC: 2054,
                        focus: 8
                    }, {
                        name: "烟台监狱",
                        value: [120.7233, 36.997573],
                        registeredCC: 2954,
                        focus: 6
                    }, {
                        name: "济宁监狱",
                        value: [117.089479, 34.900208],
                        registeredCC: 2088,
                        focus: 6
                    }, {
                        name: "枣庄监狱",
                        value: [117.143313, 35.003513],
                        registeredCC: 1005,
                        focus: 1
                    }, {
                        name: "邹城监狱",
                        value: [116.812543, 35.351519],
                        registeredCC: 2797,
                        focus: 14
                    }, {
                        name: "鲁西监狱",
                        value: [116.846695, 35.338969],
                        registeredCC: 1606,
                        focus: 6
                    }, {
                        name: "威海监狱",
                        value: [122.001132, 37.424374],
                        registeredCC: 1447,
                        focus: 14
                    }, {
                        name: "新康监狱",
                        value: [117.009501, 36.428798],
                        registeredCC: 267,
                        focus: 14
                    }, {
                        name: "任城监狱",
                        value: [116.599338, 35.553096],
                        registeredCC: 1377,
                        focus: 6
                    }, {
                        name: "山东第二女子监狱",
                        value: [117.959341, 37.389651],
                        registeredCC: 2449,
                        focus: 8
                    }, {
                        name: "昌潍监狱",
                        value: [118.868286, 36.706298],
                        registeredCC: 470,
                        focus: 7
                    }, {
                        name: "湖田监狱",
                        value: [118.123418, 36.796688],
                        registeredCC: 358,
                        focus: 7
                    }, {
                        name: "青岛监狱",
                        value: [120.18256, 36.082022],
                        registeredCC: 3312,
                        focus: 12
                    }, {
                        name: "潍坊监狱",
                        value: [119.06877, 36.791956],
                        registeredCC: 3749,
                        focus: 9
                    }, {
                        name: "淄博监狱",
                        value: [117.903484, 36.579415],
                        registeredCC: 3313,
                        focus: 6
                    }, {
                        name: "女子监狱",
                        value: [117.163971, 36.704876],
                        registeredCC: 3700,
                        focus: 7
                    }]
                }
            }
        },
        methods: {
            init() {
                this.drawProvince()
            },
            //各省画表
            drawProvince() {
                const opt = {
                    tooltip: {
                        formatter({data}) {
                            if (data) {
                                return `${data.name}<br />在押人数 : ${data.registeredCC}人<br />重点关注 : ${data.focus}人`
                            }
                        }
                    },
                    geo: { // 地图配置
                        map: '山东',
                        zoom: 1,
                        silent: true,
                        itemStyle: {
                            normal: {
                                borderWidth: 4,//区域边框宽度
                                borderColor: '#10fffd',//区域边框颜色
                                shadowColor: '#046d80',
                                shadowBlur: 14,
                                shadowOffsetX: 10,
                                shadowOffsetY: 5
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.chartOpt || [],
                        zlevel: 1,
                        symbol: "image://" + require("@/assets/criminalExecution/jy.png"),
                        symbolSize: [26, 30]
                    }, { // 地图配置
                        type: "map",
                        map: '山东',
                        zoom: 1,
                        label: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,//区域边框宽度
                                borderColor: '#465f75',//区域边框颜色
                                areaColor: "#04223a"//区域颜色
                            }
                        },
                        silent: true
                    }]
                };
                this.option = opt;
                this.$nextTick(() => {
                    this.$refs.chartDom.dom.on('click', (data) => {
                        this.$router.push({
                            path: "/provincePrison/criminalPrisonDetails"
                        })
                    });
                })
            }
        },
        computed: {
            afterDate
        },
        watch: {
            chartOpt() {
                this.init()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midTop.stylus"
</style>
