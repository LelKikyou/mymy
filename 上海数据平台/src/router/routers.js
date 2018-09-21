import Home from '../view/home/home'
import Login from '../view/login/login'
import Shzxjzpt from '../view/home/shzxjzpt/shzxjzpt'
import Znss from '../view/home/znss/znss'
import b1 from '../view/home/b1/b1'
import b2 from '../view/home/b2/b2'
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页面',
        },
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/shzxjzpt',
        component: Home,
        meta: {
            title: "首页"
        },
        children: [
            {
                path: '/home/shzxjzpt',
                name: 'shzxjzpt',
                redirect: '/home/shzxjzpt/sjgl',
                component: Shzxjzpt,
                meta: {
                    title: "上海执行矫治平台"
                },
                children: [
                    {
                        path: '/home/shzxjzpt/sjgl',
                        name: 'sjgl',
                        component: ()=>import('../view/home/shzxjzpt/sjgl/sjgl'),
                        meta: {
                            title: "数据概览"
                        }
                    },
                    {
                        path: '/home/shzxjzpt/glfx',
                        name: 'glfx',
                        component: ()=>import('../view/home/shzxjzpt/glfx/glfx'),
                        meta: {
                            title: "关联分析"
                        }
                    },
                    {
                        path: '/home/shzxjzpt/lrfx',
                        name: 'lrfx',
                        component: ()=>import('../view/home/shzxjzpt/lrfx/lrfx'),
                        meta: {
                            title: "流入分析"
                        }
                    },
                    {
                        path: '/home/shzxjzpt/lsfx',
                        name: 'lsfx',
                        component: ()=>import('../view/home/shzxjzpt/lsfx/lsfx'),
                        meta: {
                            title: "临时分析"
                        }
                    },
                    {
                        path: '/home/shzxjzpt/sjbb',
                        name: 'sjbb',
                        component: ()=>import('../view/home/shzxjzpt/sjbb/sjbb'),
                        meta: {
                            title: "数据报表"
                        }
                    }
                ]
            }, {
                path: '/home/znss',
                name: 'znss',
                component: Znss,
                meta: {
                    title: "智能搜索"
                }
            }, {
                path: '/home/b1',
                name: 'b1',
                component: b1,
                meta: {
                    title: "标题1"
                }
            },
            {
                path: '/home/b2',
                name: 'b2',
                component: b2,
                meta: {
                    title: "标题2"
                }
            }
        ]
    }
]
