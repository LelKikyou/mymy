<template>
    <div class="criminalExecution">
        <publicHeader>
            刑事执行
        </publicHeader>
        <div class="content">
            <criExeLeft></criExeLeft>
            <criExeMid></criExeMid>
            <criExeRight></criExeRight>
        </div>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"
    import criExeRight from "./components/criExeRight"
    import criExeMid from "./components/criExeMid"
    import criExeLeft from "./components/criExeLeft"

    export default {
        name: "criminalExecution",
        components: {
            publicHeader,
            criExeRight,
            criExeMid,
            criExeLeft
        }
    }
</script>
<style lang="stylus" scoped>
    @import "criminalExecution.stylus"
</style>
