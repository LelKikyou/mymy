<template>
    <div class="lrfx">
        <!-- <div id="myChart" :style="{width: '1920px', height: '980px'}"></div> -->
        <!---->
        <div class="blockArea">
            <div class="totalBox clearfix">
                <div class="b_left">
                    <!---->
                    <div class="crimeTS">
                        <p class="c-tit">在押外籍犯概况</p>
                        <div class="barArea clearfix">
                            <span class="pull-left s-tit">外国犯罪：</span>
                            <div class="f-bar pull-left">
                                <ins style="width:39%"></ins>
                            </div>
                            <p class="pull-left">
                                <span>1456</span>人
                                新增：<span>2</span>人
                            </p>
                        </div>
                        <div class="barArea clearfix">
                            <span class="pull-left s-tit">外省犯罪：</span>
                            <div class="f-bar pull-left">
                                <ins style="width:39%"></ins>
                            </div>
                            <p class="pull-left">
                                <span>1456</span>人
                                新增：<span>2</span>人
                            </p>
                        </div>
                    </div>
                    <!---->
                    <div class="crimeTop">
                        <p class="c-tit">外籍犯罪流入TOP10</p>
                        <div class="rankBox">
                            <div class="f-rank pull-left">
                                <p>国际排名</p>
                                <div class="itemRank">
                                    <table>
                                        <tr>
                                            <td>排名</td>
                                            <td>排名</td>
                                            <td>人数</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>伊拉克</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>印度</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>美国</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>英国</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>俄罗斯</td>
                                            <td>3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="f-rank pull-left">
                                <p>国内排名</p>
                                <div class="itemRank">
                                    <table>
                                        <tr>
                                            <td>排名</td>
                                            <td>排名</td>
                                            <td>人数</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>伊拉克</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>印度</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>美国</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>英国</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>俄罗斯</td>
                                            <td>3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---->
                <div class="b_right">
                    <!---->
                    <div class="crimeName">
                        <div class="y-tit pull-left">
                            <span>
                                罪<br>名<br>分<br>析
                            </span>
                        </div>
                        <!---->
                        <div class="pull-left">
                            <div id="crimeA" :style="{ width: '400px', height: '200px'}"></div>
                        </div>
                    </div>
                    <!---->
                    <div class="crimeTerm">
                        <div class="y-tit pull-left">
                            <span>
                                刑<br>期<br>分<br>析
                            </span>
                        </div>
                        <!---->
                        <div class="pull-left">
                            <div id="crimeT" :style="{ width: '450px', height: '300px'}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
            <div class="bottomBox clearfix">
                <div class="crimeNative">
                    <div class="y-tit pull-left">
                            <span>
                                在<br>押<br>罪<br>犯<br>籍<br>贯<br>分<br>布<br>趋<br>势
                            </span>
                    </div>
                    <!---->
                    <div class="pull-left">
                        <div id="crimeN" :style="{ width: '1320px', height: '300px'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import area from '@/assets/data/china.json'
    export default {
      name: "lrfx",
      data(){
        return {
          routes:[]
        }
      },
      mounted(){
        this._createRoutesData();
        // this.drawBar();
        this.drawCrimeA();
        this.drawCrimeT();
        this.drawCrimeN();
      },
      methods: {
        _createRoutesData(){
            let data=[];
	        area.map((item)=>{
	        	item.children.map((_item)=>{
                  let city=[];
                  let value=[parseInt(_item.log),parseInt(_item.lat),1];
                  city.push(value);
                  city.push([121.47, 31.23, 1]);
                  data.push(city);
                })
            });
            this.routes=data;
        },
        drawBar(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            geo3D: {
              map: 'world',
              shading: 'color',
              silent: true,
              environment: '#333',
              realisticMaterial: {
                roughness: 0.8,
                metalness: 0
              },
              postEffect: {
                enable: true
              },
              left:-400,
              groundPlane: {
                show: false
              },
              light: {
                main: {
                  intensity: 1,
                  alpha: 30
                },
                ambient: {
                  intensity: 0
                }
              },
              viewControl: {
                // distance: 70,
                // alpha: 89,
                //
                // panMouseButton: 'left',
                // rotateMouseButton: 'right'
                rotateSensitivity: 0,
                projection: 'orthographic',
                orthographicSize: 53, //控制地图大小
                maxOrthographicSize: 53,
                minOrthographicSize: 53,
                autoRotate:false,
                animation:true,
                alpha:60,
                beta:10,
                animationDurationUpdate:10,
                panSensitivity:0
              },

              itemStyle: {
                areaColor: '#042e46'
              },

              regionHeight: 0.5
            },
            series: [{
              type: 'lines3D',

              coordinateSystem: 'geo3D',

              effect: {
                show: true,
                trailWidth: 3,
                trailOpacity: 1,
                trailLength: 0.2,
                constantSpeed: 5
              },

              blendMode: 'lighter',

              lineStyle: {
                width: 0.2,
                opacity: 0.05
              },
              data: this.routes
            }]
          });
        },
        drawCrimeA(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('crimeA'))
	        // 绘制图表
	        myChart.setOption({
			        tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
			        },
			        series: [
				        {
					        name:'访问来源',
					        type:'pie',
					        selectedMode: 'single',
					        radius: [0, '50%'],
                            center: ['50%', '50%'],
					        label: {
						        normal: {
							        position: 'inner'
						        }
					        },
					        labelLine: {
						        normal: {
							        show: false
						        }
					        },
					        data:[
						        {value:335, name:'国内', selected:true},
						        {value:679, name:'国外'},
						        {value:1548, name:'其他'}
					        ]
				        },
				        {
					        name:'访问来源',
					        type:'pie',
					        radius: ['60%', '75%'],
					        data:[
						        {value:335, name:'盗窃罪'},
						        {value:310, name:'危害社会安全罪'},
						        {value:234, name:'经济罪'},
					        ]
				        }
			        ]
	        });
        },
        drawCrimeT(){
		      let myChart = this.$echarts.init(document.getElementById('crimeT'));
		      myChart.setOption({
			      tooltip : {
				      trigger: 'axis',
				      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				      }
			      },
			      legend: {
				      data: [
					      {
						      name:'外籍罪犯',
						      icon:'circle'
					      },
					      {
						      name:'外省罪犯',
						      icon:'circle'
					      },
					      {
						      name:'本地罪犯',
						      icon:'circle'
					      },
				      ],
				      bottom:30,
				      itemGap:25,
				      textStyle: {
					      color: "#fefefe"
				      },
			      },
			      grid: {
				      left: '3%',
				      right: '4%',
				      bottom: '20%',
                      top:'3%',
				      containLabel: true
			      },
			      xAxis:  {
				      type: 'category',
				      splitLine:{show: true},//去除网格线
				      // splitArea : {show : true},//保留网格区域
				      data: ['一年以下','1、5年','5、10年3','10、20年','无期徒刑','死缓'],
				      axisLine: {
					      lineStyle: {
						      type: 'solid',
						      color: '#bdbdbd',//左边线的颜色
						      width:'1'//坐标线的宽度
					      }
				      },
				      axisLabel: {
					      textStyle: {
						      color: '#bdbdbd',//坐标值得具体的颜色

					      }
				      },
			      },
			      yAxis: {
				      type: 'value',
				      splitLine:{show: true},//去除网格线
				      axisLine: {
					      lineStyle: {
						      type: 'solid',
						      color:'#bdbdbd',
						      width:'1'
					      }
				      },

				      axisLabel: {
					      textStyle: {
						      color: '#bdbdbd'
					      },
					      formatter: '{value} %'
				      }

			      },
                  series: [
						      {
							      name: '外籍罪犯',
							      type: 'bar',
							      stack: '总量',
							      barWidth:10,
							      data: [320, 302, 301, 334, 390, 330, 320, 901, 934, 1290, 1330, 1320]
						      },
						      {
							      name: '外省罪犯',
							      type: 'bar',
							      stack: '总量',
							      barWidth:10,
							      data: [120, 132, 101, 134, 90, 230, 210, 901, 934, 1290, 1330, 1320]
						      },
						      {
							      name: '本地罪犯',
							      type: 'bar',
							      stack: '总量',
							      barWidth:10,
							      data: [220, 182, 191, 234, 290, 330, 310, 901, 934, 1290, 1330, 1320]
						      },

					      ],
			      color:['#10a8ab','#448aca','#556fb5']
		      });
	      },
        drawCrimeN(){
		      let myChart = this.$echarts.init(document.getElementById('crimeN'));
		      myChart.setOption({
			      tooltip : {
				      trigger: 'axis',
				      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				      }
			      },
			      legend: {
				      data: [
					      {
						      name:'外国籍在押',
						      icon:'circle'
					      },
					      {
						      name:'外省籍在押',
						      icon:'circle'
					      },
					      {
						      name:'本地籍在押',
						      icon:'circle'
					      },
				      ],
				      top: 10,
				      itemGap:25,
				      textStyle: {
					      color: "#fefefe"
				      },
			      },
			      grid: {
				      left: '3%',
				      right: '4%',
				      bottom: '10%',
				      containLabel: true
			      },
			      xAxis:  {
				      type: 'category',
				      splitLine:{show: true},//去除网格线
				      // splitArea : {show : true},//保留网格区域
				      data: ['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11','2017-12'],
				      axisLine: {
					      lineStyle: {
						      type: 'solid',
						      color: '#bdbdbd',//左边线的颜色
						      width:'1'//坐标线的宽度
					      }
				      },
				      axisLabel: {
					      textStyle: {
						      color: '#bdbdbd',//坐标值得具体的颜色

					      }
				      },
			      },
			      yAxis: {
				      type: 'value',
				      splitLine:{show: true},//去除网格线
				      axisLine: {
					      lineStyle: {
						      type: 'solid',
						      color:'#bdbdbd',
						      width:'1'
					      }
				      },

				      axisLabel: {
					      textStyle: {
						      color: '#bdbdbd'
					      },
					      formatter: '{value} %'
				      }

			      },
			      series: [
				      {
					      name: '外国籍在押',
					      type: 'bar',
					      stack: '总量',
					      barWidth:30,
					      data: [320, 302, 301, 334, 390, 330, 320, 901, 934, 1290, 1330, 1320]
				      },
				      {
					      name: '外省籍在押',
					      type: 'bar',
					      stack: '总量',
					      barWidth:30,
					      data: [120, 132, 101, 134, 90, 230, 210, 901, 934, 1290, 1330, 1320]
				      },
				      {
					      name: '本地籍在押',
					      type: 'bar',
					      stack: '总量',
					      barWidth:30,
					      data: [220, 182, 191, 234, 290, 330, 310, 901, 934, 1290, 1330, 1320]
				      },
			      ],
			      color:['#10a8ab','#448aca','#556fb5']
		      });
	      },
      }
    }
</script>

<style scoped>
    .lrfx{
        color: #fff;
        font-size: 14px;
        width: 100%;
        height: 980px;
        overflow: auto;
        margin-right: 10px;
        padding-bottom: 70px;
        position: relative;
        background: url('../../../assets/shzxjzpt/feixianshuo3.gif') no-repeat -10px 0px !important ;
        background-size: cover !important;
    }
    .clearfix:after{
        content: '';
        display: table;
        clear: both;
    }
    .pull-left {
        float: left !important;
    }
    .pull-right{
        float: right !important;
    }
    .blockArea{
        width: 100%;
        height:980px;
        position: absolute;
        padding: 0 80px;
        top:0px;
        left:0;
        /*background: #fff;*/
    }
    .b_left{
        float: left;
    }
    .b_right{
        float:right;
    }
    .crimeTS{
        margin-top:130px;
        width: 465px;
        height: 192px;
        /* background: #000; */
        border: 1px solid #a4b0bc;
        padding:15px;
    }
    .c-tit{
        font-size: 18px;
        text-align: left;
        font-weight: 700;
        font-style: normal;
        color: #FFFFFF;
    }
    .barArea{
        margin-top:30px;
        line-height: 30px;
    }
    .s-tit{
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        color: #FFFFFF;
        margin-left: 15px;
    }
    .f-bar{
        width: 150px;
        height: 18px;
        background: #fff;
        margin-right: 30px;
        position: relative;
        top:7px;
    }
    .f-bar ins {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 18px;
    }
    ins::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        background-color:rgba(204,204,255,1);
        transform: translateZ(0);
        -webkit-animation: progressBar ease-in-out 0.7s 0.4s;
        animation-fill-mode: none;
        -webkit-animation-fill-mode: both;
    }
    .crimeTop{
        margin-top:25px;
        width: 465px;
        height: 222px;
        /* background: #000; */
        border: 1px solid #a4b0bc;
        padding:15px;
    }
    .f-rank{
        margin-right: 17px;

    }
    .itemRank{
        width: 199px;
    }
    .f-rank p{
        font-style: normal;
        font-size: 14px;
        text-align: center;
        color: #FFFFFF;
    }
    .f-rank table{
        width: 100%;
        background: #fff;
    }
    .f-rank table,.f-rank td{
        border:1px solid #666;
        border-collapse: collapse;
        color:#333;
    }
    .f-rank td{
        text-align: center;
    }
    .crimeName{
        width: 535px;
        height: 230px;
        /* background: #000; */
        border: 1px solid #a4b0bc;
        padding:15px;
        margin-top:55px;
    }
    .crimeName .y-tit{
        vertical-align: center;
        padding-top: 50px;
        width: 40px;
    }
    .crimeName .y-tit span{
        font-size: 18px;
    }
    .crimeTerm{
        width: 535px;
        height: 300px;
        /* background: #000; */
        border: 1px solid #a4b0bc;
        padding:15px;
        margin-top:30px;
    }
    .crimeTerm  .y-tit{
        vertical-align: center;
        padding-top: 70px;
        width: 40px;
        margin-right: 10px;
    }
    .crimeTerm .y-tit span{
        font-size: 18px;
    }
    .bottomBox{

    }
    .crimeNative{
        width: 1478px;
        height: 330px;
        /* background: #000; */
        border: 1px solid #a4b0bc;
        padding:15px;
    }
    .crimeNative .y-tit{
        vertical-align: center;
        padding-top: 20px;
        width: 40px;
        margin-right: 10px;
    }
    .crimeNative .y-tit span{
        font-size: 18px;
    }
</style>