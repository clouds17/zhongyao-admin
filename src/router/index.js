import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path: '/',
      name: 'admin',
      component: () => import('@/layouts/Admin.vue')
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
