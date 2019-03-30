<template>
    <div class="moreConditions">
        <div class="homeQuery">
            <div class="conditionData">
                <div class="conditionItem" v-show="item.showV" v-for="(item,index) in queryData">
                    <span class="itemDel" @click="delList(index)"></span>
                    <span class="itemV" :title="item.showV">{{item.showV}}</span>
                </div>
            </div>
            <button class="queryBtn userBtn" @click="linkQueryRes">搜索</button>
            <button class="intelligenceQueryBtn userBtn" @click="linkQuery">智能搜索</button>
        </div>
        <div class="zyState">
            <span>请选择在押状态:</span>
            <select class="selCondition" v-model="selData">
                <option v-for="v in selCondition">{{v.v}}</option>
            </select>
        </div>
        <div class="moreContent">
            <div class="moreQuery" v-for="(queryConfig,i) in queryConfigVo">
                <select class="selMoreQuery"
                        :class="{active:queryConfig.data.description===queryConfig.arr[0].description}"
                        v-model="queryConfig.data.description" @change="changeSelect(i)">
                    <option v-for="obj in queryConfig.arr">{{obj.description.replace(/\(\S*\)/,"")}}</option>
                </select>
                <div class="queryOpt" v-if="queryConfig.type===1" v-show="queryConfig.data.item">
                    <input type="text" class="optInput" v-model="queryConfig.data.v1"/>
                    <button class="userBtn optBtn" @click="handleSub(queryConfig,i)">提交</button>
                </div>
                <div class="queryOpt" v-if="queryConfig.type===2" v-show="queryConfig.data.item">

                    <Treeselect v-show="queryConfig.data.description!=='国籍分类'" class="opt1dicKey"
                                :options="queryConfig.data.dickey1Data"
                                :normalizer="normalizer"
                                v-model="queryConfig.data.v1"
                                @open="getDicKey(i)"
                                placeholder="请选择字典！"
                                :maxHeight="200"
                                :customIndexStr="i"
                                @select="set1DicKey1"
                                :clearValueText="clearValueText"
                                :noOptionsText="noOptionsText"
                                :noResultsText="noResultsText"
                    ></Treeselect>
                    <input type="text" v-show="queryConfig.data.description==='国籍分类'" class="optInput"
                           v-model="queryConfig.data.v1"/>
                    <button class="userBtn optBtn" @click="handleSub(queryConfig,i)">提交</button>
                </div>
                <div class="queryOpt" v-if="queryConfig.type===3" v-show="queryConfig.data.item">
                    <Treeselect class="opt1dicKey"
                                :options="queryConfig.data.dickey1Data"
                                :normalizer="normalizer"
                                v-model="queryConfig.data.v1"
                                @open="getDicKey(i)"
                                placeholder="请选择字典！"
                                :maxHeight="200"
                                @select="set3DicKey2"
                                :beforeClearAll="clear3DicKey1"
                                :clearValueText="clearValueText"
                                :customIndexStr="i"
                                :noOptionsText="noOptionsText"
                                :noResultsText="noResultsText"
                    ></Treeselect>
                    <Treeselect class="opt1dicKey"
                                :options="queryConfig.data.dickey2Data"
                                :normalizer="normalizer"
                                v-model="queryConfig.data.v2"
                                placeholder="请选择字典！"
                                :maxHeight="200"
                                :customIndexStr="i"
                                @select="set3DicKey3"
                                :beforeClearAll="clear3DicKey2"
                                :clearValueText="clearValueText"
                                :noOptionsText="noOptionsText"
                                :noResultsText="noResultsText"
                    ></Treeselect>
                    <Treeselect class="opt1dicKey"
                                :options="queryConfig.data.dickey3Data"
                                :normalizer="normalizer"
                                @select="set3DicKey4"
                                :customIndexStr="i"
                                v-model="queryConfig.data.v3"
                                placeholder="请选择字典！"
                                :maxHeight="200"
                                :clearValueText="clearValueText"
                                :noOptionsText="noOptionsText"
                                :noResultsText="noResultsText"
                    ></Treeselect>
                    <button class="userBtn optBtn" @click="handleSub(queryConfig,i)">提交</button>
                </div>
                <div class="queryOpt" v-if="queryConfig.type===4" v-show="queryConfig.data.item">
                    <input v-model="queryConfig.data.v1" type="text" placeholder="请选择时间！" class="Wdate" onClick="WdatePicker({errDealMode : 2, onpicked: function () {
                         var myEvent = new Event('input');
                         this.dispatchEvent(myEvent);
                           },oncleared:function() {
                            var myEvent = new Event('input');
                            this.dispatchEvent(myEvent);
                           }})"/>
                    <button class="userBtn optBtn" @click="handleSub(queryConfig,i)">提交</button>
                </div>
                <div class="queryOpt" v-if="queryConfig.type===5" v-show="queryConfig.data.item">
                    <input v-model="queryConfig.data.v1" type="text"/>
                    -
                    <input v-model="queryConfig.data.v2" type="text"/>
                    <button class="userBtn optBtn" @click="handleSub(queryConfig,i)">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {homePageZyztData} from "@/api/config"
    import {getAdvancedQueryConfigVoApi,getDicKeyApi} from "@/api/intelligentSearch.api"
    // import the component
    import Treeselect from '@riophae/vue-treeselect'
    // import the styles
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import {mapActions, mapMutations} from "vuex"

    export default {
        name: "moreConditions",
        components: {
            Treeselect
        },
        data() {
            return {
                noOptionsText: "暂无可用选项.",
                clearValueText: "删除",
                noResultsText: "没有找到值.",
                selData: "",
                selCondition: [],
                queryData: {
                    wb: {
                        showV: "",
                        dataV: []
                    },
                    sx: {
                        showV: "",
                        dataV: []
                    },
                    dz: {
                        showV: "",
                        dataV: []
                    },
                    rq: {
                        showV: "",
                        dataV: []
                    },
                    nl: {
                        showV: "",
                        dataV: []
                    },
                    xq: {
                        showV: "",
                        dataV: []
                    },
                    bl: {
                        showV: "",
                        dataV: []
                    },
                    tz: {
                        showV: "",
                        dataV: []
                    }
                },
                queryConfigVo: {},
                dicKeyDataList: {}
            }
        },
        created() {
            this.selData = homePageZyztData[0].v;
            this.selCondition = homePageZyztData;
        },
        mounted() {
            this.dicKeyDataList["IS"] = [{
                diccode: "是",
                name: "是"
            }, {
                diccode: "否",
                name: "否"
            }];
            this.getAdvancedQueryConfigVo()
        },
        methods: {
            delList(index) {
                Object.assign(this.queryData[index], {
                    showV: "",
                    dataV: []
                });
            },
            clear3DicKey1(i) {
                Object.assign(this.queryConfigVo[i].data, {
                    dickey2: "",
                    dickey2Data: [],
                    name1: "",
                    name2: "",
                    name3: "",
                    v2: undefined,
                    dickey3: "",
                    dickey3Data: [],
                    v3: undefined
                });
                return true
            },
            clear3DicKey2(i) {
                Object.assign(this.queryConfigVo[i].data, {
                    dickey3: "",
                    name2: "",
                    name3: "",
                    dickey3Data: [],
                    v3: undefined
                });
                return true
            },
            changeSelect(i) {
                let item = this.filterConfig(i);
                if (item.hasOwnProperty("dataType")) {
                    this.queryConfigVo[i].data.item = item;
                    if (this.queryConfigVo[i].data.hasOwnProperty("dickey1")) {
                        this.queryConfigVo[i].data.dickey1 = item.dicKey;
                    }
                } else {
                    this.queryConfigVo[i].data.item = ""
                }
                Object.assign(this.queryConfigVo[i].data, {
                    v1: undefined,
                    v2: undefined,
                    v3: undefined,
                    dickey1Data: [],
                    dickey2Data: [],
                    dickey3Data: [],
                    name1: "",
                    name2: "",
                    name3: ""
                })
            },
            filterConfig(i) {
                let queryConfigVo = this.queryConfigVo[i];
                let description = queryConfigVo.data.description;
                for (let item of queryConfigVo.arr) {
                    if (description === item.description.replace(/\(\S*\)/, "")) {
                        return item
                    }
                }
            },
            //字典指定属性
            normalizer(node) {
                return {
                    id: node.diccode,
                    label: node.name,
                    children: undefined
                }
            },
            getDicKey(i) {
                let queryConfigVo = this.queryConfigVo[i];
                let key = queryConfigVo.data.dickey1;
                if (!!this.dicKeyDataList.hasOwnProperty(key)) {
                    this.queryConfigVo[i].data.dickey1Data = this.dicKeyDataList[key];
                } else {
                    getDicKeyApi(key, key).then(res => {
                        let keyData = res.data[key];
                        this.dicKeyDataList[key] = keyData;
                        this.queryConfigVo[i].data.dickey1Data = keyData;
                    }).catch(err => {
                        this.$Message.warning("一级字典加载错误！");
                    })
                }
            },
            set1DicKey1({name}, i) {
                Object.assign(this.queryConfigVo[i].data, {
                    name1: name,
                });
            },
            set3DicKey2({dickey, name}, i) {
                let key = dickey;
                let levelKey = this.queryConfigVo[i].data.dickey1 + key;
                Object.assign(this.queryConfigVo[i].data, {
                    dickey2: "",
                    dickey2Data: [],
                    v2: undefined,
                    name1: name,
                    name2: "",
                    name3: "",
                    dickey3: key,
                    dickey3Data: [],
                    v3: undefined,
                });
                if (!!this.dicKeyDataList.hasOwnProperty(levelKey)) {
                    this.queryConfigVo[i].data.dickey2Data = this.dicKeyDataList[levelKey];
                } else {
                    getDicKeyApi(key, this.queryConfigVo[i].data.dickey1).then(res => {
                        let keyData = res.data[key];
                        this.dicKeyDataList[levelKey] = keyData;
                        this.queryConfigVo[i].data.dickey2Data = keyData;
                    }).catch(err => {
                        this.$Message.warning("二级字典加载错误！");
                    })
                }
            },
            set3DicKey3({dickey, name}, i) {
                let key = dickey;
                let levelKey = this.queryConfigVo[i].data.dickey1 + key;
                Object.assign(this.queryConfigVo[i].data, {
                    dickey3: key,
                    dickey3Data: [],
                    name2: name,
                    name3: "",
                    v3: undefined,
                });
                if (!!this.dicKeyDataList.hasOwnProperty(levelKey)) {
                    this.queryConfigVo[i].data.dickey3Data = this.dicKeyDataList[levelKey];
                } else {
                    getDicKeyApi(key, this.queryConfigVo[i].data.dickey1).then(res => {
                        let keyData = res.data[key];
                        this.dicKeyDataList[levelKey] = keyData;
                        this.queryConfigVo[i].data.dickey3Data = keyData;
                    }).catch(err => {
                        this.$Message.warning("二级字典加载错误！");
                    })
                }
            },
            set3DicKey4({name}, i) {
                Object.assign(this.queryConfigVo[i].data, {
                    name3: name,
                });
            },
            getAdvancedQueryConfigVo() {
                getAdvancedQueryConfigVoApi().then(res => {
                    if (res.status === 200) {
                        res.data.length && (this.queryConfigVo = this.filterQueryConfigVo(res.data));
                    }
                }).catch(err => {

                })
            },
            ...mapActions([
                "handlerMoreQueryConditionsAsync",
            ]),
            ...mapMutations([
                "handlerQueryMore"
            ]),
            filterQueryConfigVo(res) {
                let queryConfigVo = {};
                res.map(v => {
                    /*  type:
                    1:1级文本输入框
                    2：1级字典
                    3:3级字典
                    4:1级时间框
                    5:2级文本输入框
                    * */
                    switch (v.fastQueryType) {
                        case 1:
                            queryConfigVo.hasOwnProperty("wb") ? queryConfigVo["wb"].arr.push(v) : queryConfigVo["wb"] = {
                                arr: [{description: "文 本"}],
                                type: 1,
                                data: {
                                    description: "文 本",
                                    v1: "",
                                    item: ""
                                }
                            };
                            break;
                        case 2:
                            queryConfigVo.hasOwnProperty("sx") ? queryConfigVo["sx"].arr.push(v) : queryConfigVo["sx"] = {
                                arr: [{description: "属 性"}],
                                type: 2,
                                data: {
                                    description: "属 性",
                                    v1: undefined,
                                    name1: "",
                                    dickey1: '',
                                    dickey1Data: [],
                                    item: ""
                                }
                            };
                            break;
                        case 3:
                            queryConfigVo.hasOwnProperty("dz") ? queryConfigVo["dz"].arr.push(v) : queryConfigVo["dz"] = {
                                arr: [{description: "地 址"}],
                                type: 3,
                                data: {
                                    description: "地 址",
                                    v1: undefined,
                                    v2: undefined,
                                    v3: undefined,
                                    name1: "",
                                    name2: "",
                                    name3: "",
                                    dickey1: '',
                                    dickey2: '',
                                    dickey3: '',
                                    dickey1Data: [],
                                    dickey2Data: [],
                                    dickey3Data: [],
                                    item: ""
                                }
                            };
                            break;
                        case 4:
                            queryConfigVo.hasOwnProperty("rq") ? queryConfigVo["rq"].arr.push(v) : queryConfigVo["rq"] = {
                                arr: [{description: "日 期"}],
                                type: 4,
                                data: {
                                    description: "日 期",
                                    v1: "",
                                    v2: "",
                                    v3: "",
                                    item: ""
                                }
                            };
                            break;
                        case 5:
                            queryConfigVo.hasOwnProperty("nl") ? queryConfigVo["nl"].arr.push(v) : queryConfigVo["nl"] = {
                                arr: [{description: "年 龄"}],
                                type: 5,
                                lx: "Between",
                                data: {
                                    description: "年 龄",
                                    v1: "",
                                    v2: "",
                                    v3: "",
                                    item: ""
                                }
                            };
                            break;
                        case 6:
                            queryConfigVo.hasOwnProperty("xq") ? queryConfigVo["xq"].arr.push(v) : queryConfigVo["xq"] = {
                                arr: [{description: "刑 期"}],
                                type: 5,
                                data: {
                                    description: "刑 期",
                                    v1: "",
                                    v2: "",
                                    v3: "",
                                    item: ""
                                }
                            };
                            break;
                        case 7:
                            queryConfigVo.hasOwnProperty("bl") ? queryConfigVo["bl"].arr.push(v) : queryConfigVo["bl"] = {
                                arr: [{description: "比 例"}],
                                type: 5,
                                data: {
                                    description: "比 例",
                                    v1: "",
                                    v2: "",
                                    v3: "",
                                    item: ""
                                }
                            };
                            break;
                        case 8:
                            v.dicKey = "IS";
                            queryConfigVo.hasOwnProperty("tz") ? queryConfigVo["tz"].arr.push(v) : queryConfigVo["tz"] = {
                                arr: [{description: "特 征"}],
                                type: 2,
                                data: {
                                    description: "特 征",
                                    v1: undefined,
                                    name1: "",
                                    dickey1: '',
                                    dickey1Data: [],
                                    item: ""
                                }
                            };
                            break;
                    }
                });
                return queryConfigVo;
            },
            handleSub({data, type, lx}, i) {
                let [dataV, showV] = [data.item, ""];
                if (lx) {
                    data.item.logicValue = lx;
                } else {
                    if (type === 4 || type === 5) {
                        data.item.logicValue = "In";
                    } else {
                        data.item.logicValue = "Like";
                    }
                }
                switch (true) {
                    case type === 1 || type === 4:
                        if (!data.v1) {
                            this.$Message.warning("未填写数据！");
                            return
                        }
                        data.item.fieldValue = data.v1;
                        showV = `${data.description}包含${data.v1};`;
                        break;
                    case type === 2:
                        if (!data.v1) {
                            this.$Message.warning("未填写数据！");
                            return
                        }
                        data.item.fieldValue = data.v1;
                        showV = `${data.description}包含${data.name1};`;
                        break;
                    case type === 3:
                        if (!data.v1) {
                            this.$Message.warning("未填写数据！");
                            return
                        }
                        data.item.fieldValue = data.v3 || data.v2 || data.v1;
                        showV = `${data.description}包含${data.name3 || data.name2 || data.name1};`;
                        break;
                    case type === 5:
                        if (!data.v1 && !data.v2) {
                            this.$Message.warning("未填写数据！");
                            return
                        }
                        data.item.fieldValue = `${data.v1}---${data.v2}`;
                        showV = `${data.description}包含${data.v1 || "--"}到${data.v2 || "--"};`;
                        break;
                    default:
                        return;
                }
                this.queryData[i].dataV.push(dataV);
                this.queryData[i].showV += showV;
            },
            filterQueryData(queryData) {
                queryData = Object.values(queryData);
                let queryObj = {};
                for (let data of queryData) {
                    if (!!data.dataV.length) {
                        for (let {fieldName, className, tableName, dataType, dicKey, fieldValue, logicValue} of data.dataV) {
                            if (queryObj.hasOwnProperty(fieldName)) {
                                queryObj[fieldName].contents.push({
                                    dataType: dataType,
                                    dicKey: dicKey,
                                    logic: logicValue,
                                    value: fieldValue
                                })
                            } else {
                                queryObj[fieldName] = {
                                    contents: [{
                                        dataType: dataType,
                                        dicKey: dicKey,
                                        logic: logicValue,
                                        value: fieldValue
                                    }],
                                    field: fieldName,
                                    className: className,
                                    tableName: tableName
                                };
                            }
                        }
                    }
                }
                if (!Object.values(queryObj).length) {
                    return false
                }
                let arr = [];
                for (let item in queryObj) {
                    arr.push(queryObj[item])
                }
                return arr
            },
            linkQueryRes() {
                let query = this.filterQueryData(this.queryData);
                let zyzt = "";
                for (let v of this.selCondition) {
                    if (this.selData === v.v) {
                        zyzt = v.id;
                        break
                    }
                }
                if (query) {
                    this.handlerQueryMore({
                        zyzt: zyzt,
                        queryVOList: query
                    });
                    this.handlerMoreQueryConditionsAsync("CHANGE_QUERY");
                    this.$router.push({
                        name: "queryRes",
                        params: {
                            type: 1
                        }
                    })
                } else {
                    this.$Message.warning("请选择查询条件！");
                }
            },
            linkQuery() {
                this.$router.push({
                    name: "queryRes"
                })
            }
        }
    }
</script>
<style>
    .opt1dicKey {
        margin-right: 20px;
        float: left;
        width: 240px;
        height: 100%;
    }

    .optFour {
        width: 175px !important;
    }

    .opt1dicKey.multiple {
        width: 400px;
    }

    .opt1dicKey .vue-treeselect__control {
        border-color: #4197f8;
        background-color: #09256f;
    }

    .opt1dicKey.multiple .vue-treeselect__multi-value-item {
        background-color: #180369;
        color: #fff;
    }

    .opt1dicKey .vue-treeselect__control .vue-treeselect__single-value {
        color: #fff;
    }

    .opt1dicKey .vue-treeselect__control .vue-treeselect__input {
        color: #fff;
    }

    .opt1dicKey .vue-treeselect__menu {
        background-color: #262b4a;
        border-color: #4197f8;
    }

    .opt1dicKey .vue-treeselect__menu .vue-treeselect__option--highlight {
        background-color: #4197f8 !important;
    }

    .opt1dicKey .vue-treeselect__list-item .vue-treeselect__option--selected {
        background-color: #0d3c91;
    }
</style>
<style lang="stylus" scoped>
    @import "moreConditions.stylus"
</style>