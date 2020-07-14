import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home';
import Users from '@/components/users/Users';
import Clients from '@/components/clients/Clients';
import { isAuthorizedGuard } from '@/router/guards';
import ClientDetails from '@/components/clients/ClientDetails';
import UserDetails from '@/components/users/UserDetails';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    beforeEnter: isAuthorizedGuard
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    beforeEnter: isAuthorizedGuard
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
    beforeEnter: isAuthorizedGuard
  },
  {
    path: '/clients/:id',
    name: 'ClientDetails',
    component: ClientDetails,
    beforeEnter: isAuthorizedGuard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
