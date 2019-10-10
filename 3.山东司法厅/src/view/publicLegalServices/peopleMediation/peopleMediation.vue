<template>
    <div class="peopleMediation">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "peopleMediation",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "peopleMediationPage") {
                    return "公共法律服务 — 人民调解"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "peopleMediation.stylus"
</style>
