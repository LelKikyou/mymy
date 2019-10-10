<template>
    <div class="adminLawEnforcement">
        <publicHeader>行政执法</publicHeader>
        <div class="content">
            <div class="conTop">
                <i class="iconfont iconjinru edit"></i>
                <titleNameOth>行政执法监督</titleNameOth>
                <div class="pointName">
                    <div class="slice">
                        <div class="name">执法主体</div>
                        <div class="num"><count-to :end="parseInt(22158)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">执法人员</div>
                        <div class="num"><count-to :end="parseInt(611290)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">监督人员</div>
                        <div class="num"><count-to :end="parseInt(7922)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">听证人员</div>
                        <div class="num"><count-to :end="parseInt(13563)||0"/></div>
                    </div>
                </div>
                <aLawEnfTopLeft></aLawEnfTopLeft>
            </div>
            <div class="conTop">
                <titleNameOth>仲裁</titleNameOth>
                <div class="pointName">
                    <div class="slice">
                        <div class="name">仲裁庭</div>
                        <div class="num"><count-to :end="parseInt(44)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">仲裁员</div>
                        <div class="num"><count-to :end="parseInt(4246)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">仲裁案件</div>
                        <div class="num"><count-to :end="parseInt(3388)||0"/></div>
                    </div>
                </div>
                <aLawEnfTopMid></aLawEnfTopMid>
            </div>
            <div class="conTop">
                <titleNameOth>行政许可</titleNameOth>
                <div class="pointName">
                    <div class="slice">
                        <div class="name">行政审批对象</div>
                        <div class="num"><count-to :end="parseInt(14205)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">行政审批人员</div>
                        <div class="num"><count-to :end="parseInt(443)||0"/></div>
                    </div>
                </div>
                <aLawEnfTopRight></aLawEnfTopRight>
            </div>
            <div class="conBot">
                <titleNameOth>各地市案件数量统计</titleNameOth>
                <titleName>行政复议&行政应诉</titleName>
                <div class="botLeft">
                    <div class="slice">
                        <div class="name">复议机构</div>
                        <div class="num"><count-to :end="parseInt(216)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">复议案件</div>
                        <div class="num"><count-to :end="parseInt(32746)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">应诉案件</div>
                        <div class="num"><count-to :end="parseInt(4190)||0"/></div>
                    </div>
                </div>
                <aLawEnfBotLeft class="botRight"></aLawEnfBotLeft>
            </div>
            <div class="conBot">
                <titleNameOth>案源数量变化趋势</titleNameOth>
                <titleName>行政处罚&行政强制</titleName>
                <div class="botLeft">
                    <div class="slice">
                        <div class="name">执法单位</div>
                        <div class="num"><count-to :end="parseInt(11416)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">执法人员</div>
                        <div class="num"><count-to :end="parseInt(2658)||0"/></div>
                    </div>
                    <div class="slice">
                        <div class="name">案源数量</div>
                        <div class="num"><count-to :end="parseInt(7458)||0"/></div>
                    </div>
                </div>
                <aLawEnfBotRight class="botRight"></aLawEnfBotRight>
            </div>
        </div>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"
    import aLawEnfTopLeft from "./components/aLawEnfTopLeft"
    import aLawEnfTopMid from "./components/aLawEnfTopMid"
    import aLawEnfTopRight from "./components/aLawEnfTopRight"
    import aLawEnfBotLeft from "./components/aLawEnfBotLeft"
    import aLawEnfBotRight from "./components/aLawEnfBotRight"
    import titleNameOth from "@/components/titleNameOth"
    import titleName from "@/components/titleName"
    import countTo from "@/components/count-to"

    export default {
        name: "adminLawEnforcement",
        components: {
            publicHeader,
            aLawEnfTopLeft,
            aLawEnfTopMid,
            aLawEnfTopRight,
            aLawEnfBotLeft,
            aLawEnfBotRight,
            titleNameOth,
            titleName,
            countTo
        }
    }
</script>

<style lang="stylus" scoped>
    @import "adminLawEnforcement.stylus"
</style>
