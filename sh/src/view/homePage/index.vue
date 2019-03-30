<template>
    <div class="sjgl">
        <div class="homeBox">
            <div class="situation">
                <div class="s-title">
                    <span class="s-span">监狱概况</span>
                </div>
                <div class="s-box">
                    <div class="s-area">
                        <div class="zfNum">
                            <div class="zfLeft">
                                <p>111人</p>
                                <p>在押犯数量</p>
                            </div>
                            <div class="zfRight">
                                <p>111</p>
                                <p>同比去年</p>
                            </div>
                        </div>
                        <div class="jcNum">
                            <div class="zfLeft">
                                <p>111人</p>
                                <p>执法人员</p>
                            </div>
                            <div class="zfLeft">
                                <p>111</p>
                                <p>警力配比</p>
                            </div>
                            <div class="zfLeft last">
                                <p>xxx</p>
                                <p>监狱</p>
                            </div>
                        </div>
                        <div class="bjNum">
                            <div class="zfLeft">
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>本月新增</p>
                                </div>
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>较上月</p>
                                </div>
                            </div>
                            <div class="zfLeft">
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>本月减少</p>
                                </div>
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>较上月</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="situation s-chart">
                <div class="s-title">
                    <span class="s-span">罪犯刑期分布</span>
                </div>
                <div class="s-box">
                    <chartBox :chartData="prisonBar"></chartBox>
                </div>
            </div>
            <div class="situation s-chart">
                <div class="s-title">
                    <span class="s-span">高危罪犯年龄分析</span>
                </div>
                <div class="s-box">
                    <chartBox :chartData="prisonAgeBar"></chartBox>
                </div>
            </div>
        </div>
        <div class="homeBox">
            <div class="situation">
                <div class="s-title">
                    <span class="s-span">戒毒概况</span>
                </div>
                <div class="s-box">
                    <div class="s-area">
                        <div class="zfNum">
                            <div class="zfLeft">
                                <p>111人</p>
                                <p>戒毒人员数量</p>
                            </div>
                            <div class="zfRight">
                                <p>111</p>
                                <p>同比去年</p>
                            </div>
                        </div>
                        <div class="jcNum">
                            <div class="zfLeft">
                                <p>111人</p>
                                <p>执法人员</p>
                            </div>
                            <div class="zfLeft">
                                <p>111</p>
                                <p>警力配比</p>
                            </div>
                            <div class="zfLeft last">
                                <p>xxx</p>
                                <p>戒毒所</p>
                            </div>
                        </div>
                        <div class="bjNum">
                            <div class="zfLeft">
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>本月新增</p>
                                </div>
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>较上月</p>
                                </div>
                            </div>
                            <div class="zfLeft">
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>本月减少</p>
                                </div>
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>较上月</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="situation s-chart">
                <div class="s-title">
                    <span class="s-span">戒毒人员四期分布情况</span>
                </div>
                <div class="s-box">
                    <chartBox :chartData="drugBar"></chartBox>
                </div>
            </div>
            <div class="situation s-chart">
                <div class="s-title">
                    <span class="s-span">戒毒人员吸毒年限</span>
                </div>
                <div class="s-box">
                    <chartBox :chartData="drugYearBar"></chartBox>
                </div>
            </div>
        </div>
        <div class="homeBox">
            <div class="situation">
                <div class="s-title">
                    <span class="s-span">社区矫正概况</span>
                </div>
                <div class="s-box">
                    <div class="s-area">
                        <div class="zfNum">
                            <div class="zfLeft">
                                <p>111人</p>
                                <p>矫正人员数量</p>
                            </div>
                            <div class="zfRight">
                                <p>111</p>
                                <p>同比去年</p>
                            </div>
                        </div>
                        <div class="jcNum">
                            <div class="zfLeft">
                                <p>111人</p>
                                <p>执法人员</p>
                            </div>
                            <div class="zfLeft">
                                <p>111</p>
                                <p>警力配比</p>
                            </div>
                            <div class="zfLeft last">
                                <p>xxx</p>
                                <p>矫正机构</p>
                            </div>
                        </div>
                        <div class="bjNum">
                            <div class="zfLeft">
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>本月新增</p>
                                </div>
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>较上月</p>
                                </div>
                            </div>
                            <div class="zfLeft">
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>本月减少</p>
                                </div>
                                <div class="sonBox">
                                    <p>111人</p>
                                    <p>较上月</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="situation s-chart">
                <div class="s-title">
                    <span class="s-span">社矫五独人员分类统计</span>
                </div>
                <div class="s-box">
                    <chartBox :chartData="sjBar"></chartBox>
                </div>
            </div>
            <div class="situation s-chart">
                <div class="s-title">
                    <span class="s-span">社矫五涉人员分类统计</span>
                </div>
                <div class="s-box">
                    <chartBox :chartData="sjCalcBar"></chartBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import chartBox from '@/components/chartBox/chartBox'
    export default {
        name: "sjgl",
        data() {
            return {
                prisonBar:{
                    title:'',
                    id:'bar1',
                    type:'ybar',
                },
                prisonAgeBar:{
                    title:'',
                    id:'bar2',
                    type:'ybar',
                },
                drugBar:{
                    title:'',
                    id:'pie1',
                    type:'pie',
                },
                drugYearBar:{
                    title:'',
                    id:'pie2',
                    type:'pie',
                },
                sjBar:{
                    title:'',
                    id:'bar5',
                    type:'ybar',
                },
                sjCalcBar:{
                    title:'',
                    id:'bar6',
                    type:'ybar',
                },
            };
        },
        mounted() {
            this.drawPrisonBar();
            this.drawPrisonAgeBar();
            this.drawDrugBar();
            this.drawDrugYearBar();
            this.drawSjBarBar();
            this.drawSjCalcBar();
        },
        components: {
            chartBox
        },
        methods: {
            drawPrisonBar(){
                let curData={
                    xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    yData:[120, 200, 150, 80, 70, 110, 130],
                }
                this.$set(this.prisonBar,'dataJson',curData)
            },
            drawPrisonAgeBar(){
                let curData={
                    xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    yData:[120, 200, 150, 80, 70, 110, 130],
                }
                this.$set(this.prisonAgeBar,'dataJson',curData)
            },
            drawDrugBar(){
                let curData=[
                    {value: 1, name:'矫正专职人员'},
                    {value: 2, name:'戒毒民警'},
                    {value: 3, name:'矫正民警'},
                    {value: 4, name:'监狱民警'},
                ]
                this.$set(this.drugBar,'dataJson',curData)
            },
            drawDrugYearBar(){
                let curData=[
                    {value: 1, name:'矫正专职人员'},
                    {value: 2, name:'戒毒民警'},
                    {value: 3, name:'矫正民警'},
                    {value: 4, name:'监狱民警'},
                ]
                this.$set(this.drugYearBar,'dataJson',curData)
            },
            drawSjBarBar(){
                let curData={
                    xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    yData:[120, 200, 150, 80, 70, 110, 130],
                }
                this.$set(this.sjBar,'dataJson',curData)
            },
            drawSjCalcBar(){
                let curData={
                    xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    yData:[120, 200, 150, 80, 70, 110, 130],
                }
                this.$set(this.sjCalcBar,'dataJson',curData)
            },
        }
    };
</script>
<style lang="stylus" scoped>
    @import "sjgl.stylus"
</style>