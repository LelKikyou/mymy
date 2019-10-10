<template>
    <div class="basLevLegServices">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "basLevLegServices",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "basLevLegServicesPage") {
                    return "公共法律服务 — 基层法律服务"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "basLevLegServices.stylus"
</style>
