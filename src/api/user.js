// 用户接口
import request from "@/util/axios.js";

const URL = {
     /**
     * 用户列表
     * @param (page)
     * 
     */
     USER_LIST: '/admin/user/:page'
}

export const get_userList_api = ({ page = 1, limit = 10, ...params }) => request(URL.USER_LIST.replace(':page', page), 'GET', { limit, ...params })