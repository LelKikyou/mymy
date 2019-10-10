<template>
    <div class="peopleMediationPage">
        <peoMedLeft></peoMedLeft>
        <div class="mid">
            <peoMedMidTop></peoMedMidTop>
            <peoMedMidBot></peoMedMidBot>
        </div>
        <peoMedRight></peoMedRight>
    </div>
</template>

<script>
    import peoMedLeft from "./components/peoMedLeft"
    import peoMedMidTop from "./components/peoMedMidTop"
    import peoMedMidBot from "./components/peoMedMidBot"
    import peoMedRight from "./components/peoMedRight"

    export default {
        name: "peopleMediationPage",
        components: {
            peoMedLeft,
            peoMedMidTop,
            peoMedMidBot,
            peoMedRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peopleMediationPage.stylus"
</style>
