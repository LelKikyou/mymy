var express = require('express');
var router = express.Router();
let {nationList, provinceApi} = require(pathRoot + "/modelApi/homePrisonApi");

/**
 * @api {get} /nationList 获取全国
 * @apiDescription 获取全国
 * @apiName nationList
 * @apiGroup homePrison
 * @apiSampleRequest http://localhost:8888/api/sdcm/homePrison/nationList
 * @apiVersion 1.0.0
 */
function hundleAllPrisonSurvey(data) {
    if (!data) {
        return {
            topV: [],
            botV: []
        }
    }
    let [configTop, configBot] = [["registeredCriminalsCount", "linkRelativeRatio", "onYearOnYear", "prisonCount"], ["femaleCriminalsCount", "juvenileDelinquentCount", "paroleCriminalsCount", "outSidePrisonCount", "foreignCriminalsCount", "oldCriminalsCount", "gangAoTaiCriminalsCount", "invalidismCriminalsCount", "lastMonthOutCount", "lastMonthCommutationCount", "lastMonthInCount", "thisMonthOutCount"]]
    return {
        topV: configTop.map(i => {
            return data[i] ? data[i] : 0
        }),
        botV: configBot.map(i => {
            return data[i] ? parseInt(data[i]) : 0
        })
    }
}
function hundleNationalnMap(data) {
    if (!data) {
        return {}
    }
    let max = 100;
    let value = data.map(i => {
        let proRegisteredCC = parseInt(i.proRegisteredCC);
        if (proRegisteredCC > max) max = proRegisteredCC;
        return {
            value: i.proRegisteredCC,
            name: i.provinceName,
            proPrisonCount: i.proPrisonCount,
            provinceCode: i.provinceCode
        }
    });
    return {
        data: value,
        max
    }
}
function hundlePersonDistribution(data) {
    if (!data) {
        return {}
    }
    let xName = [], zyData = [], nxData = [], wcnData = [];
    data.map(i => {
        xName.push(i.provinceName);
        zyData.push({
            name: i.provinceName,
            value: i.proRegisteredCC
        });
        nxData.push({
            name: i.provinceName,
            value: i.proFemaleCC
        });
        wcnData.push({
            name: i.provinceName,
            value: i.proJuvenileDC
        })
    })
    return {
        xName,
        zyData,
        nxData,
        wcnData
    }
}

router.get("/nationList", function (req, res) {
    nationList().then(data => {
        if (data.code === 200) {
            try {
                data = data.data;
                //全国监狱概况
                let allPrisonSurvey = hundleAllPrisonSurvey(data.allPrisonSurvey);
                //近5年罪犯变化数量趋势
                let fiveYearCCE = data.fiveYearCCE || [];
                //罪犯情况
                let crimes = data.crimes || {};
                // 监狱情况
                let prisonConditions = data.prisonConditions || [];
                //监狱事件动态信息
                let prisonEventInfo = data.prisonEventInfo || [];
                // 全国地图(监狱数量and罪犯数量)
                let nationalnMap = hundleNationalnMap(data.allProvincePPD);
                //全国各监狱人员分布
                let personDistribution = hundlePersonDistribution(data.allProvincePPD);
                res.json({
                    code: 200,
                    msg: "success",
                    data: {
                        allPrisonSurvey,
                        fiveYearCCE,
                        crimes,
                        prisonConditions,
                        nationalnMap,
                        personDistribution,
                        prisonEventInfo
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
 * @apiSampleRequest http://localhost:8888/api/sdcm/homePrison/provinceList
 * @apiVersion 1.0.0
 */
function hundlePersonDistributionProvince(data) {
    if (!data) {
        return {}
    }
    let xName = [], zyData = [], nxData = [], wcnData = [];
    data.map(i => {
        xName.push(i.name);
        zyData.push({
            name: i.name,
            value: i.registeredCC
        });
        nxData.push({
            name: i.name,
            value: i.femaleCC
        });
        wcnData.push({
            name: i.name,
            value: i.juvenileDC
        })
    })
    return {
        xName,
        zyData,
        nxData,
        wcnData
    }
}

function hundlePersonProvincePrisonInfo(data) {
    if (!data) {
        return []
    }
    return data.map(i => {
        return {
            name: i["name"],
            dwdm: i["dwdm"],
            focus: i["focus"],
            value: i["lnglat"].split(","),
            registeredCC: i["registeredCC"]
        }
    })
}

router.get("/provinceList", function (req, res) {
    let provinceCode = req.query.provinceCode;
    if (provinceCode) {
        provinceApi(provinceCode).then(data => {
            if (data.code === 200) {
                try {
                    data = data.data;
                    //全省监狱概况
                    let allPrisonSurvey = hundleAllPrisonSurvey(data.allPrisonSurvey);
                    // 近5年罪犯变化数量趋势
                    let fiveYearCCE = data.fiveYearCCE || [];
                    //省份名字
                    let provinceName = data.provinceName || "";
                    //省份监狱分布
                    let provincePrisonInfo = {data: hundlePersonProvincePrisonInfo(data.provincePrisonInfo)};
                    // 全省各监狱人员分布
                    let personDistribution = hundlePersonDistributionProvince(data.provincePrisonInfo);
                    //罪犯情况
                    let crimes = data.crimes || {};
                    // 监狱情况
                    let prisonConditions = data.prisonConditions || [];
                    //监狱事件动态信息
                    let prisonEventInfo = data.prisonEventInfo || [];
                    res.json({
                        code: 200,
                        msg: "success",
                        data: {
                            allPrisonSurvey,
                            fiveYearCCE,
                            crimes,
                            prisonConditions,
                            provinceName,
                            personDistribution,
                            provincePrisonInfo,
                            prisonEventInfo
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
