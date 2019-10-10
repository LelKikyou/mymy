<template>
    <div class="midTop">
        <div class="box">
            <div class="item">
                <span>法规:</span><span><count-to :end="parseInt(3472)||0"/></span><span>条</span>
            </div>
            <div class="item">
                <span>规章:</span><span><count-to :end="parseInt(412)||0"/></span><span>条</span>
            </div>
            <div class="item">
                <span>法规规章:</span><span><count-to :end="parseInt(3984)||0"/></span><span>条</span>
            </div>
        </div>
        <div class="box">
            <div class="item">
                <span>行政复议:</span><span><count-to :end="parseInt(32746)||0"/></span><span>件</span>
            </div>
            <div class="item">
                <span>行政应诉:</span><span><count-to :end="parseInt(4190)||0"/></span><span>件</span>
            </div>
            <div class="item">
                <span>行政仲裁:</span><span><count-to :end="parseInt(3388)||0"/></span><span>件</span>
            </div>
        </div>
        <div class="box">
            <div class="item">
                <span>法律咨询:</span><span><count-to :end="parseInt(4350)||0"/></span><span>条</span>
            </div>
            <div class="item">
                <span>群众诉求:</span><span><count-to :end="parseInt(357)||0"/></span><span>条</span>
            </div>
            <div class="item">
                <span>12348热线:</span><span><count-to :end="parseInt(277938)||0"/></span><span>条</span>
            </div>
        </div>
        <div class="box">
            <div class="item">
                <span>服刑人员:</span><span><count-to :end="parseInt(75638)||0"/></span><span>人</span>
            </div>
            <div class="item">
                <span>戒毒人员:</span><span><count-to :end="parseInt(45896)||0"/></span><span>人</span>
            </div>
            <div class="item">
                <span>在矫人员:</span><span><count-to :end="parseInt(32654)||0"/></span><span>人</span>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from "@/components/count-to"
    export default {
        name: "midTop",
        data() {
            return {}
        },
        components:{
            countTo
        },
    }
</script>

<style lang="stylus" scoped>
    @import "midTop.stylus"
</style>
