<template>
    <div class="basLevLegServicesPage">
        <basLeSerLeft></basLeSerLeft>
        <div class="mid">
            <basLeSerMidTop></basLeSerMidTop>
            <basLeSerMidBot></basLeSerMidBot>
        </div>
        <basLeSerRight></basLeSerRight>
    </div>
</template>

<script>
    import basLeSerLeft from "./components/basLeSerLeft"
    import basLeSerMidTop from "./components/basLeSerMidTop"
    import basLeSerMidBot from "./components/basLeSerMidBot"
    import basLeSerRight from "./components/basLeSerRight"

    export default {
        name: "basLevLegServicesPage",
        components: {
            basLeSerLeft,
            basLeSerMidTop,
            basLeSerMidBot,
            basLeSerRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "basLevLegServicesPage.stylus"
</style>
