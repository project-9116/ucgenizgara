// import './assets/main.css'
import "./assets/0.css"
import "./assets/style.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')