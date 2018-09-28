<template>
    <div class="sjgl">
        <div class="s-top">
            <div class="s-one s-margin s-color">
                <div class="s-title">
                    <span class="s-span">单位数据概况</span>
                </div>

                <ul class="s-text">
                    <li>
                        单位名称：XXXX
                    </li>
                    <li>
                        人<span class="space"></span>数：XXXX
                    </li>
                    <li>
                        本<span class="space"></span>月
                        <span class="sp-span">临释人数</span>
                        <span class="s-num">：XXXX</span>
                    </li>
                </ul>

                <div class="map-wrap">
                    <div class="mark-wrap">
                        <div class="mark-item" :class="item.classType" @click="prisonLinkUrl('prisonDetail',index)"
                             @mouseenter="mapEnter(index)"
                             @mouseleave="mapLeave(index)" v-for="(item,index) in mapMarkList" :key='index'
                             :style="{left:item.left+'px',top:item.top+'px',width:item.width+'px',height:item.height+'px'}"></div>

                    </div>
                </div>
            </div>
            <div class="s-two s-margin s-color">
                <div class="s-title" style="border-bottom: 1px solid #58687f;">
                    <span class="s-span">关注人员列表</span>
                    <span class="icon-bottom">
                       <i class="iconfont icon-xiangxia2"></i>
                   </span>
                </div>
                <div>

                    <div class="swiper-container" v-on:mouseenter="stopPlay()" v-on:mouseleave="play()">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item1,index) in gzPeopleList" :key='index'>
                                <div class="sort-item" v-for="(item2,index2) in item1.pList" :key='index2'
                                     @click="handleAdd(item2.peopleName,item2.url)">
                                    <span class="icon"
                                          :class="item2.peopleType==0?'y-icon':item2.peopleType==1?'g-icon':'b-icon'"></span>
                                    <img class="pic" :src="item2.imgSrc" alt="">
                                    <span class="name">{{item2.peopleName}}</span>
                                    <span class="line"></span>
                                </div>
                            </div>
                        </div>
                        <!-- 如果需要滚动条 -->
                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>
            </div>
            <div class="s-three s-margin s-color">
                <div class="s-title" style="border-bottom: 1px solid #787e8a;">
                    <span class="s-span">监管对象流管信息</span>
                    <span class="icon-bottom">
                       <i class="iconfont icon-xiangxia2"></i>
                   </span>
                </div>
                <flowChart></flowChart>
            </div>
        </div>
        <div class="s-bottom">
            <div class="s-four">
                <div class="s-same s-margin s-color">
                    <div class="s-title">
                        <span class="s-span">社区矫正数据概况</span>
                        <span class="icon-bottom">
                            <i class="iconfont icon-xiangxia2"></i>
                        </span>
                    </div>
                    <div class="menu">
                        <div class="menu-item" v-for="(item,index) in sqjzList" :key='index'
                             :class="index==1?'menu-iten-center':''">
                            <span class="sp-one">{{item.title}}</span>
                            <span class="sp-two">{{item.sTitle}}</span>
                            <span class="sp-three">{{item.num}}</span>
                            <div class="d-four">
                                <div :class="item.type==0?'add-icon':item.type==1?'equal-icon':'reduce-icon'"></div>
                                <span>{{item.biLv}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s-same s-margin s-color" style="width:252px;">
                    <div class="s-title">
                        <span class="s-span">监狱数据概况</span>
                        <span class="icon-bottom">
                            <i class="iconfont icon-xiangxia2"></i>
                        </span>
                    </div>
                    <div class="menu">
                        <div class="menu-item" v-for="(item,index) in jyList" :key='index'
                             :class="index==1?'menu-iten-center':''">
                            <span class="sp-one">{{item.title}}</span>
                            <span class="sp-two">{{item.sTitle}}</span>
                            <span class="sp-three">{{item.num}}</span>
                            <div class="d-four">
                                <div :class="item.type==0?'add-icon':item.type==1?'equal-icon':'reduce-icon'"></div>
                                <span>{{item.biLv}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s-same s-margin s-color">
                    <div class="s-title">
                        <span class="s-span">戒毒数据概况</span>
                        <span class="icon-bottom">
                            <i class="iconfont icon-xiangxia2"></i>
                        </span>
                    </div>
                    <div class="menu">
                        <div class="menu-item" v-for="(item,index) in jdList" :key='index'
                             :class="index==1?'menu-iten-center':''">
                            <span class="sp-one">{{item.title}}</span>
                            <span class="sp-two">{{item.sTitle}}</span>
                            <span class="sp-three">{{item.num}}</span>
                            <div class="d-four">
                                <div :class="item.type==0?'add-icon':item.type==1?'equal-icon':'reduce-icon'"></div>
                                <span>{{item.biLv}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s-five s-margin s-color">
                <div class="s-title">
                    <span class="s-span">动态数据信息</span>
                    <span class="icon-bottom">
                       <i class="iconfont icon-xiangxia2"></i>
                   </span>
                </div>
                <div>
                    <ul class="p-list">
                        <li>
                            <span class="icon yellow-icon"></span>
                            <p class="f-p1">
                                <span class="f-sp1">张三</span>
                                <span class="f-sp2">释放</span>
                            </p>
                            <p class="f-p2">
                                <span class="f-sp1">130431199710183341</span>
                                <span class="f-sp2">2018-08-08</span>
                            </p>
                            <span class="line"></span>
                        </li>
                        <li>
                            <span class="icon yellow-icon"></span>
                            <p class="f-p1">
                                <span class="f-sp1">张三</span>
                                <span class="f-sp2">释放</span>
                            </p>
                            <p class="f-p2">
                                <span class="f-sp1">130431199710183341</span>
                                <span class="f-sp2">2018-08-08</span>
                            </p>
                            <span class="line"></span>
                        </li>
                        <li>
                            <span class="icon yellow-icon"></span>
                            <p class="f-p1">
                                <span class="f-sp1">张三</span>
                                <span class="f-sp2">释放</span>
                            </p>
                            <p class="f-p2">
                                <span class="f-sp1">130431199710183341</span>
                                <span class="f-sp2">2018-08-08</span>
                            </p>
                            <span class="line"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="s-six s-margin s-color">
                <div class="s-title">
                    <span class="s-span">人员趋势图</span>
                    <span class="icon-bottom">
                       <i class="iconfont icon-xiangxia2"></i>
                   </span>
                </div>

                <div id="peopleLine" style="width: 100%;height: 350px;"></div>

            </div>
        </div>
    </div>
</template>
<script>
    import flowChart from "./components/flowChart";
    import {mapGetters, mapMutations} from 'vuex'
    import yellowIcon from "@/assets/shzxjzpt/yellow_icon.png";
    import greenIcon from "@/assets/shzxjzpt/green_icon.png";
    import blueIcon from "@/assets/shzxjzpt/blue_icon.png";
    import Swiper from "swiper";
    import "@/assets/css/swiper.css";

    let mySwiper;
    let autoPlayMapMarkPoint;
    let pointIndex = 0;
    export default {
        name: "sjgl",
        data() {
            return {
                active: 0,
                mapMarkList: [
                    {
                        classType: "b-icon",
                        left: "168",
                        top: "205",
                        width: "8",
                        height: "8"
                    },
                    {
                        classType: "r-icon",
                        left: "215",
                        top: "184",
                        width: "8",
                        height: "8"
                    },
                    {
                        classType: "b-icon",
                        left: "225",
                        top: "150",
                        width: "8",
                        height: "8"
                    },
                    {
                        classType: "g-icon",
                        left: "250",
                        top: "130",
                        width: "8",
                        height: "8"
                    },
                    {
                        classType: "b-icon",
                        left: "240",
                        top: "235",
                        width: "8",
                        height: "8"
                    },
                    {
                        classType: "r-icon",
                        left: "286",
                        top: "185",
                        width: "8",
                        height: "8"
                    },
                    {
                        classType: "r-icon",
                        left: "330",
                        top: "122",
                        width: "8",
                        height: "8"
                    }
                ],
                gzPeopleList: [
                    {
                        page: "0",
                        pList: [
                            {
                                peopleType: 0,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李天二",
                                url: 'criminal'
                            },
                            {
                                peopleType: 1,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李四",
                                url: 'criminal'
                            },
                            {
                                peopleType: 0,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "王一",
                                url: 'criminal'
                            },
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "王二",
                                url: 'criminal'
                            },
                            {
                                peopleType: 0,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李六一",
                                url: 'criminal'
                            },
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "老七",
                                url: 'criminal'
                            }
                        ]
                    },
                    {
                        page: "2",
                        pList: [
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "张三元",
                                url: 'criminal'
                            },
                            {
                                peopleType: 1,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李四",
                                url: 'criminal'
                            },
                            {
                                peopleType: 0,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "王一赛",
                                url: 'criminal'
                            },
                            {
                                peopleType: 1,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "王二嘛",
                                url: 'criminal'
                            },
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李六一",
                                url: 'criminal'
                            },
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "老七",
                                url: 'criminal'
                            }
                        ]
                    },
                    {
                        page: "2",
                        pList: [
                            {
                                peopleType: 1,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "张三",
                                url: 'criminal'
                            },
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李四四",
                                url: 'criminal'
                            },
                            {
                                peopleType: 0,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "王一",
                                url: 'criminal'
                            },
                            {
                                peopleType: 1,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "王二三",
                                url: 'criminal'
                            },
                            {
                                peopleType: 0,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "李六一",
                                url: 'criminal'
                            },
                            {
                                peopleType: 2,
                                imgSrc:
                                    "http://img1.imgtn.bdimg.com/it/u=350875571,3699394328&fm=200&gp=0.jpg",
                                peopleName: "老七",
                                url: 'criminal'
                            }
                        ]
                    }
                ],
                sqjzList: [
                    {
                        title: '矫正人员数量',
                        sTitle: '同比去年',
                        num: '123456',
                        type: '0',
                        biLv: '2.8%'
                    },
                    {
                        title: '本月新增',
                        sTitle: '较上月',
                        num: '123486',
                        type: '1',
                        biLv: '2.3%'
                    },
                    {
                        title: '本月减少',
                        sTitle: '较上月',
                        num: '123456',
                        type: '2',
                        biLv: '1.8%'
                    }
                ],
                jyList: [
                    {
                        title: '在押犯数量',
                        sTitle: '同比去年',
                        num: '123456',
                        type: '2',
                        biLv: '2.8%'
                    },
                    {
                        title: '本月新增',
                        sTitle: '较上月',
                        num: '123486',
                        type: '0',
                        biLv: '2.3%'
                    },
                    {
                        title: '本月减少',
                        sTitle: '较上月',
                        num: '123456',
                        type: '2',
                        biLv: '1.8%'
                    }
                ],
                jdList: [
                    {
                        title: '戒毒人员数量',
                        sTitle: '同比去年',
                        num: '123456',
                        type: '2',
                        biLv: '2.8%'
                    },
                    {
                        title: '本月新增',
                        sTitle: '较上月',
                        num: '123486',
                        type: '1',
                        biLv: '2.3%'
                    },
                    {
                        title: '本月减少',
                        sTitle: '较上月',
                        num: '123456',
                        type: '1',
                        biLv: '1.8%'
                    }
                ]
            };
        },
        components: {
            flowChart: flowChart
        },
        mounted() {
            this.drawLine();
            this.lunbo();
            this.autoPlayMapMark()
        },
        methods: {
            ...mapMutations({
                addNav: "addNav"
            }),
            handleAdd(name, url) {
                this.$router.push({
                    name: url,
                    params: {userId: name}
                });
                let data = {
                    name: name,
                    url: url,
                    userId: name
                };
                this.addNav(data)
            },

            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("peopleLine"));
                // 绘制图表
                let option2 = {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999"
                            }
                        }
                    },
                    legend: {
                        textStyle: {
                            color: "#fefefe"
                        },
                        data: ["监狱", "戒毒", "社区矫治"]
                    },
                    xAxis: {
                        type: "category",
                        data: [
                            "2018-01",
                            "2018-02",
                            "2018-03",
                            "2018-04",
                            "2018-05",
                            "2018-06",
                            "2018-07"
                        ],
                        axisPointer: {
                            type: "shadow"
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fbfbfb"
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#85939c"
                            }
                        }
                    },
                    yAxis: {
                        type: "value",
                        axisLabel: {
                            color: "#fbfbfb",
                            formatter: "{value}"
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: "监狱",
                            type: "line",
                            itemStyle: {
                                normal: {
                                    color: "#f9d22d"
                                }
                            },
                            symbol: "image://" + yellowIcon,
                            symbolSize: 12,
                            data: ["5600", "5700", "5900", "5700", "6000", "8000", "8700"]
                        },
                        {
                            name: "戒毒",
                            type: "line",
                            itemStyle: {
                                normal: {
                                    color: "#46ff01"
                                }
                            },
                            symbol: "image://" + greenIcon,
                            symbolSize: 12,
                            data: [
                                "12000",
                                "13000",
                                "15000",
                                "14000",
                                "19000",
                                "16000",
                                "15000"
                            ]
                        },
                        {
                            name: "社区矫治",
                            type: "line",
                            itemStyle: {
                                normal: {
                                    color: "#01fffc"
                                }
                            },
                            symbol: "image://" + blueIcon,
                            symbolSize: 12,
                            data: [
                                "17500",
                                "19500",
                                "17000",
                                "18000",
                                "16500",
                                "18400",
                                "19200"
                            ],
                            animationDelay: function (idx) {
                                return idx * 10 + 100;
                            }
                        }
                    ],
                    animationEasing: "elasticOut",
                    animationDelayUpdate: function (idx) {
                        return idx * 5;
                    }
                };
                var app = {};

                app.currentIndex = -1;

                app.timeTicket = setInterval(function () {
                    var dataLen = option2.series[0].data.length;
                    // 取消之前高亮的图形
                    myChart.dispatchAction({
                        type: "downplay",
                        seriesIndex: 0,
                        dataIndex: app.currentIndex
                    });
                    app.currentIndex = (app.currentIndex + 1) % dataLen;
                    // 高亮当前图形
                    myChart.dispatchAction({
                        type: "highlight",
                        seriesIndex: 0,
                        dataIndex: app.currentIndex
                    });
                    // 显示 tooltip
                    myChart.dispatchAction({
                        type: "showTip",
                        seriesIndex: 0,
                        dataIndex: app.currentIndex
                    });
                }, 1500);
                myChart.setOption(option2);
            },

            lunbo() {
                mySwiper = new Swiper(".swiper-container", {
                    direction: "vertical",
                    loop: true,
                    speed: 500,
                    autoplay: 2000,
                    autoplayDisableOnInteraction: false,

                    // 如果需要滚动条
                    scrollbar: ".swiper-scrollbar"
                });
            },
            stopPlay() {
                mySwiper.stopAutoplay();
            },
            play() {
                mySwiper.startAutoplay();
            },
            //地图移入事件
            mapEnter(index) {
                clearInterval(autoPlayMapMarkPoint);
                this.mapMarkList[pointIndex].width = 8;
                this.mapMarkList[pointIndex].height = 8;
                this.mapMarkList[index].width = 16;
                this.mapMarkList[index].height = 16;
                this.mapMarkList[index].left = this.mapMarkList[index].left - 4;
                this.mapMarkList[index].top = this.mapMarkList[index].top - 4;

            },
            //地图移出事件
            mapLeave(index) {
                this.autoPlayMapMark()
                this.mapMarkList[index].width = 8;
                this.mapMarkList[index].height = 8;
                this.mapMarkList[index].left = this.mapMarkList[index].left + 4;
                this.mapMarkList[index].top = this.mapMarkList[index].top + 4;
            },
            autoPlayMapMark() {
                clearInterval(autoPlayMapMarkPoint);
                var that = this;
                that.mapMarkList[pointIndex].width = 16;
                that.mapMarkList[pointIndex].height = 16;
                autoPlayMapMarkPoint = setInterval(function () {
                    pointIndex++

                    if (pointIndex > 6) {
                        pointIndex = 0
                    }
                    that.mapMarkList[pointIndex].width = 16;
                    that.mapMarkList[pointIndex].height = 16;
                    // that.mapMarkList[pointIndex].left=that.mapMarkList[pointIndex].left-4;
                    // that.mapMarkList[pointIndex].top=that.mapMarkList[pointIndex].top-4;
                    if (pointIndex > 0) {
                        that.mapMarkList[pointIndex - 1].width = 8;
                        that.mapMarkList[pointIndex - 1].height = 8;
                        // that.mapMarkList[pointIndex-1].left=that.mapMarkList[pointIndex-1].left+4;
                        // that.mapMarkList[pointIndex-1].top=that.mapMarkList[pointIndex-1].top+4;
                    } else {
                        that.mapMarkList[6].width = 8;
                        that.mapMarkList[6].height = 8;
                        //that.mapMarkList[6].left=that.mapMarkList[pointIndex-1].left+4;
                        // that.mapMarkList[6].top=that.mapMarkList[pointIndex-1].top+4;

                    }


                }, 1500)
            },
            //地图点击事件
            prisonLinkUrl(name, index) {
                debugger;
                // this.$router.push({
                //     name: name,
                // });
            },

        }
    };
</script>
<style scoped>
    @import "sjgl.css";
</style>