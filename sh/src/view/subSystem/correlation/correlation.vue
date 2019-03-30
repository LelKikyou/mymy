<template>
  <div class="network-wrap">
    <div class="box-left">
      <div class="box-title">
        <h3 >关联分析</h3>
      </div>
      <div id="mynetwork" class="mynetwork"></div>
      <div class="box-info">
        <p>点击图中结点进行因素分析, 点击图中连线进行关系分析.</p>
        <p>最重要的因素为: 婚姻状况, 年龄, 文化程度, 捕前职业, 政治面貌.</p>
        <p>最重要的关系为: 年龄-婚姻状况, 文化程度-捕前职业, 性别-政治面貌, 性别-前科次数, 罪名-文化程度.</p>
      </div>
    </div>
    <div class="box-right">
      <div class="box-title">
        <h3 >服刑人员{{curText}}分布</h3>
      </div>
      <div class="pie-wrap">
        <x-chart :id="id1" :option="option1" :series="series1" ref="pie1"></x-chart>
      </div>
      <div class="box-title">
        <h3 >与{{curText}}最相关因素</h3>
      </div>
      <div class="bar-wrap">
        <x-chart :id="id2" :option="option2" :series="series2"></x-chart>
      </div>
    </div>
  </div>
</template>
<script>
    import {GetNetWorkData} from "@/api/mockApi"
    import {GetPieData} from "@/api/mockApi"
    import xChart from '../components/highCharts/highCharts'
    export default {
        name: "network",
        components: {
            xChart
        },
        data() {
            return {
                curText:'文化程度',
                id1: 'test1',
                id2: 'test2',
                series1:[],
                series2:[],
                option1: {
                    chart: {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        type: 'pie'
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    colors: ["#1eabfc", "#2CD095", "#FDB63A", "#2cb2af", "#8b55f1", "#0ebf7c", "#ff864b", "#3869b6", "#0e7f7c"],
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                            }
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: []
                    }]
                },
                option2: {
                    chart: {
                        type: 'bar',
                        backgroundColor: "rgba(0, 0, 0, 0)",
                    },
                    title: {
                        text: ''
                    },

                    xAxis: {
                        categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '人口总量 (百万)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' 百万'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },

                    series: [{
                        name: '1800 年',
                        data: [107, 31, 635, 203, 2]
                    }, {
                        name: '1900 年',
                        data: [133, 156, 947, 408, 6]
                    }, {
                        name: '2008 年',
                        data: [973, 914, 4054, 732, 34]
                    }]
                }
            }
        },
        methods:{
            getPieData(){
                //获取右边数据
                let that=this;
                let data={curText: that.curText}
                GetPieData(data).then(res=>{
                    console.log(res)
                    that.option1.series[0].data=res.data.pie
                    that.$refs.pie1.chart.update(that.option1)
                    
                }).catch(err => {
                    console.log(err)
                })

            }
        },
        mounted() {
            let that=this;
            that.getPieData()
            GetNetWorkData().then(res => {
                var container = document.getElementById('mynetwork');
                var data = res.data;
                
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
                        length: 200,
                        scaling: {
                            label: {
                                enabled: true
                            }
                        },
                        color: {
                            color: '#0b9ada'
                        }
                    },
                    manipulation: {
                        enabled: false
                    },
                    autoResize: true
                };

                var network =new this.$vis.Network(container, data, options);
                network.on('selectNode', (params) => {
                    that.curText=data.nodes[params.nodes[0]] .label
                    that.getPieData()




                });
            }).catch(err => {
                console.log(err)
            })






        }
    }
</script>
<style lang="stylus" scoped>
  @import "correlation.stylus"
</style>