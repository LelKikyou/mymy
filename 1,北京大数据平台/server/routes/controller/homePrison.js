var express = require('express');
var router = express.Router();
let {nationList, provinceApi} = require(pathRoot + "/modelApi/homePrisonApi");

/**
 * @api {get} /nationList 获取全国
 * @apiDescription 获取全国
 * @apiName nationList
 * @apiGroup homePrison
 * @apiSampleRequest http://localhost:7777/api/sdcm/homePrison/nationList
 * @apiVersion 1.0.0
 */
function hundleAllPrisonSurvey(data) {
    if (!data) {
        return {
            topV: [],
            botV: []
        }
    }
    let [configTop, configBot] = [["registeredCriminalCount", "prisonCount", "currentImprisoned"], ["juvenileDelinquentCount", "femaleCriminalsCount", "weiAnCriminalsCount", "leiGuanCriminalsCount", "sheDuCriminalsCount", "medicalTreatmentCriminalsCount", "paroleCriminalsCount", "outSidePrisonCount"]]
    return {
        topV: configTop.map(i => {
            return parseInt(data[i])
        }),
        botV: configBot.map(i => {
            return parseInt(data[i])
        })
    }
}

function hundleXqConstitute(data) {
    if (!data) {
        data = {}
    }
    let configk = ["5年(不含)以下", "5年到10年（不含）", "10年到15年（不含）", "15年到25年（不含）", "无期徒刑", "死缓"]
    let configd = ["fiveYearsBelowCount", "fiveToTenYearsCount", "tenToFifteenYearsCount", "fifteenToTwentyFiveYearsCount", "lifeImprisonmentCount", "reprieveCount"]
    return configd.map((r, i) => {
        return {
            name: configk[i],
            value: data[r] || 0
        }
    })
}

function hundleCrimes(data) {
    if (!data) {
        data = {
            crimesFGLevel: {},
            crimesEducationaLevel: {},
            crimesGender: {}
        }
    }
    let fgdjConfigk = ['严管', '宽管', '普管', '考察级', '其它']
    let fgdjConfigd = ["seriousManagement", "looseManagement", "commonManagement", "inspectionLevelManagement", "other"]
    let fgdj = fgdjConfigd.map((d, i) => {
        return {
            name: fgdjConfigk[i],
            value: data.crimesFGLevel[d] || 0
        }
    })
    let whcdConfigk = ['文盲', '小学', '初中', '高中', '大专', '本科', '硕士', '博士']
    let whcdConfigd = ["illiteracy", "elementaryLevel", "juniorHighSchoolLevel", "highSchoolLevel", "collegeLevel", "undergraduateLevel", "masterLevel", "doctorLevel"]
    let whcd = whcdConfigd.map((d, i) => {
        return {
            name: whcdConfigk[i],
            value: data.crimesEducationaLevel[d] || 0
        }
    })
    let fzxbConfigk = ['男性', '女性', '性别未知']
    let fzxbConfigd = ["male", "female", "unknownGender"]
    let fzxb = fzxbConfigd.map((d, i) => {
        return {
            name: fzxbConfigk[i],
            value: data.crimesGender[d] || 0
        }
    })
    return {
        fgdj,
        whcd,
        fzxb
    }
}

function hundleAgeCompositionOfTheCrime(data) {
    if (!data) {
        data = {}
    }
    let configk = ["不满18岁", "18—25岁", "26—35岁", "36—50岁", "51—60岁", "61—64岁", "65岁以上"]
    let configd = ["underEighteen", "eighteenToTwentyFive", "twentySixToThirtyFive", "thirtySixToFifty", "fiftyOneToSixt", "sixtyOneToSixtyFour", "sixtyFiveAndUp"]
    return configd.map((r, i) => {
        return {
            name: configk[i],
            value: data[r] || 0
        }
    })
}

function hundlePrisonConditions(data) {
    if (!data) {
        data = {
            membershipLevel: {},
            alertLevel: {}
        }
    }
    let lslbConfigk = ['省属', '市属', '部属']
    let lslbConfigd = ["provincial", "municipal", "subordinate"]
    let lslb = lslbConfigd.map((d, i) => {
        return {
            name: lslbConfigk[i],
            value: data.membershipLevel[d] || 0
        }
    })
    let jbdjConfigk = ['中级戒备', '高级戒备', '低级戒备']
    let jbdjConfigd = ['moderateAlert', 'onHighAlert', 'lowGradeAlert']
    let jbdj = jbdjConfigd.map((d, i) => {
        return {
            name: jbdjConfigk[i],
            value: data.alertLevel[d] || 0
        }
    })
    return {
        lslb,
        jbdj
    }
}

router.get("/nationList", function (req, res) {
    nationList().then(data => {
        if (data.code === 200) {
            try {
                data = data.data;
                //全国监狱概况
                let allPrisonSurvey = hundleAllPrisonSurvey(data.allPrisonSurvey);
                //刑期构成
                let xqConstitute = hundleXqConstitute(data.xqConstitute);
                //罪犯情况
                let crimes = hundleCrimes(data.crimes);
                //罪犯年龄构成情况
                let ageCompositionOfTheCrime = hundleAgeCompositionOfTheCrime(data.ageCompositionOfTheCrime)
                //监狱情况
                let prisonConditions = hundlePrisonConditions(data.prisonConditions);
                //全国监狱
                let provincialPrisonInformations = data.provincialPrisonInformations || {};
                res.json({
                    code: 200,
                    msg: "success",
                    data: {
                        allPrisonSurvey,
                        xqConstitute,
                        crimes,
                        ageCompositionOfTheCrime,
                        prisonConditions,
                        provincialPrisonInformations
                    }
                })
            } catch (e) {
                console.log(e);
                res.json({
                    code: 500,
                    msg: "服务器错误！"
                })
            }
        } else {
            console.log(res);
            res.json({
                code: data.code,
                msg: data.msg
            })
        }
    }).catch(err => {
        console.log(err);
        if (err) {
            res.json({
                code: err.status,
                msg: err.statusText
            })
        } else {
            res.json({
                code: 500,
                msg: "服务器错误！"
            })
        }
    })
});

/**
 * @api {get} /provinceList 获取各省
 * @apiDescription 获取各省
 * @apiName provinceList
 * @apiGroup homePrison
 * @apiSampleRequest http://localhost:7777/api/sdcm/homePrison/provinceList
 * @apiVersion 1.0.0
 */
function hundleProvincePrisonSituation(data) {
    if (!data) {
        return {
            topV: [],
            botV: []
        }
    }
    let [configTop, configBot] = [["inPrisonTotal", "thisMonthInPrison", "thisMonthOutPrison"], ["juvenileDelinquentCount", "weiAnCriminalsCount", "wanWeiCriminalsCount", "leiGuanCriminalsCount", "sheDuCriminalsCount", "medicalTreatmentCriminalsCount", "paroleCriminalsCount", "outSidePrisonCount"]]
    return {
        topV: configTop.map(i => {
            return parseInt(data[i])
        }),
        botV: configBot.map(i => {
            return parseInt(data[i])
        })
    }
}

router.get("/provinceList", function (req, res) {
    let provinceCode = req.query.provinceCode;
    if (provinceCode) {
        provinceApi(provinceCode).then(data => {
            if (data.code === 200) {
                try {
                    data = data.data;
                    //全省监狱概况
                    let provincePrisonSituation = hundleProvincePrisonSituation(data.provincePrisonSituation);
                    //刑期构成
                    let xqConstitute = hundleXqConstitute(data.xqConstitute);
                    //罪犯情况
                    let crimes = hundleCrimes(data.crimes);
                    //罪犯年龄构成情况
                    let ageCompositionOfTheCrime = hundleAgeCompositionOfTheCrime(data.ageCompositionOfTheCrime);
                    //全省各监狱人员分布
                    let provincePrisonStaffDistribution = data.provincePrisonStaffDistribution || {};
                    res.json({
                        code: 200,
                        msg: "success",
                        data: {
                            provincePrisonSituation,
                            xqConstitute,
                            crimes,
                            ageCompositionOfTheCrime,
                            dwInfoList: data.dwInfoList || [],  //各省监狱信息，包括坐标，之类的
                            provinceName: data.provinceName,
                            provincePrisonStaffDistribution
                        }
                    })
                } catch (e) {
                    console.log(e);
                    res.json({
                        code: 500,
                        msg: "服务器错误！"
                    })
                }
            } else {
                console.log(res);
                res.json({
                    code: data.code,
                    msg: data.msg
                })
            }
        }).catch(err => {
            console.log(err);
            if (err) {
                res.json({
                    code: err.status,
                    msg: err.statusText
                })
            } else {
                res.json({
                    code: 500,
                    msg: "服务器错误！"
                })
            }
        })
    } else {
        res.json({
            code: 0,
            msg: "省份编码(provinceCode)不能为空"
        })
    }
});
module.exports = router;
