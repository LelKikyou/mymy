<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';
    import {TAB, USERINFO, TOKEN} from '@/api/URL'
    import {setSessionstorage, getSessionstorage, setLocalstorage, getLocalstorage} from "./libs/tools";
    import Cookies from 'js-cookie'

    export default {
        name: 'app',
        computed: {
            ...mapGetters({
                tabData: "getTabData",
                getUserInfo: 'getUserInfo'
            })
        },
        methods: {
            ...mapMutations({
                setTabData: "setTabData",
                setUserInfo: "setUserInfo"
            }),
            //初始化数据
            Initialization(){
                //设置tabData和userinfo
                let tabData = getSessionstorage(TAB);
                let userinfo = getLocalstorage(USERINFO);
                if (!!tabData) this.setTabData(tabData);
                if (!!userinfo) this.setUserInfo(userinfo);
                //刷新保存tabData和userinfo
                window.addEventListener("beforeunload", () => {
                    //用token判断是否登录，没登录清空所有状态
                    let token = Cookies.get(TOKEN);
                    setSessionstorage(TAB, token ? this.tabData :{
                        nav:[
                            {
                                name: "标题1",
                                url: 'b1'
                            },
                            {
                                name: "标题2",
                                url: 'b2'
                            },
                            {
                                name: "标题3",
                                url: 'b1'
                            },
                            {
                                name: "标题4",
                                url: 'b2'
                            },
                            {
                                name: "标题5",
                                url: 'b1'
                            },
                            {
                                name: "标题6",
                                url: 'b2'
                            },
                            {
                                name: "标题7",
                                url: 'b1'
                            },
                            {
                                name: "标题8",
                                url: 'b2'
                            },
                            {
                                name: "标题9",
                                url: 'b1'
                            },
                            {
                                name: "标题10",
                                url: 'b2'
                            }
                        ],
                        active:-2,
                        tabScrollLeft:0
                    });
                    setLocalstorage(USERINFO, token ? this.getUserInfo : "");
                })
            }
        },
        created() {
            this.Initialization();
        }
    }
</script>

<style>
    html, body, #app {
        width: 1920px;
        height: 1080px;
        font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
        min-width: 1200px;
        font-size: 14px;
        color: #fff;
    }

    ul li {
        list-style: none
    }
</style>
