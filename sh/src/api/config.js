// export const URL = "https://www.kurhnuncle.cn";
// export const TOKEN='keRenShuToken';

export const URL = "http://192.168.0.241:11000";
// export const URL = "http://172.19.146.10:8081";
// export const URL = "http://183.194.248.142:8081";
export const CXURL="http://10.99.58.2:9999/api/v1/dev/";  //北京
// export const CXURL = "http://192.168.0.241:9999/api/v1/dev/"; //查询系统url

export let staticData = {
    //监狱
    jyDataList: {
        jyData: [
            {
                name: "编码",
                zhiDuan: "unitCode",
                type: 1,
            },
            {
                name: "分押类型",
                zhiDuan: "type",
                type: 1,
            },
            {
                name: "身体状况",
                zhiDuan: "olddiseasecruel",
                type: 1,
            },
            {
                name: "收藏押金",
                zhiDuan: "collectcashpledge",
                type: 1,
            },
            {
                name: "在押状态",
                zhiDuan: "status",
                type: 1,
            },
            {
                name: "分管等级",
                zhiDuan: "customeLabel",
                type: 1,
            },
            {
                name: "监管警察警号",
                zhiDuan: "code",
                type: 1,
            },
            {
                name: "监管警察姓名",
                zhiDuan: "name",
                type: 1,
            },
            {
                name: "关押（监区名称）",
                zhiDuan: "nowOrg",
                type: 1,
            },
            {
                name: "关押监狱",
                zhiDuan: "sourceName",
                type: 1,
            },
            {
                name: "起日期",
                zhiDuan: "startDate",
                type: 1,
            },
            {
                name: "止日期",
                zhiDuan: "endDate",
                type: 1,
            },
            {
                name: "单位/住址（行政区划）",
                zhiDuan: "dwAddrXzqh",
                type: 1,
            },
            {
                name: "单位/住址（详细名称）",
                zhiDuan: "dwAddrDetail",
                type: 1,
            },
            {
                name: "职业",
                zhiDuan: "zfZy",
                type: 1,
            },
            {
                name: "职务",
                zhiDuan: "zfZw",
                type: 1,
            },
            {
                name: "档案号",
                zhiDuan: "lawcaseno",
                type: 1,
            },
            {
                name: "犯罪事实",
                zhiDuan: "crimeface",
                type: 1,
            },
            {
                name: "犯罪日期",
                zhiDuan: "crimedate",
                type: 1,
            },
            {
                name: "羁押日期",
                zhiDuan: "detaindate",
                type: 1,
            },
            {
                name: "逮捕机关（行政区划名称）",
                zhiDuan: "arrestauthority",
                type: 1,
            },
            {
                name: "逮捕机关（机关称谓）",
                zhiDuan: "arrestauthorityshort",
                type: 1,
            },
            {
                name: "逮捕日期",
                zhiDuan: "arrestdate",
                type: 1,
            },
            {
                name: "取保候审起日",
                zhiDuan: "bailstart",
                type: 1,
            },
            {
                name: "取保候审止日",
                zhiDuan: "bailend",
                type: 1,
            },
            {
                name: "起诉机关（行政区划代码）",
                zhiDuan: "sueorgan",
                type: 1,
            },
            {
                name: "起诉机关（机关称谓）",
                zhiDuan: "sueorganshort",
                type: 1,
            },
            {
                name: "起诉案号（年度）",
                zhiDuan: "sueyear",
                type: 1,
            },
            {
                name: "起诉案号（检察院简称及字号）",
                zhiDuan: "suecaseno",
                type: 1,
            },
            {
                name: "起诉案号（序号）",
                zhiDuan: "sueno",
                type: 1,
            },
            {
                name: "共同犯罪参与类型",
                zhiDuan: "jointcrimetype",
                type: 1,
            },
            {
                name: "共同犯罪人数",
                zhiDuan: "jointcrimes",
                type: 1,
            },
            {
                name: "既往刑罚次数",
                zhiDuan: "pedigreenum",
                type: 1,
            },
            {
                name: "入监日期",
                zhiDuan: "inprisondate",
                type: 1,
            },
            {
                name: "一审判决日期",
                zhiDuan: "yspjrq",
                type: 1,
            },
            {
                name: "一审判决法院（行政区划名称）",
                zhiDuan: "ysqh",
                type: 1,
            },
            {
                name: "一审判决法院（法院称谓）",
                zhiDuan: "ysmx",
                type: 1,
            },
            {
                name: "一审案号（年度）",
                zhiDuan: "ysnd",
                type: 1,
            },
            {
                name: "一审案号（法院简称及字号）",
                zhiDuan: "yszh",
                type: 1,
            },
            {
                name: "一审案号（序号）",
                zhiDuan: "ysxh",
                type: 1,
            },
            {
                name: "同案字号",
                zhiDuan: "tazh",
                type: 1,
            },
            {
                name: "一审罪名名称",
                zhiDuan: "yszm",
                type: 1,
            },
            {
                name: "一审刑种/刑期",
                zhiDuan: "ysxq",
                type: 1,
            },
            {
                name: "判决类型",
                zhiDuan: "pjlb",
                type: 1,
            },
            {
                name: "判决法院（行政区划名称）",
                zhiDuan: "pcqh",
                type: 1,
            },
            {
                name: "判决法院（法院称谓）",
                zhiDuan: "pcmx",
                type: 1,
            },
            {
                name: "判决案号（年度）",
                zhiDuan: "pcnd",
                type: 1,
            },
            {
                name: "判决案号（法院简称及字号）",
                zhiDuan: "pczh",
                type: 1,
            },
            {
                name: "判决案号（序号）",
                zhiDuan: "pcxh",
                type: 1,
            },
            {
                name: "判决日期",
                zhiDuan: "pcrq",
                type: 1,
            },
            {
                name: "刑种/刑期",
                zhiDuan: "xq",
                type: 1,
            },
            {
                name: "刑期起日",
                zhiDuan: "qr",
                type: 1,
            },
            {
                name: "刑期止日",
                zhiDuan: "zr",
                type: 1,
            },
            {
                name: "剥夺政治权利期限",
                zhiDuan: "bznx",
                type: 1,
            },
            {
                name: "罚金金额",
                zhiDuan: "fjje",
                type: 1,
            },
            {
                name: "是否驱逐出境",
                zhiDuan: "qzcj",
                type: 1,
            },
            {
                name: "没收财产情况",
                zhiDuan: "mscc",
                type: 1,
            },
            {
                name: "附带民事判决",
                zhiDuan: "mspj",
                type: 1,
            },
            {
                name: "民事赔偿金额",
                zhiDuan: "mspcje",
                type: 1,
            },
            {
                name: "减刑限制",
                zhiDuan: "jxxz",
                type: 1,
            },
            {
                name: "法定不得假释",
                zhiDuan: "byxjs",
                type: 1,
            },
            {
                name: "案犯类别",
                zhiDuan: "aflb",
                type: 1,
            },
            {
                name: "执行通知书下达日期",
                zhiDuan: "zxrq",
                type: 1,
            },
            {
                name: "备注",
                zhiDuan: "bz",
                type: 1,
            },
        ],

        jfkhData: [
            {
                name: "加分",
                zhiDuan: "awardScore",
                type: 1,
            },
            {
                name: "取消分",
                zhiDuan: "clearScore",
                type: 1,
            },
            {
                name: "月",
                zhiDuan: "month",
                type: 1,
            },
            {
                name: "扣分",
                zhiDuan: "punishScore",
                type: 1,
            },
            {
                name: "总分",
                zhiDuan: "sumScore",
                type: 1,
            },
            {
                name: "年",
                zhiDuan: "year",
                type: 1,
            },
        ],

        jwcfxxData: [
            {
                name: "刑事处罚类别",
                zhiDuan: "cflb",
                type: 1,
            },
            {
                name: "判决日期",
                zhiDuan: "pjrq",
                type: 1,
            },
            {
                name: "原判期限",
                zhiDuan: "ypxq",
                type: 1,
            },
            {
                name: "执行刑期",
                zhiDuan: "xq",
                type: 1,
            },
            {
                name: "执行起日",
                zhiDuan: "qr",
                type: 1,
            },
            {
                name: "执行止日",
                zhiDuan: "zr",
                type: 1,
            },
            {
                name: "罪名名称",
                zhiDuan: "zmmc",
                type: 1,
            },
            {
                name: "主罪刑法罪名分类",
                zhiDuan: "zmfl",
                type: 1,
            },
            {
                name: "执行机关",
                zhiDuan: "zxjgqh",
                type: 1,
            },
            {
                name: "机关称谓",
                zhiDuan: "zxjgmx",
                type: 1,
            },
            {
                name: "执行机关类别",
                zhiDuan: "zxjglb",
                type: 1,
            },
            {
                name: "执行机关所属地区",
                zhiDuan: "zxjgdq",
                type: 1,
            },
            {
                name: "备注",
                zhiDuan: "bz",
                type: 1,
            },
        ],

        jyxxData: [
            {
                name: "道德教育",
                zhiDuan: "ddjy",
                type: 1,
            },
            {
                name: "心理教育",
                zhiDuan: "xljy",
                type: 1,
            },
            {
                name: "普法教育",
                zhiDuan: "pfjy",
                type: 1,
            },
            {
                name: "文化教育",
                zhiDuan: "whjy",
                type: 1,
            },
            {
                name: "出监教育",
                zhiDuan: "cjjy",
                type: 1,
            },
            {
                name: "入监教育",
                zhiDuan: "rjjy",
                type: 1,
            },
        ],

        xfbdData: [
            {
                name: "案犯类别",
                zhiDuan: "aflb",
                type: 1,
            },
            {
                name: "刑期变动幅度",
                zhiDuan: "bdfd",
                type: 1,
            },
            {
                name: "刑罚变动类别",
                zhiDuan: "bdlb",
                type: 1,
            },
            {
                name: "剥夺政治权利期限",
                zhiDuan: "bznx",
                type: 1,
            },
            {
                name: "监狱提请日期",
                zhiDuan: "cbrq",
                type: 1,
            },
            {
                name: "罚金金额",
                zhiDuan: "fjje",
                type: 1,
            },
            {
                name: "罚金累计金额",
                zhiDuan: "fjljje",
                type: 1,
            },
            {
                name: "减刑所用奖励截止日期",
                zhiDuan: "jzrq",
                type: 1,
            },
            {
                name: "没收财产情况",
                zhiDuan: "mscc",
                type: 1,
            },
            {
                name: "民事赔偿金额",
                zhiDuan: "mspcje",
                type: 1,
            },
            {
                name: "附带民事判决情况",
                zhiDuan: "mspj",
                type: 1,
            },
            {
                name: "判裁法院（法院称谓）",
                zhiDuan: "pcmx",
                type: 1,
            },
            {
                name: "判裁案号（年度）",
                zhiDuan: "pcnd",
                type: 1,
            },
            {
                name: "判裁法院（行政区划名称）",
                zhiDuan: "pcqh",
                type: 1,
            },
            {
                name: "判裁日期",
                zhiDuan: "pcrq",
                type: 1,
            },
            {
                name: "判裁案号（序号）",
                zhiDuan: "pcxh",
                type: 1,
            },
            {
                name: "判裁案号（法院简称及字号）",
                zhiDuan: "pczh",
                type: 1,
            },
            {
                name: "民事赔偿累计金额",
                zhiDuan: "pspcljje",
                type: 1,
            },
            {
                name: "刑罚变动刑期起日",
                zhiDuan: "qr",
                type: 1,
            },
            {
                name: "是否驱逐出境",
                zhiDuan: "qzcj",
                type: 1,
            },
            {
                name: "刑种/刑期",
                zhiDuan: "xq",
                type: 1,
            },
            {
                name: "刑罚变动刑期止日",
                zhiDuan: "zr",
                type: 1,
            },
            {
                name: "执行日期",
                zhiDuan: "zxrq",
                type: 1,
            },
        ],

        yzjcData: [
            {
                name: "考核干警",
                zhiDuan: "gj",
                type: 1,
            },
            {
                name: "奖惩",
                zhiDuan: "jc",
                type: 1,
            },
            {
                name: "奖惩日期",
                zhiDuan: "jcDate",
                type: 1,
            },
            {
                name: "奖惩原因",
                zhiDuan: "jcReason",
                type: 1,
            },
        ],

        jdData: [
            {
                name: "原职业",
                zhiDuan: "occupation",
                type: 1,
            },
            {
                name: "原职务",
                zhiDuan: "post",
                type: 1,
            },
            {
                name: "是否保职",
                zhiDuan: "iskeeppost",
                type: 1,
            },
            {
                name: "是否离退休",
                zhiDuan: "isretired",
                type: 1,
            },
            {
                name: "电话",
                zhiDuan: "workorgphonenum",
                type: 1,
            },
            {
                name: "邮政编码",
                zhiDuan: "workorgpostcode",
                type: 1,
            },
            {
                name: "决定机关",
                zhiDuan: "decideorg",
                type: 1,
            },
            {
                name: "决定日期",
                zhiDuan: "decidedate",
                type: 1,
            },
            {
                name: "决定书号",
                zhiDuan: "decidedocnum",
                type: 1,
            },
            {
                name: "期限",
                zhiDuan: "decideterm",
                type: 1,
            },
            {
                name: "起日",
                zhiDuan: "decidebegindate",
                type: 1,
            },
            {
                name: "止日",
                zhiDuan: "decideenddate",
                type: 1,
            },
            {
                name: "移送机关",
                zhiDuan: "sendorg",
                type: 1,
            },
            {
                name: "投送日期",
                zhiDuan: "custodydate",
                type: 1,
            },
            {
                name: "入所日期",
                zhiDuan: "admissiondate",
                type: 1,
            },
            {
                name: "出所日期",
                zhiDuan: "leavedate",
                type: 1,
            },
            {
                name: "案由",
                zhiDuan: "casereason",
                type: 1,
            },
            {
                name: "考核干警",
                zhiDuan: "allotdate",
                type: 1,
            },
            {
                name: "涉枪",
                zhiDuan: "isgun",
                type: 1,
            },
            {
                name: "涉黑",
                zhiDuan: "isgangland",
                type: 1,
            },
            {
                name: "涉恶",
                zhiDuan: "isevil",
                type: 1,
            },
            {
                name: "两乱",
                zhiDuan: "ischaos",
                type: 1,
            },
            {
                name: "多次戒毒",
                zhiDuan: "isdragtake",
                type: 1,
            },
            {
                name: "逃脱史",
                zhiDuan: "isescape",
                type: 1,
            },
            {
                name: "袭警史",
                zhiDuan: "isasspolice",
                type: 1,
            },
            {
                name: "自伤自残史",
                zhiDuan: "issuicide",
                type: 1,
            },
            {
                name: "两非",
                zhiDuan: "ismistake",
                type: 1,
            },
            {
                name: "法轮功",
                zhiDuan: "isfalun",
                type: 1,
            },
            {
                name: "其他邪教",
                zhiDuan: "iscult",
                type: 1,
            },
            {
                name: "三无",
                zhiDuan: "isnone",
                type: 1,
            },
        ],

        ljxxData: [
            {
                name: "案由类型",
                zhiDuan: "casereason",
                type: 1,
            },
            {
                name: "截止日期",
                zhiDuan: "enddate",
                type: 1,
            },
            {
                name: "执行场所",
                zhiDuan: "placeaddress",
                type: 1,
            },
            {
                name: "劣质类别",
                zhiDuan: "startdate",
                type: 1,
            },
            {
                name: "劣质类别",
                zhiDuan: "type",
                type: 1,
            },
        ],

        qkxxData: [
            {
                name: "罪名",
                zhiDuan: "accusation1",
                type: 1,
            },
            {
                name: "截止日期",
                zhiDuan: "enddate",
                type: 1,
            },
            {
                name: "执行机关地区",
                zhiDuan: "organzationcity",
                type: 1,
            },
            {
                name: "起始日期",
                zhiDuan: "startdate",
                type: 1,
            },
            {
                name: "原判日期",
                zhiDuan: "term",
                type: 1,
            },
        ],

        sjData: [
            {
                name: "犯新罪",
                zhiDuan: "fanxinzuiName",
                type: 1,
            },
            {
                name: "移交罪犯机关",
                zhiDuan: "fanzuijiguan",
                type: 1,
            },
            {
                name: "交付执行日期",
                zhiDuan: "jiaofuzhixingriqi",
                type: 1,
            },
            {
                name: "社区矫正期限",
                zhiDuan: "jiaozhengqixian",
                type: 1,
            },
            {
                name: "矫正起日",
                zhiDuan: "jiaozhenqiri",
                type: 1,
            },
            {
                name: "矫正止日",
                zhiDuan: "jiaozhenzhiri",
                type: 1,
            },
            {
                name: "社区矫正决定机关",
                zhiDuan: "juedingjiguan",
                type: 1,
            },
            {
                name: "矫正解除日期",
                zhiDuan: "kaishishijian",
                type: 1,
            },
            {
                name: "收监执行类型 ",
                zhiDuan: "leixingName",
                type: 1,
            },
            {
                name: "家庭联系情况",
                zhiDuan: "lianxiName",
                type: 1,
            },
            {
                name: "收监执行日期",
                zhiDuan: "shoujianriqi",
                type: 1,
            },
            {
                name: "数罪并罚",
                zhiDuan: "shuzuibingfaName",
                type: 1,
            },
            {
                name: "执行通知文书号",
                zhiDuan: "tongzhishu",
                type: 1,
            },
            {
                name: "执行通知书日期",
                zhiDuan: "tongzhishuriqi",
                type: 1,
            },
            {
                name: "矫正类别",
                zhiDuan: "xingfaleixingName",
                type: 1,
            },
            {
                name: "原判刑期开始日期",
                zhiDuan: "yuanpanqiri",
                type: 1,
            },
            {
                name: "原判刑期",
                zhiDuan: "yuanpanxingqiName",
                type: 1,
            },
            {
                name: "原判刑期结束日期",
                zhiDuan: "yuanpanzhiri",
                type: 1,
            },
            {
                name: "收监执行原因",
                zhiDuan: "yuanyin",
                type: 1,
            },
            {
                name: "原罪再犯",
                zhiDuan: "yuanzuizaifanName",
                type: 1,
            },
            {
                name: "矫正解除类型",
                zhiDuan: "zhongzhileixingName",
                type: 1,
            },
            {
                name: "罪名",
                zhiDuan: "zuiming",
                type: 1,
            },
        ],

        jcxxData: [
            {
                name: "参会人员",
                zhiDuan: "canhuirenyuan",
                type: 1,
            },
            {
                name: "奖惩类型",
                zhiDuan: "jiangchengleixingName",
                type: 1,
            },
            {
                name: "奖惩事实",
                zhiDuan: "jiangchengshishi",
                type: 1,
            },
            {
                name: "奖惩原因",
                zhiDuan: "jiangchengyuanyinName",
                type: 1,
            },
            {
                name: "审批时间",
                zhiDuan: "shenpiriqi",
                type: 2,
            },
        ],
    }
}
//home在押状态
export const homePageZyztData = [
    {
        id: 10,
        v: "在册"
    },
    {
        id: 20,
        v: "离监"
    }, {
        id: -1,
        v: "全部"
    }
];


