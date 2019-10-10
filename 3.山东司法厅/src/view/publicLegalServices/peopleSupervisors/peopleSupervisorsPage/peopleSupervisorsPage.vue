<template>
    <div class="peopleSupervisorsPage">
        <peoSupPageLeft></peoSupPageLeft>
        <div class="mid">
            <peoSupPageMidTop></peoSupPageMidTop>
            <peoSupPageMidBot></peoSupPageMidBot>
        </div>
        <peoSupPageRight></peoSupPageRight>
    </div>
</template>

<script>
    import peoSupPageLeft from "./components/peoSupPageLeft"
    import peoSupPageMidTop from "./components/peoSupPageMidTop"
    import peoSupPageMidBot from "./components/peoSupPageMidBot"
    import peoSupPageRight from "./components/peoSupPageRight"

    export default {
        name: "peopleSupervisorsPage",
        components: {
            peoSupPageLeft,
            peoSupPageMidTop,
            peoSupPageMidBot,
            peoSupPageRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peopleSupervisorsPage.stylus"
</style>
