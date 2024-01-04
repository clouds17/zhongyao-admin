import { router, addRoutes } from "./router";
import { getToken } from "./util/auth.js";
import { toast } from "./util/usePrompt.js";
import { showFullLoading, hideFullLoading } from "./util/useNprogress.js";
import pinia from "@/stores/index.js";
import { useUserStore } from '@/stores/user.js'
const { GETINFO_FUNC } = useUserStore(pinia)

let hasGetInfo = false

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    // 显示Loading
    showFullLoading()

    // 获取token
    const token = getToken()
    if (!token && to.path !== '/login') {
        toast('请先登录', 'error')
        return next({
            path: '/login'
        })
    }
    if (token && to.path === '/login') {
        toast('请勿重复登录', 'error')
        return next({
            path: from.path ? from.path : '/'
        })
    }

    // 登录
    if (token && to.path == '/login') {
        hasGetInfo = false
    }

    let hasNewRouters = false
    if (token && !hasGetInfo) {
        let { menus } = await GETINFO_FUNC()
        hasGetInfo = true
        hasNewRouters = addRoutes(menus)
    }

    const title = (to.meta.title ? to.meta.title + '-' : '') + '中药资源普查信息管理系统'
    document.title = title

    hasNewRouters ? next(to.fullPath) : next()
})

// 全局后置守卫
router.afterEach((to, from) => {
    // 隐藏loading
    hideFullLoading()
})