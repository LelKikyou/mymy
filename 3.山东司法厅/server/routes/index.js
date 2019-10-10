const {apiName} = require(pathRoot + '/config/config.js');
//登录
let loginRouter = require("./controller/login");
module.exports = function (app) {
    app.use(`${apiName}/login`, loginRouter);
};
