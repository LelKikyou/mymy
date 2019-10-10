<template>
    <div class="cirExeHeader">
        <div class="tit">{{filType.titName}}</div>
        <div class="icon">
            <i :class="['iconfont',filType.icon]"></i>
        </div>
        <div class="dataNum">
            <p>
                <countTo :end="parseInt(cirExeHeData.zyNum)||0"></countTo>
            </p>
            <p>{{filType.zyNumName}}</p>
        </div>
        <div class="cut">
            <div class="cutImg">
                <span>环比</span><img src="../../../../assets/criminalExecution/shang.png"/> <!--shang or xia-->
            </div>
            <div class="cutName">
                {{cirExeHeData.hb}}%
            </div>
        </div>
        <div class="lastMonthNum">
            <div>
                <span>{{filType.syInName}}:</span>
                <span><countTo :end="parseInt(cirExeHeData.syIn)||0"></countTo></span>
            </div>
            <div class="out">
                <span>{{filType.syOutName}}:</span>
                <span><countTo :end="parseInt(cirExeHeData.syOut)||0"></countTo></span>
            </div>
        </div>
        <div class="edit" @click="$emit('handleRouter')">
            <i class="iconfont iconjinru"></i>
        </div>
    </div>
</template>

<script>
    import countTo from "@/components/count-to"

    export default {
        name: "cirExeHeader",
        components: {
            countTo
        },
        props: {
            cirExeHeData: {
                type: Object,
                default() {
                    return {
                        type: 0,//0为监狱、1为戒毒、2为社矫
                        zyNum: 0,
                        hb: 0,
                        syIn: 0,
                        syOut: 0
                    }
                }
            }
        },
        computed: {
            filType() {
                let type = this.cirExeHeData.type;
                if (type === 0) {
                    return {
                        icon: "iconjianyu",
                        titName: "监狱",
                        zyNumName: "在押罪犯",
                        syInName: "上月入监",
                        syOutName: "上月出监"
                    }
                } else if (type === 1) {
                    return {
                        icon: "iconshedufan",
                        titName: "戒毒",
                        zyNumName: "戒毒人员",
                        syInName: "上月入所",
                        syOutName: "上月离所"
                    }
                } else {
                    return {
                        icon: "iconshejiao",
                        titName: "社矫",
                        zyNumName: "社矫人员",
                        syInName: "上月入矫",
                        syOutName: "上月脱矫"
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "cirExeHeader.stylus"
</style>
