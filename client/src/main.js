import { createApp } from 'vue'
import router from './router/router.js'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


let client = createApp(App);
client.use(VueAxios, axios);
client.use(Toast);
client.mount('#app');
