<template>
    <div class="shzxjzpt">
        <homeTab :tab="tab"></homeTab>
        <div class="home-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import homeTab from '@/components/home-tab/homeTab'
    export default {
        name: "shzxjzpt",
        data() {
            return {
                tab: [
                    {
                        name: "数据概览",
                        url: "sjgl"
                    },
                    {
                        name: "关联分析",
                        url: "glfx"
                    },
                    {
                        name: "临时分析",
                        url: "lsfx"
                    },
                    {
                        name: "流入分析",
                        url: "lrfx"
                    },
                    {
                        name: "数据报表",
                        url: "sjbb"
                    }
                ]
            }
        },
        components:{
            homeTab
        }
    }
</script>

<style scoped>
    .shzxjzpt {
        width: 100%;
        height: 100%;
    }
    .home-content {
        width: 100%;
        height: calc(100% - 40px);
        background: url("../../../assets/shzxjzpt/body_bg.png") no-repeat;
        background-size: cover;
    }
</style>