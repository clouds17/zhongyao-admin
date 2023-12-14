<template>
    <div class="common-layout ">
        <el-container>
            <el-header class=" bg-indigo-700">
                <f-header></f-header>
            </el-header>
            <el-container>
                <el-aside :width="commonStore.asideWidth">
                    <f-menu></f-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';

import { useCommonStore } from '@/stores/common.js'
const commonStore = useCommonStore()
console.log('width', commonStore.asideWidth)
</script>

<style lang="scss" scoped>
.common-layout {
    @apply h-full flex flex-col;
    .el-header {
        height: 80px;
    }
    .el-container {
        height: 0;
    }
    .el-aside {
        height: 100%;
        overflow: hidden;
    }
}
</style>