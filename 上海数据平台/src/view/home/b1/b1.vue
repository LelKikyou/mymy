<template>
    <div style="color: red">{{xx}}</div>
</template>

<script>
    export default {
        name: "b1",
        data() {
            return {
                xx:999
            }
        },
        created() {
            this.xx=this.$route.query.nav
        }
    }
</script>

<style scoped>

</style>