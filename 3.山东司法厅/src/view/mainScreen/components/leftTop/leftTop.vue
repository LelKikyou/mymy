<template>
    <div class="leftTop">
        <titleName style="height: 62px;line-height: 62px;">最新法规规章</titleName>
        <div class="content">
            <div class="con tit">
                <div class="criminalName">文件名称</div>
                <div class="prisonName">文件类型</div>
                <div class="eventType">公布日期</div>
                <div class="date">实施日期</div>
            </div>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide class="con" v-for="(item,index) in leftData"
                              :style="index%2?'background-color: #0a5568;':'background-color: #052f45;'">
                    <div class="criminalName" :title="item.criminalName">{{item.criminalName}}</div>
                    <div class="prisonName" :title="item.prisonName">{{item.prisonName}}</div>
                    <div class="eventType" :title="item.eventType">{{item.eventType}}</div>
                    <div class="date" :title="item.date">{{item.date}}</div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "leftTop",
        components: {
            titleName, swiper, swiperSlide
        },
        props:{
            leftData:{
                type:Array,
                default: () => {
                    return [
                        {
                            criminalName: "聊城市停车场建设和管理办法",
                            prisonName: "规章",
                            eventType: "2019年3月2日",
                            date:"2019年4月1日"
                        },
                        {
                            criminalName: "山东省专职消防队伍管理办法",
                            prisonName: "规章",
                            eventType: "2018年12月31日",
                            date:"2018年12月31日"
                        },
                        {
                            criminalName: "山东省公共消防设施管理办法",
                            prisonName: "规章",
                            eventType: "2018年2月2日",
                            date:"2018年5月1日"
                        },
                        {
                            criminalName: "山东省服务价格管理办法",
                            prisonName: "规章",
                            eventType: "2018年9月9日",
                            date:"2018年11月1日"
                        }, {
                            criminalName: "济南市地质灾害防治管理办法",
                            prisonName: "规章",
                            eventType: "2018年5月19日",
                            date:"2018年5月19日"
                        },
                        {
                            criminalName: "山东省公共机构节能管理办法",
                            prisonName: "规章",
                            eventType: "2017年4月17日",
                            date:"2017年5月20日"
                        },
                        {
                            criminalName: "山东省耕地保养暂行规定",
                            prisonName: "规章",
                            eventType: "2017年2月1日",
                            date:"2017年2月1日"
                        },
                        {
                            criminalName: "山东省实施《中华人民共和国城镇土地使用税暂行条例》办法",
                            prisonName: "规章",
                            eventType: "2017年1月15日",
                            date:"2017年11月1日"
                        },
                    ]
                }
            }
        },
        data() {
            return {
                //轮播
                swiperOption: {
                    autoplay: {
                        delay: 2000,//秒切换一次
                        disableOnInteraction: false
                    },
                    loop: true,
                    slidesPerView: 10,
                    on: {
                        click: function () {
                            // _that.handleLunboClick(this.clickedIndex)
                        }
                    },
                    direction: 'vertical'
                },
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftTop.stylus"
</style>
