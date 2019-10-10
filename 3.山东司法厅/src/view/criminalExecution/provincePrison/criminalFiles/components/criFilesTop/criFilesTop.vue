<template>
    <div class="criFilesTop">
        <div class="summaryInfo">
            <titleNameOth>概要信息</titleNameOth>
            <div class="summaryInfoCon">
                <div class="avatar">
                    <img :src="pic" alt="">
                </div>
                <div class="infoList">
                    <div class="iLItem">
                        <span class="name">顾学华<b>（3204004213）</b></span>
                        <span class="follow" @click="handleFollow">
                            <i :class="['iconfont',followType?'iconyiguanzhu':'iconguanzhu']"></i>
                            {{followType?'已关注':'加关注'}}
                        </span>
                    </div>
                    <div class="iLItemBot">
                        <div class="botList1">
                            <p>性别：<span>男</span></p>
                            <p>年龄：<span>34</span></p>
                            <p>民族：<span>汉族</span></p>
                        </div>
                        <div class="botList2">
                            <p>学历：<span>小学教育</span></p>
                            <p>婚姻：<span>已婚</span></p>
                            <p>籍贯：<span>山东省临沂市临沭县</span></p>
                        </div>
                        <div class="botList3">
                            <p>服刑监狱：<span>济南监狱</span></p>
                            <p>终审罪名：<span>盗窃罪</span></p>
                            <p>终审刑期：<span>5年6个月</span></p>
                        </div>
                        <div class="botList4">
                            <p>入监日期：<span>2016-01-20</span></p>
                            <p>剩余刑期：<span>2年1个月</span></p>
                            <p>监管警察：<span>李晓明</span></p>
                        </div>
                        <div class="botList5">
                            <p>案犯类别：<span>重大刑事犯</span></p>
                            <p>分管等级：<span>考察级</span></p>
                            <p>特别关注：<span>惯犯</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleNameOth from "@/components/titleNameOth"
    import pic from "@/assets/criminalExecution/pic.png"

    export default {
        name: "criFilesTop",
        components: {
            titleNameOth
        },
        props: {
            followType: Boolean
        },
        data() {
            return {
                pic: pic
            }
        },
        methods: {
            //取消关注或者关注
            handleFollow() {
                this.$emit("handleFollow")
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criFilesTop.stylus"
</style>
