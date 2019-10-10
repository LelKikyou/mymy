<template>
    <div class="publicLegalServices">
        <publicHeader>公共法律服务</publicHeader>
        <div class="content">
            <div class="top">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/peopleSupervisors/peopleSupervisorsPage')"></i>
                <titleNameOth class="type_1">人民监督员及案件统计</titleNameOth>
                <pubLSTopLeft class="topCon"></pubLSTopLeft>
            </div>
            <div class="top">
                <i class="iconfont iconjinru edit"></i>
                <titleNameOth class="type_2">律师服务统计</titleNameOth>
                <pubLSTopMid class="topCon"></pubLSTopMid>
            </div>
            <div class="top">
                <i class="iconfont iconjinru edit"></i>
                <titleNameOth class="type_2">公证服务统计</titleNameOth>
                <pubLSTopRight class="topCon"></pubLSTopRight>
            </div>
            <div class="bot">
                <i class="iconfont iconjinru edit" @click="handleRouter('/legalAid/legalAidPage')"></i>
                <titleName>法律援助统计</titleName>
                <div class="pointName">
                    <div>
                        <div class="name">法律中心</div>
                        <div class="num">
                            <count-to :end="parseInt(1345)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">法律援助人员</div>
                        <div class="num">
                            <count-to :end="parseInt(4365)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">法援案件</div>
                        <div class="num">
                            <count-to :end="parseInt(140085)||0"/>
                        </div>
                    </div>
                </div>
                <pubLSBotLeft class="botCon"></pubLSBotLeft>
            </div>
            <div class="bot">
                <i class="iconfont iconjinru edit" @click="handleRouter('/peopleMediation/peopleMediationPage')"></i>
                <titleName>人民调解</titleName>
                <div class="pointName">
                    <div>
                        <div class="name">调解机构</div>
                        <div class="num">
                            <count-to :end="parseInt(73082)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">调解员</div>
                        <div class="num">
                            <count-to :end="parseInt(229683)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">调解纠纷</div>
                        <div class="num">
                            <count-to :end="parseInt(24347)||0"/>
                        </div>
                    </div>
                </div>
                <pubLSBotMidL class="botCon"></pubLSBotMidL>
            </div>
            <div class="bot">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/judicialExpertise/judicialExpertisePage')"></i>
                <titleName>司法鉴定</titleName>
                <div class="pointName">
                    <div>
                        <div class="name">鉴定机构</div>
                        <div class="num">
                            <count-to :end="parseInt(156)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">鉴定人员</div>
                        <div class="num">
                            <count-to :end="parseInt(2108)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">鉴定案件</div>
                        <div class="num">
                            <count-to :end="parseInt(7256)||0"/>
                        </div>
                    </div>
                </div>
                <pubLSBotMidR class="botCon"></pubLSBotMidR>
            </div>
            <div class="bot">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/basLevLegServices/basLevLegServicesPage')"></i>
                <titleName>基层法律服务</titleName>
                <div class="pointNameOth">
                    <div>
                        <div class="name">法律服务所</div>
                        <div class="num">
                            <count-to :end="parseInt(1487)||0"/>
                        </div>
                    </div>
                    <div>
                        <div class="name">执业人员</div>
                        <div class="num">
                            <count-to :end="parseInt(8213)||0"/>
                        </div>
                    </div>
                </div>
                <pubLSBotRight class="botCon"></pubLSBotRight>
            </div>
        </div>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"
    import titleNameOth from "@/components/titleNameOth"
    import titleName from "@/components/titleName"
    import pubLSTopLeft from "./components/pubLSTopLeft"
    import pubLSTopMid from "./components/pubLSTopMid"
    import pubLSTopRight from "./components/pubLSTopRight"
    import pubLSBotLeft from "./components/pubLSBotLeft"
    import pubLSBotMidL from "./components/pubLSBotMidL"
    import pubLSBotMidR from "./components/pubLSBotMidR"
    import pubLSBotRight from "./components/pubLSBotRight"
    import countTo from "@/components/count-to"

    export default {
        name: "publicLegalServices",
        components: {
            publicHeader,
            titleNameOth,
            titleName,
            pubLSTopLeft,
            pubLSTopMid,
            pubLSTopRight,
            pubLSBotRight,
            pubLSBotMidR,
            pubLSBotMidL,
            pubLSBotLeft,
            countTo
        },
        methods: {
            handleRouter(path) {
                this.$router.push({
                    path: path
                })
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "publicLegalServices.stylus"
</style>
