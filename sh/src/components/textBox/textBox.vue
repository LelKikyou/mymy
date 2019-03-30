<template>
    <div class="textBox">
        <h3 class="title">{{textBoxData.title}}</h3>
        <div class="text-wrap" v-if="textBoxData.type==0">
            <div class="text-item" v-for="item in textBoxData.dataJson">{{item.name}}:{{item.value}}</div>
        </div>
        <div class="text-wrap" v-else-if="textBoxData.type==1">
            <div class="text-item2" v-for="item in textBoxData.dataJson">
                <div class="s-span1">
                    {{item.name1}}
                    <span class="s-red">{{item.value1}}</span>
                </div>
                <div class="s-span2">
                    {{item.name2}}
                    <span class="s-red">{{item.value2}}</span>
                </div>
            </div>
        </div>
        <div class="text-wrap3" v-else="textBoxData.type==2">
            <div class="hot-title">动态热词</div>
            <div class="hot1">{{textBoxData.dataJson[0]}}</div>
            <div class="hot2">{{textBoxData.dataJson[1]}}</div>
            <div class="hot3">{{textBoxData.dataJson[2]}}</div>
            <div class="hot4">{{textBoxData.dataJson[3]}}</div>
            <div class="hot5">{{textBoxData.dataJson[4]}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "textBoxData",
        props:{
            textBoxData:{
                type: Object,
                default: function () {
                    return {
                        title:'',
                        type:'',
                        dataJson:[],
                    }
                }
            }
        },
        mounted(){

            //  this.drawChart(this.chartData)
        },
        created(){

        },
        methods:{

        },
        watch:{
            textBoxData(newData) {
                this.textBoxData=newData
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "textBox.stylus"
</style>