<template>
    <div class="searchBox">
        <div class="homeQuery">
            <input class="queryipt" v-model="queryCondition.query" type="text" placeholder="多个条件使用空格分开">
            <button class="queryBtn userBtn" @click="handlerQuery">搜索</button>
        </div>
        <h1 class="listTit" v-show="getQueryRes.total">本次搜索中磁为您找到相关结果{{getQueryRes.total}}个</h1>
        <div class="queryResContent">
            <scrollList @upHandlerQuery="upHandlerQuery" ref="queryResListDom">
                <div class="box">
                    <div class="boxList" v-for="item in getQueryRes.list" @click="goToCriminal(item.unitCode,item.detailUri)">
                        <div class="name">
                            <span>姓名：{{item.name}}</span>
                            <span class="pd-left">人员类型：{{item.type}}</span>
                        </div>
                        <div class="details">
                            <div class="detailsList">
                                <span>身份证号：{{item.idCard}}</span>
                                <span>籍贯： </span>
                                <span v-if="item.type==='服刑人员'||item.type==='戒毒人员'||item.type==='社矫人员'">关押： </span>
                                <span v-else>工作地点:</span>
                                <span v-if="item.type==='服刑人员'||item.type==='戒毒人员'||item.type==='社矫人员'">是否涉毒： </span>
                                <span v-else>所属单位:</span>
                                <span>是否重点关注： </span>
                            </div>
                            <div class="detailsList">
                                <span>年龄：</span>
                                <span>民族：</span>
                                <span v-if="item.type==='服刑人员'||item.type==='戒毒人员'||item.type==='社矫人员'">分管等级： </span>
                                <span v-else>职级:</span>
                                <span v-if="item.type==='服刑人员'||item.type==='戒毒人员'||item.type==='社矫人员'">涉毒时间： </span>
                                <span v-else>工作时间:</span>
                            </div>
                            <div class="detailsList">
                                <span>性别：</span>
                                <span>婚姻：</span>
                                <span v-if="item.type==='服刑人员'||item.type==='戒毒人员'||item.type==='社矫人员'">罪名： </span>
                                <span v-else>职务:</span>
                                <span v-if="item.type==='服刑人员'||item.type==='戒毒人员'||item.type==='社矫人员'">社区矫正时间： </span>
                                <span v-else>工作年限:</span>
                            </div>
                        </div>
                    </div>
                </div>
            </scrollList>
        </div>
    </div>
</template>
<script>
    import scrollList from "./components/scrollList/scrollList"
    import {mapGetters, mapActions} from "vuex"

    export default {
        components: {
            scrollList
        },
        data() {
            return {
                queryCondition: {
                    query: "",
                    pageNum: 1,
                    pageSize: 24,
                },  //查询条件
            }
        },
        computed: {
            ...mapGetters([
                "getQueryRes",
                "getQueryCondition"
            ])
        },
        mounted() {
            if (this.$route.params.sign) {
                this.queryCondition.query = this.getQueryCondition.query;
                this.handlerQuery();
            }
        },
        methods: {
            ...mapActions([
                "handlerQueryResDataAsync",
            ]),
            handlerQuery() {
                Object.assign(this.queryCondition, {
                    pageNum: 1,
                    pageSize: 24,
                });
                this.$refs.queryResListDom.initialization();
                this.handlerQueryResDataAsync({
                    data: JSON.parse(JSON.stringify(this.queryCondition)),
                    type: "CHANGE_QUERY"
                })
            },
            upHandlerQuery() {
                this.queryCondition.pageNum++;
                this.handlerQueryResDataAsync({
                    data: JSON.parse(JSON.stringify(this.queryCondition)),
                    type: "ADD_QUERY"
                })
            },

            goToCriminal(id,url){                                
                this.$router.push({name: "criminal", query: {id,url}})
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "intelligentSearch.stylus"
</style>