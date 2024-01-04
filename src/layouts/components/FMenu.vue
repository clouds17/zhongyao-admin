<template>
    <el-menu
        :default-active="defaultActive"
        :collapse="commonStore.isCollapse"
        class="el-menu-vertical"
        :collapse-transition="false"
        @select="handleSelect"
      >
        <template v-for="(item, index) in menus" :key="index">
          <el-sub-menu :index="item.name" v-if="item.child && item.child.length > 0">
            <template #title>
              <el-icon>
                  <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item 
              v-for="(item2, index2) in item.child"
              :key="index2"
              :index="item2.frontpath" >
                <el-icon>
                    <component :is="item2.icon"></component>
                </el-icon>
                <span>{{ item2.name }}</span>
            </el-menu-item>
          </el-sub-menu>
            <el-menu-item v-else
              :index="item.frontpath" >
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.name }}</span>
            </el-menu-item>
        </template>
        
    </el-menu>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import { useRouter, useRoute } from 'vue-router'
const commonStore = useCommonStore()
import { useUserStore } from '@/stores/user.js'
const { menus } = useUserStore()
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