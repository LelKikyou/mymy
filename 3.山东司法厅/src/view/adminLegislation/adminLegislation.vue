<template>
    <div class="adminLegislation">
        <publicHeader>行政立法</publicHeader>
        <div class="content">
            <aLegislationLeft></aLegislationLeft>
            <div class="mid">
                <div class="midTop">
                    <lightingTit :lightingData="lightingData"></lightingTit>
                </div>
                <aLegislationMid></aLegislationMid>
            </div>
            <aLegislationRight></aLegislationRight>
        </div>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"
    import aLegislationLeft from "./components/aLegislationLeft"
    import aLegislationMid from "./components/aLegislationMid"
    import aLegislationRight from "./components/aLegislationRight"
    import countTo from "@/components/count-to"
    import lightingTit from "@/components/lightingTit"

    export default {
        name: "adminLegislation",
        components: {
            publicHeader,
            aLegislationLeft,
            aLegislationMid,
            aLegislationRight,
            countTo,
            lightingTit
        },
        data() {
            return {
                lightingData: [{
                    name: "规章数量",
                    icon: "iconguizhangshuliang",
                    num: 412
                }, {
                    name: "规范性文件",
                    icon: "iconguifanxingwenjian",
                    num: 3472
                }, {
                    name: "有效立法",
                    icon: "iconyouxiaolifa",
                    num: 3984
                }, {
                    name: "过期立法",
                    icon: "iconguoqilifa",
                    num: 561
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "adminLegislation.stylus"
</style>
