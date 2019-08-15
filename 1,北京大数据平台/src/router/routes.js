export default [
    {
        path: "/",
        redirect: "/homePrison"
    },
    {
        path: "/homePrison",
        component: () => import("@/view/homePrison/homePrison.vue"),
        name: "homePrison",
        redirect: "/homePrison/nation",
        children: [
            {
                path: "/homePrison/nation",
                component: () => import("@/view/homePrison/nation/nation.vue"),
                name: "nation",
            },
            {
                path: "/homePrison/province/:provinceCode",
                component: () => import("@/view/homePrison/nation/nation.vue"),
                name: "province",
            }
        ]
    },
    {
        path: "/login",
        component: () => import("@/view/login/login.vue"),
        name: "login"
    },
    {
        path: "*",
        component: () => import("@/view/error/error.vue"),
        name: "error"
    }
]
