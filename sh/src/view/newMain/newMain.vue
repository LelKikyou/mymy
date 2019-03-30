<template>
    <div class="new-main">
       <div class="header">
           <div class="search-btn" >
               <button class="s-btn"><a href="http://www.baidu.com">监狱大屏</a></button>
               <button class="s-btn"><a href="">戒毒大屏</a></button>
               <button class="s-btn"><a href="">矫治大屏</a></button>
           </div>
           <div class="to-system" @click="goToSystem">
               <span>进入系统</span>
               <i class="iconfont icon-jinruxitong-"></i>
           </div>
       </div>
        <div class="main">
            <div class="left">
                <div class="same-bg">
                    <chartBox :chartData="chartDataPie"></chartBox>
                </div>
                <div class="same-bg">
                    <chartBox :chartData="chartDataBar"></chartBox>
                </div>
                <div class="same-bg">
                    <textBox :textBoxData="XZJGData"></textBox>
                </div>
            </div>
            <div class="center">
                <div class="c-table">
                    <h3 class="title"><i class="iconfont icon-edit-outline"></i>今日关注</h3>
                    <div class="table">
                        <div class="t-head">
                            <div class="h-left">事件</div>
                            <div class="h-right">数量</div>
                        </div>
                        <div class="t-body" v-for="item in guanZhuList">
                            <div class="b-left">{{item.name}}</div>
                            <div class="b-center">
                                <div class="b-text" v-for="item2 in item.thing">{{item2.name}}</div>
                            </div>
                            <div class="b-right">
                                <div class="b-text" v-for="item2 in item.thing">{{item2.count}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-map">
                    <province-map :mapData="shMapData"></province-map>
                </div>
            </div>
            <div class="right">
                <div class="same-bg">
                    <textBox :textBoxData="ZDGZData"></textBox>
                </div>
                <div class="same-bg">
                    <textBox :textBoxData="XZSBData"></textBox>
                </div>
                <div class="same-bg">
                    <textBox :textBoxData="AJQSData"></textBox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import chartBox from '@/components/chartBox/chartBox'
    import provinceMap from '@/components/provinceMap/provinceMap'
    import textBox from '@/components/textBox/textBox'
    import {getDaPingZXLL,getDaPingXZXSZXDX,getDaPingXZJG,getDaPingJRGZ,getDaPingXZSB,getDaPingZDGZ} from '@/api/homePage'
    export default {
        name: "newMain",
        components: {
            chartBox,textBox,provinceMap
        },
        data() {
            return {
                chartDataPie:{
                    title:'全市司法行政力量',
                    id:'pie1',
                    type:'pie',
                },
                chartDataBar:{
                    title:'全市司法行政刑事执行对象',
                    id:'bar1',
                    type:'bar',
                },
                XZJGData:{
                    title:'全市司法行政机构',
                    type:'0',       //行政机构那种
                },
                ZDGZData:{
                    title:'重点关注',
                    type:'1',       //行政机构那种
                },
                XZSBData:{
                    title:'全市司法行政设备',
                    type:'1',       //行政机构那种
                },
                AJQSData:{
                    title:'案件趋势',
                    type:'2',       //行政机构那种
                    dataJson:[
                        '吸毒','杀人','再犯罪','越狱','受贿'
                    ]
                },
                guanZhuList:[],
                shMapData: {
                    title:'上海:截止2019年2月统计数据',
                    id:'shMap',
                }

            }
        },

        mounted(){
            getDaPingZXLL().then((res) => {
                if (res.status=== 200) {
                    let curData=[
                        {value: res.data.jzzzry, name:'矫正专职人员'},
                        {value:res.data.jdmj, name:'戒毒民警'},
                        {value:res.data.jzmj, name:'矫正民警'},
                        {value:res.data.jymj, name:'监狱民警'},
                    ]
                    this.$set(this.chartDataPie,'dataJson',curData)
                } else {

                }
            }).catch((err) => {

            });

            getDaPingXZXSZXDX().then((res) => {
                if (res.status=== 200) {
                    let curData={
                        xData:['监狱','戒毒','矫正'],
                        yData:[res.data.jy,res.data.jd,res.data.jz]
                    }
                    this.$set(this.chartDataBar,'dataJson',curData)

                } else {

                }
            }).catch((err) => {

            });

            getDaPingXZJG().then((res) => {
                if (res.status=== 200) {
                    let result=res.data
                    let curData=[
                        {
                            name:'监狱',
                            value:result.jy+'所'
                        },
                        {
                            name:'康复中心',
                            value:result.kfzx+'所'
                        },
                        {
                            name:'戒毒所',
                            value:result.jds+'所'
                        },
                        {
                            name:'司法所',
                            value:result.sfs+'所'
                        },
                        {
                            name:'矫正中心',
                            value:result.jzzx+'所'
                        },
                    ]
                    this.$set(this.XZJGData,'dataJson',curData)

                } else {

                }
            }).catch((err) => {

            });

            //今日关注
            getDaPingJRGZ().then((res) => {
                if (res.status=== 200) {
                    let result=res.data
                    let curData=[
                            {
                                name:'监狱',thing:[
                                    {name:'风险危险源',count:result.jyFxwxy},
                                    {name:'物力设备故障',count:result.jyWlsbgz},
                                    {name:'钥匙箱钥匙未归还',count:result.jyYsxyswgh},
                                ]
                            },
                            {
                                name:'戒毒',thing:[
                                    {name:'离所就医',count:result.jdLsjy}
                                ]

                            },
                            {
                                name:'社矫',thing:[
                                    {name:'越界报警',count:result.sjYjbj},
                                    {name:'设备报警',count:result.sjSbbj},
                                ]
                            }
                        ]
                    this.guanZhuList=curData
                } else {

                }
            }).catch((err) => {

            });
            //重点关注
            getDaPingZDGZ().then((res) => {
                if (res.status=== 200) {
                    let result=res.data
                    let curData=[
                        {
                            name1:'监狱:高危险度',
                            value1:result.jyGwxd+'人',
                            name2:'老病残',
                            value2:result.jyLbc+'人'
                        },
                        {
                            name1:'戒毒:收监执行',
                            value1:result.jdBhys+'人',
                            name2:'单独管理',
                            value2:result.jdDdgl+'人'
                        },
                        {
                            name1:'社矫:收监执行',
                            value1:result.sjSjzx+'人',
                            name2:'托管人员',
                            value2:result.sjTgry+'人'
                        },

                    ]
                    this.$set(this.ZDGZData,'dataJson',curData)

                } else {

                }
            }).catch((err) => {

            });
            //全市司法行政设备
            getDaPingXZSB().then((res) => {
                if (res.status=== 200) {
                    let result=res.data
                    let curData=[
                        {
                            name1:'监狱:危险源',
                            value1:result.jyWx,
                            name2:'钥匙箱',
                            value2:result.jyYsx
                        },
                        {
                            name1:'戒毒:通讯设备',
                            value1:result.jdTxsb,
                            name2:'报警设备',
                            value2:result.jdBjsb
                        },
                        {
                            name1:'矫正:手环',
                            value1:result.jzSh+'个',
                            name2:'APP定位',
                            value2:result.jzAppDw+'个'
                        },

                    ]
                    this.$set(this.XZSBData,'dataJson',curData)

                } else {

                }
            }).catch((err) => {

            });
        },
        methods:{
            //跳到智能搜索
            // goToSearch(){
            //     this.$router.push({
            //         name: 'home/homePage'
            //     })
            // },
            //进入系统
            goToSystem(){
                this.$router.push({
                    name: 'homePage'
                })
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import 'newMain.stylus'
</style>
