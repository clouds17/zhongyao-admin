export const asyncRoutes = [
    {
        path: '/',
        name: '/',
        meta: {
            title: '后台首页'
        },
        component: () => import('@/views/Index.vue')
    },
    {
        path: '/category/list',
        name: '/category/list',
        meta: {
            title: '商品列表'
        },
        component: () => import('@/views/category/List.vue')
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