<template>
    <div class="criminalPrison">
        <div class="left">
            <leftTop></leftTop>
            <leftBottom style="margin-top: 20px"></leftBottom>
        </div>
        <div class="mid">
            <midTop></midTop>
            <midBottom style="margin-top: 20px"></midBottom>
        </div>
        <right class="rightName"></right>
    </div>
</template>

<script>
    import leftTop from "./components/leftTop"
    import leftBottom from "./components/leftBottom"
    import midTop from "./components/midTop"
    import midBottom from "./components/midBottom"
    import right from "./components/right"

    export default {
        name: "criminalPrison",
        components: {
            leftTop,
            leftBottom,
            midTop,
            midBottom,
            right
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalPrison.stylus"
</style>
