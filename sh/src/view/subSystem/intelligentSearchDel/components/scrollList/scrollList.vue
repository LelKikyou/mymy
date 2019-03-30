<template>
    <div class="scrollList" ref="listDom">
        <div class="listContent" ref="boxDom">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "scrollList",
        data() {
            return {
                minBomHeight: 430,  //距离底部430的时候开始加载下一个。
                defaultBoxHeight: 0,
                isLock: true
            }
        },
        methods: {
            //初始化方法
            initialization() {
                this.$refs.listDom.onscroll = null;
                this.$refs.listDom.scrollTop = 0;
                this.scrollList(true);
            },
            scrollList(isDefault) {
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
                    if (this.$refs.listDom.scrollTop === 0 && isDefault) {
                        isDefault = false;
                        this.defaultBoxHeight = 0;
                    }
                }.bind(this);
            },
            //距离底部minBomHeight高度时候派发出去的事件
            handlerQuery() {
                this.$emit("upHandlerQuery");
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "scrollList.stylus"
</style>