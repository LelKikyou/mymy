<template>
    <div class="midBot">
        <div class="topBox" @mouseenter="handleOver" @mouseleave="handleOut">
            <chart :option="mapOptions" @upInitDone="initDone" ref="mapDom"></chart>
        </div>
        <div class="botBox">
            <chart :option="barOptions"></chart>
        </div>
    </div>
</template>

<script>
    let mapData = [];//省份数组
    //省份加地区坐标
    let effScaData = require("@/api/config").shandongMap["features"].map(i => {
        mapData.push(i.properties.name)
        return {
            name: i.properties.name,
            value: i.properties.cp
        }
    });
    export const mapList = {
        jy: [7, 2, 3, 1, 1, 3, 9, 1, 1, 0, 1, 1, 2, 2, 1, 1],
        jds: [1, 1, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        sfs: [144, 141, 139, 161, 166, 89, 161, 89, 74, 41, 140, 91, 139, 65, 56, 174],
        jdjg: [31, 15, 18, 11, 18, 21, 13, 11, 9, 7, 11, 9, 11, 2, 8, 12],
        flyzjg: [11, 11, 13, 14, 13, 9, 12, 7, 5, 6, 9, 8, 12, 7, 5, 10, 3],
        jcflfws: [151, 180, 159, 125, 163, 56, 135, 122, 51, 31, 79, 52, 85, 44, 57, 68],
        gzc: [13, 12, 13, 14, 13, 8, 11, 7, 7, 6, 9, 8, 12, 7, 5, 10],
        lssws: [396, 408, 177, 166, 143, 104, 101, 86, 89, 71, 49, 65, 62, 53, 50, 44],
        ls: [5902, 5626, 2032, 1997, 1966, 1387, 1411, 956, 851, 821, 711, 688, 670, 626, 607, 578]
    };
    import chart from "@/components/charts"
    import echarts from "echarts"

    export default {
        name: "midBot",
        components: {
            chart
        },
        data() {
            return {
                mapOptions: {},//地图配置
                barOptions: {}, //下面柱状图配置
                mapDomChart: null,  //map实例
                mapIndex: 0 //当前选择的哪个区域
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$nextTick(() => {
                    this.drawMap();
                })
            },
            //地图画完后的回调
            initDone() {
                this.mapDomChart = this.$refs.mapDom.dom;// 获取实例
                let mapChart = this.mapDomChart;
                mapChart.on('geoselected', (params) => {
                    this.drawBar()
                });
                mapChart.on("click", (params) => {
                    mapChart.dispatchAction({
                        type: 'geoUnSelect',
                        name: mapData[this.mapIndex]
                    });
                    this.mapIndex = mapData.indexOf(params.name);
                    mapChart.dispatchAction({
                        type: 'geoSelect',
                        name: params.name
                    });
                });
                //进来默认选中的
                mapChart.dispatchAction({
                    type: 'geoSelect',
                    name: mapData[this.mapIndex]
                });
                this.startSetDraw()
            },
            drawMap() {
                let opt = {
                    geo: { // 地图配置
                        z: 2,
                        map: '山东',
                        zoom: 1.2,
                        label: {
                            offset: [0, 8],
                            fontSize: 14,
                            show: true,//显示省份标签
                            textStyle: {color: "#ccc"},//省份标签字体颜色
                            emphasis: {//对应的鼠标悬浮效果
                                fontSize: 16,
                                show: true,
                                textStyle: {color: "#07508c"}
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,//区域边框宽度
                                borderColor: '#465f75',//区域边框颜色
                                areaColor: "#04223a"//区域颜色
                            },
                            emphasis: {
                                borderWidth: 0,
                                areaColor: "#fffc00"
                            }
                        }
                    },
                    series: [{ // 地图配置
                        z: 1,
                        type: "map",
                        map: '山东',
                        zoom: 1.2,
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
                    }, {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: effScaData,
                        itemStyle: {
                            normal: {
                                color: '#ff6360'
                            }
                        },
                        symbolSize: 16,
                        symbolOffset: [0, -24]
                    }]
                };
                this.mapOptions = opt;
            },
            drawBar() {
                let data = Object.values(mapList).map(item => {
                    return item[this.mapIndex]
                });
                let xdata = ['监狱', '戒毒所', "司法所", "鉴定机构", "法援机构", "公证处", "律师事务所", "调委会", "基层法律服务所"]
                let opt = {
                    xAxis: [
                        {
                            type: "category",
                            data: xdata,
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
                                interval: 0,
                                show: true,
                                color: "#fff",
                                fontSize: 14,
                                margin: 12
                            }
                        }
                    ],
                    yAxis: {
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
                            show: false
                        }
                    },
                    grid: {
                        left: 30,
                        top: 20,
                        bottom: 50,
                        right: 30
                    },
                    series: [
                        {
                            z: 2,
                            type: 'bar',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: "#e63e3b" // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: "#b10714" // 100% 处的颜色
                                }], false),
                                barBorderRadius: [15, 15, 0, 0]
                            },
                            label: {
                                show: true,
                                position: "top",
                                color: "#fff",
                                fontSize: 14
                            },
                            barMinHeight: 5,
                            barWidth: "30px",
                            data: data
                        },
                        {
                            z: 1,
                            type: 'pictorialBar',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255,255,255,0.1)'
                                }
                            },
                            symbolRepeat: 'fixed',
                            symbolMargin: '50%',
                            symbol: 'rect',
                            symbolSize: [50, 4],
                            data: data.map(() => {
                                return 100
                            })
                        }
                    ]
                };
                this.barOptions = opt;
            },
            startSetDraw() {
                this._time = setInterval(() => {
                    let mapChart = this.mapDomChart;
                    mapChart.dispatchAction({
                        type: 'geoUnSelect',
                        name: mapData[this.mapIndex]
                    });
                    this.mapIndex++;
                    if (this.mapIndex >= mapData.length) {
                        this.mapIndex = 0;
                    }
                    mapChart.dispatchAction({
                        type: 'geoSelect',
                        name: mapData[this.mapIndex]
                    })
                }, 1500)
            },
            endSetDraw() {
                clearInterval(this._time);
            },
            handleOver() {
                this.endSetDraw();
            },
            handleOut() {
                this.startSetDraw()
            }
        },
        beforeDestroy() {
            clearInterval(this._time);
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midBot.stylus"
</style>
