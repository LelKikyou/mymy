<template>
    <div :class="['anchorLink',{'anchorLink-active':this.anchorCom.currentLink === this.href}]" @click.stop="goAnchor"
         :data-scroll-offset="scrollOffset" :data-href="href">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'anchorLink',
        inject: ['anchorCom'],
        props: {
            href: String,
            scrollOffset: { //单个指定额外滚动的距离
                type: Number,
                default() {
                    return this.anchorCom.scrollOffset;
                }
            }
        },
        methods: {
            goAnchor() {
                this.$router.replace(this.href);
                this.anchorCom.handleHashChange();
                this.anchorCom.handleScrollTo();
            }
        }
    };
</script>
