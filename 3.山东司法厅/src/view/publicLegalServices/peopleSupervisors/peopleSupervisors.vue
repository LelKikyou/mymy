<template>
    <div class="peopleSupervisors">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "peopleSupervisors",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "peopleSupervisorsPage") {
                    return "公共法律服务 — 人民监督员"
                }
                return ""
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "peopleSupervisors.stylus"
</style>
