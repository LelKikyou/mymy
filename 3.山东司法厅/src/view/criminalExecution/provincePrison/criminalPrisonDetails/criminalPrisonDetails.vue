<template>
    <div class="criminalPrisonDetails">
        <div class="leftCon">
            <div class="prison">
                <prisonNav></prisonNav>
                <leftTop></leftTop>
            </div>
            <leftBot></leftBot>
        </div>
        <right class="rightCon"></right>
    </div>
</template>

<script>
    import leftTop from "./components/leftTop"
    import leftBot from "./components/leftBot"
    import right from "./components/right"
    import prisonNav from "./components/prisonNav"

    export default {
        name: "criminalPrisonDetails",
        components: {
            right,
            leftBot,
            leftTop,
            prisonNav
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalPrisonDetails.stylus"
</style>
