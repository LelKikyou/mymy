<template>
    <div class="pubLSTopRight">
        <div class="notaryArea" v-for="(item ,index) in notaryData" :class="'coord_'+index">
            <div class="notaryName">
                {{item.name}}
            </div>
            <div class="notaryValue">
                <count-to :end="parseInt(item.value)||0"/>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from "@/components/count-to"
    export default {
        name: "pubLSTopRight",
        components: {
            countTo
        },
        data() {
            return {
                notaryData: [
                    {
                        name:'公证机构',
                        value:159,
                    },
                    {
                        name:'公证员',
                        value:1096,
                    },
                    {
                        name:'公证助理',
                        value:765,
                    },
                    {
                        name:'公证案件',
                        value:7631,
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSTopRight.stylus"
</style>
