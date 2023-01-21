import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' //add this

import "@/assets/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle'//para q funcione ok bootstrap

import './assets/main.css'

const pinia = createPinia()//poner para pinia
const app = createApp(App)

app.use(pinia)//poner para pinia
app.use(router)



app.mount('#app')
