<template>
    <div id="app">
        <router-view class="sdcm-wrapper"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="stylus">
    @import "//at.alicdn.com/t/font_1334644_cr75h3i9qam.css"
    html, body
        width 100%
        height 100%
</style>
<style lang="stylus" scoped>
    #app
        overflow auto
        width 100%
        height 100%
        background url("./assets/bg.jpg") no-repeat
        background-size 100% 100%
        .sdcm-wrapper
            min-width: 1580px;
</style>
