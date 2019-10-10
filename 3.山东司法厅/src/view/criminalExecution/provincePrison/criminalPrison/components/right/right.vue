<template>
    <div class="right">
        <div class="top">
            <titleName>罪犯分析</titleName>
            <div class="content">
                <navChart class="rigNav" :navData="optionTop.nav" @handleNav="drawTop"></navChart>
                <!--<chart class="chart" @upInitDone="initDoneTop" ref="chartDomTop" :option="optionTop.option"></chart>-->
                <chart class="chart" ref="chartDomTop" :option="optionTop.option"></chart>
            </div>
        </div>
        <div class="mid">
            <titleName>监狱分析</titleName>
            <!--<chart class="content" ref="chartDomMid" :option="optionMid" @upInitDone="initDoneMid"></chart>-->
            <chart class="content" ref="chartDomMid" :option="optionMid"></chart>
        </div>
        <div class="bot">
            <titleName>监狱动态信息</titleName>
            <div class="content">
                <div class="con tit">
                    <div class="criminalName">罪犯姓名</div>
                    <div class="prisonName">关押监狱</div>
                    <div class="eventType">事件类型</div>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="con" v-for="(item,index) in dataBot"
                                  :style="index%2?'background-color: #0a5568;':'background-color: #052f45;'">
                        <div class="criminalName" :title="item.criminalName">{{item.criminalName}}</div>
                        <div class="prisonName" :title="item.prisonName">{{item.prisonName}}</div>
                        <div class="eventType" :title="item.eventType">{{item.eventType}}</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import titleName from "@/components/titleName"
    import navChart from "@/components/navChart"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "right",
        components: {
            chart,
            titleName,
            navChart,
            swiper,
            swiperSlide
        },
        props: {
            dataTop: {
                type: Object,
                default: () => {
                    return {
                        prisonTermConstitute: [{
                            name: "5年以上",
                            value: 23310
                        }, {
                            name: "5-10年",
                            value: 18558
                        }, {
                            name: "10-15年",
                            value: 18706
                        }, {
                            name: "15-25年",
                            value: 11534
                        }, {
                            name: "无期",
                            value: 2219
                        }, {
                            name: "死缓",
                            value: 727
                        }],
                        ageConstitute: [{
                            name: "不满18岁",
                            value: 169
                        }, {
                            name: "大于18岁小于等于25岁",
                            value: 14052
                        }, {
                            name: "大于25岁小于等于35岁",
                            value: 134843
                        }, {
                            name: "大于35岁小于等于50岁",
                            value: 263130
                        }, {
                            name: "大于50岁小于等于60岁",
                            value: 106474
                        }, {
                            name: "大于60岁小于等于65岁",
                            value: 23010
                        },
                            {
                                name: "其他年龄段",
                                value: 23048
                            }],
                        genderConstitute: [{
                            name: "未知的性别",
                            value: 0
                        }, {
                            name: "女性",
                            value: 5429
                        }, {
                            name: "男性",
                            value: 70019
                        }],

                        educationConstitute: [{
                            name: "文盲",
                            value: 3662
                        }, {
                            name: "小学",
                            value: 0
                        }, {
                            name: "初中",
                            value: 0
                        }, {
                            name: "高中",
                            value: 0
                        }, {
                            name: "中专",
                            value: 2
                        }, {
                            name: "大专",
                            value: 0
                        }, {
                            name: "本科",
                            value: 0
                        }, {
                            name: "研究生",
                            value: 0
                        }]
                    }
                }
            },
            dataMid: {
                type: Array,
                default: () => {
                    return [0, 0, 0]
                }
            },
            dataBot: {
                type: Array,
                default: () => {
                    return [{
                        criminalName: "吕海波",
                        prisonName: "山东省济南监狱",
                        eventType: "减刑",
                    }, {
                        criminalName: "郑强",
                        prisonName: "山东省德州监狱",
                        eventType: "假释",
                    },
                        {
                            criminalName: "吕啸风",
                            prisonName: "山东省聊城监狱",
                            eventType: "奖励",
                        },
                        {
                            criminalName: "唐科",
                            prisonName: "山东省泰安监狱",
                            eventType: "会见",
                        },
                        {
                            criminalName: "刘杰",
                            prisonName: "山东省菏泽监狱",
                            eventType: "减刑",
                        },
                        {
                            criminalName: "刘鹏",
                            prisonName: "山东省临沂监狱",
                            eventType: "假释",
                        },
                        {
                            criminalName: "孙希康",
                            prisonName: "山东省北墅监狱",
                            eventType: "奖励",
                        },
                        {
                            criminalName: "扈信勇",
                            prisonName: "山东省鲁中监狱",
                            eventType: "惩处",
                        },
                        {
                            criminalName: "石兴力",
                            prisonName: "山东省微湖监狱",
                            eventType: "惩处",
                        },
                        {
                            criminalName: "扈信勇",
                            prisonName: "山东省鲁中监狱",
                            eventType: "惩处",
                        },
                    ]
                }
            }
        },
        data() {
            return {
                //轮播
                swiperOption: {
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
                },
                optionTop: {
                    option: {},
                    active: "",
                    nav: {
                        prisonTermConstitute: "刑期构成",
                        ageConstitute: "年龄构成",
                        genderConstitute: "性别构成",
                        educationConstitute: "文化程度构成"
                    }
                },
                optionMid: {},
                //topchart定时器
                top_time: null,
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
                let dom = this.$refs.chartDomMid.dom, index = 0, data = this.dataMid, _time;
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
                            length: 2,
                            length2: 3
                        }
                    }
                };
                this.optionTop.option = opt;
            },
            drawMid() {
                let color = ["#15deff", "#f76b64", "#fac961"], max = 10;//外面边框需要最大值
                let data = this.dataMid.map((d, i) => {
                    d.value > max && (max = d.value);
                    return Object.assign({"itemStyle": {color: color[i]}}, {value: d})
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
                                color: "#00fefe",
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
                                color: "#00fefe",
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
                                borderColor: '#00fefe',
                                borderWidth: 2,
                                barBorderRadius: [0, 11, 11, 0]
                            }
                        },
                        z: 0
                    }]

                };
                this.optionMid = opt;
            },
        },
        watch: {
            dataTop() {
                this.drawTop("prisonTermConstitute")
            },
            dataMid() {
                this.drawMid()
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "right.stylus"
</style>
