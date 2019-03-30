<template>
  <div class="sh-details">
    <!--  -->
    <div class="sh-sidebar">
      <span>选择司法单位：</span>
      <Select v-model="model1" style="width:200px" @on-change="changeKey(model1)"> 
        <Option v-for="item in judicialList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <!--  -->
      <div class="d-content">
        <div v-for="item in siteData" class="dc-item" @click="selSite(item)" :class="[item.checked?'active':'']">
          {{item.value}}
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sh-rBox">
      <!--  -->
      <div class="r-top">
        <div class="judicialLogo">
          <img src="../../../assets/shzxjzpt/u922.png" alt="">
        </div>
        <!--  -->
        <div class="caseBox">
          <div class="cBox1">
            <div class="caseItem s-title">
                <span class="s-span">狱情动态</span>
            </div>
            <!--  -->
            <div class="pArea">
              <div class="cNum">
                <div class="c-time">
                  <span>2018年12月12日</span>
                </div>
                <!--  -->
                
                  <div class="pBox">
                    <div class="peopleNum">
                      <p class="c-tit">当前在押罪犯</p>
                      <p class="c-people">452<span>人</span></p>
                    </div>
                    <!--  -->
                    <div class="peopleNum">
                      <p class="c-tit">在职干警</p>
                      <p class="c-people">103<span>人</span></p>
                    </div>
                  </div>  
                <!--  -->
              </div>
              <!--  -->
              <div class="cNum">
                <ul class="timeList">
                  <li v-for="item in timeList"  :class="[item.checked?'active':'']"  @click="selTimeList(item)" >{{item.value}}</li>
                </ul>
                <div class="blockNum">
                  <div class="b-left b-item">
                    <p class="b-people">3<span>人</span><b>狱内奖励</b></p>
                  </div>
                  <div class="b-right b-item">
                    <p class="b-people">3<span>人</span><b>狱内惩罚</b></p>
                  </div>
                  <div class="b-left b-item">
                    <p class="b-people">3<span>人</span><b>狱内就医</b></p>
                  </div>
                  <div class="b-right b-item">
                    <p class="b-people">3<span>人</span><b>出工人数</b></p>
                  </div>
                </div>
                <!--  -->
                <div class="blockArea">
                  <div class="bAitem">
                    <span>5</span>
                    <p>新收益</p>
                  </div>
                  <div class="bAitem">
                    <span>5</span>
                    <p>刑满释放</p>
                  </div>
                  <div class="bAitem">
                    <span>5</span>
                    <p>狱外就医</p>
                  </div>
                  <div class="bAitem">
                    <span>5</span>
                    <p>减刑假释</p>
                  </div>
                  <div class="bAitem">
                    <span>5</span>
                    <p>暂外执行</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="r-mid">
        <div class="midItem s-title">
            <span class="s-span">全国/各监狱警犯比</span>
        </div>
        <ul class="timeList">
          <li>当年</li>
          <li>近5年</li>
        </ul>
        <div>
          <div id="myChartType" :style="{ width: '520px', height: '230px',float:'left'}"></div>
          <div id="myChartType1" :style="{ width: '200px', height: '200px',float:'left'}"></div>
          <div id="myChartType4" :style="{ width: '500px', height: '180px',float:'left'}"></div>
        </div>
      </div>
      <!--  -->
      <div class="r-bot">
        <div class="s-title">
          <span class="s-span">重点关注</span>
        </div>
        <!--  -->
        <div class="peopleBox">
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
            <!--  -->
            <div class="pb-item">
              <p class="pb-jq">一监区</p>
              <div class="pb-name">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <p>谷喜</p>
              </div>
              <div class="attention"><b>关注度</b><span>93%</span></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                judicialList: [
                    {
                        value: '监狱',
                        label: '监狱'
                    },
                    {
                        value: '戒毒所',
                        label: '戒毒所'
                    },
                    {
                        value: '社矫中心',
                        label: '社矫中心'
                    },
                ],

                siteData:[
                  {
                    value: '宝山',
                    checked:false
                  },
                  {
                    value: '青浦',
                    checked:false
                  },
                  {
                    value: '总医院',
                    checked:false
                  },
                ],
                timeList:[
                  {
                    value: '昨日',
                    checked:false
                  },
                  {
                    value: '当日',
                    checked:false
                  },
                  {
                    value: '当月',
                    checked:false
                  },
                  {
                    value: '年内统计',
                    checked:false
                  },
                ],
                model1: ''
            }
        },
        mounted(){
          this.drawBar();
          this.drawBar1();
          this.drawLine4();
        },
        methods:{
          selSite(item){
            if (!item.checked) {
                this.siteData.map((val)=>{
                    val.checked=false;
                });
                this.$set(item, 'checked', true);
                return;
            }else{

            }
            item.isChecked = !item.isChecked
          },
          selTimeList(item){
            if (!item.checked) {
                this.timeList.map((val)=>{
                    val.checked=false;
                });
                this.$set(item, 'checked', true);
                return;
            }else{

            }
            item.isChecked = !item.isChecked
          },
          changeKey(value ){
            let prisonData=
                [{
                    value: '宝山',
                    checked:false
                  },
                  {
                    value: '青浦',
                    checked:false
                  },
                  {
                    value: '总医院',
                    checked:false
                }];
            let drugData=[
                  {
                    value: '高境强制隔离戒毒所',
                    checked:false
                  },
                  {
                    value: '夏阳强制隔离戒毒所',
                    checked:false
                  },
                  {
                    value: '崧泽强制隔离戒毒所',
                    checked:false
                }];
            let correctData=[
                  {
                    value: '惠南矫正中心',
                    checked:false
                  },
                  {
                    value: '高科西路矫正中心',
                    checked:false
                  },
                  {
                    value: '高桥矫正中心',
                    checked:false
                }];
            if(value=='监狱'){
              this.siteData=[];
              this.siteData=prisonData
            }else if(value=='戒毒所'){
              this.siteData=[];
              this.siteData=drugData
            }else if(value=='社矫中心'){
              this.siteData=[];
              this.siteData=correctData
            }
          },
          drawBar(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChartType'))
            // 绘制图表
            myChart.setOption({
                // legend: {
                //   data:[
                //     {
                //       name:'吸毒罪犯',
                //       icon:'circle'
                //     },
                //     {
                //       name:'贩毒罪犯',
                //       icon:'circle'
                //     },
                //   ],
                // },
                xAxis: {
                    type: 'category',
                    data: ['一监区', '二监区', '三监区', '四监区', '五监区', '六监区', '七监区'],
                    // splitLine:{show: true},//去除网格线
                    // splitArea : {show : true},//保留网格区域
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#fff',//左边线的颜色
                            width:'1'//坐标线的宽度
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',//坐标值得具体的颜色

                        }
                    }
                },
                grid: {
                  left: '3%',
                  right: '10%',
                  top: '3%',
                  containLabel: true
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color:'#fff',
                            width:'1'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                series: [
                  {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(83,152,211,0.4)'
                        }
                    },
                  },
                  {
                    name: '吸毒罪犯',
                    type: 'bar',
                    barWidth:20,
                    itemStyle: {
                      normal: {
                        color: "#f9d22d"
                      }
                    },
                    data: [150, 232, 201, 154, 190, 77, 101]
                  },
                ]
            });
          },
          drawBar1(){
            let myChart = this.$echarts.init(document.getElementById('myChartType1'));
            myChart.setOption({
              // tooltip : {
              //     formatter: "{a} <br/>{b} : {c}%"
              // },
              // toolbox: {
              //     feature: {
              //         restore: {},
              //         saveAsImage: {}
              //     }
              // },
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
              },
              grid: {
                left: '-3%',
                // right: '10%',
                top: '-3%',
                containLabel: true
              },
              series: [
                  {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    axisLine: {            // 坐标轴线
                      lineStyle: {       // 属性lineStyle控制线条样式
                          width: 8
                      }
                    },
                    axisTick: {            // 坐标轴小标记
                      splitNumber: 5,
                      length: 10,        // 属性length控制线长
                      lineStyle: {        // 属性lineStyle控制线条样式
                          color: 'auto'
                      }
                    },
                    splitLine: {           // 分隔线
                      length: 5,         // 属性length控制线长
                      lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                          color: 'auto'
                      }
                    },
                    pointer: {
                        width:2
                    },
                    title : {
                      textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                          fontWeight: 'bolder',
                          fontSize: 14,
                          fontStyle: 'italic',
                          color: '#fff',
                          shadowColor : '#fff', //默认透明
                          shadowBlur: 10
                      }
                    },
                    data: [{value: 50, name: '警犯比'}]
                  }
              ]
            });
          },
          drawLine4(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChartType4'))
                myChart.setOption({
                    tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                    orient: 'vertical',
                    right:20,
                    top:10,
                    itemGap:25,
                    textStyle: {
                        color: "#fefefe"
                    },
                    data: [
                        {
                        name:"在册警力",
                        icon:'circle'
                        },
                        {
                        name:"在岗警力",
                        icon:'circle'
                        },
                        {
                        name:"值班警力",
                        icon:'circle'
                        },
                        {
                        name:"执勤警力",
                        icon:'circle'
                        },
                    ],
                    },
                    series: [
                    {
                        name:'分析',
                        type:'pie',
                        // radius: ['80%', '40%'],
                        radius : ['40%', '80%'],
                        center : ['45%', '50%'],
                        label: {
                        normal: {
                            show: true,
                            formatter:function(params){
                            return params.percent+'%';
                            },
                            color:'#fff'
                        },
                        emphasis: {
                            show: true,

                        }
                        },
                        lableLine: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        }
                        },
                        data:[
                        {value:335, name:'在册警力'},
                        {value:310, name:'在岗警力'},
                        {value:234, name:'值班警力'},
                        {value:135, name:'执勤警力'},
                        ]
                    }
                    ],
                    color:['#10a8ab','#556fb5','#448aca','#4db4ca']
            });
            },
        }
    }
</script>
<style scoped type="less">
    @import "details.css";
</style>