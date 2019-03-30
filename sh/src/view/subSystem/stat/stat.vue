<template>
  <div class="box-wrap">
    <div class="box-top">
      <div class="box-left">
        <h3 class="l-title">在押人员来源分布</h3>
        <div id="map" style="width:100%;height:100%"></div>
      </div>
      <div class="box-right">
        <h3>来自中国服刑人员总共9909人</h3>
        <div id="pie" style="width:100%;height:100%"></div>
      </div>
    </div>
    <div class="box-bottom">
      <h3>中国犯罪趋势</h3>
      <div id="bar" style="width:100%;height:100%"></div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "stat",
        components: {

        },
        data() {
            return {


            }
        },
        methods:{
           generateData(count) {
              var baseValue = Math.random() * 1000;
              var time = +new Date(2011, 0, 1);
              var smallBaseValue;

              function next(idx) {
                  smallBaseValue = idx % 30 === 0
                      ? Math.random() * 700
                      : (smallBaseValue + Math.random() * 500 - 250);
                  baseValue += Math.random() * 20 - 10;
                  return Math.max(
                      0,
                      Math.round(baseValue + smallBaseValue) + 3000
                  );
              }

              var categoryData = [];
              var valueData = [];

              for (var i = 0; i < count; i++) {
                  categoryData.push(this.$echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
                  valueData.push(next(i).toFixed(2));
                  time += 1000;
              }
              debugger
              return {
                  categoryData: categoryData,
                  valueData: valueData
              };
          },

            drawLine(){
                let myChartMap = this.$echarts.init(document.getElementById('map'))
                let myChartPie = this.$echarts.init(document.getElementById('pie'))
                let myChartBar = this.$echarts.init(document.getElementById('bar'))
                // 绘制图表
                // 绘制图表
                let mapOption={
                    backgroundColor: 'transparent',

                    tooltip : {
                        trigger: 'item'
                    },
                    //配置属性
                    series: [{
                        name: '数据',
                        type: 'map',
                        mapType: 'china',
                        roam: true,
                        label: {
                            normal: {
                                show: true  //省份名称
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        data:[]  //数据
                    }]

                }
                myChartMap.setOption(mapOption)

                let pieOption={
                    backgroundColor: 'transparent',
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color:["#2ccf94","#1eaafb"],
                    series : [
                        {
                            name: '服刑人员',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:9134, name:'男'},
                                {value:775, name:'女'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]

                }
                myChartPie.setOption(pieOption)
                var xData=[]
                var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
                var yMax = 500;
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                    xData.push(2018-i)
                }
                let barOption={
                    xAxis: {
                        data: xData,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                normal: {color: 'rgba(0,0,0,0.05)'}
                            },
                            barGap:'-100%',
                            barCategoryGap:'40%',
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ]
                }
                myChartBar.setOption(barOption)

            }
        },
        mounted() {
            this.drawLine()
        }
    }
</script>
<style lang="stylus" scoped>
  @import "stat.stylus"
</style>