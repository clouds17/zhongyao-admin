import router from "./router";
import { getToken } from "./util/auth.js";
import { toast } from "./util/usePrompt.js";
import { showFullLoading, hideFullLoading } from "./util/useNprogress.js";

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 显示Loading
    showFullLoading()

    // 获取token
    // const token = getToken()
    // if (!token && to.path !== '/login') {
    //     toast('请先登录', 'error')
    //     return next({
    //         path: '/login'
    //     })
    // }
    // if (token && to.path === '/login') {
    //     toast('请勿重复登录', 'error')
    //     return next({
    //         path: from.path ? from.path : '/'
    //     })
    // }

    const title = (to.meta.title ? to.meta.title + '-' : '') + '中药资源普查信息管理系统'
    document.title = title

    next()
})

// 全局后置守卫
router.afterEach((to, from) => {
    // 隐藏loading
    hideFullLoading()
})