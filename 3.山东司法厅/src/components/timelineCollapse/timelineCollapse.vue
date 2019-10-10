<template>
    <div class="timelineCollapse">
        <div class="opt">
            <el-date-picker
                    class="rightDate"
                    v-model="startDate"
                    type="date"
                    placeholder="开始时间">
            </el-date-picker>
            <span class="midText">至</span>
            <el-date-picker
                    class="rightDate"
                    v-model="endData"
                    type="date"
                    placeholder="截止时间">
            </el-date-picker>
            <el-select v-model="selectData" filterable clearable placeholder="请选择查看类别" class="rightSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="timeline sdcmScrollbar">
            <el-timeline>
                <el-timeline-item
                        :class="{active:activeNames===index}"
                        color="#03fffb"
                        v-for="(item, index) in activities"
                        :key="index">
                    <el-collapse v-model="activeNames" @change="handleChange" accordion>
                        <el-collapse-item :name="index">
                            <template slot="title">
                                <span>{{item.title}}</span><span>{{item.name}}</span>
                            </template>
                            <p class="nameId">{{item.id}}</p>
                            <div>
                                <span>{{item.pzrq.k}}</span> <span>{{item.pzrq.v}}</span>
                            </div>
                            <div>
                                <span>{{item.bdq.k}}</span> <span>{{item.bdq.v}}</span>
                            </div>
                            <div>
                                <span>{{item.bdh.k}}</span> <span>{{item.bdh.v}}</span>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    export default {
        name: "timelineCollapse",
        data() {
            return {
                activeNames: "",
                activities: [{
                    title: "分管等级变动",
                    name: "吕海波",
                    id: 3701009549,
                    pzrq: {
                        k: "批准日期",
                        v: "2019/8/21"
                    },
                    bdq: {
                        k: "变动前分管等级",
                        v: "2017-09-05"
                    },
                    bdh: {
                        k: "批准日期",
                        v: "2017-09-05"
                    },
                }, {
                    title: "普管离监",
                    name: "郑强",
                    id: 3701009554,
                    pzrq: {
                        k: "批准日期",
                        v: "2017-09-05"
                    },
                    bdq: {
                        k: "变动前分管等级",
                        v: "2017-09-05"
                    },
                    bdh: {
                        k: "批准日期",
                        v: "2017-09-05"
                    },
                }, {
                    title: "个别教育",
                    name: "吕啸风",
                    id: 18665895,
                    pzrq: {
                        k: "批准日期",
                        v: "2017-09-05"
                    },
                    bdq: {
                        k: "变动前分管等级",
                        v: "2017-09-05"
                    },
                    bdh: {
                        k: "批准日期",
                        v: "2017-09-05"
                    },
                },
                    {
                        title: "罪犯囚被服发放",
                        name: "唐科",
                        id: 18665895,
                        pzrq: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                        bdq: {
                            k: "变动前分管等级",
                            v: "2017-09-05"
                        },
                        bdh: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                    },{
                        title: "亲情帮教动态",
                        name: "刘杰",
                        id: 18665895,
                        pzrq: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                        bdq: {
                            k: "变动前分管等级",
                            v: "2017-09-05"
                        },
                        bdh: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                    },{
                        title: "离监",
                        name: "刘鹏",
                        id: 18665895,
                        pzrq: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                        bdq: {
                            k: "变动前分管等级",
                            v: "2017-09-05"
                        },
                        bdh: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                    },{
                        title: "罪犯囚被服发放",
                        name: "孙希康",
                        id: 18665895,
                        pzrq: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                        bdq: {
                            k: "变动前分管等级",
                            v: "2017-09-05"
                        },
                        bdh: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                    },{
                        title: "分管等级变动",
                        name: "扈信勇",
                        id: 18665895,
                        pzrq: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                        bdq: {
                            k: "变动前分管等级",
                            v: "2017-09-05"
                        },
                        bdh: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                    },{
                        title: "分管等级变动",
                        name: "孙大勇",
                        id: 18665895,
                        pzrq: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                        bdq: {
                            k: "变动前分管等级",
                            v: "2017-09-05"
                        },
                        bdh: {
                            k: "批准日期",
                            v: "2017-09-05"
                        },
                    }],
                startDate: "",
                endData: "",
                selectData: "",
                options: [{
                    value: 0,
                    label: "全部"
                },{
                    value: 1,
                    label: "分管等级变动"
                }, {
                    value: 2,
                    label: "个别教育"
                }, {
                    value: 3,
                    label: "亲情帮教动态"
                }]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>
<style lang="stylus">
    .timelineCollapse .opt
        .rightDate
            width 120px
            .el-input__inner
                border-radius: 0;
                padding-right 20px
                background-color #011c31
                height 24px
                line-height 24px
                border-color #00ffff
                color #fff
                padding-left: 20px;
                text-align center
            .el-input__prefix
                left 0
            .el-input__suffix
                right -2px
        .rightDate, .rightSelect
            & input::-webkit-input-placeholder
                color #fff
            & input::-moz-placeholder
                color #fff
            & input::-moz-placeholder
                color #fff
            & input::-ms-input-placeholder
                color #fff
            & i
                color #fff !important
                line-height 24px
        .rightSelect
            margin-left 24px
            width 130px
            height 24px
            .el-input__inner
                border-radius: 0;
                padding-right: 20px;
                text-align: center;
                padding-left 4px
                background-color #011c31
                height 24px
                line-height 24px
                border-color #00ffff
                color #fff
                &:focus
                    border-color #00ffff
            .el-input__suffix
                right 0
</style>
<style lang="stylus">
    .timelineCollapse .timeline
        .el-timeline-item__wrapper
            top 0
            padding-left 30px
        .el-timeline-item__tail
            left 14px
            border-color #03fffb
        .el-timeline-item__node
            left 9px
        .el-collapse
            border none
        .active.el-timeline-item
            background-color rgba(255, 255, 255, 0.1)
        .el-timeline-item
            padding 10px 0;
        .el-collapse-item__arrow
            color: #ccefff;
        .el-collapse-item__header
            border none
            background-color transparent
            height 20px
            line-height 12px
            align-items: flex-start;
            & span:nth-child(1)
                width 236px
                color #68f1ff
                font-size 14px;
                letter-spacing: 1px;
            & span:nth-child(2)
                color #00c8ff
                letter-spacing: 1px;
                font-size: 16px;
        .el-collapse-item__wrap
            border none
            background-color transparent
            .el-collapse-item__content
                padding-bottom: 0;
                font-size 14px
                letter-spacing: 1px;
                .nameId
                    color: #00c8ff;
                & div
                & div span:nth-child(1)
                    color: #aabbcc;
                & div span:nth-child(2)
                    margin-left 20px
                    color: #fff;
</style>
<style lang="stylus" scoped>
    @import "timelineCollapse.stylus"
</style>
