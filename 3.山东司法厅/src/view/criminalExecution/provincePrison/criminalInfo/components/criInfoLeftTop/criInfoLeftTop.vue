<template>
    <div class="criInfoLeftTop">
        <div class="summaryInfo">
            <titleNameOth>概要信息</titleNameOth>
            <div class="summaryInfoCon">
                <div class="avatar">
                    <img :src="require('@/assets/criminalExecution/pic.png')"/>
                </div>
                <div class="infoList">
                    <div class="iLItem">
                        <span class="name">顾学华<b>（3204004213）</b></span>
                        <span class="ilRouter"
                              @click="$router.push({path:'/provincePrison/criminalFiles'})">档案信息 >></span>
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
                            <p>学历：<span>小学教育</span></p>
                        </div>
                        <div class="botList2">
                            <p>婚姻：<span>已婚</span></p>
                            <p>籍贯：<span>山东省临沂市临沭县</span></p>
                            <p>服刑监狱：<span>济南监狱</span></p>
                            <p>终审罪名：<span>盗窃罪</span></p>
                        </div>
                        <div class="botList3">
                            <p>刑期：<span>5年6个月</span></p>
                            <p>入监：<span>2016-01-20</span></p>
                            <p>分管等级：<span>考察级</span></p>
                            <p>监管警察：<span>李晓明</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="criminalLabel">
            <titleNameOth>罪犯标签</titleNameOth>
            <div class="criminalLabelCon">
                <div class="content">
                    <div class="tit">
                        基本信息标签
                    </div>
                    <div class="label sdcmScrollbar">
                        <!-- <div class="item">未成年</div>
                        <div class="item">中国共产党党员</div>
                        <div class="item">国家级正职</div>
                        <div class="item">国家机关负责人</div> -->
                        <div class="item">未落常住户口</div>
                        <div class="item">外省籍</div>
                        <div class="item">管制</div>
                        <div class="item">重大刑事犯</div>
                        <div class="item">判决</div>
                    </div>
                </div>
                <div class="content labelRight">
                    <div class="tit">
                        异常行为标签
                    </div>
                    <div class="label sdcmScrollbar">
                        <div class="item">亲情交流少</div>
                        <div class="item">心理矫治少</div>
                        <div class="item">认罪服判</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleNameOth from "@/components/titleNameOth"

    export default {
        name: "criInfoLeftTop",
        components: {
            titleNameOth
        },
        props: {
            followType: Boolean
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
    @import "criInfoLeftTop.stylus"
</style>
