<template>
    <div class="leftBottom">
        <boxTitle><i class="iconfont icon-bell" style="margin-right: 8px"></i>刑期构成</boxTitle>
        <div class="content" ref="contentDom">
            <chart class="chart" :option="option"></chart>
        </div>
    </div>
</template>

<script>
    import boxTitle from "../boxTitle"
    import chart from "@/components/charts"

    export default {
        name: "leftBottom",
        props: {
            dataV: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            boxTitle,
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
        methods: {
            init() {
                this.drawPie();
                this.$parent.drawCircular(this.$refs.contentDom, 0.2, 0.6)
            },
            drawPie() {
                let opt = {
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
                            length: 10,
                            length2: 8
                        },
                        center: ['50%', '50%'],
                        radius: ['30%', '50%'],
                        data: this.dataV
                    }
                };
                this.option = opt;
            }
        },
        watch: {
            dataV() {
                this.drawPie()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftBottom.stylus"
</style>
