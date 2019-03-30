<template>
    <div class="x-bar">
        <div :id="id" :option="option" ></div>
    </div>
</template>

<script>
   import HighCharts from 'highcharts'
   export default {
        // 验证类型
       data(){
           return {
               chart:''
           }
       },
        props: {
            id: {
                type: String
            },
            option: {
                type: Object
            }

        },
        mounted() {
           this.chart= HighCharts.chart(this.id, this.option)
        },

    }
</script>

<style lang="stylus" scoped>
    @import "highCharts.stylus"
</style>