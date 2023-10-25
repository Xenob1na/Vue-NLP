import './index.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import router from './router'
  



const app = createApp(App)


app.use(MotionPlugin)
app.use(router)

app.mount('#app')