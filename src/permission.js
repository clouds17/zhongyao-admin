import router from "./router";
import { getToken } from "./util/auth.js";
import { showFullLoading, hideFullLoading } from "./util/useNprogress.js";

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 显示Loading
    showFullLoading()

    // 获取token
    // const token = getToken()
    // if (!token && to.path !== '/login') {
    //     return next({
    //         path: '/login'
    //     })
    // }
    // if (token && to.path === '/login') {
    //     return next({
    //         path: from.path ? from.path : '/'
    //     })
    // }

    next()
})

// 全局后置守卫
router.afterEach((to, from) => {
    // 隐藏loading
    hideFullLoading()
})