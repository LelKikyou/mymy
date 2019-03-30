<template>
    <div class="homePage">
        <h1 class="homeTit">综合数据搜索系统</h1>
        <div class="homeContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "intelligentSearch"
    }
</script>

<style lang="stylus">
    @import "intelligentSearch.stylus"
</style>