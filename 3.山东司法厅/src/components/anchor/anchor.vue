<template>
    <div class="anchor">
        <slot></slot>
    </div>
</template>
<script>
    import {scrollTop, findComponentsDownward, sharpMatcherRegx} from './tools';
    import {on, off} from '@/lib/tools';

    export default {
        name: 'anchor',
        provide() {
            return {
                anchorCom: this
            };
        },
        data() {
            return {
                animating: false, // 判断当前是不是在滚动
                currentLink: '', //  #href -> currentLink = #href
                currentId: '', //  #href -> currentId = href
                scrollElement: null,
                titlesOffsetArr: [],
                wrapperTop: 0,//container距离顶部的距离
            };
        },
        props: {
            bounds: { //距离锚点多少距离时候切换active
                type: Number,
                default: 0
            },
            container: String,
            scrollOffset: { //点击额外滚动的距离
                type: Number,
                default: 0
            }
        },
        methods: {
            handleScroll(e) {
                if (this.animating) return;
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop;
                this.getCurrentScrollAtTitleId(scrollTop);
            },
            handleHashChange() {
                const url = window.location.href;
                const sharpLinkMatch = sharpMatcherRegx.exec(url);
                if (!sharpLinkMatch) return;
                this.currentLink = sharpLinkMatch[0];
                this.currentId = sharpLinkMatch[1];
            },
            handleScrollTo() {
                const anchor = document.getElementById(this.currentId);
                const currentLinkElementA = document.querySelector(`div[data-href="${this.currentLink}"]`);
                let offset = this.scrollOffset;
                if (currentLinkElementA) {
                    offset = parseFloat(currentLinkElementA.getAttribute('data-scroll-offset'));
                }
                if (!anchor) return;
                const offsetTop = anchor.offsetTop - this.wrapperTop - offset;
                this.animating = true;
                scrollTop(this.scrollElement, this.scrollElement.scrollTop, offsetTop, 600, () => {
                    this.animating = false;
                });
            },
            updateTitleOffset() {
                const links = findComponentsDownward(this, 'anchorLink').map(link => {
                    return link.href;
                });
                const idArr = links.map(link => {
                    return link.split('#')[1];
                });
                let offsetArr = [];
                idArr.forEach(id => {
                    const titleEle = document.getElementById(id);
                    if (titleEle) offsetArr.push({
                        link: `#${id}`,
                        offset: titleEle.offsetTop - this.scrollElement.offsetTop
                    });
                });
                this.titlesOffsetArr = offsetArr;
            },
            getCurrentScrollAtTitleId(scrollTop) {
                let i = -1;
                let len = this.titlesOffsetArr.length;
                let titleItem = {
                    link: '#',
                    offset: 0
                };
                scrollTop += this.bounds;
                while (++i < len) {
                    let currentEle = this.titlesOffsetArr[i];
                    let nextEle = this.titlesOffsetArr[i + 1];
                    if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
                        titleItem = this.titlesOffsetArr[i];
                        break;
                    }
                }
                this.currentLink = titleItem.link;
            },
            getContainer() {
                this.scrollElement = document.querySelector(this.container)
            },
            removeListener() {
                off(this.scrollElement, 'scroll', this.handleScroll);
            },
            init() {
                this.handleHashChange();
                this.$nextTick(() => {
                    this.removeListener();
                    this.getContainer();
                    this.wrapperTop = this.scrollElement.offsetTop;
                    this.updateTitleOffset();
                    this.handleScrollTo();
                    on(this.scrollElement, 'scroll', this.handleScroll);
                });
            }
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
            this.removeListener();
        }
    };
</script>
