<template>
    <div class="headTab">
        <div class="seachBox">
            <Input :disabled="getIsShow" v-model="query" search placeholder="输入身份证或姓名搜索相关人员"
                   @on-search="handlerQuery"/>
        </div>
        <div class="left-btn" @click="handleScroll(186)">
            <Icon type="ios-arrow-back" class="btnIcon"/>
        </div>
        <div class="sub-nav" ref="tabContent">
            <div class="tabScroll" ref="tabScroll" style="left: 0">
                <Tag :key="-1"
                     type="border"
                     @click.native="linkUrl('/home/homePage',-1)"
                     :color="-1===tab.active?'primary':'default'">首页
                </Tag>
                <Tag v-for="(item, index) in tab.nav"
                     @click.native="linkUrl(item.url,index)"
                     :key="index"
                     type="border" closable
                     :color="index===tab.active?'primary':'default'"
                     checkable
                     @on-close="handleClose(index)"
                >
                    {{item.name}}
                </Tag>
            </div>
        </div>
        <div class="right-btn" @click="handleScroll(-186)">
            <Icon type="ios-arrow-forward" class="btnIcon"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        name: "headTab",
        data() {
            return {
                tabScrollLeft: 0,
                query: "",  //查询条件
            }
        },
        props: {
            active: Number,
            tab: Object,
            tagUrl: String,
            // tabScrollLeft: Number,
        },
        mounted() {
            this.$refs.tabScroll.style.left = this.getTabScrollLeft + "px";
        },
        computed: {
            ...mapGetters([
                "getIsShow"
            ]),
            getTabScrollLeft: function () {
                return this.tabScrollLeft;
            }
        },
        methods: {
            linkUrl(url, index) {
                this.$emit("upLinkUrl", url);
                this.$emit("setActive", index)
                this.$router.push(
                    url,
                );
                // this.setActive(index);
            },
            handleClose(index) {
                this.spliceNav(index);
                if (index === this.tab.active) {
                    this.$emit("setActive", index - 1)
                    this.$router.push(
                        index === 0 ? '/home/homePage' : this.tab.nav[index - 1].url
                    );
                    this.$emit("upLinkUrl", index === 0 ? '' : this.tab.nav[index - 1].url);
                } else if (index < this.tab.active) {
                    this.$emit("setActive", this.tab.active - 1)
                }
            },
            spliceNav(index) {
                this.$emit("spliceNav", index)
                // state.tabData.nav.splice(index,1);
            },
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
            setTabScrollLeft(left) {
                this.tabScrollLeft = left;
            },
            handlerQuery() {
                this.$router.push({name: "queryRes", params: {sign: true, query: this.query}})
            }
        },


    }
</script>

<style lang="stylus" scoped>
    @import "headTab.stylus"
</style>