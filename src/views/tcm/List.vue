<template>
    <div class="tcmList-container main-container">
        <el-tabs v-model="searchForm.tab" class="flex-shrink-0" @tab-change="getTableData">
            <el-tab-pane v-for="(item, index) in tabbars" :key="index" :label="item.name" :name="item.key"></el-tab-pane>
        </el-tabs>
        <el-card shadow="never" class="border-0 flex-1">
            <!-- 搜索 -->
            <search>
                <search-item label="关键字">
                    <el-input v-model="searchForm.key" clearable placeholder="输入关键字搜索"></el-input>
                </search-item>
                <template #show>
                    <search-item label="商品分类">
                        <el-input v-model="searchForm.type" clearable placeholder="输入商品分类搜索"></el-input>
                    </search-item>
                </template>
            </search>
            <!-- 新增|批量删除|刷新 -->
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <el-button type="primary"  @click="">新增</el-button>
                    <el-popconfirm 
                        title="是否批量删除选中列表?"
                        width="180"
                        confirm-button-text="删除"
                        cancel-button-text="取消"
                        @confirm=""
                    >
                        <template #reference>
                            <el-button type="danger">批量删除</el-button>
                        </template>
                    </el-popconfirm>
                </div>
                <div class="flex items-center">
                    <el-tooltip content="刷新数据" placement="top" effect="dark">
                        <el-button type="text" >
                            <el-icon :size="18"><Refresh /></el-icon>
                        </el-button>
                    </el-tooltip>
                    <el-tooltip content="导出数据" placement="top" effect="dark">
                        <el-button type="text" >
                            <el-icon :size="18"><Download /></el-icon>
                        </el-button>
                    </el-tooltip>
                </div>
            </div>
            <el-table :data="dataList" stripe >
                <el-table-column type="expand">
                    <template #default="{ row }">
                        <div class="px-4 py-2">
                            <div class="flex items-start pb-2">
                                <p class="pr-2 flex-shrink-0 font-bold">主治功能: </p>
                                <p>{{ row.zhuzhigongneng }}</p>
                            </div>
                            
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="bianhao" label="编号" width="55" />
                <el-table-column type="selection" width="55" />
                <el-table-column prop="name" label="药材名" />
                <el-table-column prop="keming" label="科名" />
                <el-table-column prop="shuming" label="属名" />
                <el-table-column prop="alias" label="别名" />
                <el-table-column prop="yaoyong" label="药用部分" />
                <el-table-column prop="yongfayongliang" label="用法用量" />
                <el-table-column prop="shenghuohuanjing" label="生活环境" />
                <el-table-column prop="shenghuoxing" label="生活型" />
                <el-table-column label="操作" align="right" width="150" fixed="right"  >
                    <template #default="{ row }">
                        <el-button 
                            class="px-1"
                            size="small" 
                            type="primary"
                        >修改</el-button>
                        <!-- <el-popconfirm  title="是否删除该商品?" width="160" confirm-button-text="删除" cancel-button-text="取消" @confirm="handleMultiDelete(scope.row.id)"> -->
                        <el-popconfirm  title="是否删除该商品?" width="160" confirm-button-text="删除" cancel-button-text="取消" >
                            <template #reference>
                                <el-button
                                    size="small"
                                    type="danger"
                                >删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>

        </el-card>
        
    </div>
</template>

<script setup>

import Search from '@/components/search/Search.vue';
import SearchItem from '@/components/search/SearchItem.vue';

const dataList = ref([
    {
        bianhao: '01',
        name: '泽泻',
        keming: '泽泻科',
        shuming: '泽泻属',
        alias: '水泻',
        yaoyong: '块根',
        zhuzhigongneng: '利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症',
        yongfayongliang: '6 ~ 10g',
        shenghuohuanjing: '阴坡',
        shenghuoxing: '乔木'
    },
    {
        bianhao: '01',
        name: '泽泻',
        keming: '泽泻科',
        shuming: '泽泻属',
        alias: '水泻',
        yaoyong: '块根',
        zhuzhigongneng: '利水渗湿透,泄热,化浊降脂,用于小便不利,水中胀满,泄泻尿少,痰饮眩晕,热淋涩痛,高脂血症',
        yongfayongliang: '6 ~ 10g',
        shenghuohuanjing: '阴坡',
        shenghuoxing: '乔木'
    }
])


const searchForm = ref({
    key: '',
    tab: 'all',
    type: ''
})
const tabbars = ref([
    { key: 'all', name: '全部' },
    { key: 'fungi', name: '真菌' },
    { key: 'bryophytes', name: '苔藓植物' },
    { key: 'fern', name: '蕨类植物' },
    { key: 'gymnosperm', name: '裸子植物' },
    { key: 'monocotyledons', name: '单子叶植物' },
    { key: 'dicotyledon', name: '双子叶植物' }
])



// 获取列表
const getTableData = (e) => {
//   console.log(tab, event)
    console.log(e)
    console.log(activeName.value)
}
</script>

<style lang="scss" scoped>

</style>