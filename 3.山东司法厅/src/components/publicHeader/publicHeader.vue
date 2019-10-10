<template>
    <pageHeader class="publicHeader">
        <template slot="left">
            <el-input class="querIpt" v-model="queryTerm" placeholder="请输入关键字搜索">
                <i slot="suffix" class="iconfont iconsousuo"></i>
            </el-input>
        </template>
        <template slot="mid">
            <img class="img" src="@/assets/mainScreen/LOGO.png"><span><slot></slot></span>
        </template>
        <template slot="right">
            <div class="backBtn">
                <div @click="$router.push({path:'/mainScreen'})">
                    <i class="iconfont iconfanhui"></i>
                    <span>返回首页</span>
                </div>
                <div v-if="backType" @click="$router.go(-1)">
                    <i class="iconfont iconfanhui"></i>
                    <span>返回上一页</span>
                </div>
            </div>
        </template>
    </pageHeader>
</template>

<script>
    import pageHeader from "@/components/pageHeader"

    export default {
        name: "publicHeader",
        props: {  //backType为true时候 显示返回一页的按钮
            backType: {
                type: Boolean,
                default: false
            }
        },
        components: {
            pageHeader
        },
        data() {
            return {
                queryTerm: ""
            }
        }
    }
</script>
<style lang="stylus">
    .publicHeader
        .querIpt
            margin 16px 0 0 40px
            width 370px
            height 34px
            border-radius: 4px;
            & .el-input__suffix
                top 12px
            & input
                color #cdcdcd
                font-size 16px
                background-color rgba(0, 0, 0, 0.02)
                border-color #00fdfb
            & i
                color #00fdfb
                font-size 14px
</style>
<style lang="stylus" scoped>
    @import "publicHeader.stylus"
</style>
