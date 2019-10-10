<template>
    <div class="rightTop">
        <titleName style="height: 62px;line-height: 62px;">刑事执行对象分析</titleName>
        <navChart :navData="nav" @handleNav="drawTop"></navChart>
        <chart class="chart" @upInitDone="initDoneTop" ref="chartDomRightTop" :option="option"></chart>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import navChart from "@/components/navChart"
    import chart from "@/components/charts"

    export default {
        name: "rightTop",
        data() {
            return {
                nav: {
                    jy: "监狱",
                    jd: "戒毒",
                    sqjz: "社区矫正"
                },
                option: {},
                active: "",
            }
        },
        components: {
            titleName,
            navChart,
            chart
        },
        props: {
            dataRightTop: {
                type: Object,
                default: () => {
                    return {}
                }
            },
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawTop("jy");
            },
            initDoneTop() {
                // let dom = this.$refs.chartDomRightTop.dom, index = 0, data = this.dataRightTop[this.active];
                // if (data) {
                //     clearInterval(this.top_time);
                //     this.top_time = setInterval(chartHover, 2000);
                //     dom.off();
                //     dom.on('mouseover', () => {
                //         clearInterval(this.top_time);
                //         dom.dispatchAction({
                //             type: 'downplay',
                //             seriesIndex: 0,
                //             dataIndex: index === 0 ? data.length - 1 : index - 1
                //         });
                //     });
                //     dom.on('mouseout', () => {
                //         this.top_time = setInterval(chartHover, 2000);
                //     })
                // }

                // function chartHover() {
                //     dom.dispatchAction({
                //         type: 'downplay',
                //         seriesIndex: 0,
                //         dataIndex: index === 0 ? data.length - 1 : index - 1
                //     });
                //     dom.dispatchAction({
                //         type: 'highlight',
                //         dataIndex: index,
                //         seriesIndex: 0
                //     });
                //     dom.dispatchAction({
                //         type: 'showTip',
                //         dataIndex: index,
                //         seriesIndex: 0
                //     });
                //     index < data.length - 1 ? index++ : index = 0
                // }
            },
            drawTop(type) {
                let optData = {
                    jy: {x: [
                                {value: 335, name: '高中'},
                                {value: 679, name: '初中'},
                                {value: 1548, name: '小学'},
                                {value: 679, name: '本科'},
                                {value: 679, name: '硕士'},
                                {value: 679, name: '博士'},
                                {value: 679, name: '大专'},
                                {value: 679, name: '文盲'},
                            ],
                        d: [{"name": "未满18岁", "value": 1}, {"name": "18-25岁", "value": 326}, {
                                "name": "25-35岁",
                                "value": 2581
                            }, {"name": "35-45岁", "value": 2762}, {"name": "45-55岁", "value": 2170}, {
                                "name": "55-65岁",
                                "value": 1720
                            }, {"name": "65岁以上", "value": 316}]
                    },
                    jd:{x: [
                                {value: 335, name: '高中'},
                                {value: 679, name: '初中'},
                                {value: 148, name: '小学'},
                                {value: 679, name: '本科'},
                                {value: 179, name: '硕士'},
                                {value: 979, name: '博士'},
                                {value: 679, name: '大专'},
                                {value: 679, name: '文盲'},
                            ],
                        d: [{"name": "未满18岁", "value": 1}, {"name": "18-25", "value": 326}, {
                                "name": "25-35",
                                "value": 2581
                            }, {"name": "35-45", "value": 2762}, {"name": "45-55", "value": 210}, {
                                "name": "55-65",
                                "value": 1720
                            }, {"name": "65岁以上", "value": 316}]
                    },
                    sqjz: {x: [
                                {value: 335, name: '高中'},
                                {value: 679, name: '初中'},
                                {value: 148, name: '小学'},
                                {value: 679, name: '本科'},
                                {value: 179, name: '硕士'},
                                {value: 979, name: '博士'},
                                {value: 679, name: '大专'},
                                {value: 679, name: '文盲'},
                            ],
                        d: [{"name": "未满18岁", "value": 1}, {"name": "18-25", "value": 3126}, {
                                "name": "25-35",
                                "value": 2581
                            }, {"name": "35-45", "value": 2762}, {"name": "45-55", "value": 2110}, {
                                "name": "55-65",
                                "value": 1720
                            }, {"name": "65岁以上", "value": 316}]
                    },
                };
                let data = optData[type]
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: [
                        {
                            type: 'pie',
                            color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                            radius: ['20%', '55%'],
                            name: '访问来源',
                            label: {
                                position: 'inside',
                                formatter: "{b}\n{d}%",
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
                            data: data.x,
                        },
                        {
                            type: 'pie',
                            radius: ['60%', '75%'],
                            label: {
                                formatter: "{b}\n{d}%",
                                color: "#fff",
                                fontSize: 14,
                            },
                            labelLine: {
                                lineStyle: {
                                    color: "#fff"
                                }
                            },
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#00a3ac' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#1fdfe9' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                borderWidth: 2,
                                borderColor: '#09748e',
                            },
                            data:data.d,
                        },
                    ]
                };
                this.option = opt;
            },
        },
        watch: {
            dataRightTop() {
                this.drawTop("prisonTermConstitute")
            },
        },
    }
</script>
<style lang="stylus">
    .rightTop
        .navChart
            padding 0 34px;
</style>
<style lang="stylus" scoped>
    @import "rightTop.stylus"
</style>
