<template>
    <div class="criminalFiles">
        <criFilesTop class="criFileTop" :followType="followType" @handleFollow="handleFollow"></criFilesTop>
        <div class="criFilesNav">
            <div v-for="item in mainNavData" :class="{active:item.k===mainActive}" @click="handleMainNav(item.k)">
                {{item.v}}
            </div>
        </div>
        <div class="criFileBot">
            <jbxxInfo v-show="mainActive==='jbxx'"></jbxxInfo>
            <yzInfo v-show="mainActive==='xzxx'"></yzInfo>
        </div>
    </div>
</template>

<script>
    import criFilesTop from "./components/criFilesTop"
    import jbxxInfo from "./components/jbxxInfo"
    import yzInfo from "./components/yzInfo"

    export default {
        components: {
            criFilesTop,
            jbxxInfo,
            yzInfo
        },
        name: "criminalFiles",
        data() {
            return {
                //是否关注
                followType: true,
                mainNavData: [
                    {
                        k: "jbxx",
                        v: "基本信息"
                    },
                    {
                        k: "xzxx",
                        v: "狱政信息"
                    },
                    {
                        k: "xfzz",
                        v: "刑法执行"
                    }
                ],
                mainActive: "",
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleFollow() {
                this.followType = !this.followType
            },
            init() {
                this.initMainActive()
            },
            initMainActive() {
                this.mainActive = this.mainNavData[0].k;
            },
            handleMainNav(k) {
                this.mainActive = k;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalFiles.stylus"
</style>
