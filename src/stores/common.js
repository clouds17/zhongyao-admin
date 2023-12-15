import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  // 侧边栏是否折叠
  const isCollapse = ref(false)
  // 子菜单默认高亮
  const defaultMenuActive = ref('/')

  const asideWidth = computed(() => {
    return isCollapse.value ? '64px' : '250px'
  })

  function taggleCollapse() {
    isCollapse.value = !isCollapse.value
  }

  function setMenuActive(path) {
    defaultMenuActive.value = path
  }

  return { 
    isCollapse, 
    taggleCollapse, 
    asideWidth,
    defaultMenuActive,
    setMenuActive
  }
})
