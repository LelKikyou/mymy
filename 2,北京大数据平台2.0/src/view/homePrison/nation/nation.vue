<template>
    <div class="nation">
        <div class="left">
            <leftTop :allPrisonSurvey="allPrisonSurvey"></leftTop>
            <leftBottom style="margin-top: 16px" :fiveYearCCE="fiveYearCCE"></leftBottom>
        </div>
        <div class="middle" style="padding: 0 20px">
            <midTop :boxTitle="boxTitle" :chartOpt="nationalnOrProvinceMap"></midTop>
            <midBottom style="margin-top: 16px" :personDistribution="personDistribution"></midBottom>
        </div>
        <right :dataTop="crimes" :data-mid="prisonConditions" :data-bot="prisonEventInfo"></right>
    </div>
</template>

<script>
    import leftTop from "../components/leftTop"
    import leftBottom from "../components/leftBottom"
    import midTop from "../components/midTop"
    import midBottom from "../components/midBottom"
    import right from "../components/right"
    import {getHomePrisonApi, getProvinceApi} from "@/api/homePrisonApi"

    export default {
        name: "nation",
        components: {
            leftTop,
            leftBottom,
            midTop,
            midBottom,
            right
        },
        data() {
            return {
                //判断是全国:nation，还是各省province
                type: "",
                //监狱概况
                allPrisonSurvey: {
                    topV: [],
                    botV: []
                },
                //近5年罪犯变化数量趋势
                fiveYearCCE: [],
                //犯罪情况
                crimes: {},
                //监狱情况
                prisonConditions: [],
                //全国地图(监狱数量and罪犯数量)or各省地图
                nationalnOrProvinceMap: {},
                //全国各监狱人员分布or(全省)
                personDistribution: {},
                //监狱事件动态信息
                prisonEventInfo: [],
                boxTitle: ""
            }
        },
        created() {
            this.judgeType()
        },
        mounted() {
            this.init();
        },
        methods: {
            //判断是全国，还是各省
            judgeType() {
                this.type = this.$route.name
            },
            init() {
                if (this.type === "nation") {
                    this.handleNationData()
                } else {
                    this.handleProvinceData()
                }
            },
            //获取处理全国数据
            handleNationData() {
                this.boxTitle = "全国";
                getHomePrisonApi().then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        let data = res.data;
                        //全国监狱概况
                        this.allPrisonSurvey = data.allPrisonSurvey;
                        //近5年罪犯变化数量趋势
                        this.fiveYearCCE = data.fiveYearCCE;
                        //罪犯情况
                        this.crimes = data.crimes;
                        //监狱情况
                        this.prisonConditions = data.prisonConditions;
                        //监狱事件动态信息
                        this.prisonEventInfo = data.prisonEventInfo;
                        //全国地图(监狱数量and罪犯数量)
                        this.nationalnOrProvinceMap = data.nationalnMap;
                        //全国各监狱人员分布or(全省)
                        this.personDistribution = data.personDistribution
                    } else {
                        console.log(res)
                    }
                }).catch(err => {

                })
            },
            //获取处理各省数据
            handleProvinceData() {
                let provinceCode = this.$route.params.provinceCode;
                getProvinceApi(provinceCode).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        let data = res.data;
                        //全省监狱概况
                        this.allPrisonSurvey = data.allPrisonSurvey;
                        //近5年罪犯变化数量趋势
                        this.fiveYearCCE = data.fiveYearCCE;
                        //省份名字
                        this.boxTitle = data.provinceName;
                        //全国地图(监狱数量and罪犯数量)or各省地图
                        this.nationalnOrProvinceMap = data.provincePrisonInfo;
                        //全国各监狱人员分布or(全省)
                        this.personDistribution = data.personDistribution;
                        //罪犯情况
                        this.crimes = data.crimes;
                        //监狱情况
                        this.prisonConditions = data.prisonConditions;
                        //监狱事件动态信息
                        this.prisonEventInfo = data.prisonEventInfo;
                    } else {
                        console.log(res)
                    }
                }).catch(

                )
            }
        },

    }
</script>

<style lang="stylus" scoped>
    @import "nation.stylus"
</style>
