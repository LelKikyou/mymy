<template>
    <div class="right">
        <div class="top">
            <boxTitle style="padding-left: 27px">罪犯情况</boxTitle>
            <div class="content">
                <ul class="nav">
                    <li :class="{active:index===optionTop.active}" v-for="(item,index) in optionTop.list"
                        @click="drawTop(index)">
                        <p>{{item}}</p>
                    </li>
                </ul>
                <chart class="chart" @upInitDone="initDoneTop" ref="chartDomTop" :option="optionTop.option"></chart>
            </div>
        </div>
        <div class="mid">
            <boxTitle style="padding-left: 27px;margin-top:8px">监狱情况</boxTitle>
            <chart class="content" ref="chartDomMid" :option="optionMid" @upInitDone="initDoneMid"></chart>
        </div>
        <div class="bot">
            <boxTitle style="padding-left: 27px;margin-top:8px">监狱事件动态信息</boxTitle>
            <div class="content">
                <div class="con tit">
                    <div class="criminalName">罪犯姓名</div>
                    <div class="prisonName">关押监狱</div>
                    <div class="eventType">事件类型</div>
                </div>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide con" v-for="(item,index) in dataBot"
                             :style="index%2?'background-color: rgba(55,148,229,0.3);':'background-color: rgba(55,148,229,0.1);'">
                            <div class="criminalName">{{item.criminalName}}</div>
                            <div class="prisonName">{{item.prisonName}}</div>
                            <div class="eventType">{{item.eventType}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import boxTitle from "../boxTitle"
    import Swiper from "swiper/dist/js/swiper.min"

    export default {
        name: "right",
        components: {
            chart,
            boxTitle
        },
        props: {
            dataTop: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            dataMid: {
                type: Array,
                default: () => {
                    return []
                }
            },
            dataBot: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                optionTop: {
                    option: {},
                    active: "",
                    list: {
                        prisonTermConstitute: "刑期构成",
                        ageConstitute: "年龄构成",
                        genderConstitute: "性别构成",
                        educationConstitute: "文化程度构成"
                    }
                },
                optionMid: {},
                //topchart定时器
                top_time: null,
                swiper: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawTop("prisonTermConstitute");
                this.drawMid();
            },
            //图形初始化后的回调
            initDoneTop() {
                let dom = this.$refs.chartDomTop.dom, index = 0, data = this.dataTop[this.optionTop.active];
                if (data) {
                    clearInterval(this.top_time);
                    this.top_time = setInterval(chartHover, 2000);
                    dom.off();
                    dom.on('mouseover', () => {
                        clearInterval(this.top_time);
                        dom.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: index === 0 ? data.length - 1 : index - 1
                        });
                    });
                    dom.on('mouseout', () => {
                        this.top_time = setInterval(chartHover, 2000);
                    })
                }

                function chartHover() {
                    dom.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: index === 0 ? data.length - 1 : index - 1
                    });
                    dom.dispatchAction({
                        type: 'highlight',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    dom.dispatchAction({
                        type: 'showTip',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    index < data.length - 1 ? index++ : index = 0
                }
            },
            initDoneMid() {
                let dom = this.$refs.chartDomMid.dom, index = 0, data = this.dataMid.value, _time;
                if (data) {
                    _time = setInterval(chartHover, 2000);
                    dom.on('mouseover', function () {
                        clearInterval(_time);
                        dom.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: index === 0 ? data.length - 1 : index - 1
                        });
                    });
                    dom.on('mouseout', function () {
                        _time = setInterval(chartHover, 2000);
                    })
                }

                function chartHover() {
                    dom.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: index === 0 ? data.length - 1 : index - 1
                    });
                    dom.dispatchAction({
                        type: 'highlight',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    dom.dispatchAction({
                        type: 'showTip',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    index < data.length - 1 ? index++ : index = 0
                }
            },
            drawTop(type) {
                this.optionTop.active = type;
                let data = this.dataTop[type];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#15deff", "#f76b64", "#fac961", "#50f471", "#6ca1ff", "#00edd9", "#f0355f", "#ffb326"],
                    series: {
                        type: 'pie',
                        radius: [15, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data || [],
                        labelLine: {
                            smooth: true,
                            length: 6,
                            length2: 3
                        }
                    }
                };
                this.optionTop.option = opt;
            },
            drawMid() {
                let color = ["#15deff", "#f76b64", "#fac961"], max = 0;//外面边框需要最大值
                let data = this.dataMid.map((d, i) => {
                    d.value > max && (max = d.value);
                    return Object.assign({"itemStyle": {color: color[i]}}, d)
                }) || [];
                max = Math.ceil(max * 1.2);//取数据最大值的1.2倍并进行向上取整数
                const opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: '{b}: {c}所'
                    },
                    grid: {
                        left: '20px',
                        right: '20px',
                        bottom: '20px',
                        top: '20px',
                        containLabel: true
                    },
                    xAxis: {
                        axisLine: {
                            lineStyle: {
                                color: "#54a0f6",
                                width: 2
                            }
                        },
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: [{
                        data: ['低度戒备', '中度戒备', '高度戒备'],
                        axisLine: {
                            lineStyle: {
                                color: "#54a0f6",
                                width: 2
                            }
                        },
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisTick: {
                            show: false
                        }
                    }, {
                        axisTick: 'none',
                        axisLine: 'none',
                        data: []
                    }],
                    series: [{
                        yAxisIndex: 0,
                        barWidth: 14,
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                color: "#fff",
                                padding: [2, 0, 0, 0]
                            }
                        },
                        itemStyle: {
                            barBorderRadius: [0, 7, 7, 0]
                        },
                        data: data
                    }, {
                        barGap: '-100%',
                        type: 'bar',
                        data: [max, max, max],
                        barWidth: 22,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: 'none',
                                borderColor: '#54a0f6',
                                borderWidth: 2,
                                barBorderRadius: [0, 11, 11, 0]
                            }
                        },
                        z: 0
                    }]

                };
                this.optionMid = opt;
            },
            //最下面的轮播
            handleBotSwiper() {
                let _that = this;
                this.swiper = new Swiper('.swiper-container', {
                    autoplay: {
                        delay: 2000,//秒切换一次
                        disableOnInteraction: false
                    },
                    loop: true,
                    slidesPerView: 7,
                    on: {
                        click: function () {
                            // _that.handleLunboClick(this.clickedIndex)
                        }
                    },
                    direction: 'vertical'
                });
            }
        },
        watch: {
            dataTop() {
                this.drawTop("prisonTermConstitute")
            },
            dataMid() {
                this.drawMid()
            },
            dataBot() {
                this.$nextTick(() => {
                    this.handleBotSwiper()
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "right.stylus"
</style>
