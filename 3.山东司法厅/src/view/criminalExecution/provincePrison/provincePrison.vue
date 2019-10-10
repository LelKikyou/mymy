<template>
    <div class="provincePrison">
        <publicHeader :backType="true">
            {{titName}}
        </publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "provincePrison",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "criminalPrison") {
                    return "刑事执行 — 监狱"
                } else if (name === "criminalPrisonDetails") {
                    return "监狱详情"
                } else if (name === "criminalInfo") {
                    return "罪犯信息"
                } else if (name === "criminalFiles") {
                    return "罪犯档案"
                }
                return ""
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "provincePrison.stylus"
</style>
