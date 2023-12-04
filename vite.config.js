import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'production' ? './' : '',
  plugins: [
    vue(),
    WindiCSS()
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
