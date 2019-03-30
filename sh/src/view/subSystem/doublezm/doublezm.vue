<template>
  <div class="box-wrap">
    <div class="box-left">
      <div class="box-title">
        <h3 >多重罪名</h3>

      </div>
      <div id="mynetwork" class="mynetwork"></div>
    </div>
    <div class="box-right">
      <ul class="detail-list">
        <li class="detail-item">
          <span>盗窃罪共2341例</span>
        </li>
        <li class="detail-item">
          <span>盗窃罪同时伴随的罪名有</span>
        </li>
        <div id="myChart" class="bar-wrap" style="width:100%;height:600px"></div>
        <li class="detail-item"><span>其中最容易与盗窃罪伴随发生的罪名有:</span></li>
      </ul>
      <ul class="s-detail">
        <li class="detail-item">抢劫罪 <span class="num">21</span>例 </li>
        <li class="detail-item">故意伤害罪 <span class="num">9</span>例 </li>
        <li class="detail-item">强奸罪 <span class="num">9</span> 例</li>
      </ul>
    </div>
  </div>
</template>
<script>
    import {GetDoubleZmData} from "@/api/mockApi"
    export default {
        name: "doublezm",
        components: {

        },
        data() {
            return {

            }
        },
        methods:{
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                let initOption={
                    color: ["#1eabfc", "#2CD095", "#FDB63A", "#2cb2af", "#8b55f1", "#0ebf7c", "#ff864b", "#3869b6", "#0e7f7c"],
                    series: {
                        type: "bar",
                        label: {
                            normal: {show: true, position: "insideLeft", color: "#fff"},
                            type: "bar"
                        },
                        data:[
                            {name: "非法拘禁罪", value: 1, itemStyle: {normal: {color: "#0ebf7c"}}},
                            {name: "破坏易燃易爆设备罪", value: 1, itemStyle: {normal: {color: "#8b55f1"}}},
                            {name: "敲诈勒索罪", value: 1, itemStyle: {normal: {color: "#2cb2af"}}},
                            {name: "妨害司法罪", value: 1, itemStyle: {normal: {color: "#FDB63A"}}},
                            {name: "妨害文物管理罪", value: 1, itemStyle: {normal: {color: "#2CD095"}}},
                            {name: "强制猥亵、侮辱妇女罪", value: 1, itemStyle: {normal: {color: "#1eabfc"}}},
                            {name: "故意杀人罪", value: 2, itemStyle: {normal: {color: "#0e7f7c"}}},
                            {name: "诈骗罪", value: 3, itemStyle: {normal: {color: "#3869b6"}}},
                            {name: "故意毁坏财物罪", value: 3, itemStyle: {normal: {color: "#ff864b"}}},
                            {name: "走私、贩卖、运输、制造毒品罪", value: 3, itemStyle: {normal: {color: "#0ebf7c"}}},
                            {name: "扰乱公共秩序罪", value: 4, itemStyle: {normal: {color: "#8b55f1"}}},
                            {name: "抢夺罪", value: 8, itemStyle: {normal: {color: "#2cb2af"}}},
                            {name: "强奸罪", value: 9, itemStyle: {normal: {color: "#FDB63A"}}},
                            {name: "故意伤害罪", value: 9, itemStyle: {normal: {color: "#2CD095"}}},
                            {name: "抢劫罪", value: 21, itemStyle: {normal: {color: "#1eabfc"}}}
                        ]
                    },
                    tooltip: {show: true},
                    grid: {left: 0, right: 10, top: 10, bottom: 10, containLabel: true},
                    xAxis: {
                        axisLabel: {show: true, color: "#fff", fontSize: 11, interval: 0},
                        axisLine: {lineStyle: {color: "#0b9ada"}},
                        axisTick: {show: false},
                        show: false,
                        type: "value"
                    },
                    yAxis: {
                        axisLabel: {show: true, color: "#fff", fontSize: 11, interval: 0},
                        axisLine: {lineStyle: {color: "#0b9ada"}},
                        axisTick: {show: false},
                        show: true,
                        data:[
                            "非法拘禁罪",
                            "破坏易燃易爆设备罪",
                            "敲诈勒索罪",
                            "妨害司法罪",
                            "妨害文物管理罪",
                            "强制猥亵、侮辱妇女罪",
                            "故意杀人罪",
                            "诈骗罪",
                            "故意毁坏财物罪",
                            "走私、贩卖、运输、制造毒品罪",
                            "扰乱公共秩序罪",
                            "抢夺罪",
                            "强奸罪",
                            "故意伤害罪",
                            "抢劫罪"],
                        splitLine: {show: false},
                        type: "category"
                    }
                }
                myChart.setOption(initOption)
                myChart.resize();
            }
        },
        mounted() {
            let that=this;
            GetDoubleZmData().then(res => {
                that.drawLine()
                var container = document.getElementById('mynetwork');
                var data = res.data
                const options = {
                    nodes: {
                        scaling: {
                            label: {
                                enabled: true
                            }
                        }
                    },
                    edges: {
                        smooth: false,
                        scaling: {
                            label: {
                                enabled: true
                            }
                        },
                        length:220.3125,
                        color: {
                            color:"#0b9ada",
                            highlight: '#e1c122'
                        }
                    },
                    manipulation: {
                        enabled: false
                    },
                    autoResize: true
                };

                var network =new this.$vis.Network(container, data, options);
                setTimeout(function(){
                    network.redraw()
                }, 600);

                network.on('selectNode', (params) => {


                });
            }).catch(err => {
                console.log(err)
            })






        }
    }
</script>
<style lang="stylus" scoped>
  @import "doublezm.stylus"
</style>