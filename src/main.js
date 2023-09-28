import './index.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')