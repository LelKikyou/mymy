<template>
    <div class="homePrison">
        <div class="head-nav">
            <div class="left-nav">
                <img src="../../assets/logo.png" width="42" height="42">
                <span>司法部监狱管理系统</span>
            </div>
            <ul class="mid-nav">
                <li class="home clearBefore" @click="goBackHome">首页</li>
                <li class="clearBefore">智能分析</li>
                <li>数据报告</li>
                <li>业务报表</li>
                <li>自定义分析</li>
                <li>其它</li>
            </ul>
            <ul class="right-nav">
                <li>
                    <i class="iconfont icon-guanliyuan"></i>
                    <span>全国监狱局</span>
                </li>
                <li>
                    <i class="iconfont icon-mima"></i>
                    <span>修改密码</span>
                </li>
                <li>
                    <i class="iconfont icon-084tuichu"></i>
                    <span>退出</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view :key="$route.name"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homePrison",
        methods: {
            goBackHome() {
                this.$router.push({
                    name: "nation"
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "homePrison.stylus"
</style>
