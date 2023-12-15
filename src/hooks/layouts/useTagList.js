import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useCommonStore } from '@/stores/common.js'
function useTagList() {
    
    const commonStore = useCommonStore()
    const route = useRoute()
    const router = useRouter()
    
    const activeTab = ref(route.path)
    const tabList = ref([
      {
        title: '首页',
        path: '/'
      }
    ])
    
    // 监听路由修改
    onBeforeRouteUpdate((to, from) => {
        commonStore.setMenuActive(route.path)
        activeTab.value = to.path
        addTabList({
            title: to.meta.title,
            path: to.path
        })
    })
    
    // 添加tab
    const addTabList = (tab) => {
        let noTab = tabList.value.findIndex(t => t.path == tab.path) == -1
        if (noTab) {
            tabList.value.push(tab)
            // 加入缓存
            // TODO
            localStorage.setItem('tabList', JSON.stringify(tabList.value))
        }
    }
    
    // 初始化tab
    const initTabList = () => {
        const tab = localStorage.getItem('tabList')
        if (tab) {
            tabList.value = JSON.parse(tab)
        }
    }
    
    // 初始化执行
    initTabList()
    
    // 切换tab
    const changeTab = (path) => {
        router.push(path)
    }
    
    // 删除tab
    const removeTab = (closePath) => {
      let curPath = activeTab.value
      let tabs = tabList.value
    
      if (curPath == closePath) {
        let curIndex = tabs.findIndex(t => t.path == curPath)
        const nextTab = tabs[curIndex + 1] || tabs[curIndex - 1]
        if (nextTab) {
            changeTab(nextTab.path)
        }
      }
    
      tabList.value = tabs.filter(t => t.path != closePath)
      localStorage.setItem('tabList', JSON.stringify(tabList.value))
    }
    
    const handleClose = (params) => {
        if (params == 'clearOther') {
            // 清除其他
            tabList.value = tabList.value.filter(t => t.path == '/' || t.path == activeTab.value)
        } else {
            // 清除所有
            changeTab('/')
            tabList.value = [{
                title: '首页',
                path: '/'
            }]
        }
        localStorage.setItem('tabList', JSON.stringify(tabList.value))
    }

    return {
        activeTab,
        tabList,
        changeTab,
        removeTab,
        handleClose
    }
}

export default useTagList