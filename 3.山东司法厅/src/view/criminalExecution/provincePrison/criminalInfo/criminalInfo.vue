<template>
    <div class="criminalInfo">
        <div class="leftCon">
            <criInfoLeftTop :followType="followType" @handleFollow="handleFollow"></criInfoLeftTop>
            <criInfoLeftBot></criInfoLeftBot>
        </div>
        <criInfoRight class="rightCon"></criInfoRight>
    </div>
</template>

<script>
    import criInfoLeftBot from "./components/criInfoLeftBot"
    import criInfoLeftTop from "./components/criInfoLeftTop"
    import criInfoRight from "./components/criInfoRight"

    export default {
        name: "criminalInfo",
        components: {
            criInfoLeftBot,
            criInfoLeftTop,
            criInfoRight
        },
        data() {
            return {
                followType: true
            }
        },
        methods: {
            handleFollow() {
                this.followType = !this.followType
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalInfo.stylus"
</style>
