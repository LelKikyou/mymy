<template>
    <div class="right">
        <div class="top">
            <boxTitle>罪犯情况</boxTitle>
            <div ref="topChartDom" class="topChart">
                <ul class="nav">
                    <li v-for="(item,index) in optionTop.list" :class="{active:optionTop.active===index}"
                        @click="drawTop(index)">{{item}}
                    </li>
                </ul>
                <chart class="chartTop" :option="optionTop.option"></chart>
            </div>
        </div>
        <div class="mid">
            <boxTitle>监狱情况</boxTitle>
            <div class="nationMid" v-if="$parent.type==='nation'">
                <div class="stat_bat"><p class="p">监狱分类</p></div>
                <div ref="nationMidChartDom" class="nationMidChart">
                    <ul class="nav">
                        <li v-for="(item,index) in optionMid.list" :class="{active:optionMid.active===index}"
                            @click="drawMid(index)">{{item}}
                        </li>
                    </ul>
                    <chart class="chartTop" :option="optionMid.option"></chart>
                </div>
            </div>
            <div class="provinceMid" v-if="$parent.type==='province'">
                <div class="stat_bat">
                    <div class="jyNum"><span class="num">{{jyNum}}</span><span>个</span></div>
                    <div class="tit">监狱数量</div>
                </div>
            </div>
        </div>
        <div class="bot">
            <boxTitle>罪犯年龄构成情况</boxTitle>
            <div class="botChart" ref="botChartDom">
                <chart class="chartBot" :option="optionBot"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import boxTitle from "../boxTitle"

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
                type: Object,
                default: () => {
                    return {}
                }
            },
            dataBot: {
                type: Array,
                default: () => {
                    return []
                }
            },
            //各省监狱数量
            jyNum: {
                type: Number,
                default: () => {
                    return 0
                }
            }
        },
        data() {
            return {
                optionTop: {
                    option: {},
                    active: "",
                    list: {
                        fgdj: "分管等级",
                        whcd: "文化程度",
                        fzxb: "罪犯性别"
                    }
                },
                optionMid: {
                    option: {},
                    active: "",
                    list: {
                        lslb: "隶属类别",
                        jbdj: "戒备等级",
                    }
                },
                optionBot: {}
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawTop("fgdj");
                this.$parent.drawCircular(this.$refs.topChartDom, 0.3, 0.7)
                this.drawMid("lslb");
                this.draBot();
                this.$parent.drawCircular(this.$refs.botChartDom, 0.3, 0.7)
            },
            drawTop(type) {
                this.optionTop.active = type;
                const opt = {
                    tooltip: {
                        show: true,
                        formatter: '{b}: {c}人, {d}%'
                    },
                    series: {
                        type: 'pie',
                        label: {
                            color: '#fff'
                        },
                        labelLine: {
                            length: 16,
                            length2: 16
                        },
                        center: ['50%', '50%'],
                        radius: ['40%', '60%'],
                        data: this.dataTop[type] || []
                    }
                };
                this.optionTop.option = opt;
            },
            drawMid(type) {
                this.optionMid.active = type;
                let optList = {
                    lslb: ['省属', '市属', '部属'],
                    jbdj: ['中级戒备', '高级戒备', '低级戒备'],
                };
                const opt = {
                    tooltip: {
                        show: true,
                        formatter: '{b}: {c}个, {d}%'
                    },
                    legend: {
                        top: 50,
                        right: 70,
                        textStyle: {
                            color: "#fff",
                        },
                        data: optList[type].map(i => {
                            return {
                                name: i,
                                icon: 'circle'
                            }
                        }),
                        orient: "vertical"
                    },
                    series: {
                        type: 'pie',
                        label: {
                            show: false
                        },
                        center: ['36%', '60%'],
                        radius: ['40%', '60%'],
                        data: this.dataMid[type] || []
                    }
                };
                this.optionMid.option = opt;
            },
            draBot() {
                const opt = {
                    tooltip: {
                        show: true,
                        formatter: '{b}: {c}人, {d}%'
                    },
                    series: {
                        type: 'pie',
                        label: {
                            color: '#fff'
                        },
                        labelLine: {
                            length: 16,
                            length2: 16
                        },
                        center: ['50%', '50%'],
                        radius: ['40%', '60%'],
                        data: this.dataBot
                    }
                };
                this.optionBot = opt;
            }
        },
        watch: {
            dataTop() {
                this.drawTop("fgdj")
            },
            dataMid() {
                this.drawMid("lslb")
            },
            dataBot() {
                this.draBot()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "right.stylus"
</style>
