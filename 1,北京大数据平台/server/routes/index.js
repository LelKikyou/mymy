const {apiName} = require(pathRoot + '/config/config.js');
//登录
let loginRouter = require("./controller/login");
//首页全国和各省数据
let homePrisonRouter = require("./controller/homePrison");
module.exports = function (app) {
    app.use(`${apiName}/login`, loginRouter);
    app.use(`${apiName}/homePrison`, homePrisonRouter);
};
