<template>
    <div class="znss">
        <otherTab></otherTab>
        <div class="search">
            <h2>上海执行矫正平台智能搜索</h2>
        </div>
    </div>
</template>

<script>
    import otherTab from '@/components/other-tab/otherTab'
    export default {
        name: "znss",
        components:{
            otherTab
        }
    }
</script>

<style scoped>
    .znss{
        position: relative;
        width: 100%;
        height: 100%;
        background: url("../../../assets/shzxjzpt/body_bg.png") no-repeat;
        background-size: cover;
    }
    .search{
        position: absolute;
        top: 280px;
        left: calc(50% - 325px);
        width: 650px;
        height: 150px;
    }
</style>