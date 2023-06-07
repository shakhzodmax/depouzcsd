import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

createApp(App).use(i18n).use(router).use(VueAxios, axios).mount('#app')
