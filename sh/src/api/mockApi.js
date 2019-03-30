import Http from "@/libs/axios"

const httpAxios2 = new Http();
//mock的数据接口
//粒子
export const GetNetWorkData = () => {
    return httpAxios2.axioseRquest({
        method: "post",
        url: '/mock/netWorkData',
    })
};
//获取饼状图数据
export const GetPieData = (data) => {
    return httpAxios2.axioseRquest({
        method: "post",
        url: '/mock/PieData',
        data: data
    })
};

//二次犯罪数据
export const GetDoubleZmData = (data) => {
    return httpAxios2.axioseRquest({
        method: "post",
        url: '/mock/doubleZmData',
        data: data
    })
};

//流窜犯罪数据
export const GetMoveCrimeData = (data) => {
    return httpAxios2.axioseRquest({
        method: "post",
        url: '/mock/moveCrimeData',
        data: data
    })
};


//登录
export const loginApi = (login) => {
    let data = {
        username: login.username,
        password: login.password
    };
    return httpAxios2.axioseRquest({
        data: data,
        method: "post",
        url: '/mock/loginIn'
    })
};

