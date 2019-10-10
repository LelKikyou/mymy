<template>
    <div class="legalAidPage">
        <leAidLeft></leAidLeft>
        <div class="mid">
            <leAidMidTop></leAidMidTop>
            <leAidMidBot></leAidMidBot>
        </div>
        <leAidRight></leAidRight>
    </div>
</template>

<script>
    import leAidLeft from "./components/leAidLeft"
    import leAidMidTop from "./components/leAidMidTop"
    import leAidMidBot from "./components/leAidMidBot"
    import leAidRight from "./components/leAidRight"

    export default {
        name: "legalAidPage",
        components: {
            leAidLeft,
            leAidMidTop,
            leAidMidBot,
            leAidRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "legalAidPage.stylus"
</style>
