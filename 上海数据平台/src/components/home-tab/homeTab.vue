<template>
    <div class="home-tab">
        <ul class="sub-nav">
            <li v-for="(item,index) in tab" :class="{'active':index===active}" @click="linkUrl(item.url,index)">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeTab",
        props:{
          tab:Array
        },
        data(){
          return{
              active: 0,
          }
        },
        created() {
            //存储nav状态
            if (!this.$route.query.nav) {
                this.$route.query.nav = 0
            }
        },
        methods: {
            linkUrl(name, index) {
                this.active = index;
                this.$router.push({
                    name: name,
                    query: {nav: index}
                });
            }
        },
        mounted() {
            this.active = parseInt(this.$route.query.nav);
        }
    }
</script>

<style scoped>
    .home-tab {
        height: 40px;
        line-height: 40px;
    }

    .sub-nav {
        width: 100%;
        height: 100%;
        background: #092a50;
        list-style: none;
        padding-left: 20px;
        box-sizing: border-box;
    }

    .sub-nav li {
        float: left;
        height: 30px;
        cursor: pointer;
        padding: 0 5px;
        border-left: 1px solid #3a5573;
        margin-top: 5px;
    }

    .sub-nav li.active span {
        border-bottom: 2px solid #fff;
        font-weight:600;
    }

    .sub-nav li span {
        width: 90px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        display: block;
        color: #fff;
        font-size: 14px;

    }
</style>