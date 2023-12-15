<template>
    <el-menu
        :default-active="defaultActive"
        :collapse="commonStore.isCollapse"
        class="el-menu-vertical"
        :collapse-transition="false"
        @select="handleSelect"
      >
        <el-sub-menu index="/home">
          <template #title>
            <el-icon><help /></el-icon>
            <span>后台面板</span>
          </template>
          <el-menu-item index="/" >
              <el-icon><home-filled /></el-icon>
              <span>主控台</span>
          </el-menu-item>
          
        </el-sub-menu>
        
        <el-sub-menu index="/tcm">
          <template #title>
            <el-icon><Coin /></el-icon>
            <span>中药数据库</span>
          </template>
          <el-menu-item index="/tcm/list" >
              <el-icon><List /></el-icon>
              <span>中药列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/choose/list" >
            <el-icon><Menu /></el-icon>
            <span>选项管理</span>
        </el-menu-item>
        <el-sub-menu index="">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="/setting/userlist" >
              <el-icon><User /></el-icon>
              <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/setting/permissions" >
              <el-icon><Connection /></el-icon>
              <span>权限管理</span>
          </el-menu-item>
          <el-menu-item index="/setting/role" >
              <el-icon><Histogram /></el-icon>
              <span>角色管理</span>
          </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import { useRouter, useRoute } from 'vue-router'
const commonStore = useCommonStore()
const router = useRouter()
const route = useRoute()

commonStore.setMenuActive(route.path)
// 获取当前默认路由路径
const defaultActive = computed(() => commonStore.defaultMenuActive)

// 点击菜单转跳地址
function handleSelect(index, indexPath, item, routeResult) {
    router.push({
        path: index
    })
}
</script>

<style lang="scss" scoped>
.el-menu {
    height: 100%;
    overflow-y: auto;
}

</style>