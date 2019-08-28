<template>
    <div class="midTop">
        <div class="boxTitle">
            <p class="t">{{boxTitle}}</p>
            <p class="m">{{`截止日期:${afterDate}`}}</p>
        </div>
        <div class="back" @click="$parent.$parent.goBackHome" v-if="$parent.type==='province'"><i
                class="iconfont icon-reply"></i><span>返回上级</span></div>
        <chart ref="chartDom" :option="option"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import echarts from "echarts"
    import "echarts-gl"
    import config from "./config"

    export default {
        name: "midTop",
        components: {
            chart
        },
        data() {
            return {
                option: {}
            }
        },
        mounted() {
            this.init()
        },
        props: {
            chartOpt: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            //全国或各个监狱
            boxTitle: String
        },
        methods: {
            init() {
                if (this.$parent.type === "nation") {
                    this.drawNation()
                } else {
                    if (this.boxTitle && this.boxTitle !== "全国") { //当存在boxTitle时候画图
                        this.drawProvince()
                    }
                }
            },
            //全国画表
            drawNation() {
                echarts.registerMap('china', require("echarts/map/json/china"));
                let option = {
                    tooltip: {
                        show: true,
                        formatter({data}) {
                            if (data) {
                                return `监狱数量 : ${data.proPrisonCount} 所<br />罪犯数量 : ${data.value} 人`
                            }
                        }
                    },
                    legend: {
                        bottom: "30px",
                        left: "100px",
                        textStyle: {
                            color: "#fff"
                        },
                        data: [{name: '罪犯数量', icon: "rect"}]
                    },
                    visualMap: {
                        min: 0,
                        max: this.chartOpt.max ? Math.ceil(this.chartOpt.max * 1.1) : 100,
                        left: "4%",
                        bottom: "2%",
                        text: ['高', '低'],
                        calculable: true,
                        color: ["#20b2e5", "#0866ff"],
                        itemWidth: 16,
                        itemHeight: 120,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    series: {
                        name: "罪犯数量",
                        boxWidth: 80,
                        viewControl: {
                            projection: "orthographic",
                            alpha: 60
                        },
                        type: "map3D",
                        map: 'china',
                        itemStyle: {
                            color: '#0987de',
                            borderWidth: 0.8,
                            borderColor: '#114e8d',
                        },
                        label: {
                            show: true,
                            textStyle: {
                                color: '#aabbcc',
                                fontSize: 14,
                                backgroundColor: 'rgba(0,0,0,0)'
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16
                                }
                            },
                            itemStyle: {
                                color: "#ffbc0d"
                            }
                        },
                        data: this.chartOpt.data || []
                    }
                };
                this.option = option;
                if (this.chartOpt.data) {//有数据时候绑定点击事件
                    this.$nextTick(() => {
                        this.$refs.chartDom.dom.on('click', ({data}) => {
                            let provinceCode = data.provinceCode;
                            provinceCode && (this.$router.push({
                                name: "province",
                                params: {
                                    provinceCode
                                }
                            }))
                        });
                    })
                }
            },
            //各省画表
            drawProvince() {
                let provinceName = config[this.boxTitle];
                echarts.registerMap(provinceName, require(`echarts/map/json/province/${provinceName}`));
                const opt = {
                    tooltip: {
                        formatter({data}) {
                            if (data) {
                                return `${data.name}<br />在押人数 : ${data.registeredCC}人<br />重点关注 : ${data.focus}人`
                            }
                        }
                    },
                    geo: {
                        zlevel: 0,
                        type: 'map',
                        map: provinceName,
                        zoom: 1.2,
                        itemStyle: {
                            areaColor: "#0987de",
                            borderColor: "#045894",
                            borderWidth: 1.4
                        },
                        emphasis: {
                            show: false
                        },
                        silent: true
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.chartOpt.data || [],
                        zlevel: 1,
                        symbol:"image://"+require("@/assets/nation/jy.png"),
                        symbolSize:[26,30]
                    }]
                };
                this.option = opt;
            }
        },
        computed: {
            afterDate() {
                let day = new Date();
                day.setTime(day.getTime() - 24 * 60 * 60 * 1000);
                return day.getFullYear() + "-" + ((day.getMonth() + 1) < 9 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + (day.getDate() < 9 ? "0" + day.getDate() : (day.getDate()));
            }
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
