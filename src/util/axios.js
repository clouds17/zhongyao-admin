import axios from 'axios'
import { getToken } from './auth.js'
import { toast } from './usePrompt.js'

import pinia from "@/stores/index.js";
import { useUserStore } from '@/stores/user.js'


const instance = axios.create({
    // 接口根路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 发送请求前做什么
    const token = getToken()
    if (token) {
        config.headers['token'] = token
    }

    return config
}, function(error) {
    // 请求错误
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 2xx 范围内的状态码都会出发该函数
    // 对响应数据做点什么
    return response.request.responseType == 'blob' ? response.data : response.data.data
}, function(error) {
    // 超出2xx范围的状态码都会出发该函数
    // 对响应错误做点什么
    const { CLEAR_DATA } = useUserStore(pinia)
    const msg = error?.response.data.msg || '请求失败'

    if (msg == '非法token，请先登录！') {
        // 清除数据,清除了token重新刷新时,在路由守卫那边就会转跳到login页面
        CLEAR_DATA()
        // TODO
        location.reload()
    }

    toast(msg, 'error')

    return Promise.reject(error)

})

function request(url, method = 'GET', data = {}, options = {}) {
    return new Promise((resolve, reject) => {
        options = {
            url,
            method,
            ...options
        }
        if (method.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.params = data
        }

        instance(options).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })

    })
}

export default request;