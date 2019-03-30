<template>
    <div class="headSelect">
        <button class="s-btn" @click="SelectRange()">选择条件</button>
        <div class="s-text">横轴：</div>
        <div class="s-input">
            <select class="form-control input-sm select-bj"  style="height: 40px;">
                <option value="">选择横轴</option>
            </select>
        </div>
        <div class="s-text">纵轴：</div>
        <div class="s-input">
            <select class="form-control input-sm select-bj"  style="height: 40px;">
                <option value="">选择纵轴</option>
            </select>
        </div>
        <button class="s-btn" @click="Analyze()">开始统计</button>
    </div>
</template>

<script>
    export default {
        name: "headSelect",
        methods:{
            SelectRange(){

            },
            Analyze(){

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "headSelect.stylus"
</style>