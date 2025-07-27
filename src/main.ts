import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { useLenis } from './plugins/lenis.client';
useLenis();
createApp(App).use(router).mount('#app');
