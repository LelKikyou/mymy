<template>
    <div class="legalAid">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "legalAid",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "legalAidPage") {
                    return "公共法律服务 — 法律援助"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "legalAid.stylus"
</style>
