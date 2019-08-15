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
            qggsjyryfbData: {
                type: Array,
                default: () => {
                    return []
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
                let optData = [], max = 100;
                this.qggsjyryfbData.map(i => {
                    let criminalCount = parseInt(i.data.criminalCount);
                    if (criminalCount > max) max = criminalCount;
                    optData.push({
                        name: i.provinceName,
                        value: criminalCount,
                        data: i
                    })
                })

                echarts.registerMap('china', require("echarts/map/json/china"));
                const opt = {
                    geo: [{
                        zlevel: 0,
                        map: 'china',
                        zoom: 1.2,
                        itemStyle: {
                            areaColor: "#0753ce",
                            borderColor: "#00b1ff",
                            borderWidth: 2,
                            shadowBlur: 10,
                            shadowColor: '#20b2e5'
                        },
                    }],
                    tooltip: {
                        formatter({data}) {
                            if (data) {
                                data = data.data.data;
                                return `监狱数量 : ${data.prisonCount}<br />罪犯数量 : ${data.criminalCount}`
                            }
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: Math.round(max * 1.1),
                        left: "4%",
                        bottom: "2%",
                        text: ['高', '低'],
                        calculable: true,
                        color: ["#20b2e5", "#0753ce"],
                        itemWidth: 16,
                        itemHeight: 120,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    // legend:{
                    //     data:["罪犯数量"]
                    // },
                    series: [{
                        // name:'罪犯数量',
                        zlevel: 1,
                        type: 'map',
                        map: 'china',
                        zoom: 1.2,
                        label: {
                            show: true,
                            color: "#aabbcc",
                            fontSize: 14
                        },
                        data: optData,
                        itemStyle: {
                            areaColor: "#0753ce",
                            borderColor: "#00b1ff",
                            borderWidth: 0.8
                        },
                        emphasis: {
                            label: {
                                color: "#fff",
                                fontSize: 16
                            },
                            itemStyle: {
                                areaColor: "#2915e7"
                            }
                        }
                    }]
                }
                this.option = opt;
                if (this.qggsjyryfbData.length) {//有数据时候绑定点击事件
                    this.$nextTick(() => {
                        this.$refs.chartDom.dom.on('click', (params) => {
                            let provinceCode = params.data.data.provinceCode;
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
                let optData = [];
                this.qggsjyryfbData.map(i => {
                    optData.push({
                        name: i.name,
                        value: i.lnglat.split(","),
                        data: i
                    })
                });
                console.log(optData)
                const opt = {
                    tooltip: {
                        formatter({data}) {
                            if (data) {
                                data = data.data;
                                return `${data.name}<br />在押人数 : ${data.prisonCount}<br />重点关注 : ${data.focus}`
                            }
                        }
                    },
                    geo: {
                        zlevel: 0,
                        type: 'map',
                        map: provinceName,
                        zoom: 1.2,
                        itemStyle: {
                            areaColor: "#0753ce",
                            borderColor: "#00b1ff",
                            borderWidth: 0.8
                        },
                        emphasis: {
                            show: false
                        },
                        silent: true
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: optData,
                        zlevel: 1,
                        label: {
                            position: "top",
                            show: true,
                            formatter: function (data) {
                                if (data) {
                                    return data.name
                                }
                            }
                        },
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
            qggsjyryfbData() {
                this.init()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midTop.stylus"
</style>
