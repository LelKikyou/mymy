<template>
    <div class="headTab">
        <div @click="linkUrl({url:'shzxjzpt'},-2)" :class="[{'active':-2===active},'tabPage']">上海执行矫治平台</div>
        <div @click="linkUrl({url:'znss'},-1)" :class="[{'active':-1===active},'search']"><i class="iconfont icon-sousuo"></i>智能搜索
        </div>
        <div class="left-btn" @click="handleScroll(186)">
            <Icon type="ios-arrow-back" class="btnIcon"/>
        </div>
        <div class="tabContent" ref="tabContent">
            <div class="tabScroll" ref="tabScroll" style="left: 0">
                <Tag v-for="(item,index) in nav" :class="{'active':index===active}"
                     @click.native="linkUrl(item,index)"
                     closable @on-close="handleClose(index)">
                    {{item.name}}
                </Tag>
            </div>
        </div>
        <div class="right-btn" @click="handleScroll(-186)">
            <Icon type="ios-arrow-forward" class="btnIcon"/>
        </div>
        <div class="tab-login">
            <div class="userInfo">
                <i class="iconfont icon-zhanghu"></i>
                <p class="username" :title="userInfo.username">{{userInfo.username}}</p>
            </div>
            <div class="log-off" @click="logOff" title="注销">
                <i class="iconfont icon-zhuxiao"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "headTab",
        data() {
            return {
                oldLength: 0  //tab变化之前的值初始化
            }
        },
        computed: {
            ...mapGetters({
                nav: 'getNav',
                active: 'getActive',
                userInfo: "getUserInfo",
                getTabData: 'getTabData',
                getTabScrollLeft: 'getTabScrollLeft'
            }),
        },
        mounted() {
            this.$refs.tabScroll.style.left = this.getTabScrollLeft + "px";
            this.oldLength = this.nav.length;
        },
        methods: {
            ...mapMutations({
                spliceNav: "spliceNav",
                setActive: 'setActive',
                cancellation: 'cancellation',
                setTabScrollLeft: 'setTabScrollLeft'
            }),
            //删除tab
            handleClose(index) {
                this.spliceNav(index);
                if (index === this.active) {
                    this.setActive(index - 1);
                    this.$router.push({
                        name: index === 0 ? 'znss' : this.nav[index - 1].url
                    });
                } else if (index < this.active) {
                    this.setActive(this.active - 1);
                }
            },
            //跳转路由
            linkUrl(item, index) {
                item.userId ? this.$router.push({
                    name: item.url,
                    params: {userId: item.userId}
                }):this.$router.push({
                    name: item.url
                });
                this.setActive(index);
            },
            //tab滚动
            handleScroll(num) {
                let tabContentWidth = this.$refs.tabContent.offsetWidth;
                let tabScrollWidth = this.$refs.tabScroll.offsetWidth;
                let difference = this.getTabScrollLeft + tabScrollWidth - tabContentWidth;
                let left;
                if (num < 0) {
                    if (difference > 0) {
                        let cWidth = difference + num;
                        cWidth > 0 ? left = this.getTabScrollLeft + num : left = tabContentWidth - tabScrollWidth;
                    } else {
                        left = parseInt(this.$refs.tabScroll.style.left);
                    }
                } else {
                    let cWidth = this.getTabScrollLeft + num;
                    cWidth > 0 ? left = 0 : left = cWidth;
                }
                this.$refs.tabScroll.style.left = left + "px";
                this.setTabScrollLeft(left);
            },
            //注销
            logOff() {
                //注销
                this.cancellation();
            }
        },
        watch: {
            nav(newVal) {
                this.$nextTick(function () {
                    let tabContentWidth = this.$refs.tabContent.offsetWidth;
                    let tabScrollWidth = this.$refs.tabScroll.offsetWidth;
                    let left = tabScrollWidth - tabContentWidth;
                    if (!!left && newVal.length > this.oldLength) {
                        this.handleScroll(-left)
                    }
                    if (newVal.length < this.oldLength) {
                        let _this = this;
                        setTimeout(function () {
                            let dif = _this.$refs.tabContent.offsetWidth - _this.getTabScrollLeft - _this.$refs.tabScroll.offsetWidth;
                            if (dif > -_this.getTabScrollLeft) {
                                _this.handleScroll(-_this.getTabScrollLeft)
                            } else {
                                _this.handleScroll(dif)
                            }
                        }, 400)
                    }
                    this.oldLength = newVal.length;
                })
            }
        }
    }
</script>

<style>
    .headTab {
        width: 100%;
        height: 60px;
        background-image: linear-gradient(#092a50, #0b1e3b);
        border-bottom: 1px solid #364e68;
    }

    .headTab > div {
        display: inline-block;
        border-right: 1px solid #747881;
        vertical-align: top;
    }

    .headTab > .tabPage {
        cursor: pointer;
        text-align: center;
        color: #fff;
        height: 100%;
        width: 250px;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 26px;
        line-height: 59px;
        font-weight: 700;
    }

    .headTab > .tabPage:hover {
        color: #fbd22c;
    }

    .headTab > .tabPage.active {
        color: #fbd22c;
    }

    .headTab > .search {
        cursor: pointer;
        height: 100%;
        width: 160px;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        line-height: 59px;
    }

    .headTab > .search:hover {
        color: #fbd22c;
    }

    .headTab > .search.active {
        color: #fbd22c;
    }

    .headTab > .search > i {
        margin-right: 14px;
        font-size: 22px;
        transition: all 0.6s;
    }

    .headTab > .left-btn {
        cursor: pointer;
        width: 30px;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
    }

    .headTab > .left-btn:hover .btnIcon {
        color: #fbd22c;
    }

    .headTab > .left-btn > .btnIcon {
        color: #7f8c9f;
        font-size: 30px;
        line-height: 59px;
        opacity: 0.7;
    }

    .headTab > .right-btn {
        cursor: pointer;
        width: 30px;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
    }

    .headTab > .right-btn:hover .btnIcon {
        color: #fbd22c;
    }

    .headTab > .right-btn > .btnIcon {
        color: #7f8c9f;
        font-size: 30px;
        line-height: 59px;
        opacity: 0.7;
    }

    .headTab > .tabContent {
        position: relative;
        overflow: hidden;
        width: calc(100% - 700px);
        height: 100%;
    }

    .tabScroll {
        position: absolute;
        top: 0;
        height: 100%;
        white-space: nowrap;
        transition: left 0.2s ease-out;
    }

    .tabScroll .ivu-tag {
        height: 100%;
        margin: 0;
        line-height: 59px;
        padding: 0 10px 0 30px;
        background-color: #09274b;
        border: none;
        border-right: 1px solid #747881;
        border-radius: 0;
        vertical-align: initial;
    }

    .tabScroll .ivu-tag:hover {
        background-color: #394d66;
        opacity: initial;
    }

    .tabScroll .ivu-tag.active {
        background-color: #394d66;
    }

    .tabScroll .ivu-tag .ivu-tag-text {
        color: #fff;
        font-size: 18px;
    }

    .tabScroll .ivu-tag .ivu-icon {
        color: #fff;
        font-size: 22px !important;
        margin-top: -4px;
        margin-left: 10px;
    }

    .tab-login {
        width: 230px;
        height: 100%;
        border-right: none;
    }

    .userInfo {
        position: relative;
        float: left;
        width: 170px;
        height: 100%;
    }

    .log-off {
        float: left;
        cursor: pointer;
        width: 59px;
        height: 100%;
        background-color: #551428;
    }

    .log-off:hover {
        background-color: #b80b0f;
    }

    .log-off > i {
        margin-left: 18px;
        line-height: 59px;
        font-size: 24px;
    }

    .userInfo > i {
        font-size: 24px;
        margin-left: 16px;
        line-height: 59px;
    }

    .username {
        display: inline-block;
        position: absolute;
        width: 100px;
        height: 100%;
        right: 16px;
        text-align: center;
        font-size: 18px;
        line-height: 59px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
</style>