import router from "./router";
import { getToken } from "./util/auth.js";
import { showFullLoading, hideFullLoading } from "./util/useNprogress.js";

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 显示Loading
    showFullLoading()

    
})