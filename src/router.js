import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/About'),
  },
  {
    path: '*',
    component: NoMatch,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_URL,
  routes,
});
