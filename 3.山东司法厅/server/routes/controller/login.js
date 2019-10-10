var express = require('express');
var router = express.Router();
let {login} = require(pathRoot + "/modelApi/loginApi");
/**
 * @api {get} /login 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName login
 * @apiGroup Login
 * @apiSampleRequest http://localhost:8800/api/sdcm/login
 * @apiVersion 1.0.0
 */



// router.get('', function (req, res) {
//     login().then(data => {
//         if (data.code === 200) {
//             try {
//                 data = data.data;
//                 //全国监狱概况
//                 let allPrisonSurvey = hundleAllPrisonSurvey(data.allPrisonSurvey);
//                 //近5年罪犯变化数量趋势
//                 let fiveYearCCE = data.fiveYearCCE || [];
//                 //罪犯情况
//                 let crimes = data.crimes || {};
//                 // 监狱情况
//                 let prisonConditions = data.prisonConditions || [];
//                 //监狱事件动态信息
//                 let prisonEventInfo = data.prisonEventInfo || [];
//                 // 全国地图(监狱数量and罪犯数量)
//                 let nationalnMap = hundleNationalnMap(data.allProvincePPD);
//                 //全国各监狱人员分布
//                 let personDistribution = hundlePersonDistribution(data.allProvincePPD);
//                 res.json({
//                     code: 200,
//                     msg: "success",
//                     data: {
//                         allPrisonSurvey,
//                         fiveYearCCE,
//                         crimes,
//                         prisonConditions,
//                         nationalnMap,
//                         personDistribution,
//                         prisonEventInfo
//                     }
//                 })
//             } catch (e) {
//                 console.log(e);
//                 res.json({
//                     code: 500,
//                     msg: "服务器错误！"
//                 })
//             }
//         } else {
//             console.log(res);
//             res.json({
//                 code: data.code,
//                 msg: data.msg
//             })
//         }
//     }).catch(err => {
//         console.log(err);
//         if (err) {
//             res.json({
//                 code: err.status,
//                 msg: err.statusText
//             })
//         } else {
//             res.json({
//                 code: 500,
//                 msg: "服务器错误！"
//             })
//         }
//     })
// });

module.exports = router;
