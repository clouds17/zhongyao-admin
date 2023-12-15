import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path: '/',
      name: 'admin',
      component: () => import('@/layouts/Admin.vue'),
      children: [
        {
          path: '/',
          name: '/',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/Index.vue')
        },
        {
          path: '/tcm/list',
          name: '/tcm/list',
          meta: {
            title: '中药数据库'
          },
          component: () => import('@/views/tcm/List.vue')
        },
        {
          path: '/setting/userlist',
          name: '/setting/userlist',
          meta: {
            title: '用户管理'
          },
          component: () => import('@/views/setting/UserList.vue')
        },
        {
          path: '/setting/permissions',
          name: '/setting/permissions',
          meta: {
            title: '权限管理'
          },
          component: () => import('@/views/setting/Permissions.vue')
        },
        {
          path: '/setting/role',
          name: '/setting/role',
          meta: {
            title: '角色管理'
          },
          component: () => import('@/views/setting/Role.vue')
        },
        {
          path: '/choose/list',
          name: '/choose/list',
          meta: {
            title: '选项管理'
          },
          component: () => import('@/views/choose/List.vue')
        }
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


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
