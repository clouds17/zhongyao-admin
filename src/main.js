import './assets/main.css'
import 'virtual:windi.css'
import 'nprogress/nprogress.css'

import './permission.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
