import Http from "@/lib/axios"
import {URL} from "./config";

const httpAxios = new Http(URL);
//全国首页大屏
export const getHomePrisonApi = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/homePrison/nationList'
    })
};
//各省大屏
export const getProvinceApi = (provinceCode) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/homePrison/provinceList',
        params: {
            provinceCode
        }
    })
}
