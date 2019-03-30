<template>
    <div>
        <div class="card-info"  v-for="idx in jyData">
            <div class="b-item" :class="[item.type===2?'i-col-9':'']" v-for="item in data">
                <span>{{item.name}}</span>
                <b>{{idx===null||idx===undefined?null:idx[item.zhiDuan]}}</b>
            </div>
        </div> 

        <div class="card-info" v-if="jyData">
            <div class="b-item" :class="[item.type===2?'i-col-9':'']" v-for="item in data">
                <span>{{item.name}}</span>
                <b>{{jyData===null||jyData===undefined?null:jyData[item.zhiDuan]}}</b>
            </div>
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
    @import "multGrid.stylus"
</style>