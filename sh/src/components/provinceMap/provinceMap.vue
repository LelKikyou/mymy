<template>
    <div class="provinceMap">
        <h3 class="title">{{mapData.title}}</h3>
        <div :id='mapData.id' class="province-wrap"></div>
    </div>
</template>

<script>
    export default {
        name: "provinceMap",
        props:{
            mapData:{
                type: Object,
                default: function () {
                    return {
                        title:'',
                        id:'',
                        dataJson:[],
                    }
                }
            }
        },
        mounted(){
            this.drawChart(this.mapData)
        },
        methods:{
            drawChart(chartData){
                let myChart = this.$echarts.init(document.getElementById(chartData.id))
                let mapOption={

                    tooltip: {
                        trigger: 'item',
                        formatter:function(e){
                          if(e.data){
                              return e.data.name+'<br/>在册人数:'+e.data.value+'<br/>'+'民警人数:'+e.data.value2
                          }else{

                          }

                        }
                    },

                    series: [{
                        type: 'map',
                        mapType: '上海',
                        zoom:1.3,
                        label: {
                            normal: {
                                fontSize:10,
                                show: false,//显示省份标签
                                textStyle:{color:"#c71585"}//省份标签字体颜色
                            },
                            emphasis: {//对应的鼠标悬浮效果
                                show: true,
                                textStyle:{color:"#800080"}
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: .5,//区域边框宽度
                                borderColor: '#1591a0',//区域边框颜色
                                areaColor:"#018592",//区域颜色
                            },
                            emphasis: {
                                borderWidth: .5,
                                borderColor: '#1591a0',
                                areaColor:"#01c2c9",
                            }
                        },
                        data:[
                            {name:'宝山区', value:'123',value2:'485'},
                            {name:'崇明区', value:'200',value2:'800'}//福建为选中状态
                        ]
                    }],
                }
                myChart.setOption(mapOption)
            }
        },
        watch:{
            mapData(newData) {
                this.drawChart(newData)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "provinceMap.stylus"
</style>