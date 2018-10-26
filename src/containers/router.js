import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/index.vue';
import User from './User/index.vue';
import Counter from './Counter/index.vue';
import NoMatch from './NoMatch/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, text: 'Home' },
  { path: '/user', component: User, text: 'User' },
  { path: '/counter', component: Counter, text: 'Counter' },
  { path: '*', component: NoMatch }
];

export const navigators = routes
  .filter(route => route.text)
  .map(({ path, text }) => ({ path, text }));

export default new VueRouter({
  mode: 'history',
  routes: routes.map(({ path, component }) => ({ path, component }))
});
