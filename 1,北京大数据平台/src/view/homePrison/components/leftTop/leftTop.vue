<template>
    <div class="leftTop">
        <boxTitle>{{$parent.type === "nation" ? "全国" : "全省"}}监狱概况(昨日统计数据)</boxTitle>
        <ul class="conList">
            <li class="list" v-for="(item,index) in data.topList.k">
                <div>
                    <span class="v"><countTo :end="vData.topV[index]||0"></countTo></span>
                    <span class="d">人</span>
                </div>
                <div>
                    <i class="iconfont" :class="data.topList.i[index]"></i>
                    <span class="k mid">{{item}}</span>
                </div>
            </li>
        </ul>
        <ul class="conList">
            <li class="list botList" v-for="(item,index) in data.botList.k">
                <div>
                    <span class="v"><countTo :end="vData.botV[index]||0"></countTo></span>
                    <span class="d">人</span>
                </div>
                <div>
                    <span class="k mid">{{item}}</span>
                </div>
            </li>
        </ul>
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
            vData: {
                type: Object,
                default: function () {
                    return {
                        topV: [],
                        botV: []
                    }
                }
            }
        },
        data() {
            return {
                nation: {
                    topList: {
                        k: ["在册罪犯总数", "监狱数量", "本月入监"],
                        i: ["icon-group", "icon-shuju", "icon-indent"]
                    },
                    botList: {
                        k: [" 未成年犯", " 女性罪犯", "危安罪犯", "累惯罪犯", "涉毒罪犯", "保外就医", "假释罪犯", "暂予监外执行罪犯"],
                    }
                },
                province: {
                    topList: {
                        k: ["在押罪犯总数", "本月入监", "本月出监"],
                        i: ["icon-group", "icon-indent", "icon-outdent"]
                    },
                    botList: {
                        k: [" 未成年犯", "危安罪犯", "顽危罪犯", "累惯罪犯", "涉毒罪犯", "保外就医", "假释罪犯", "暂予监外执行罪犯"],
                    }
                },
                data: {}
            }
        },
        created() {
            this.createdData()
        },
        methods: {
            //创建实例的时候填充data
            createdData() {
                //根据type类型判断创建哪个
                Object.assign(this.data, this.$parent.type === "nation" ? this.nation : this.province)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftTop.stylus"
</style>
