import nProgress from "nprogress";

// 显示全屏 loading
export function showFullLoading() {
    nProgress.start()
}

// 隐藏全屏 loading
export function hideFullLoading() {
    nProgress.done()
}