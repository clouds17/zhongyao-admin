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
// 自动导入图标组件
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'production' ? './' : '',
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
         // 自动导入图标组件
         IconsResolver({
          prefix: 'Icon',
        }),
      ],
      include: [
        /\.[j]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/ // .vue
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    createStyleImportPlugin({
      resolves: [
        ElementPlusResolve(),
      ]
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
