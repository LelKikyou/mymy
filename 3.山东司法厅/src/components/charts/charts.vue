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
                this.dom.setOption(this.option);
                this.initDone();
                on(window, 'resize', this.resize);
                this.resize()
            },
            //初始化后的回调
            initDone() {
                this.$emit("upInitDone");
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.dom = echarts.init(this.$refs.dom);
            })
        },
        beforeDestroy() {
            off(window, 'resize', this.resize);
            this.dom.dispose();
        },
        watch: {
            option() {
                this.$nextTick(() => {
                    this.draw()
                })
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "charts.stylus"
</style>
