<template>
    <div class="card-info">
        <div class="b-item" :class="[item.type===2?'i-col-9':'']" v-for="item in data">
            <span>{{item.name}}</span>
            <b>{{jyData===null||jyData===undefined?null:jyData[item.zhiDuan]}}</b>
        </div>
    </div>    
</template>

<script>
    import {mapGetters, mapActions} from "vuex"
    export default {
        props: {
            data: {
                type: Array,
                default: function () {
                    return  [                  
                    ]
                }
            },
        },
        components: {
            
        },
        computed: {
            ...mapGetters({
                jyData:"getJyRes"
            })
        },
        methods: {
            
        }
    }
</script>
<style lang="stylus" scoped>
    @import "grid.stylus"
</style>