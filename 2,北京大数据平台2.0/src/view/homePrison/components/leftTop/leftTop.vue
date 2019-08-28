<template>
    <div class="leftTop">
        <boxTitle>{{$parent.type === "nation" ? "全国" : "全省"}}监狱概况(昨日统计数据)</boxTitle>
        <div class="content">
            <div class="list">
                <div class="tit">
                    <span class="cir"></span><span class="name">{{data.topList[0]}}</span>
                </div>
                <div class="con">
                    <span class="num"><countTo :end="parseInt(allPrisonSurvey.topV[0])||0"></countTo></span><span
                        class="dw">人</span>
                </div>
            </div>
            <div class="list" style="padding-left: 38px;">
                <div class="change">
                    <span class="name">环比变化</span>
                    <img :src="filImg(allPrisonSurvey.topV[1])" width="6" height="13"/>
                    <span :class="[/\-/.test(allPrisonSurvey.topV[1])?'cut':'add']"><countTo
                            :end="parseFloat((allPrisonSurvey.topV[1]+'').replace(/\-/g,''))||0" :decimals="2"></countTo>%</span>
                </div>
                <div class="change">
                    <span class="name">同比变化</span>
                    <img :src="filImg(allPrisonSurvey.topV[2])" width="6" height="13"/>
                    <span :class="[/\-/.test(allPrisonSurvey.topV[2])?'cut':'add']"><countTo
                            :end="parseFloat((allPrisonSurvey.topV[2]+'').replace(/\-/g,''))||0" :decimals="2"></countTo>%</span>
                </div>
            </div>
            <div class="list">
                <div class="tit">
                    <span class="cir"></span><span class="name">{{data.topList[1]}}</span>
                </div>
                <div class="con">
                    <span class="num"><countTo :end="parseInt(allPrisonSurvey.topV[3])||0"></countTo></span><span
                        class="dw">所</span>
                </div>
            </div>
            <div class="list"></div>
            <ul class="content-list">
                <li class="list"
                    :class="[{pdLeft:index%2!==0},{remB:(index===data.botList.length-1||index===data.botList.length-2)}]"
                    v-for="(item,index) in data.botList">
                    <div class="tit">
                        <span class="cir"></span><span class="name">{{item}}</span>
                    </div>
                    <div class="con">
                        <span class="num"><countTo :end="allPrisonSurvey.botV[index]||0"></countTo></span><span
                            class="dw">人</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import boxTitle from "../boxTitle"
    import countTo from "@/components/count-to"

    export default {
        name: "leftTop",
        components: {
            boxTitle,
            countTo
        },
        props: {
            //值
            allPrisonSurvey: {
                type: Object,
                default: function () {
                    return {
                        topV: [],
                        botV: []
                    }
                }
            }
        },
        methods: {
            filImg(num) {
                return /\-/.test(num) ? require("@/assets/nation/green.png") : require("@/assets/nation/red.png")
            }
        },
        data() {
            return {
                data: {
                    topList: ["在押罪犯", "监狱数量"],
                    botList: ["女性罪犯", "未成年犯", "假释罪犯", "暂予监外执行", "外籍罪犯", "老年犯", "港澳台罪犯", "病残犯", "上月出监", "上月减刑", "上月入监", "本月预计出监"]
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftTop.stylus"
</style>
