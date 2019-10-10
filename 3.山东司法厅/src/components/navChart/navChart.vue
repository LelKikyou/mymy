<template>
    <div class="navChart">
        <ul>
            <li v-for="(data,index) in navData" :class="{active:active===index}" @click="handleNav(index)"
                :style="filWidth">{{data}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "navChart",
        props: {
            navData: Object,
        },
        data() {
            return {
                active: Object.keys(this.navData)[0],
            }
        },
        methods: {
            handleNav(index) {
                this.active = index;
                this.$emit("handleNav", index)
            }
        },
        computed: {
            filWidth() {
                return `width:${100 / Object.keys(this.navData).length}%`
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "navChart.stylus"
</style>
