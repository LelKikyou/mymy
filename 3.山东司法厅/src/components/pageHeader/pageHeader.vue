<template>
    <div class="pageHeader">
        <div class="h_left h_both">
            <div class="timeNow">
                <span class="year">{{time[0]}}</span><span class="hour">{{time[1]}}</span>
            </div>
            <slot name="left"></slot>
        </div>
        <div class="h_mid">
            <slot name="mid"></slot>
        </div>
        <div class="h_right h_both">
            <div class="admin">
                <div>
                    <i class="iconfont iconjianyuguanliju"></i>
                    <span>监狱管理局</span>
                </div>
                <div>
                    <i class="iconfont iconsifating"></i>
                    <span>山东司法厅</span>
                </div>
                <div @click="handleLoginOut">
                    <i class="iconfont icontuichu"></i>
                    <span>退出</span>
                </div>
            </div>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    import {Format} from "@/lib/tools.js"

    export default {
        name: "pageHeader",
        data() {
            return {
                time: this.filTime()
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.setTime()
            },
            setTime() {
                this.timer = setInterval(() => {
                    this.time = this.filTime();
                }, 1000)
            },
            filTime() {
                return Format("yyyy年mm月ddd日-hh:ii:ss").split("-")
            },
            //登出
            handleLoginOut() {
                this.$confirm('是否退出登录？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    closeOnClickModal: false,
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch("handleLoginOut").then(() => {
                        this.$router.push({
                            path: "/login"
                        })
                    })
                }).catch(() => {

                });
            }
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除定时器
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "pageHeader.stylus"
</style>
