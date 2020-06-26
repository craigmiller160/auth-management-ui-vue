import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home';
import Users from '@/components/Users';
import Clients from '@/components/Clients';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
