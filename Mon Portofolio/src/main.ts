import App from './App.vue';
import './assets/main.css';

import { createApp } from 'vue';
import router from './router';

const app = createApp(App)

app.use(router)

app.mount('#app')

