<template>
    <div class="jbxxInfo">
        <anchor class="botNav sdcmScrollbar" container=".botCon">
            <anchorLink :href="'#'+item.key" class="botItem" v-for="(item,index) in navList"
                        @click="handleNav(item.key)">
                <div>{{item.value}}</div>
            </anchorLink>
        </anchor>
        <div class="botCon sdcmScrollbar">
            <div id="zrxx">
                <titleNameOth class="titMag">自然信息</titleNameOth>
                <div class="tableArea">
                    <div class="row" v-for="(item,index) in navTitData">
                        <div class="col-name">
                            {{item.name}}
                        </div>
                        <div class="col-value">
                            {{item.value}}
                        </div>
                    </div>
                </div>
            </div>
            <div id="zjxx">
                <titleNameOth class="titMag">证件信息</titleNameOth>
                <div class="tableArea">
                    <div class="row" v-for="(item,index) in zjxxData">
                        <div class="col-name">
                            {{item.name}}
                        </div>
                        <div class="col-value">
                            {{item.value}}
                        </div>
                    </div>
                </div>
            </div>
            <div id="xpzw">
                <titleNameOth class="titMag titLong">相片指纹媒体信息</titleNameOth>
                <div class="picArea">
                    <div class="picItem" v-for="(item,index) in navPicData">
                        <img :src="item.picUrl" alt="">
                        <p :title="item.name">{{item.name}}</p>
                    </div>
                </div>
            </div>
            <div id="bqjl">
                <titleNameOth class="titMag">捕前简历</titleNameOth>
                <div class="tableVertical sdcmScrollbar">
                    <table>
                        <tr>
                            <th v-for="(item,index) in resumeData.th">
                                {{item}}
                            </th>
                        </tr>
                        <tr v-for="(item) in resumeData.td">
                            <td v-for="(data) in item">
                                {{data}}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleNameOth from "@/components/titleNameOth"
    import anchorLink from "@/components/anchorLink"
    import anchor from "@/components/anchor"

    export default {
        name: "jbxxInfo",
        components: {
            titleNameOth,
            anchor,
            anchorLink
        },
        props: {},
        data() {
            return {
                active: "zrxx",
                navList: [
                    {
                        value: '自然信息',
                        key: "zrxx"
                    },
                    {
                        value: '证件信息',
                        key: "zjxx"
                    },
                    {
                        value: '相片指纹媒体信息',
                        key: "xpzw"
                    },
                    {
                        value: '捕前简历',
                        key: "bqjl"
                    }
                ],
                zjxxData: [
                    {
                        name: '证件类型',
                        value: "身份证号"
                    },
                    {
                        name: '身份证号码',
                        value: "371326198510261000"
                    }
                ],
                navTitData: [
                    {
                        name: '姓名',
                        value: "顾学华"
                    },
                    {
                        name: "真实姓名",
                        value: "顾学华"
                    },
                    {
                        name: '性别',
                        value: "男"
                    },
                    {
                        name: '出生日期',
                        value: "1985,10,26"
                    },
                    {
                        name: '民族',
                        value: "汉族"
                    },
                    {
                        name: '捕前文化程度',
                        value: "小学"
                    },
                    {
                        name: '捕前职业',
                        value: "自由职业者"
                    },
                ],
                navPicData: [
                    {
                        name: '正面照',
                        picUrl: require('@/assets/criminalExecution/pic.png')
                    },
                    {
                        name: '左手掌纹',
                        picUrl: require('@/assets/criminalExecution/fm_1.png')
                    },
                    {
                        name: '右手掌纹',
                        picUrl: require('@/assets/criminalExecution/fm_2.png')
                    },
                    {
                        name: '左手拇指指纹',
                        picUrl: require('@/assets/criminalExecution/fm_4.png')
                    },
                    {
                        name: '左手食指指纹',
                        picUrl: require('@/assets/criminalExecution/fm_5.png')
                    },
                    {
                        name: '左手食指指纹',
                        picUrl: require('@/assets/criminalExecution/fm_4.png')
                    },
                    {
                        name: '皮肤特殊标记/特殊特征',
                        picUrl: require('@/assets/criminalExecution/fm_6.png')
                    },
                    {
                        name: '脚印',
                        picUrl: require('@/assets/criminalExecution/fm_7.png')
                    },
                ],
                resumeData: {
                    th: [
                        "起日期",
                        "止日期",
                        "单位/住址（行政区划）",
                        "单位/住址（详细名称）",
                        "职业",
                        "职务",
                        "家庭住址（行政区划）",
                        "家庭住址（详细地址）",
                    ],
                    td: [
                        ["2015-10-15", "2016-03-06", "山东省临沂市临沭县", "山东省临沂市临沭县", "工人", "操作工", "山东省临沂市临沭县审实村", "山东省临沂市临沭县审实村",]
                    ],
                }
            }
        },
        mounted() {

        },
        methods: {
            handleNav(key) {
                this.active = key;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "jbxxInfo.stylus"
</style>
