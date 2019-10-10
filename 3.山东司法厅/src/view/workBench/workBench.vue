<template>
    <div class="workBench">
        <pageHeader>
            <template slot="mid">
                <img class="img" src="@/assets/mainScreen/LOGO.png">
                <span>山东省司法厅数据协同平台</span>
            </template>
        </pageHeader>
        <div class="content">
            <div class="map">
                <swiper class="swiperBox" :options="swiperOption" ref="mySwiper">
                    <swiperSlide class="swiperCon" v-for="item in swiperData">
                        <div class="item">
                            <i :class="['iconfont',item.icon]"></i>
                            <p>{{item.name}}</p>
                        </div>
                    </swiperSlide>
                </swiper>
            </div>
            <div class="cut">
                <transition name="fade" mode="out-in">
                    <ul class="navCut" v-show="show">
                        <li v-for="item in filActiveData">{{item.name}}</li>
                    </ul>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import pageHeader from "@/components/pageHeader"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "workBench",
        components: {
            pageHeader,
            swiper,
            swiperSlide
        },
        data() {
            let _that = this;
            return {
                _time: null,
                show: true,
                swiperData: [
                    {
                        icon: "iconfalvfuwu_",
                        name: "行政立法"
                    },
                    {
                        icon: "iconzhifa",
                        name: "行政执法"
                    },
                    {
                        icon: "iconxingshizhixing",
                        name: "刑事执行"
                    },
                    {
                        icon: "iconfalvfuwusuo",
                        name: "公共法律服务"
                    }
                ],
                activeData: [
                    [{
                        name: "人民监督员"
                    }, {
                        name: "律师服务"
                    }, {
                        name: "公证服务"
                    }],
                    [{
                        name: "人民监督员2"
                    }, {
                        name: "律师服务2"
                    }, {
                        name: "公证服务2"
                    }, {
                        name: "公证服务2"
                    }],
                    [{
                        name: "人民监督员3"
                    }, {
                        name: "律师服务3"
                    }, {
                        name: "公证服务3"
                    }],
                    [{
                        name: "人民监督员4"
                    }, {
                        name: "律师服务4"
                    }, {
                        name: "公证服务4"
                    }, {
                        name: "律师服务4"
                    }, {
                        name: "律师服务4"
                    }]
                ],
                activeIndex: 0,
                swiperOption: {
                    watchSlidesProgress: true,
                    slidesPerView: 3,
                    centeredSlides: true,
                    loop: true,
                    // autoplay: true,
                    on:
                        {
                            slideChange: function () {
                                if (this.realIndex !== _that.activeIndex) {
                                    clearTimeout(_that._time);
                                    _that.show = false;
                                    _that.activeIndex = this.realIndex;
                                    _that._time = setTimeout(() => {
                                        _that.show = true
                                    }, 500);
                                }
                            },
                            progress: function (progress) {
                                for (let i = 0; i < this.slides.length; i++) {
                                    let slide = this.slides.eq(i);
                                    let slideProgress = this.slides[i].progress;
                                    let modify = 1;
                                    if (Math.abs(slideProgress) > 1) {
                                        modify = (Math.abs(slideProgress) - 1) * 0.1 + 1;
                                    }
                                    let translateX = slideProgress * modify * -98 + 'px';
                                    let scale = 1 - Math.abs(slideProgress) / 3;
                                    let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                                    let translateY = 500 * (1 - scale);
                                    slide.transform(`translateX(${translateX}) translateY(-${translateY}px) scale(${scale})`);
                                    slide.css('zIndex', zIndex);
                                    slide.css('opacity', 1);
                                    if (Math.abs(slideProgress) > 3) {
                                        slide.css('opacity', 0);
                                    }
                                }
                            }
                            ,
                            setTransition: function (transition) {
                                for (let i = 0; i < this.slides.length; i++) {
                                    let slide = this.slides.eq(i)
                                    slide.transition(transition);
                                }

                            }
                        }
                }
            }
        },
        computed: {
            filActiveData() {
                return this.activeData[this.activeIndex]
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "workBench.stylus"
</style>
