<template>
    <div class="leftBot">
        <div class="leftContent">
            <titleName>罪名分布</titleName>
            <div class="midContent sdcmScrollbar">
                <div class="content" :style="contentWidth">
                    <chart class="chart" ref="chartDomLeft" :option="option.leftOption"></chart>
                </div>
            </div>
        </div>
        <div class="rightContnt">
            <div class="topCharts">
                <div class="rightLeft">
                    <titleName>占比分析</titleName>
                    <navChart :navData="nav.proportion" @handleNav="drawRightTopL"></navChart>
                    <chart class="chart" ref="chartDomRightTopL" :option="option.rightTopLOptin"></chart>
                </div>
                <div class="rightR">
                    <titleName>分类统计</titleName>
                    <navChart :navData="nav.statistics" @handleNav="drawRightTopR"></navChart>
                    <chart class="chart" ref="chartDomRightTopR" :option="option.rightTopROptin"></chart>
                </div>
            </div>
            <div class="botCharts">
                <titleName>罪犯净增长趋势图</titleName>
                <chart class="chart" ref="chartDomRightBot" :option="option.rightBotOptin"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    import {
        getLeftOption,
        getRightTopLOption,
        getRightTopROption,
        getRightBotOption
    } from "./chartOption"
    import navChart from "@/components/navChart"

    export default {
        name: "leftBot",
        components: {
            titleName,
            chart,
            navChart
        },
        data() {
            return {
                option: {
                    leftOption: {},
                    rightTopLOptin: {},
                    rightTopROptin: {},
                    rightBotOptin: {}
                },
                contentWidth: "",//滚动条样式
                nav: {
                    proportion: {
                        fglx: "分管类型",
                        fylx: "分押类型",
                        ljlb: "离监类别",
                        hjlb: "会见类别"
                    },
                    statistics: {
                        dyll: "对外联络",
                        zfjg: "罪犯籍贯",
                    }
                },
            }
        },
        props: {
            dataLeft: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            dataRightTopL: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            dataRightTopR: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            dataRightBot: {
                type: Object,
                default: () => {
                    return {}
                }
            },
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.filWidth();
                this.drawLeft();
                this.drawRightTopL("fglx");
                this.drawRightTopR("dyll");
                this.drawRightBot();
            },
            filWidth() {
                this.contentWidth = `min-height:${10 * 70 + 150}px`
            },
            drawLeft() {
                let data = {
                    name: ["危害国家安全罪", "危害公共安全罪", "破坏社会主义市场经济秩序罪", "侵犯公民人身权利、民主权利罪", "侵犯财产罪", "妨害社会管理秩序罪", "危害国防利益罪", "贪污贿赂罪", "渎职罪", "军人违反职责罪", "其他罪名"
                    ].reverse(),
                    value: [123, 80, 423, 697, 962, 14, 542, 71, 15, 23, 13].reverse()
                }
                const opt = getLeftOption(data)
                this.option.leftOption = opt;
            },
            drawRightTopL(type) {
                let optData = {
                    fglx: [{value: 2, name: '其他'},
                        {value: 2, name: '考察级'},
                        {value: 2, name: '严管'},
                        {value: 35, name: '宽管'},
                        {value: 6, name: '普管'}],
                    fylx: [{value: 998, name: '财产型'},
                        {value: 316, name: '暴力型'},
                        {value: 2, name: '淫欲型'},
                        {value: 2, name: '涉毒型'},
                        {value: 86, name: '其它'}],
                    ljlb: [{value: 0, name: '释放'},
                        {value: 0, name: '销册'},
                        {value: 0, name: '死亡'},
                        {value: 0, name: '调动'},
                        {value: 0, name: '假释'}],
                    hjlb: [{value: 2666, name: '亲属会见'},
                        {value: 2, name: '监护人会见'},
                        {value: 4, name: '使领馆探视'},
                        {value: 4, name: '特批会见'},
                        {value: 4, name: '其他'}]
                }
                let data = optData[type];
                const opt = getRightTopLOption(data);
                this.option.rightTopLOptin = opt;
            },
            drawRightTopR(type) {
                let optData = {
                    dyll: {
                        name: ['亲情帮教', '亲情电话', '亲情会见'],
                        value: [2, 26210, 14336]
                    },
                    zfjg: {
                        name: ['本省籍', '外省籍', '外籍'],
                        value: [2, 2, 2]
                    }
                }
                let data = optData[type];
                const opt = getRightTopROption(data);
                this.option.rightTopROptin = opt;
            },
            drawRightBot() {
                let opt = getRightBotOption();
                this.option.rightBotOptin = opt
            }
        },
        watch: {
            dataLeft() {
                this.drawLeft()
            },
            dataRightTopL() {
                this.drawRightTopL()
            },
            dataRightTopR() {
                this.drawRightTopR()
            },
            dataRightBot() {
                this.drawRightBot()
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "leftBot.stylus"
</style>
