import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const isCollapse = ref(false)

  const asideWidth = computed(() => {
    console.log('width', isCollapse.value ? '220px' : '64px')
    return isCollapse.value ? '64px' : '220px'
  })

  function taggleCollapse() {
    isCollapse.value = !isCollapse.value
  }

  return { isCollapse, taggleCollapse, asideWidth }
})
