<template>
    <div class="homePrison">
        <div class="head-nav">
            <div class="left-nav">
                <img class="logo" src="../../assets/nation/logo.png" width="38" height="40"/>
                <img class="bt" src="../../assets/nation/biaoti.png" width="280" height="30"/>
            </div>
            <ul class="mid-nav">
                <li v-for="(item,index) in nav" :class="[filClass(item.name.length),{active:index===active}]"
                    @click="goPath(item,index)">
                    <div v-if="item.children.length" class="frame">
                        <div v-for="data in item.children">{{data.name}}</div>
                    </div>
                    {{item.name}}
                </li>
            </ul>
            <ul class="right-nav">
                <li>
                    <i class="iconfont icon-quanguojianyuju"></i>
                    <span>全国监狱局</span>
                </li>
                <li>
                    <i class="iconfont icon-mima1"></i>
                    <span>修改密码</span>
                </li>
                <li>
                    <i class="iconfont icon-084tuichu"></i>
                    <span>退出</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view :key="$route.name"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homePrison",
        data() {
            return {
                active: 0,
                nav: [{
                    name: "首页",
                    children: [],
                    path: "nation"
                }, {
                    name: "智能分析",
                    children: [{
                        name: "全国统计监测",
                        path: ""
                    }, {
                        name: "犯罪关联分析",
                        path: ""
                    }, {
                        name: "多重罪名分析",
                        path: ""
                    }, {
                        name: "流窜犯罪分析",
                        path: ""
                    }],
                    path: ""
                }, {
                    name: "数据报告",
                    children: [],
                    path: ""
                }, {
                    name: "业务报表",
                    children: [],
                    path: ""
                }, {
                    name: "自定义分析",
                    children: [{
                        name: "基本分析",
                        path: ""
                    }, {
                        name: "重新犯罪分析",
                        path: ""
                    }, {
                        name: "刑法变动分析",
                        path: ""
                    }, {
                        name: "暂予监外执行分析",
                        path: ""
                    }],
                    path: ""
                }, {
                    name: "其它",
                    children: [{
                        name: "人员搜索",
                        path: ""
                    }, {
                        name: "数据汇聚情况",
                        path: ""
                    }, {
                        name: "减刑假释信息化办公平台",
                        path: ""
                    }],
                    path: ""
                }]
            }
        },
        methods: {
            goPath({path}, index) {
                this.active = index;
                this.$router.push({
                    name: path
                })
            },
            filClass(len) {
                let className;
                len === 2 && (className = "two");
                len === 4 && (className = "four");
                len === 5 && (className = "five");
                return className
            },
            goBackHome() {
                this.$router.push({
                    name: "nation"
                })
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "homePrison.stylus"
</style>
