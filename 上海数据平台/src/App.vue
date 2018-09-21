<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex';
    import {setSessionstorage,getSessionstorage} from "./libs/tools";
    export default {
        name: 'app',
        computed:{
            ...mapGetters({
                tabData:"getTabData"
            })
        },
        methods:{
            ...mapMutations({
                setTabData:"setTabData"
            })
        },
        created(){
            //设置tabData
            let tabData=getSessionstorage("sdcmTabData");
            if(tabData){
                this.setTabData(tabData)
            }
            //刷新保存tabData
            window.addEventListener("beforeunload",()=>{
                setSessionstorage('sdcmTabData',this.tabData)
            })
        }
    }
</script>

<style>
    html,body,#app{
        width: 1920px;
        height: 1080px;
        font-family:"Microsoft YaHei","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
        min-width: 1200px;
        font-size:14px;
        color:#fff;
    }
    ul li{
        list-style: none
    }
</style>
