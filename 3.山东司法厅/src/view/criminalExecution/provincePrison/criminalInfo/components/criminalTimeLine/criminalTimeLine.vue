<template>
    <div class="criminalTimeLine">
        <div class="scrollTop"><i @click="handleScrollTop" class="iconfont iconshengxu"></i></div>
        <div class="content sdcmScrollbar" ref="criminalTimeLineDom">
            <template v-for="(item,index) in zfsp">
                <div v-if="index%2===0" class="lineItem">
                    <div class="lineDeeds">
                        <div class="name">{{item.name}}</div>
                        <div class="details">{{item.details}}</div>
                    </div>
                    <div class="lineTime">
                        <div class="timeImg">
                            {{item.time}}
                        </div>
                    </div>
                    <div class="lineIcon">
                        <i :class="['iconfont',item.icon]"></i>
                    </div>
                </div>
                <div v-if="index%2!==0" class="lineItem lineItemRight">
                    <div class="lineTime">
                        <div class="timeImg">
                            {{item.time}}
                        </div>
                    </div>
                    <div class="lineDeeds">
                        <div class="name">{{item.name}}</div>
                        <div class="details">{{item.details}}</div>
                    </div>
                    <div class="lineIcon">
                        <i :class="['iconfont',item.icon]"></i>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "criminalTimeLine",
        data() {
            return {
                zfsp: [
                    {
                        icon:"iconshifang",
                        name: "刑法变动",
                        time: "2018-05-02",
                        details: "狱内减刑1个月"
                    },
                    {
                        icon:"icondiaodong",
                        name: "调动",
                        time: "2017-04-03",
                        details: "调动去向"
                    },
                    {
                        icon:"iconxfbd",
                        name: "刑法变动",
                        time: "2016-04-18",
                        details: "狱内减刑3个月"
                    },
                    {
                        icon:"iconpanjue",
                        name: "判决",
                        time: "2016-01-18",
                        details: "山东省临沂市监狱局"
                    },
                    {
                        icon:"iconzhongdaxingshifan",
                        name: "逮捕",
                        time: "2015-12-11",
                        details: "山东省临沂市公安"
                    },
                    {
                        icon:"iconfanzui",
                        name: "犯罪事实",
                        time: "2015-10-18",
                        details: "千岛湖事件是一件来自台湾的一群游客千岛湖风景区导游船工共32人在湖区旅游时遭遇抢劫并遇害的犯罪案件。因为当时中国大陆地方政府和公安机关封锁新闻，以及中国警方的办案手法粗糙，以及期间各方媒体各种带有负面色彩的报导和猜测，导致民众的不满"
                    }
                ]
            }
        },
        methods: {
            handleScrollTop() {
                let dom = this.$refs.criminalTimeLineDom;
                dom.scrollTo ? dom.scrollTo({  //scrollTo部分浏览器不兼容
                    top: 0,
                    behavior: "smooth"
                }) : dom.scrollTop = 0;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalTimeLine.stylus"
</style>
