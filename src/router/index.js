import { createRouter, createWebHistory } from 'vue-router'
import { asyncRoutes } from './dynamicRoutes'

const routes = [
    {
      path: '/',
      name: 'admin',
      component: () => import('@/layouts/Admin.vue'),
      children: [
       
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页'
      },
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue')
    }
]




export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// 动态添加路由的方法
export function addRoutes(menus) {
  let hasNewRouters = false
  const addRoutersByMenus = (arr) => {
    arr.forEach(menuItem => {
      let item = asyncRoutes.find(rou => rou.path == menuItem.frontpath)
      if (item && !router.hasRoute(item.name)) {
        router.addRoute("admin", item)
        hasNewRouters = true
      }
      if (menuItem.child && menuItem.child.length > 0) {
        addRoutersByMenus(menuItem.child)
      }
    })
  }

  addRoutersByMenus(menus)
  return hasNewRouters
}