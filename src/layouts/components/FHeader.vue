<template>
    <div class="f-header-container flex">
        <div class="logo flex items-center">
            <img src="@/assets/images/logo01.png" alt="logo">
            <h1 class=" text-lg text-white pl-3">中药资源普查信息管理系统</h1>
        </div>
        <div class="flex items-center pl-10">
            <el-tooltip
                effect="dark"
                content="展开侧边栏"
                placement="bottom"
            >
                <el-icon @click="toggleMenu" class="icon-btn"><Fold /></el-icon>
            </el-tooltip>
            <el-tooltip
                effect="dark"
                content="刷新"
                placement="bottom"
            >
                <el-icon @click="handleRefresh" class="icon-btn"><Refresh /></el-icon>
            </el-tooltip>
        </div>
        <div class="flex ml-auto">
            <el-tooltip
                effect="dark"
                :content="isFullscreen ? '取消全屏' : '全屏'"
                placement="bottom"
            >
                <el-icon @click="toggle" class="icon-btn">
                    <FullScreen v-if="!isFullscreen" />
                    <Aim v-else />
                </el-icon>
            </el-tooltip>
            <el-dropdown class="px-7" @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-avatar :size="40" src="" />
                    <span class="pl-3 pr-2">用户名称</span>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import { useFullscreen } from '@vueuse/core'

const commonStore = useCommonStore()

// 是否全屏
const { isFullscreen, toggle } = useFullscreen()

const toggleMenu = () => {
    console.log('切换侧边栏')
    commonStore.taggleCollapse()
}

const handleRefresh = () => {
    location.reload()
}

// 下拉选择点击函数
function handleCommand(command) {
    switch (command) {
        case 'rePassword':
            console.log('修改密码')
            // formDrawerRef.value.open()
            break;
        case 'logout':
            console.log('退出登录')
            // handleLogout()
            break;
        default:
            break;
    }
}

</script>

<style lang="scss" scoped>
.f-header-container {
    padding: 0 20px;
    .logo {
        img {
            height: 66px;
            margin: 7px;
        }
    }

    .icon-btn {
        height: 80px;
        @apply flex items-center justify-center;
        width: 42px;
        padding: 0 11px;
        color: #fff;
        cursor: pointer;
        &:hover {
            @apply bg-indigo-600;
        } 
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
        outline: none;
    }
}
</style>