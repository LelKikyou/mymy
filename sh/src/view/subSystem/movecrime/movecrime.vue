<template>
  <div class="box-wrap">
      <h3 class="box-title">流窜犯罪分析</h3>
      <div id="myChart" style="width:100%;height:100%"></div>
      <div class="rank-container" >
          <h3 class="total-title">总量：{{ currentCount }} </h3>
          <h2 class="rank-title">流窜犯罪数量排名</h2>
          <ol class="rank-list">
              <li class="rank-item" v-for="item in rankList">
                  <span class="item-from">{{ item.fromName }}</span>
                  <span class="item-arrow"> -> </span>
                  <span class="item-to">{{ item.toName}}</span>
                  <span class="item-count">{{ item.count }}</span>
              </li>
          </ol>
      </div>
  </div>
</template>
<script>
    import {GetMoveCrimeData} from "@/api/mockApi"

    export default {
        name: "movecrime",
        components: {

        },
        data() {
            return {
                currentCount:0,
                rankList:[]
            }
        },
        methods:{
            initFuc(){
                let that=this;
                that.currentCount=0;
                that.rankList=[];
                GetMoveCrimeData().then(res => {
                    that.drawLine(res.data)
                    let tmpList= res.data.detailData[0].data;
                    tmpList.forEach(item=>{
                        that.currentCount+=item.count;
                        that.rankList.push(item)
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
            drawLine(data){
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                let optionList=[];
                for(var i=0;i<data.timeList.length;i++){
                    let optionItem={
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        geo:{
                            bottom: 50,
                            itemStyle:{ normal: {borderColor: "#1fabfc", color: "transparent", borderWidth: 3, shadowBlur: 20, shadowColor: "#afebff"}},
                            label: {show: false, emphasis: {show: false}},
                            left: 100,
                            map: "china",
                            right: 200,
                            roam: true,
                            selectedMode: "single",
                            silent: false,
                            top: 50
                        },
                        series:data.detailData,
                        legend: {show:false,orient: "vertical", left: "left", top: "top", textStyle: {color: "#6b8bc0"}, inactiveColor: "#056ee3"},
                         title: {text: data.timeList[i]+"年", left: "center", textStyle: {color: "#fff", fontSize: 24}, subtextStyle: {subtextStyle: {color: "#e5533b", fontWeight: "bold"}}}
                    }
                    optionList.push(optionItem)
                }
                let initOption={
                        baseOption: {
                            timeline: {
                                axisType: 'category',
                                orient: 'vertical',
                                autoPlay: false,
                                inverse: false,
                                playInterval: 5000,
                                left: 10,
                                right: null,
                                top: 20,
                                bottom: 20,
                                width: 65,
                                height: null,
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: '#ddd'
                                        }
                                    },
                                    emphasis: {
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                },
                                symbol: 'none',
                                lineStyle: {
                                    color: '#555'
                                },
                                checkpointStyle: {
                                    color: '#bbb',
                                    borderColor: '#777',
                                    borderWidth: 2
                                },
                                controlStyle: {
                                    showNextBtn: true,
                                    showPrevBtn: true,
                                    normal: {
                                        color: '#666',
                                        borderColor: '#666'
                                    },
                                    emphasis: {
                                        color: '#aaa',
                                        borderColor: '#aaa'
                                    }
                                },
                                data: data.timeList
                            },
                            title: {
                                left: 'center',
                                subtext: '流窜犯罪分析',
                                top: 15,
                                textStyle: {
                                    fontSize: 30,
                                    color: '#e5533b'
                                },
                                subtextStyle: {
                                    fontSize: 16,
                                    color: '#e5533b'
                                }
                            },
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            tooltip: {
                                trigger: 'item',
                                formatter(point) {
                                    const { data } = point
                                    if (data) {
                                        return `${data.fromName} -> ${data.toName}  总计：${data.count}人`;
                                    }
                                    return ''
                                }
                            },
                            series: [],
                            animationDurationUpdate: 1000,
                            animationEasingUpdate: 'quinticInOut'
                        },
                        options: optionList
                    }

                myChart.setOption(initOption)

                myChart.on('click', (changeObject) => {
                    if (changeObject.componentType === 'geo') {

                    }
                })
                myChart.on('timelinechanged', (timelineIndex) => {

                    this.initFuc()
                })
            }
        },
        mounted() {
            this.initFuc()
        }
    }
</script>
<style lang="stylus" scoped>
  @import "movecrime.stylus"
</style>