<template>
    <div ref="dom" class="charts"></div>
</template>

<script>
    import echarts from 'echarts'
    import {on, off} from '@/lib/tools'

    export default {
        name: 'charts',
        props: {
            option: {
                type: Object,
                default() {
                    return {}
                }
            }  //传入opt配置
        },
        data() {
            return {
                dom: null
            }
        },
        methods: {
            resize() {
                this.dom.resize()
            },
            draw() {
                Object.assign(this.option, {color: ["#1eabfc", "#2CD095", "#FDB63A", "#2cb2af", "#8b55f1", "#0ebf7c", "#ff864b", "#3869b6", "#0e7f7c"]})
                this.dom.setOption(this.option);
                on(window, 'resize', this.resize)
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.dom = echarts.init(this.$refs.dom);
                this.draw();
            })
        },
        beforeDestroy() {
            off(window, 'resize', this.resize)
        },
        watch: {
            option: {
                handler: function () {
                    this.$nextTick(() => {
                        this.draw()
                    })
                },
                deep: true
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "charts.stylus"
</style>
