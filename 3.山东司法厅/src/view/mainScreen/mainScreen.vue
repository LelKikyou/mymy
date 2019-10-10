<template>
    <div class="mainScreen">
        <pageHeader>
            <template slot="left">
                <div class="btn btn-left">
                    <div @click="handleRouter('/adminLegislation')">行政立法</div>
                    <div @click="handleRouter('/adminLawEnforcement')">行政执法</div>
                </div>
            </template>
            <template slot="mid">
                <span>数字法治</span>
                <img class="img" src="@/assets/mainScreen/LOGO.png">
                <span>智慧司法</span>
            </template>
            <template slot="right">
                <div class="btn btn-right">
                    <div @click="handleRouter('/criminalExecution')">刑事执行</div>
                    <div @click="handleRouter('/publicLegalServices')">公共法律服务</div>
                </div>
            </template>
        </pageHeader>
        <div class="content">
            <div class="left">
                <leftTop></leftTop>
                <leftBot style="margin-top: 20px"></leftBot>
            </div>
            <div class="mid">
                <midTop></midTop>
                <midBot style="margin-top: 20px"></midBot>
            </div>
            <div class="right">
                <rightTop></rightTop>
                <rightBot style="margin-top: 20px"></rightBot>
            </div>
        </div>
    </div>
</template>

<script>
    import pageHeader from "@/components/pageHeader"
    import leftTop from "./components/leftTop"
    import leftBot from "./components/leftBot"
    import midTop from "./components/midTop"
    import midBot from "./components/midBot"
    import rightTop from "./components/rightTop"
    import rightBot from "./components/rightBot"

    export default {
        name: "mainScreen",
        components: {
            pageHeader,
            leftBot,
            leftTop,
            midTop,
            midBot,
            rightTop,
            rightBot
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
    @import "mainScreen.stylus"
</style>
