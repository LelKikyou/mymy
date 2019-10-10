<template>
    <div class="right">
        <div class="topBox">
            <titleName>监狱事件</titleName>
            <timelineCollapse></timelineCollapse>
        </div>
        <div class="botBox">
            <titleName>关注人员</titleName>
            <div class="content">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="con" v-for="item in rightData"
                                  @click.native="$router.push('/provincePrison/criminalInfo')">
                        <img class="img" :src="item.img" alt="">
                        <div class="name" :title="item.name">{{item.name}}</div>
                        <div :title="item.jy">{{item.jy}}</div>
                        <div :title="item.eventType">罪名 : {{item.zm}}</div>
                        <div :title="item.date">刑期 : {{item.xq}}</div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import timelineCollapse from "@/components/timelineCollapse"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import pic from "@/assets/criminalExecution/pic.png"

    export default {
        name: "right",
        components: {
            titleName,
            timelineCollapse,
            swiper, swiperSlide
        },
        props: {
            rightData: {
                type: Array,
                default: () => {
                    return [{
                        img: pic,
                        name: "顾学华",
                        jy: "济南监狱",
                        zm: "盗窃罪",
                        xq: "5年6个月"
                    }, {
                        img: pic,
                        name: "顾学华",
                        jy: "济南监狱",
                        zm: "盗窃罪",
                        xq: "5年6个月"
                    },
                        {
                            img: pic,
                            name: "顾学华",
                            jy: "济南监狱",
                            zm: "盗窃罪",
                            xq: "5年6个月"
                        },
                        {
                            img: pic,
                            name: "顾学华",
                            jy: "济南监狱",
                            zm: "盗窃罪",
                            xq: "5年6个月"
                        }
                    ]
                }
            }
        },
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        delay: 2000,//秒切换一次
                        disableOnInteraction: false
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesPerView: 3,
                    on: {
                        click: function () {
                            // _that.handleLunboClick(this.clickedIndex)
                        }
                    }
                }
            }
        }
    }
</script>
<style lang="stylus">
    .right .topBox .timelineCollapse
        padding 20px 16px 20px 20px
        width 100%
        height calc(100% - 46px)
</style>
<style lang="stylus" scoped>
    @import "right.stylus"
</style>
