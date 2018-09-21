<template>
    <div class="lsfx">
        <!--报表类型-->
        <div class="list s-margin s-color">
            <div class="s-title">
                <span class="s-span">选择报表类型</span>
            </div>
            <!--1-->
            <div class="block">
                <!---->
                <div class="unit" @click="selectSynthesize()" v-bind:class="[this.unitActive==true&&this.unitType=='synthesize'?'active':'']">
                    <i></i>
                    <span>综合类报表</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='synthesize'">
                    <div v-for="item in prisonData" class="son-item" :key='item.id' @click="selectItem(item.id)" :class="{active: prisonName ==item.id }">
                        <span>{{item.name}}</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
            <!--2-->
            <div class="block">
                <!---->
                <div class="unit" @click="selectPrison()" v-bind:class="[this.unitActive==true&&this.unitType=='prison'?'active':'']">
                    <i class="icon-2"></i>
                    <span>监狱类报表</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='prison'">
                    <div class="son-item">
                        <span>XXX报表</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
            <!--3-->
            <div class="block">
                <!---->
                <div class="unit" @click="selectCorrect()" v-bind:class="[this.unitActive==true&&this.unitType=='correct'?'active':'']">
                    <i class="icon-3"></i>
                    <span>社矫类报表</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='correct'">
                    <div class="son-item">
                        <span>XXX报表</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
            <!--4-->
            <div class="block">
                <!---->
                <div class="unit" @click="selectTreatment()" v-bind:class="[this.unitActive==true&&this.unitType=='treatment'?'active':'']">
                    <i class="icon-4"></i>
                    <span>戒毒类报表</span>
                    <b></b>
                    <div class="line"></div>
                </div>
                <!---->
                <div class="son" v-show="unitActive&&unitType=='treatment'">
                    <div class="son-item">
                        <span>XXX报表</span>
                        <div class="line-thin"></div>
                    </div>
                </div>
            </div>
            <!--btn-->
            <div class="btnArea">
                <button>生成报表</button>
            </div>
        </div>
        <!--报表列表-->
        <div class="list s-margin s-color">
            <div class="s-title">
                <span class="s-span">报表列表</span>

            </div>
            <!---->
            <!---->
            <div class="report">
                <div v-for="item in reportData"
                     class="report-item"
                     :key='item.id'
                     @click="selectReportItem(item)"
                     :class="{active: reportName ==item.id}"
                     v-bind:style="{ 'border-left-color': borderColor}"
                >
                    <img :src="item.imgUrl" alt="" class="r-type">
                    <span>{{item.content}}</span>
                    <img src="../../../../assets/lsfx/close.png" alt="" class="r-close">
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <!--content-->
        <div class="r-content s-margin s-color">
            <div class="s-title">
                <span class="s-span">报表浏览</span>
            </div>
            <!---->
            <div class="downArea clearfix">
                <button><img src="../../../../assets/lsfx/down.png" alt="">下载</button>
            </div>
            <!---->
            <div class="r-info">
                <h2>XXXX报表</h2>
                <p>富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、
                    民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、
                    友善是公民个人层面的价值准则。富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行
                    社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标
                    自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，富强、民主、文明、和谐，倡导自由
                    平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标自
                    由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、
                    友善是公民个人层面的价值准则。</p>
            </div>
        </div>
    </div>
</template>

<script >
    import yellowIcon from "../../../../assets/shzxjzpt/yellow_icon.png";
    import greenIcon from "../../../../assets/shzxjzpt/green_icon.png";
    import blueIcon from "../../../../assets/shzxjzpt/blue_icon.png";

    let now   = new Date();
    export default {
        name: "sjbb",
        data(){
            return {
                unitActive:true,
                unitType:'synthesize',
                dateData:[],
                prisonData:[
                    {
                        id:1,
                        name:'XXX报表'
                    },
                    {
                        id:2,
                        name:'XX报表'
                    },
                    {
                        id:3,
                        name:'X报表'
                    }
                ],
                prisonName:0,
                reportData:[
                    {
                        imgUrl:yellowIcon,
                        id:1,
                        content:'XXX报表',
                        color:'yellow'
                    },
                    {
                        imgUrl:greenIcon,
                        id:2,
                        content:'XXX报表',
                        color:'green'
                    },
                    {
                        imgUrl:blueIcon,
                        id:3,
                        content:'XXX报表',
                        color:'blue'
                    },
                ],
                reportName:0,
                imgUrl:'',
                borderColor:''
            }
        },
        mounted(){

        },
        methods: {
            selectCorrect(){
                this.unitType=='correct'&&this.unitActive?this.unitActive=false:this.unitActive=true;
                this.unitType='correct';
            },
            selectPrison(){
                this.unitType=='prison'&&this.unitActive?this.unitActive=false:this.unitActive=true;
                this.unitType='prison';
            },
            selectSynthesize(){
                this.unitType=='synthesize'&&this.unitActive?this.unitActive=false:this.unitActive=true;
                this.unitType='synthesize';
            },
            selectTreatment(){
                this.unitType=='treatment'&&this.unitActive?this.unitActive=false:this.unitActive=true;
                this.unitType='treatment';
            },

            selectItem(val){
                this.prisonName=val;
            },

            selectReportItem(val){
                this.reportName=val.id;
                // this.borderColor
                if(val.color=='blue'){
                    this.borderColor='#00ffff';
                }else if(val.color=='yellow'){
                    this.borderColor='#fbd22c';
                }else{
                    this.borderColor='#48ff00';
                }
            }
        }
    }
</script>
<style scoped>
    @import "sjbb.css";
</style>