<template>
    <div class="judicialExpertisePage">
        <judExpLeft></judExpLeft>
        <div class="mid">
            <judExpMidTop></judExpMidTop>
            <judExpMidBot></judExpMidBot>
        </div>
        <judExpRight></judExpRight>
    </div>
</template>

<script>
    import judExpLeft from "./components/judExpLeft"
    import judExpMidTop from "./components/judExpMidTop"
    import judExpMidBot from "./components/judExpMidBot"
    import judExpRight from "./components/judExpRight"

    export default {
        name: "judicialExpertisePage",
        components: {
            judExpLeft,
            judExpMidTop,
            judExpMidBot,
            judExpRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "judicialExpertisePage.stylus"
</style>
