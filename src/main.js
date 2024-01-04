import './assets/main.css'
import 'virtual:windi.css'
import 'nprogress/nprogress.css'

import './permission.js'
import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'
import pinia from './stores'


const app = createApp(App)

app.use(router)
app.use(pinia)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
