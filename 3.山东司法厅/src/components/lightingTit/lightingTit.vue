<template>
    <div class="lightingTit">
        <div class="itemTit" v-for="item in lightingData">
            <div class="iconImg">
                <i :class="['iconfont',item.icon]"></i>
            </div>
            <div class="nameNum">
                <p class="num">{{item.num}}</p>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lightingTit",
        props: {
            lightingData: {
                type: Array,
                default() {
                    return [{
                        num: "",
                        name: "",
                        icon: ""
                    }]
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "lightingTit.stylus"
</style>
