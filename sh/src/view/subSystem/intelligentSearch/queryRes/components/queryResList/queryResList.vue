<template>
    <div class="queryResList">
        <h1 class="listTit">本次搜索为您找到相关结果{{getQueryResData.total||0}}个</h1>
        <div class="listBox" ref="listDom">
            <div class="listContent" ref="boxDom" :style="paddingBtm">
                <div class="box" v-for="i in getQueryResData.list" @click="criminalCard(i)">
                    <img class="boxImg" :src="defaultImg">
                    <div class="boxOpt">
                        <p>
                            罪犯编号:<span v-html="i.zfBh"></span>
                        </p>
                        <p>
                            姓名:<span v-html="i.xm"></span>
                        </p>
                        <p>
                            性别：<span v-html="i.xb"></span>
                        </p>
                        <p>
                            年龄：<span v-html="i.nl"></span>
                        </p>
                        <p>
                            在押状态：<span v-html="i.zyzt"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import defaultImg from "@/image/default.png"

    export default {
        name: "queryResList",
        props: {
            getQueryResData: {
                type: Object
            }
        },
        data() {
            return {
                defaultImg: "",
                minBomHeight: 430,  //距离底部430的时候开始加载下一个。
                defaultBoxHeight: 0,
                isLock: true
            }
        },
        mounted() {
            this.defaultImg = defaultImg;
        },
        methods: {
            criminalCard(i) {
                this.$router.push({
                    name: "criminal",
                    query: {
                        id: i.zfBh
                    }
                })
            },
            initialization() {
                this.$refs.listDom.onscroll = null;
                this.$refs.listDom.scrollTop = 0;
                this.scrollList(true);
            },
            scrollList(is) {
                let dom = this.$refs.listDom;
                this.isLock = true;
                this.defaultBoxHeight = 0;
                dom.onscroll = function () {
                    let boxDomHeight = this.$refs.boxDom.clientHeight;
                    if ((boxDomHeight - dom.clientHeight - dom.scrollTop) < this.minBomHeight) {
                        if (this.isLock) {
                            this.isLock = false;
                            this.handlerQuery();
                        }
                    }
                    if (boxDomHeight > this.defaultBoxHeight && !this.isLock) {
                        this.defaultBoxHeight = boxDomHeight;
                        this.isLock = true;
                    }
                    if (this.$refs.listDom.scrollTop === 0 && is) {
                        is = false;
                        this.defaultBoxHeight = 0;
                    }
                }.bind(this);
            },
            handlerQuery() {
                this.$emit("upHandlerQuery");
            }
        },
        computed: {
            paddingBtm() {
                return this.getQueryResData.total ? "padding-bottom:30px" : "padding-bottom:0"
            }
        }
    }
</script>
<style>
    em {
        font-style: normal;
        color: red
    }
</style>
<style lang="stylus" scoped>
    @import "queryResList.stylus"
</style>