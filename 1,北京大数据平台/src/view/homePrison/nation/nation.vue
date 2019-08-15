<template>
    <div class="nation">
        <div class="left">
            <leftTop :vData="jygkData"></leftTop>
            <leftBottom :dataV="xqgcData" style="margin-top: 15px"></leftBottom>
        </div>
        <div class="middle" style="padding: 0 20px">
            <midTop :qggsjyryfbData="mapData" :boxTitle="boxTitle"></midTop>
            <midBottom style="margin-top: 15px" :qggsjyryfbData="qggsjyData" :qsgjyryfb="qsgjyryfb"
                       :zyzfMax="zyzfMax"></midBottom>
        </div>
        <div class="right">
            <right :dataTop="fzqkData" :dataBot="zfnlgcqkData" :dataMid="jyqkData" :jyNum="jyNum"></right>
        </div>
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
                jygkData: {
                    topV: [],
                    botV: []
                },
                //刑期构成
                xqgcData: [],
                //犯罪情况
                fzqkData: {},
                //罪犯年龄构成情况
                zfnlgcqkData: [],
                //监狱情况
                jyqkData: {},
                //中间地图
                mapData: [],
                //全国各省监狱
                qggsjyData: [],
                //全省各监狱人员分布
                qsgjyryfb: {},
                //各省监狱数量
                jyNum: 0,
                boxTitle: "全国",
                //在押罪犯总数
                zyzfMax: "0"
            }
        },
        created() {
            this.judgeType()
        },
        mounted() {
            this.init();
        },
        methods: {
            //子组件公用的画圆
            drawCircular(dom, solidPer, dashedPer) {
                this.$nextTick(() => {
                    let [width, height] = [dom.clientWidth, dom.clientHeight];
                    let t = Math.min(width, height);
                    let [divSolid, divDashed] = [document.createElement("div"), document.createElement("div")];
                    divSolid.style = `position: absolute;border: 4px solid #1eabfc;top: 50%;left: 50%;z-index: 0;width: ${t * solidPer}px;height: ${t * solidPer}px;border-radius: 50%;margin-top: ${-t * solidPer / 2}px;margin-left: ${-t * solidPer / 2}px`;
                    divDashed.style = `position: absolute;border: 1px dashed #1eabfc;top: 50%;left: 50%;z-index: 0;width: ${t * dashedPer}px;height: ${t * dashedPer}px;border-radius: 50%;margin-top: ${-t * dashedPer / 2 }px;margin-left: ${-t * dashedPer / 2}px`;
                    dom.appendChild(divSolid);
                    dom.appendChild(divDashed);
                });
            },
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
                getHomePrisonApi().then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        let data = res.data;
                        //全国监狱概况
                        this.jygkData = data.allPrisonSurvey;
                        //刑期构成
                        this.xqgcData = data.xqConstitute;
                        //罪犯情况
                        this.fzqkData = data.crimes;
                        //犯罪年龄构成情况
                        this.zfnlgcqkData = data.ageCompositionOfTheCrime
                        //监狱情况
                        this.jyqkData = data.prisonConditions
                        //全国各省监狱
                        this.qggsjyData = data.provincialPrisonInformations
                        //中间地图
                        this.mapData = data.provincialPrisonInformations
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
                        this.jygkData = data.provincePrisonSituation;
                        //在押罪犯总数
                        this.zyzfMax = this.jygkData.topV[0] ? this.jygkData.topV[0] + "" : "0";
                        //刑期构成
                        this.xqgcData = data.xqConstitute;
                        //罪犯情况
                        this.fzqkData = data.crimes;
                        //犯罪年龄构成情况
                        this.zfnlgcqkData = data.ageCompositionOfTheCrime;
                        //中间地图
                        let dwInfoList = data.dwInfoList;
                        this.jyNum = dwInfoList.length; //监狱数量
                        this.boxTitle = data.provinceName; //省份名字
                        this.mapData = data.dwInfoList; //中间地图 各省监狱信息，包括坐标，之类的
                        //全省各监狱人员分布
                        this.qsgjyryfb = data.provincePrisonStaffDistribution;
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
