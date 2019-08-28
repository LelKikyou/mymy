<template>
    <div class="boxTitle">
        <img src="../../../../assets/nation/box_title.png">
        <span><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "boxTitle"
    }
</script>

<style lang="stylus" scoped>
    @import "boxTitle.stylus"
</style>
