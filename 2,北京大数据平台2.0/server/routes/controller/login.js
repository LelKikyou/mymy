var express = require('express');
var router = express.Router();
let {login} = require(pathRoot + "/modelApi/loginApi");
/**
 * @api {get} /login 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName login
 * @apiGroup Login
 * @apiSampleRequest http://localhost:7777/api/sdcm/login
 * @apiVersion 1.0.0
 */

router.get('', function (req, res) {

    login().then(data => {
        console.log(data)

    }).catch(err => {
        console.log(err)
        res.json({
            status: err.status,
            statusText: err.statusText
        })
    })
}, function (req, res) {
    console.log(222)
    // try {
    //     let a = await httpAxios.axioseRquest({
    //         url: "/sdcm/GetMxainList"
    //     })
    //     console.log(11)
    //     res.json(a)
    // } catch (e) {
    //
    //     console.log(e)
    //     res.json({
    //         a: {
    //             a: 1
    //         }
    //     })
    // }
    // httpAxios.axioseRquest({
    //     url: "/sdcm/GetMxainList"
    // }).then(data => {
    //
    // }).catch(err => {
    //     console.log(err)
    //     res.json({
    //         a: JSON.stringify(err)
    //     })
    // })
});

module.exports = router;
