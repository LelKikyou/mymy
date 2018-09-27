import httpAxios from '@/libs/axios'

//登录
export const loginApi = (login) => {
    let data={
        username:login.username,
        password:login.password
    };
    return httpAxios.axioseRquest({
        data: data,
        method: "post",
        url: '/auth/loginIn'
    })
};
//注销
export const logOffApi=(authorization )=>{
  return httpAxios.axioseRquest({
      method:'DELETE',
      data:authorization,
      url:'/auth/loginOut'
  })
};