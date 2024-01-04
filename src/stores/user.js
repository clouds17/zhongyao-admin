import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { setToken, removeToken } from '@/util/auth.js'
import { login_api, logout_api, getinfo_api } from '@/api/manage.js'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref(null)
    // 菜单数据
    const menus = ref(null)
    // 权限
    const ruleName = ref(null)

    function LOGIN_FUNC(payload) {
        return new Promise((resolve, reject) => {
            login_api(payload).then(res => {
                setToken(res.token)
                resolve(res)
            }).catch(err => reject(err))
        })
    }

    function CLEAR_DATA() {
        removeToken()
        // 清除用户信息
        userInfo.value = null
        menus.value = null
        ruleName.value = null
    }

    function SET_USERINFO(res) {
        userInfo.value = res
        menus.value = res.menus
        ruleName.value = res.ruleName
    }

    function LOGOUT_FUNC() {
        return new Promise((resolve, reject) => {
            logout_api().then(res => {
                CLEAR_DATA()
                resolve(res)
            }).catch(err => reject(err))
        })
    }

    function GETINFO_FUNC() {
        return new Promise((resolve, reject) => {
            getinfo_api().then(res => {
                SET_USERINFO(res)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    function getMenus() {
        return menus
    }


    return { 
        userInfo, 
        menus, 
        ruleName,
        LOGOUT_FUNC,
        LOGIN_FUNC,
        GETINFO_FUNC,
        getMenus,
        CLEAR_DATA
      }
})