// 管理员管理
import request from "@/util/axios.js";

const URL = {
    /**
     * 登录接口
     */
    LOGIN: '/admin/login',
    /**
     * 退出登录
     */
    LOGOUT: '/admin/logout',
    /**
     * 获取管理员信息和权限菜单
    */
    GETINFO: '/admin/getinfo'
}

// 登录
export const login_api = ({ username, password }) => request(URL.LOGIN, 'POST', { username, password })
// 退出
export const logout_api = ( params ) => request(URL.LOGOUT, 'POST')
// 获取管理员信息和权限菜单
export const getinfo_api = ( params ) => request(URL.GETINFO, 'POST')