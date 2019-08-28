let {url} = require(pathRoot + '/config/config');
let Http = require(pathRoot + '/lib/axios.js');
const httpAxios = new Http(url);

module.exports = {
    nationList: () => {
        return httpAxios.axioseRquest({
            url: "/main/list"
        })
    },
    provinceApi: (provinceCode) => {
        return httpAxios.axioseRquest({
            url: "/province/list",
            params: {
                provinceCode
            }
        })
    }
};
