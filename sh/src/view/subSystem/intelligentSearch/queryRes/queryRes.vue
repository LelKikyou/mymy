<template>
    <div class="queryRes">
        <div class="homeQuery">
            <input class="queryipt" v-model="queryCondition.query" placeholder="请输入罪犯编号或罪犯姓名！" type="text"
                   @keydown.enter="handlerQuery">
            <button class="queryBtn userBtn" @click="handlerQuery">搜索</button>
            <button class="intelligenceQueryBtn userBtn" @click="linkMoreCondition">高级搜索</button>
        </div>
        <div class="zyState">
            <span>请选择在押状态:</span>
            <select class="selCondition" v-model="queryCondition.value">
                <option v-for="v in selCondition">{{v.v}}</option>
            </select>
        </div>
        <div class="queryResContent">
            <queryResList @upHandlerQuery="upHandlerQuery" :getQueryResData="queryData"
                          ref="queryResListDom"></queryResList>
        </div>
    </div>
</template>

<script>
    import {homePageZyztData} from "@/api/config"
    import {mapActions, mapGetters, mapMutations} from "vuex"
    import queryResList from "./components/queryResList/queryResList"

    export default {
        name: "queryRes",
        data() {
            return {
                queryCondition: {
                    query: "",
                    zyzt: "",
                    pageNum: 1,
                    pageSize: 24,
                    fields: [
                        "zfBh", "xm", "xb", "nl", "zyzt"
                    ],
                    value: ""
                },  //查询条件  //查询条件
                queryData: {},
                selCondition: [],
                type: 0  //0为普通查询，1为高级查询
            }
        },
        components: {
            queryResList
        },
        created() {
            this.queryCondition.value = homePageZyztData[0].v;
            this.selCondition = homePageZyztData;
        },
        computed: {
            ...mapGetters([
                "getQueryResData"
            ])
        },
        mounted() {
            let params = this.$route.params;
            if (!!params.sign) {
                this.queryCondition.query = params.query;
                this.handlerQuery();
            }
            if (params.hasOwnProperty("type")) {
                this.type = params.type;
            }
            if (this.type) {
                this.$refs.queryResListDom.initialization();
            }
        },
        methods: {
            ...mapActions([
                "handlerQueryResDataAsync",
                "handlerMoreQueryConditionsAsync"
            ]),
            linkMoreCondition() {
                this.$router.push({
                    path: "moreConditions"
                })
            },
            handlerQuery() {
                this.type = 0;
                let value = this.queryCondition.value;
                for (let v of this.selCondition) {
                    if (value === v.v) {
                        this.queryCondition.zyzt = v.id;
                        break
                    }
                }
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
                let type = this.type;
                if (type === 0) {
                    this.queryCondition.pageNum++;
                    this.handlerQueryResDataAsync({
                        data: JSON.parse(JSON.stringify(this.queryCondition)),
                        type: "ADD_QUERY"
                    })
                } else if (type === 1) {
                    this.handlerMoreQueryConditionsAsync("ADD_QUERY");
                }
            }
        },
        watch: {
            getQueryResData: {
                handler: function () {
                    let value = this.queryCondition.query;
                    let queryData = JSON.parse(JSON.stringify(this.getQueryResData));
                    if (value) {
                        let reg = new RegExp(value, 'g');
                        let replaceString = '<em>' + value + '</em>';
                        if (queryData.list) {
                            queryData.list.map(v => {
                                this.queryCondition.fields.map(i => {
                                    v[i] = (v[i] + "").replace(reg, replaceString)
                                });
                                return v
                            });
                        }
                    }
                    this.queryData = queryData
                },
                deep: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "queryRes.stylus"
</style>