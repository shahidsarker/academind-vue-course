import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/teams', component: 'TeamsList' }, {}],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
