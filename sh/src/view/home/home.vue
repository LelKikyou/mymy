<template>
    <Layout :style="{}">
        <Header  :style="{position: 'fixed', width: '100%'}">
            <div class="dp-back">
                <router-link to="/newMain">
                    <i title="返回大屏" class="iconfont icon-back"></i>
                </router-link>
            </div>
            <div class="layout-logo">
            </div>
            <div class="s-name"  @click="linkHome({url:'/home/homePage'},-1)" :class="[{'active':-1===this.tabData.active}]">
                上海执行矫正系统
            </div>
            <!--  -->
            <headTab :active="active" :tab="tabData" @upLinkUrl="linkUrl" @setActive="setActive" @spliceNav="spliceNav"></headTab>
            <div class="user-card-box">
                <div class="user-card-item">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545039396442&di=a1d1bdfc6e3ee7754abd524f8bcf3888&imgtype=0&src=http%3A%2F%2Fpic43.photophoto.cn%2F20170506%2F0470102348231008_b.jpg" alt="">
                    <span :title="userInfo.username">{{userInfo.username}}</span>
                    <div class="log-off" @click="loginOff" title="注销">
                        <i class="iconfont icon-zhuxiao"></i>
                    </div>
                </div>
            </div>
        </Header>
        <Layout>
            <Sider hide-trigger :style="{position: 'fixed', height: 'calc(100% - 70px)', left: 0,top:'70px',overflow: 'auto',background: '#fff'}" width="250px"  :theme="theme">
                <Menu :active-name="tagUrl" :open-names="['1']"  :theme="theme" width="250px" @on-select="handleSelect">
                    <Submenu name="10">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            监狱子系统
                        </template>
                        <template v-for="item in menuList">
                            <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                        </template>
                        <Submenu name="11">
                            <template slot="title">专题管理</template>
                            <template v-for="item in menuList2">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>
                        </Submenu>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            戒毒
                        </template>
                        <Submenu name="3">
                            <template slot="title">综合查询</template>
                            <!--<MenuItem name="/home/jiedu_zhcx_jdry">戒毒人员</MenuItem>
                            <MenuItem name="/home/jiedu_zhcx_jdjc">戒毒警察</MenuItem>
                            <MenuItem name="/home/jiedu_zhcx_jdjg">戒毒机构</MenuItem>-->
                            <template v-for="item in menuList3">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>
                        </Submenu>
                        <Submenu name="8">
                            <template slot="title">统计分析</template>
                            <!--<MenuItem name="/home/jiedu_tjfx_jdry">戒毒人员</MenuItem>
                            <MenuItem name="/home/jiedu_tjfx_jdjc">戒毒警察</MenuItem>
                            <MenuItem name="/home/jiedu_tjfx_jdjg">戒毒机构</MenuItem>-->
                            <template v-for="item in menuList4">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>
                        </Submenu>
                        <Submenu name="9">
                            <template slot="title">智能研判</template>
                            <!--<MenuItem name="/home/jiedu_znyp_dpzlfbqkfx">毒品种类分布情况分析</MenuItem>-->
                            <template v-for="item in menuList8">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>
                        </Submenu>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-cog" />
                            社区矫正
                        </template>
                        <Submenu name="5">
                            <template slot="title">数据核查</template>
                            <!-- <MenuItem name="/home/sqjz_sjhc_jzry">矫正人员信息核查</MenuItem>
                            <MenuItem name="/home/sqjz_sjhc_gzry">机构人员信息核查</MenuItem>-->
                            <template v-for="item in menuList5">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>

                        </Submenu>
                        <Submenu name="6">
                            <template slot="title">数据汇总统计</template>
                            <!-- <MenuItem name="/home/sqjz_sjhz_jzry">矫正人员</MenuItem>
                            <MenuItem name="/home/sqjz_sjhz_jgjgzry">机构及工作人员统计</MenuItem>
                            <MenuItem name="/home/sqjz_sjhz_zhcxtj">综合查询统计</MenuItem>-->
                            <template v-for="item in menuList6">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>
                        </Submenu>
                        <!--  <MenuItem name="/home/sqjz_ywjg">业务监管</MenuItem>-->
                        <template v-for="item in menuList9">
                            <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                        </template>
                        <Submenu name="7">
                            <template slot="title">统计分析</template>
                            <!-- <MenuItem name="/home/sqjz_tjfx_sqjztjtjfx">社区矫正总体统计分析</MenuItem>
                            <MenuItem name="/home/sqjz_tjfx_sqjzgzjgtj">社区矫正工作机构统计</MenuItem>
                            <MenuItem name="/home/sqjz_tjfx_sqjzllpbqkfx">社区矫正力量配比情况分析</MenuItem>
                            <MenuItem name="/home/sqjz_tjfx_jzrykqqyqk">矫正人员跨区迁移情况</MenuItem>
                            <MenuItem name="/home/sqjz_tjfx_jzryslqstj">矫正人员数量趋势统计</MenuItem>-->
                            <template v-for="item in menuList7">
                                <MenuItem :name="item.url" @click.native="addTag(item.name,item.url)">{{item.name}}</MenuItem>
                            </template>
                        </Submenu>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '250px',marginTop: '64px',height: '100%'}">
                <Content>
                    <router-view>
                        
                    </router-view>
                </Content>
            </Layout>
        </Layout>
    </Layout>
</template>
<script>
import headTab from './components/headTab/headTab'
import {mapGetters} from 'vuex'
export default {
    name: 'sh',
    props: {
        msg: String
    },
    data () {
        return {
            scrollTop:Number,
            theme: 'dark',
            active: 0,
            tagUrl:'/home/homePage',
            tabData:{
                nav:[
                    // {
                    //     url:'/home/homePage',
                    //     name:'首页'
                    // }
                ],
                active:-1,
                tabScrollLeft:0
            },
            
            
            menuList:[
                // {
                //     url:'/home/homePage',
                //     name:'首页'
                // },
                // {
                //     url:'/home/lsfx',
                //     name:'临释分析'
                // },
                {
                    url:'/home/intelligentReport',
                    name:'智能报表'
                },
                {
                    url:'/home/intelligentSearch',
                    name:'智能全搜'
                },
                // {
                //     url:'/home/lrfx',
                //     name:'智能研判'
                // },
                // {
                //     url:'/home/mapDetail',
                //     name:'地图详情'
                // },
            ],
            menuList2:[
                {
                    url:'/home/correlation',
                    name:'犯罪关联性分析'
                },
                {
                    url:'/home/secondzm',
                    name:'重新犯罪关联分析'
                },
                {
                    url:'/home/movecrime',
                    name:'异地犯罪分析'
                },
                {
                    url:'/home/stat',
                    name:'全市犯罪统计监控'
                },
                {
                    url:'/home/doublezm',
                    name:'多重罪名分析'
                },
            ],

            menuList3:[
                {
                    url:'/home/jiedu_zhcx_jdry',
                    name:'戒毒人员'
                },
                {
                    url:'/home/jiedu_zhcx_jdjc',
                    name:'戒毒警察'
                },
                {
                    url:'/home/jiedu_zhcx_jdjg',
                    name:'戒毒机构'
                }
            ],

            menuList4:[
                {
                    url:'/home/jiedu_tjfx_jdry',
                    name:'戒毒人员'
                },
                {
                    url:'/home/jiedu_tjfx_jdjc',
                    name:'戒毒警察'
                },
                {
                    url:'/home/jiedu_tjfx_jdjg',
                    name:'戒毒机构'
                }
            ],

            menuList5:[
                {
                    url:'/home/sqjz_sjhc_jzry',
                    name:'矫正人员信息核查'
                },
                {
                    url:'/home/sqjz_sjhc_gzry',
                    name:'机构人员信息核查'
                }

            ],

            menuList6:[
                {
                    url:'/home/sqjz_sjhz_jzry',
                    name:'矫正人员'
                },
                {
                    url:'/home/sqjz_sjhz_jgjgzry',
                    name:'机构及工作人员统计'
                },
                {
                    url:'/home/sqjz_sjhz_zhcxtj',
                    name:'综合查询统计'
                }

            ],

            menuList7:[
                {
                    url:'/home/sqjz_tjfx_qsztgk',
                    name:'全市总体概况'
                },
                {
                    url:'/home/sqjz_tjfx_sqjzgqgk',
                    name:'社区矫正各区概况'
                },
                {
                    url:'/home/sqjz_tjfx_sqjztjtjfx',
                    name:'社区矫正总体统计分析'
                },
                /*{
                    url:'/home/sqjz_tjfx_sqjzgzjgtj',
                    name:'社区矫正工作机构统计'
                },*/
                {
                    url:'/home/sqjz_tjfx_sqjzllpbqkfx',
                    name:'社区矫正力量配比情况分析'
                },
                {
                    url:'/home/sqjz_tjfx_jzrykqqyqk',
                    name:'矫正人员跨区迁移情况'
                },
                {
                    url:'/home/sqjz_tjfx_jzryslqstj',
                    name:'矫正人员数量趋势统计'
                }

            ],

            menuList8:[
                {
                    url:'/home/jiedu_znyp_dpfb',
                    name:'毒品分布'
                },{
                    url:'/home/jiedu_znyp_tzfx',
                    name:'特征分析'
                },{
                    url:'/home/jiedu_znyp_dpfx',
                    name:'毒品分析'
                },{
                    url:'/home/jiedu_znyp_fbdq',
                    name:'分布地区'
                },{
                    url:'/home/jiedu_znyp_ycfx',
                    name:'异常分析'
                },
            ],

            menuList9:[
                {
                    url:'/home/sqjz_ywjg',
                    name:'业务监管'
                }
            ]
        }
    },
    components: {
        headTab
    },
    computed:{
        ...mapGetters({
            userInfo: "getUserInfo",
        }),
    },


    methods: {
        loginOff(){
            localStorage.removeItem('newShangHaiProject');
            this.$router.push({
                name: 'login'
            })
        },
        linkHome(value,index){
            this.$router.push(value.url);
            this.setActive(index);
            this.tagUrl="/home/homePage";
        },
        handleSelect (name) {
            if(name==='/home/homePage'){
                this.tagUrl="";
                this.setActive(-1);
            }
            this.$router.push(name)
            this.tagUrl=name;
        },

        addTag(name,url){
            let data = {
                url: url,
                name:name,
            };
            this.addTagList(data);
        },
        addTagList(data){
            let name=data.name;
            let nav=this.tabData.nav;
            let lock=false;
            let active=0;
            for(let i=0;i<nav.length;i++){
                if(name===nav[i].name){
                    lock=true;
                    active=i;
                    break
                }
            }
            if(lock){
                this.tabData.active=active;
            }else {
                this.tabData.active=nav.length;
                nav.push(data);
            }
        },

        linkUrl(url){
            this.tagUrl=url
        },
        setActive(index){
            this.tabData.active=index;  
        },
        spliceNav(index){
            this.tabData.nav.splice(index,1);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.ivu-layout,.ivu-layout-content{
    height : 100%;
    overflow hidden
}
.layout-logo
    width: 30px
    height: 32px
    background: #5b6270
    background:url("../../image/logo.png")
    border-radius: 3px
    float: left
    position: relative
    top: 15px
    left: 20px
.ivu-layout-sider
    transition: all .2s ease-in-out;
    position: relative;
    // background: #515a6e;
    min-width: 0;
    background: #092a50 !important;
.s-name
    color #ffffff
    float left   
    margin-left 30px
    font-size 16px
    cursor:pointer
.s-name.active
    color: #fbd22c;
.user-card-item
    float right 
    margin-right 20px
    vertical-align middle
    img 
        width 40px
        height 40px
        border-radius 50%    
        margin-top 12px
        float left
    span 
        color #ffffff
        font-size 14px  
        float left
        margin-left 10px
.user-card-box   
    float right
    position:relative
    .log-off
        position: absolute;
        right: -45px;
        cursor: pointer;
        width: 59px;
        height: 100%;
        background-color: #551428;
        .iconfont
            margin-left: 18px;
            line-height: 59px;
            font-size: 24px;
    color:#fff
.dp-back
    position: fixed
    top: 0
    left: 20px
    .iconfont
        font-size: 36px !important
        color #fff
        cursor pointer
</style>
