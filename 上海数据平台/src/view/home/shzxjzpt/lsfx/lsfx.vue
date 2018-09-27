<template>
    <div class="lsfx">
        <!--单位信息-->
        <div class="list s-margin s-color">
            <div class="s-title">
                <span class="s-span">单位信息</span>
            </div>
            <!--1-->
            <div class="block">
                <!---->
                <div class="unit" @click="select('prison')" v-bind:class="[this.unitActive==true&&this.unitType=='prison'?'active':'']">
                    <i></i>
                    <span>上海全监狱单位</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='prison'">
                    <div v-for="item in prisonData" class="son-item" :key='item.id' @click="selectItem(item.id)" :class="{active: prisonName ==item.id }">
                        <span>{{item.name}}</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
            <!--2-->
            <div class="block">
                <!---->
                <div class="unit" @click="select('judiciary')" v-bind:class="[this.unitActive==true&&this.unitType=='judiciary'?'active':'']">
                    <i class="icon-2"></i>
                    <span>上海全司法单位</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='judiciary'">
                    <div class="son-item">
                        <span>XXX监狱</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
            <!--3-->
            <div class="block">
                <!---->
                <div class="unit" @click="select('treatment')" v-bind:class="[this.unitActive==true&&this.unitType=='treatment'?'active':'']">
                    <i class="icon-3"></i>
                    <span>上海全戒毒单位</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='treatment'">
                    <div class="son-item">
                        <span>XXX监狱</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
        </div>

        <!--chart-->
        <div class="chart s-margin">
            <!--broken-->
            <div class="broken">
                <div class="s-title">
                    <span class="s-span">临释分析</span>
                    <button class="showAll">显示全部</button>
                </div>
                <div id="myChart" :style="{ width: '1272px', height: '440px'}"></div>
            </div>
            <!--columnar-->
            <div class="columnar">
                <div class="s-title">
                    <span class="s-span">人员类别分布图</span>
                </div>
                <div id="myChartType" :style="{ width: '1272px', height: '440px'}"></div>
            </div>
        </div>

        <!--criminal-->
        <div class="criminal s-margin s-color">
            <!---->
            <div class="s-title">
                <span class="s-span">临释名单</span>
            </div>
            <!---->
            <div class="peopleLists">
                <div class="item">
                    <img src="../../../../assets/shzxjzpt/noPic.png" alt="">
                    <span>XXXX</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let now   = new Date();
    export default {
        name: "lsfx",
        data(){
            return {
                unitActive:true,
                unitType:'prison',
                dateData:[],
                prisonData:[
                    {
                        id:1,
                        name:'XXX监狱'
                    },
                    {
                        id:2,
                        name:'XX监狱'
                    },
                    {
                        id:3,
                        name:'X监狱'
                    }
                ],
                prisonName:0,
            }
        },
        mounted(){
            this.dateData=this._createDateData();
            this.drawLine();
            this.drawBar();
        },
        methods: {
            select(val){
                this.unitType==val&&this.unitActive?this.unitActive=false:this.unitActive=true;
                this.unitType=val;
            },

            selectItem(val){
                this.prisonName=val;
            },

            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            // type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: this.dateData,
                        splitLine:{show: true},//去除网格线
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
                        },

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
                    series: [{
                        data: [820, 932, 901, 934, 1290, 820, 932, 901, 934, 1290,820, 932, 901, 934, 1290,820, 932, 901, 934, 1290,820, 932, 901, 934, 1290,934, 1290,1330, 1320],
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#fbd22c'
                            }
                        },
                        symbol:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB30lEQVQ4jZWVz0sbQRTHPzPZtbWYQKUqBnqyh7TBpoi0glAPNuAfoPTUP6+0pfde+sNTPRQLLSSr3oqlRiuIbmIV91cPM5iZ2U2TPhhY3rz3eW9n3n5XRL03FFgJqOl1FygDCRACHWBXr8RN9Apg94EmMFlQ5I5e88AJ8B7YMYOk89wEnhfAimxSxzZNjglcBZZHALm2rHOB/is/yMMySIIayf4jsvMZyCRi/BhZDfAa36CUOtBfQOChzmbNZv25QfRpgyycs/1RhSScI91fxF95hbjdNXbXgD0J1IGK1Vm0uZ6D2QVniTZfwJV5qRWgLlGj0be4VSc7uzcQdg29nCL++sTx1iRQtVzpz/mhsOvYTsPxVCUwYVc+nx0ZmF1OQWxOSlmSn3bJf1km3OSetS/Gf48OGzsF32yoK4Eju79qa2SenHZjDyTqI++b1/iOuNUZTvN7eAtbjnNXAm2UimgrpfhPXyNuHv8DFuIvvURMXBjOEAiElq86sGEnXXnE20ukhw/VbQKMnSKnW3gLWw4M4C3QFoYeNhkoDnFJ3aYfD2j5M0rKLD38CPjA43y8lxNSw77oXFxgCrwDfgDPGK6JJ8AHILBKFwQGwB7qXGuoT7Os97rAAWoy2hT8Av4CJbqJUtvzZF0AAAAASUVORK5CYII=',
                        symbolSize:15,
                    }]
                });
            },
            drawBar(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChartType'))
                // 绘制图表
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: 'rgba(251,210,44,0.4)'
                            }
                        },
                    }]
                });
            },
            _createDateData() {
                let data=[];
                for(let i=0;i<30;i++){
                    if(i==0){
                        data.push('当日');
                    }else{
                        data.push(i);
                    }
                }
                return data;
            }
        }
    }
</script>

<style scoped>
    @import "lsfx.css";
</style>