// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Information from './components/Information.vue';
import Help from './components/Help.vue';
import Address from './components/Address.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/informacion', component: Information },
  { path: '/ayuda', component: Help },
  { path: '/direccion', component: Address },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
