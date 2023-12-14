import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
// 组件库按需加载
import Components from 'unplugin-vue-components/vite'
// 组件库解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// message, notification 等引入样式
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import'


// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'production' ? './' : '',
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ ElementPlusResolver() ]
    }),
    Components({
      resolvers: [ ElementPlusResolver() ]
    }),
    
    createStyleImportPlugin({
      resolves: [ ElementPlusResolve() ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    "proxy": {
      "/api": {
        target: 'http://ceshi13.xxxx.cn',
        // 改变请求的origin为target的值
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    "open": true
  }
})
