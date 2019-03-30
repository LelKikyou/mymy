<template>
    <div class="c-criminal" ref='content' id="scrollBox">
        <!--l-->
        <div class="c-baseInfo s-margin s-color">
            <div class="pic">
                <img src="../../../assets/shzxjzpt/noPic.png" alt="">
                <div class="c-sonTitle">
                    <span>基本信息</span>
                </div>
            </div>
            <!---->
            <div class="infoBox">
                <!---->
                <div class="c-item">
                    <span>姓&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                    <b>{{fxBaseData.name||fxBaseData.xingming}}</b>
                </div>
                <!---->
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <span>身份证号：</span>
                    <b>{{fxBaseData.idCard||fxBaseData.zhengjianhao||fxBaseData.citizenid}}</b>
                </div>
                <!---->
                <div class="c-item">
                    <span>年&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
                    <b v-if="fxBaseData.birthday">{{calcAge(fxBaseData.birthday)}}</b>
                    <b v-else-if="fxBaseData.chushengriqi">{{calcAge(fxBaseData.chushengriqi)}}</b>
                    <b v-else-if="fxBaseData.dateofbirth">{{calcAge(fxBaseData.dateofbirth)}}</b>
                    <b v-else-if="fxBaseData.chushengnianyue">{{calcAge(fxBaseData.chushengnianyue)}}</b>
                </div>
                <div class="c-item">
                    <!---->
                    <div class="c-two">
                        <span>性&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
                        <b>{{fxBaseData.sex||fxBaseData.xingbieName}}</b>
                    </div>
                </div>
                <!---->
                <div class="c-item">
                    <span>民&nbsp;&nbsp;&nbsp;&nbsp;族：</span>
                    <b>{{fxBaseData.clanname||fxBaseData.minzuName||fxBaseData.ethnicgroup||fxBaseData.mz||fxBaseData.minzu}}</b>
                </div>
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <!---->
                    <div class="c-two">
                        <span>学&nbsp;&nbsp;&nbsp;&nbsp;历：</span>
                        <b>{{fxBaseData.nowculture||fxBaseData.wenhuachengduName||fxBaseData.eduadmission}}</b>
                    </div>
                </div>
                <!---->
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <div class="c-two">
                        <span>婚&nbsp;&nbsp;&nbsp;&nbsp;姻：</span>
                        <b>{{fxBaseData.marriage||fxBaseData.hunyinzhuangkuangName||fxBaseData.maritalstatus}}</b>
                    </div>
                    <!---->
                </div>
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <span>籍&nbsp;&nbsp;&nbsp;&nbsp;贯：</span>
                    <b>{{fxBaseData.nation||fxBaseData.jiguanName||fxBaseData.borncity}}</b>
                </div>
                <!---->
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <span>关押地点：</span>
                    <b></b>
                </div>
                <!---->
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <span>涉法类型：</span>
                    <b></b>
                </div>
                <!---->
                <div class="c-item" v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <span>涉法史：</span>
                    <b></b>
                </div>
                <div class="c-item" v-show="this.peopleType==='/zzry'||this.peopleType==='/jzmj'||this.peopleType==='/shgzz'||this.peopleType==='/shzyz'||this.peopleType==='/jyjc'||this.peopleType==='/jdjc'">
                    <span>政治面貌：</span>
                    <b>{{fxBaseData.zhengzhimianmaoName||fxBaseData.polityRole||fxBaseData.zhengzhimianmao}}</b>
                </div>
                <div class="c-item" v-show="this.peopleType==='/zzry'||this.peopleType==='/jzmj'||this.peopleType==='/shgzz'||this.peopleType==='/shzyz'||this.peopleType==='/jyjc'||this.peopleType==='/jdjc'">
                    <span>部门名称：</span>
                    <b>{{fxBaseData.jiedaoName||fxBaseData.jianyumingcheng||fxBaseData.suozaibumen}}</b>
                </div>
                <div class="c-item" v-show="this.peopleType==='/zzry'||this.peopleType==='/jzmj'||this.peopleType==='/shgzz'||this.peopleType==='/shzyz'||this.peopleType==='/jyjc'||this.peopleType==='/jdjc'">
                    <span>职业：</span>
                    <b>{{fxBaseData.zhiwuName||fxBaseData.leibieName}}</b>
                </div>
            </div>
            <!---->
            <div class="cBtnArea">
                <button @click="focus" :class="{active:this.focusActive}">{{focusTxt}}</button>
            </div>
        </div>
        <!--r-->
        <div class="c-situation s-margin">
            <div class="s-title csTabs">
                <!-- <span class="s-span">人员概览</span> -->
                <ul class="c-tab">
                    <li @click="tabSel('baseInfo')"  v-bind:class="{active:this.tabType=='baseInfo'}">基本资料</li>
                    <li @click="tabSel('prison')"  v-bind:class="{active:this.tabType=='prison'}" v-if="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">监狱信息</li>
                    <li @click="tabSel('drug')" v-bind:class="{active:this.tabType=='drug'}" v-if="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">戒毒信息</li>
                    <li @click="tabSel('correct')"   v-bind:class="{active:this.tabType=='correct'}" v-if="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">社矫信息</li>  
                </ul>
            </div>
            <div class="c-infoBox">
                <div class="c-infoItem" v-show="this.tabType=='baseInfo'">
                    <div class="c-tBox">
                        <!---->
                        <div  class="c-tag d_jump">
                            <div class="s-title">
                                <span class="s-span">人员标签</span>
                            </div>
                            <!---->
                            <div class="c-tagC">
                                <!---->
                                <div class="prisonTag">
                                    <div class="pTitle">
                                        <span>监狱标签</span>
                                        <img src="../../../assets/lsfx/c-line-1.png" alt="">
                                    </div>
                                    <!---->
                                    <div class="c-tagType">
                                        <div class="c-tagItem">特别关注</div>
                                        <div class="c-tagItem">捕前无业</div>
                                        <div class="c-tagItem">吸毒史</div>
                                        <div class="c-tagItem">特别关注</div>
                                        <div class="c-tagItem">特别关注</div>
                                    </div>
                                </div>

                                <div class="tagImgArea">
                                    <img src="../../../assets/lsfx/c-people.png" alt="">
                                </div>
                                <!---->
                                <div class="drugTag">
                                    <div class="pTitle">
                                        <img src="../../../assets/lsfx/c-line-2.png" alt="">
                                        <span>涉毒标签</span>
                                    </div>
                                    <!---->
                                    <div class="c-tagType">
                                        <div class="c-tagItem">吸毒史</div>
                                    </div>
                                </div>
                                <!---->
                                <div class="correctTag">
                                    <div class="pTitle">
                                        <img src="../../../assets/lsfx/c-line-3.png" alt="">
                                        <span>矫治标签</span>
                                    </div>
                                    <!---->
                                    <div class="c-tagType">
                                        <div class="c-tagItem">特别关注</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div  class="c-bBox d_jump">
                            <!---->
                            <div class="c-dynamics s-margin">
                                <div class="s-title">
                                    <span class="s-span">基本信息</span>
                                </div>
                                <div class="gridBox card-info">
                                    <div v-show="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                                        <div class="b-item i-col-9">
                                            <span>编码</span>
                                            <b>{{fxBaseData.unitCode||fxBaseData.id}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>姓名</span>
                                            <b>{{fxBaseData.name||fxBaseData.xingming}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>性别</span>
                                            <b>{{fxBaseData.sex||fxBaseData.xingbieName}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>出生日期</span>
                                            <b v-if="fxBaseData.birthday">{{fliterDate(fxBaseData.birthday)}}</b>
                                            <b v-else-if="fxBaseData.chushengriqi">{{fliterDate(fxBaseData.chushengriqi)}}</b>
                                            <b v-else-if="fxBaseData.dateofbirth">{{fliterDate(fxBaseData.dateofbirth)}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>民族</span>
                                            <b>{{fxBaseData.clanname||fxBaseData.minzuName||fxBaseData.ethnicgroup}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>政治面貌</span>
                                            <b>{{fxBaseData.catchagoface||fxBaseData.zhengzhimianmaoName||fxBaseData.politicaloutlook}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>文化程度</span>
                                            <b>{{fxBaseData.nowculture||fxBaseData.wenhuachengduName||fxBaseData.eduadmission}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>婚姻状况</span>
                                            <b>{{fxBaseData.marriage||fxBaseData.hunyinzhuangkuangName||fxBaseData.maritalstatus}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>证件号码</span>
                                            <b>{{fxBaseData.idCard||fxBaseData.zhengjianhao||fxBaseData.citizenid}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>住址</span>
                                            <b :title="fxBaseData.homeAddress||fxBaseData.shijijuzhudixiangxi||fxBaseData.familyaddress">{{fxBaseData.homeAddress||fxBaseData.shijijuzhudixiangxi||fxBaseData.familyaddress}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>祖籍</span>
                                            <b :title="fxBaseData.nation||fxBaseData.jiguanName||fxBaseData.borncity">{{fxBaseData.nation||fxBaseData.jiguanName||fxBaseData.borncity}}</b>
                                        </div>
                                    </div>
                                    <!-- 司法人员 -->
                                    <div v-show="this.peopleType==='/zzry'||this.peopleType==='/jzmj'||this.peopleType==='/shgzz'||this.peopleType==='/shzyz'||this.peopleType==='/jyjc'||this.peopleType==='/jdjc'">
                                        <div class="b-item">
                                            <span>姓名</span>
                                            <b>{{fxBaseData.name||fxBaseData.xingming}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>警号</span>
                                            <b>{{fxBaseData.id||fxBaseData.code}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>电话</span>
                                            <b>{{fxBaseData.lianxidianhua||fxBaseData.telphone||fxBaseData.zhuzhaidianhua}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>部门名称</span>
                                            <b>{{fxBaseData.jiedaoName||fxBaseData.jianyumingcheng||fxBaseData.suozaibumen}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>出生日期</span>
                                            <b v-if="fxBaseData.chushengnianyue">{{fliterDate(fxBaseData.chushengnianyue)}}</b>
                                            <b v-else-if="fxBaseData.birthday">{{fliterDate(fxBaseData.birthday)}}</b>
                                            <b v-else></b>
                                            <!-- <b v-else-if="fxBaseData.chushengriqi">{{fliterDate(fxBaseData.chushengriqi)}}</b>
                                            <b v-else-if="fxBaseData.dateofbirth">{{fliterDate(fxBaseData.dateofbirth)}}</b> -->
                                        </div>
                                        <div class="b-item">
                                            <span>上岗时间</span>
                                            <b>{{fxBaseData.canjiagongzuoDate||fxBaseData.startDate||fxBaseData.workDate||fxBaseData.ruzhiriqi}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>职位</span>
                                            <b>{{fxBaseData.zhiwuName||fxBaseData.leibieName||fxBaseData.leibieName||fxBaseData.zhiwei}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>年龄</span>
                                            <b>{{fxBaseData.age}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>职业</span>
                                            <b>{{fxBaseData.zhiwuName||fxBaseData.profession}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>党务</span>
                                            <b>{{fxBaseData.partyPosition||fxBaseData.zhiji}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>学历</span>
                                            <b>{{fxBaseData.zuigaoxueweiName||fxBaseData.xueliName||fxBaseData.education||fxBaseData.xueli}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>政治面貌</span>
                                            <b>{{fxBaseData.zhengzhimianmaoName||fxBaseData.polityRole||fxBaseData.zhengzhimianmao}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>性别</span>
                                            <b>{{fxBaseData.xingbieName||fxBaseData.sex}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>手机号码</span>
                                            <b>{{fxBaseData.shouji||fxBaseData.yidongdianhua}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>家庭住址</span>
                                            <b>{{fxBaseData.jiatingzhuzhi||fxBaseData.jtzz||fxBaseData.jiatingzhuzhi}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>出生地</span>
                                            <b>{{fxBaseData.csd||fxBaseData.chushengdi}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>现居住地</span>
                                            <b>{{fxBaseData.xjzd||fxBaseData.xianjuzhudi}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>专业</span>
                                            <b>{{fxBaseData.zhuanyeName||fxBaseData.zy||fxBaseData.zhuanye}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>户籍所在地</span>
                                            <b>{{fxBaseData.hjszd||fxBaseData.hujisuanzaidi}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>身份证号</span>
                                            <b>{{fxBaseData.shenfenzhenghao||fxBaseData.sfzh||fxBaseData.idCard}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>婚姻状况</span>
                                            <b>{{fxBaseData.hunyinzhuangkuangName||fxBaseData.hyzk||fxBaseData.hunyinzhuangkuang}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>民族</span>
                                            <b>{{fxBaseData.minzuName||fxBaseData.mz||fxBaseData.minzu}}</b>
                                        </div>
                                        <div class="b-item">
                                            <span>籍贯</span>
                                            <b>{{fxBaseData.jg||fxBaseData.jiguan}}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div class="c-life  d_jump">
                            <div class="s-title">
                                <span class="s-span">人员生平</span>
                            </div>
                            <!--  -->
                            <div class="peopleLife">
                                <div class="c-infoItem">
                                    <span class="c-infoTime">9.10</span>
                                    <b>档案信息XXXXXXXXXXX调动。</b>
                                </div>  
                                <div class="c-infoItem">
                                    <span class="c-infoTime">9.10</span>
                                    <b>档案信息XXXXXXXXXXX调动。</b>
                                </div>   
                            </div>
                        </div>
                        <!--  -->
                        <div  class="box-area d_jump">
                            <div class="s-title">
                                <span class="s-span">体貌特征</span>
                            </div>
                            <div class="gridBox card-info">
                                <div class="b-item">
                                    <span>身高</span>
                                    <b></b>
                                </div>
                                <div class="b-item">
                                    <span>体型</span>
                                    <b></b>
                                </div>
                                <div class="b-item">
                                    <span>脸型</span>
                                    <b></b>
                                </div>
                                <div class="b-item">
                                    <span>血型</span>
                                    <b></b>
                                </div>
                                <div class="b-item">
                                    <span>足长</span>
                                    <b></b>
                                </div>
                                <div class="b-item">
                                    <span>口音</span>
                                    <b></b>
                                </div>
                                <div class="b-item">
                                    <span>皮肤特殊标记/其它特殊特征</span>
                                    <b></b>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                        <div  class="box-area d_jump">
                            <div class="s-title">
                                <span class="s-span">社会关系</span>
                            </div>
                            <div class="gridBox">
                                <div class="gridBox card-info" v-for="item in shData">
                                    <div class="b-item">
                                        <span>关系称谓</span>
                                        <b>{{item.appellation||item.chengweiName}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>姓名</span>
                                        <b>{{item.name||item.xingming}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>性别</span>
                                        <b></b>
                                    </div>
                                    <div class="b-item">
                                        <span>家庭住址（行政区划）</span>
                                        <b>{{item.familycity}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>家庭住址（详细住址）</span>
                                        <b>{{item.familyaddress||item.juzhudizhi}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>单位（行政区划）</span>
                                        <b></b>
                                    </div>
                                    <div class="b-item">
                                        <span>单位（详细名称）</span>
                                        <b>{{item.workorg||item.danweimingcheng}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>职务</span>
                                        <b>{{item.post}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>政治面貌</span>
                                        <b>{{item.politicaloutlook||item.zhengzhimianmaoName}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>证件类型</span>
                                        <b>{{item.certtype}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>证件号码</span>
                                        <b>{{item.certnum}}</b>
                                    </div>
                                    <div class="b-item">
                                        <span>联系电话</span>
                                        <b>{{item.phonenum||item.lianxidianhua}}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="iview-anchor">
                        <div class="iview-anchor-link" @click="jump(0)" :class="[this.anchorType===0?'active':'']">人员标签</div>
                        <div class="iview-anchor-link" @click="jump(1)" :class="[this.anchorType===1?'active':'']">基本信息</div>
                        <div class="iview-anchor-link" @click="jump(2)" :class="[this.anchorType===2?'active':'']">人员生平</div>
                        <div class="iview-anchor-link" @click="jump(3)" :class="[this.anchorType===3?'active':'']">体貌特征</div>
                        <div class="iview-anchor-link" @click="jump(4)" :class="[this.anchorType===4?'active':'']">社会关系</div>
                    </div>
                </div>
                <div class="c-infoItem" v-show="this.tabType=='prison'" v-if="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <div class="i-tabs">
                        <div :title="item.value" v-for="item in jyData" class="ic-item" @click="selJy(item)" :class="[item.checked?'active':'']">
                        {{item.value}}
                        </div>
                    </div>
                    <div class="contentBox">
                        <grid :data="jyTag"></grid>    
                    </div>
                </div>
                <div class="c-infoItem" v-show="this.tabType=='drug'" v-if="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <div class="i-tabs">
                        <div :title="item.value" v-for="item in jdData" class="ic-item" @click="selJd(item)" :class="[item.checked?'active':'']">
                        {{item.value}}
                        </div>
                    </div>
                    <div class="contentBox">
                        <grid :data="jyTag"></grid>    
                    </div>
                </div>
                <div class="c-infoItem" v-show="this.tabType=='correct'" v-if="this.peopleType==='/fxry'||this.peopleType==='/jdry'||this.peopleType==='/sjry'">
                    <div class="i-tabs">
                        <div :title="item.value" v-for="item in sjData" class="ic-item" @click="selSj(item)" :class="[item.checked?'active':'']">
                        {{item.value}}
                        </div>
                    </div>
                    <div class="contentBox">
                        <multGrid :data="jyTag"></multGrid>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import grid from '@/components/grid/grid'
    import multGrid from '@/components/multGrid/multGrid'
    import {mapGetters, mapActions} from "vuex"
    import {CurentTime} from "@/libs/tools"
    import {staticData} from "@/api/config"

    export default {
        name: "index",
        data(){
            return {
                focusActive:false,
                focusTxt:"取消关注",
                anchorType:0,  //锚点
                tabType:'baseInfo',
                peopleType:"",
                jyData:[
                    {
                        value: '罪犯当前状态、捕前简历、犯罪逮捕、判决信息',
                        checked:true
                    },
                    {
                        value: '罪犯计分考核信息',
                        checked:false
                    },
                    {
                        value: '既往处罚信息',
                        checked:false
                    },
                    {
                        value: '教育信息',
                        checked:false
                    },
                    {
                        value: '刑罚变动',
                        checked:false
                    },
                    {
                        value: '狱政奖惩',
                        checked:false
                    },
                ],
                jdData:[
                    {
                        value: '本案信息、特别关注',
                        checked:true
                    },
                    {
                        value: '劣迹信息',
                        checked:false
                    },
                    {
                        value: '前科信息',
                        checked:false
                    },
                ],
                sjData:[
                    {
                        value: '法律文书信息、刑罚执行信息、解除矫正信息、再犯罪信息',
                        checked:true
                    },
                    {
                        value: '奖惩信息',
                        checked:false
                    },
                ],
                jyTag:[]
            }
        },
        computed: {
            ...mapGetters({
                fxBaseData:"getBaseRes",
                shData:"getShRes",
                // jyData:"getJyRes"
            })
        },
        mounted () {
            this.$refs.content.addEventListener('scroll',this.onScroll,true);
            // this.peopleType=this.$route.query.url;
            this.handlerZfGetInfo(this.$route.query.id);
        },
        methods:{
            ...mapActions([
                "handlerZfGetInfo",
                "handlerJyData",
                "handlerJfkhData",
                "handlerJwcfxxData",
                "handlerJyxxData",
                "handlerXfbdData",
                "handlerYzjcData",
                "handlerJdData",
                "handlerLjxxData",
                "handlerQkxxData",
                "handlerSjData",
                "handlerJcxxData"
            ]),
            focus(){
                if(this.focusActive){
                    this.focusActive=false;
                    this.focusTxt="取消关注"
                }else{
                    this.focusActive=true;
                    this.focusTxt="关注"
                }
            },
            tabSel(type){
                this.tabType=type;
                if(this.tabType==="prison"){
                    this.jyTag=staticData.jyDataList.jyData;
                    this.handlerJyData(this.$route.query);
                    this.jyData.map((val)=>{
                        val.checked=false;
                    });
                    this.jyData[0].checked=true;
                }else if(this.tabType==="drug"){
                    this.jyTag=staticData.jyDataList.jdData;
                    this.handlerJdData(this.$route.query);
                    this.jdData.map((val)=>{
                        val.checked=false;
                    });
                    this.jdData[0].checked=true;
                }else if(this.tabType==="correct"){
                    this.jyTag=staticData.jyDataList.sjData;
                    this.handlerSjData(this.$route.query);
                    this.sjData.map((val)=>{
                        val.checked=false;
                    });
                    this.sjData[0].checked=true;
                }
            },
            calcAge(strBirthday){
                let returnAge;
                let strBirthdayArr=strBirthday.split("-");
                let birthYear = strBirthdayArr[0];
                let birthMonth = strBirthdayArr[1];
                let birthDay = strBirthdayArr[2];
                
                let d = new Date();
                let nowYear = d.getFullYear();
                let nowMonth = d.getMonth() + 1;
                let nowDay = d.getDate();
                
                if(nowYear == birthYear){
                    returnAge = 0;//同年 则为0岁
                }
                else{
                    let ageDiff = nowYear - birthYear ; //年之差
                    if(ageDiff > 0){
                        if(nowMonth == birthMonth) {
                            let dayDiff = nowDay - birthDay;//日之差
                            if(dayDiff < 0)
                            {
                                returnAge = ageDiff - 1;
                            }
                            else
                            {
                                returnAge = ageDiff ;
                            }
                        }
                        else
                        {
                            let monthDiff = nowMonth - birthMonth;//月之差
                            if(monthDiff < 0)
                            {
                                returnAge = ageDiff - 1;
                            }
                            else
                            {
                                returnAge = ageDiff ;
                            }
                        }
                    }
                    else
                    {
                        returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
                    }
                }
                
                return returnAge;//返回周岁年龄
            },
            fliterDate(date){
                return CurentTime('ymd', '-',date)
            },
            selJy(item){
                if (!item.checked) {
                    this.jyData.map((val)=>{
                        val.checked=false;
                    });
                    this.$set(item, 'checked', true);
                    if(item.value==="罪犯当前状态、捕前简历、犯罪逮捕、判决信息"){
                        this.jyTag=staticData.jyDataList.jyData;
                        this.handlerJyData(this.$route.query);
                    }else if(item.value==="罪犯计分考核信息"){
                        this.jyTag=staticData.jyDataList.jfkhData;
                        this.handlerJfkhData(this.$route.query);
                    }else if(item.value==="既往处罚信息"){
                        this.jyTag=staticData.jyDataList.jwcfxxData;
                        this.handlerJwcfxxData(this.$route.query);
                    }else if(item.value==="教育信息"){
                        this.jyTag=staticData.jyDataList.jyxxData;
                        this.handlerJyxxData(this.$route.query);
                    }else if(item.value==="刑罚变动"){
                        this.jyTag=staticData.jyDataList.xfbdData;
                        this.handlerXfbdData(this.$route.query);
                    }else if(item.value==="狱政奖惩"){
                        this.jyTag=staticData.jyDataList.yzjcData;
                        this.handlerYzjcData(this.$route.query);
                    }
                    return;
                }else{

                }
                item.isChecked = !item.isChecked
            },
            selJd(item){
                if (!item.checked) {
                    this.jdData.map((val)=>{
                        val.checked=false;
                    });
                    this.$set(item, 'checked', true);
                    if(item.value==="本案信息、特别关注"){
                        this.jyTag=staticData.jyDataList.jdData;
                        this.handlerJdData(this.$route.query);
                    }else if(item.value==="劣迹信息"){
                        this.jyTag=staticData.jyDataList.ljxxData;
                        this.handlerLjxxData(this.$route.query);
                    }else if(item.value==="前科信息"){
                        this.jyTag=staticData.jyDataList.qkxxData;
                        this.handlerQkxxData(this.$route.query);
                    }
                    return;
                }else{

                }
                item.isChecked = !item.isChecked
            },
            selSj(item){
                if (!item.checked) {
                    this.sjData.map((val)=>{
                        val.checked=false;
                    });
                    this.$set(item, 'checked', true);
                    if(item.value==="法律文书信息、刑罚执行信息、解除矫正信息、再犯罪信息"){
                        this.jyTag=staticData.jyDataList.sjData;
                        this.handlerSjData(this.$route.query);
                    }else if(item.value==="奖惩信息"){
                        this.jyTag=staticData.jyDataList.jcxxData;
                        this.handlerJcxxData(this.$route.query);
                    }
                    return;
                }else{

                }
                item.isChecked = !item.isChecked
            },
            jump (index) {
                // this.anchorType=index
                // 用 class="d_jump" 添加锚点
                let jump = document.querySelectorAll('.d_jump')
                let total = jump[index].offsetTop
                let distance = this.$refs.content.scrollTop
                // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let step = total / 50
                let _this=this
                if (total > distance) {
                    smoothDown()
                } else {
                    let newTotal = distance - total
                    step = newTotal / 50
                    smoothUp()
                }
                function smoothDown () {
                    if (distance < total) {
                        distance += step
            　　　　　　 _this.$refs.content.scrollTop  = distance - 60
                        setTimeout(smoothDown, 10)
                    } else {
                        _this.$refs.content.scrollTop  = distance - 60
                    }
                    }
                    function smoothUp () {
                    if (distance > total) {
                        distance -= step
                        _this.$refs.content.scrollTop  = distance - 60
                        setTimeout(smoothUp, 10)
                    } else {
                        _this.$refs.content.scrollTop  = distance - 60
                    }
                } 
            },
            onScroll () {
                let scrolled = this.$refs.content.scrollTop
                let jump = document.querySelectorAll('.d_jump')
                for(let i=0;i<jump.length;i++){
                    let total=jump[i].offsetTop;
                    if (scrolled >= (total-100)) {
                        this.anchorType=i;
                    } else {

                    }
                }
            }
        },
        watch: {
            
        },
        components:{
            grid,
            multGrid
        }
    }
</script>
<style scoped type="less">
    @import "criminal.css";
</style>