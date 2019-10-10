<template>
    <div class="leftTop">
        <div class="topArea">
            <div class="prisonName">
                {{prisonName}}
            </div>
            <div class="cardArea">
                <div class="cardItem" v-for="item in cardListData">
                    <div class="cIname">
                        {{item.name}}
                    </div>
                    <div class="cIvalue">
                        {{item.name==='戒备等级'?item.value:""}}
                        <countTo v-if="item.name!=='戒备等级'" :end="parseInt(item.value)||0"></countTo>
                    </div>
                </div>
            </div>
        </div>
        <div class="botArea">
            <div class="iconItem" v-for="(item, index) in iconListData">
                <i class="iconfont" :class="item.class"></i>
                <span>{{item.name}}</span>
                <b :class="'color_'+index">
                    <countTo :end="parseInt(item.value)||0"></countTo>
                </b>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from "@/components/count-to"

    export default {
        name: "leftTop",
        components: {
            countTo
        },
        data() {
            return {
                prisonName: "济南监狱",
                cardListData: [
                    {
                        name: "戒备等级",
                        value: "中级戒备"
                    },
                    {
                        name: "在押人数",
                        value: "2654"
                    },
                    {
                        name: "本月预计释放",
                        value: "0"
                    },
                    {
                        name: "本月入监人数",
                        value: "0"
                    },
                ],
                iconListData: [
                    {
                        class: "iconzhongdaxingshifan",
                        name: "重大刑事犯",
                        value: "807",
                    },
                    {
                        class: "iconlaonianfan",
                        name: "老病残犯",
                        value: "114",
                    },
                    {
                        class: "iconshedufan",
                        name: "涉毒犯",
                        value: "88",
                    },
                    {
                        class: "iconsheheifan",
                        name: "涉黑犯",
                        value: "4",
                    },
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "leftTop.stylus"
</style>
