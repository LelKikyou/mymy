<template>
    <div class="judicialExpertise">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "judicialExpertise",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "judicialExpertisePage") {
                    return "公共法律服务 — 司法鉴定"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "judicialExpertise.stylus"
</style>
