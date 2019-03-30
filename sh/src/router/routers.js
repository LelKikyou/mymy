import Home from '../view/home/home'
import login from '../view/login/login'
import newMain from '../view/newMain/newMain'
import lsfx from '../view/subSystem/lsfx/lsfx'
import criminal from '../view/subSystem/criminal/criminal'
import lrfx from '../view/subSystem/lrfx/lrfx'
import mapDetail from '../view/subSystem/mapDetail/mapDetail'
import correlation from '../view/subSystem/correlation/correlation'
import secondzm from '../view/subSystem/secondzm/secondzm'
import movecrime from '../view/subSystem/movecrime/movecrime'
import stat from '../view/subSystem/stat/stat'
import doublezm from '../view/subSystem/doublezm/doublezm'
import intelligentSearch from '../view/subSystem//intelligentSearch/intelligentSearch'
import intelligentReport from '../view/subSystem//intelligentReport/intelligentReport'


import homePage from '../view/homePage'
import jiedu_tjfx_jdry from '../view/subSystem/jiedu/jiedu_tjfx_jdry'
import jiedu_tjfx_jdjc from '../view/subSystem/jiedu/jiedu_tjfx_jdjc'
import jiedu_tjfx_jdjg from '../view/subSystem/jiedu/jiedu_tjfx_jdjg'
import jiedu_zhcx_jdry from '../view/subSystem/jiedu/jiedu_zhcx_jdry'
import jiedu_zhcx_jdjc from '../view/subSystem/jiedu/jiedu_zhcx_jdjc'
import jiedu_zhcx_jdjg from '../view/subSystem/jiedu/jiedu_zhcx_jdjg'
import jiedu_znyp_dpfb from '../view/subSystem/jiedu/jiedu_znyp_dpfb'
import jiedu_znyp_tzfx from '../view/subSystem/jiedu/jiedu_znyp_tzfx'
import jiedu_znyp_dpfx from '../view/subSystem/jiedu/jiedu_znyp_dpfx'
import jiedu_znyp_fbdq from '../view/subSystem/jiedu/jiedu_znyp_fbdq'
import jiedu_znyp_ycfx from '../view/subSystem/jiedu/jiedu_znyp_ycfx'
import sqjz_sjhc_jzry from '../view/subSystem/sqjz/sqjz_sjhc_jzry'
import sqjz_sjhc_gzry from '../view/subSystem/sqjz/sqjz_sjhc_gzry'
import sqjz_sjhz_jgjgzry from '../view/subSystem/sqjz/sqjz_sjhz_jgjgzry'
import sqjz_sjhz_jzry from '../view/subSystem/sqjz/sqjz_sjhz_jzry'
import sqjz_sjhz_zhcxtj from '../view/subSystem/sqjz/sqjz_sjhz_zhcxtj'
import sqjz_tjfx_jzrykqqyqk from '../view/subSystem/sqjz/sqjz_tjfx_jzrykqqyqk'
import sqjz_tjfx_jzryslqstj from '../view/subSystem/sqjz/sqjz_tjfx_jzryslqstj'
import sqjz_tjfx_sqjzgzjgtj from '../view/subSystem/sqjz/sqjz_tjfx_sqjzgzjgtj'
import sqjz_tjfx_sqjzllpbqkfx from '../view/subSystem/sqjz/sqjz_tjfx_sqjzllpbqkfx'
import sqjz_tjfx_sqjztjtjfx from '../view/subSystem/sqjz/sqjz_tjfx_sqjztjtjfx'
import sqjz_ywjg from '../view/subSystem/sqjz/sqjz_ywjg'

import sqjz_tjfx_qsztgk from '../view/subSystem/sqjz/sqjz_tjfx_qsztgk'
import sqjz_tjfx_sqjzgqgk from '../view/subSystem/sqjz/sqjz_tjfx_sqjzgqgk'

export default [
    {
        path: '/',
        redirect: '/newMain'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页面',
        },
        component: login
    },
    {
        path: '/newMain',
        name: 'newMain',
        meta: {
            title: '大屏显示页',
        },
        component: newMain
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: "首页"
        },
        children: [
            {
                path: '/home/homePage',
                name: 'homePage',
                component: homePage,
                meta: {
                    title: "homePgae"
                },
            },
            {
                path: '/home/lsfx',
                name: 'lsfx',
                component: lsfx,
                meta: {
                    title: "lsfx"
                },
            },
            {
                path: '/home/criminal',
                name: 'criminal',
                component: criminal,
                meta: {
                    title: "criminal"
                },
            },
            {
                path: '/home/lrfx',
                name: 'lrfx',
                component: lrfx,
                meta: {
                    title: "lrfx"
                },
            },
            {
                path: '/home/mapDetail',
                name: 'mapDetail',
                component: mapDetail,
                meta: {
                    title: "mapDetail"
                },
            },
            {
                path: '/home/correlation',
                name: 'correlation',
                component: correlation,
                meta: {
                    title: "correlation"
                },
            },
            {
                path: '/home/secondzm',
                name: 'secondzm',
                component: secondzm,
                meta: {
                    title: "secondzm"
                },
            },
            {
                path: '/home/movecrime',
                name: 'movecrime',
                component: movecrime,
                meta: {
                    title: "movecrime"
                },
            },
            {
                path: '/home/stat',
                name: 'stat',
                component: stat,
                meta: {
                    title: "stat"
                },
            },
            {
                path: '/home/doublezm',
                name: 'doublezm',
                component: doublezm,
                meta: {
                    title: "doublezm"
                },
            },
            {
                path: '/home/intelligentSearch',
                name: 'intelligentSearch',
                component: intelligentSearch,
                meta: {
                    title: "intelligentSearch"
                },
                redirect: '/home/intelligentSearch/queryRes',
                children: [
                    {
                        path: "moreConditions",
                        name: "moreConditions",
                        component: () => import("@/view/subSystem/intelligentSearch/moreConditions/moreConditions"),
                        meta: {
                            title: "更多条件"
                        }
                    },
                    {
                        path: "queryRes",
                        name: "queryRes",
                        component: () => import("@/view/subSystem/intelligentSearch/queryRes/queryRes"),
                        meta: {
                            title: "查询结果"
                        }
                    }
                ]
            },
            {
                path: '/home/intelligentReport',
                name: 'intelligentReport',
                component: intelligentReport,
                meta: {
                    title: "intelligentReport"
                },
            },
            {
                path: '/home/jiedu_tjfx_jdry',
                name: 'jiedu_tjfx_jdry',
                component: jiedu_tjfx_jdry,
                meta: {
                    title: "jiedu_tjfx_jdry"
                },
            },
            {
                path: '/home/jiedu_tjfx_jdjc',
                name: 'jiedu_tjfx_jdjc',
                component: jiedu_tjfx_jdjc,
                meta: {
                    title: "jiedu_tjfx_jdjc"
                },
            },
            {
                path: '/home/jiedu_tjfx_jdjg',
                name: 'jiedu_tjfx_jdjg',
                component: jiedu_tjfx_jdjg,
                meta: {
                    title: "jiedu_tjfx_jdjg"
                },
            },
            {
                path: '/home/jiedu_zhcx_jdry',
                name: 'jiedu_zhcx_jdry',
                component: jiedu_zhcx_jdry,
                meta: {
                    title: "jiedu_zhcx_jdry"
                },
            },
            {
                path: '/home/jiedu_zhcx_jdjc',
                name: 'jiedu_zhcx_jdjc',
                component: jiedu_zhcx_jdjc,
                meta: {
                    title: "jiedu_zhcx_jdjc"
                },
            },
            {
                path: '/home/jiedu_zhcx_jdjg',
                name: 'jiedu_zhcx_jdjg',
                component: jiedu_zhcx_jdjg,
                meta: {
                    title: "jiedu_zhcx_jdjg"
                },
            },
            {
                path: '/home/jiedu_znyp_dpfb',
                name: 'jiedu_znyp_dpfb',
                component: jiedu_znyp_dpfb,
                meta: {
                    title: "jiedu_znyp_dpfb"
                },
            },
            {
                path: '/home/jiedu_znyp_tzfx',
                name: 'jiedu_znyp_tzfx',
                component: jiedu_znyp_tzfx,
                meta: {
                    title: "jiedu_znyp_tzfx"
                },
            },
            {
                path: '/home/jiedu_znyp_dpfx',
                name: 'jiedu_znyp_dpfx',
                component: jiedu_znyp_dpfx,
                meta: {
                    title: "jiedu_znyp_dpfx"
                },
            },
            {
                path: '/home/jiedu_znyp_fbdq',
                name: 'jiedu_znyp_fbdq',
                component: jiedu_znyp_fbdq,
                meta: {
                    title: "jiedu_znyp_fbdq"
                },
            },
            {
                path: '/home/jiedu_znyp_ycfx',
                name: 'jiedu_znyp_ycfx',
                component: jiedu_znyp_ycfx,
                meta: {
                    title: "jiedu_znyp_ycfx"
                },
            },
            {
                path: '/home/sqjz_sjhc_jzry',
                name: 'sqjz_sjhc_jzry',
                component: sqjz_sjhc_jzry,
                meta: {
                    title: "sqjz_sjhc_jzry"
                },
            },
            {
                path: '/home/sqjz_sjhc_gzry',
                name: 'sqjz_sjhc_gzry',
                component: sqjz_sjhc_gzry,
                meta: {
                    title: "sqjz_sjhc_gzry"
                },
            },
            {
                path: '/home/sqjz_sjhz_jgjgzry',
                name: 'sqjz_sjhz_jgjgzry',
                component: sqjz_sjhz_jgjgzry,
                meta: {
                    title: "sqjz_sjhz_jgjgzry"
                },
            },
            {
                path: '/home/sqjz_sjhz_jzry',
                name: 'sqjz_sjhz_jzry',
                component: sqjz_sjhz_jzry,
                meta: {
                    title: "sqjz_sjhz_jzry"
                },
            },
            {
                path: '/home/sqjz_sjhz_zhcxtj',
                name: 'sqjz_sjhz_zhcxtj',
                component: sqjz_sjhz_zhcxtj,
                meta: {
                    title: "sqjz_sjhz_zhcxtj"
                },
            },
            {
                path: '/home/sqjz_tjfx_jzrykqqyqk',
                name: 'sqjz_tjfx_jzrykqqyqk',
                component: sqjz_tjfx_jzrykqqyqk,
                meta: {
                    title: "sqjz_tjfx_jzrykqqyqk"
                },
            },
            {
                path: '/home/sqjz_tjfx_jzryslqstj',
                name: 'sqjz_tjfx_jzryslqstj',
                component: sqjz_tjfx_jzryslqstj,
                meta: {
                    title: "sqjz_tjfx_jzryslqstj"
                },
            },
            {
                path: '/home/sqjz_tjfx_sqjzgzjgtj',
                name: 'sqjz_tjfx_sqjzgzjgtj',
                component: sqjz_tjfx_sqjzgzjgtj,
                meta: {
                    title: "sqjz_tjfx_sqjzgzjgtj"
                },
            },
            {
                path: '/home/sqjz_tjfx_sqjzllpbqkfx',
                name: 'sqjz_tjfx_sqjzllpbqkfx',
                component: sqjz_tjfx_sqjzllpbqkfx,
                meta: {
                    title: "sqjz_tjfx_sqjzllpbqkfx"
                },
            },
            {
                path: '/home/sqjz_tjfx_sqjztjtjfx',
                name: 'sqjz_tjfx_sqjztjtjfx',
                component: sqjz_tjfx_sqjztjtjfx,
                meta: {
                    title: "sqjz_tjfx_sqjztjtjfx"
                },
            },
            {
                path: '/home/sqjz_ywjg',
                name: 'sqjz_ywjg',
                component: sqjz_ywjg,
                meta: {
                    title: "sqjz_ywjg"
                },
            },
            {
                path: '/home/sqjz_tjfx_qsztgk',
                name: 'sqjz_tjfx_qsztgk',
                component: sqjz_tjfx_qsztgk,
                meta: {
                    title: "sqjz_tjfx_qsztgk"
                },
            },
            {
                path: '/home/sqjz_tjfx_sqjzgqgk',
                name: 'sqjz_tjfx_sqjzgqgk',
                component: sqjz_tjfx_sqjzgqgk,
                meta: {
                    title: "sqjz_tjfx_sqjzgqgk"
                },
            },
        ]
    },

]
