<template>
    <div class="report-wrap">
        <div class="bg">
            <head-select></head-select>
            <div class="report">
                <ex-plain></ex-plain>
            </div>
        </div>
    </div>
</template>

<script>

    import headSelect from "./components/headSelect/headSelect"
    import exPlain from "./components/exPlain/exPlain"
    export default {
        name: "intelligentReport",
        components: {
            headSelect,exPlain
        },
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style lang="stylus" scoped>
    @import "intelligentReport.stylus"
</style>