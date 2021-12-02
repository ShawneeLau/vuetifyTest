import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const DefaultPage = {
  path: '/',
  redirect: '/login'
};

const Home = {
  component: () => import('../views/Home'),
  path: '/home'
};

// const NotFound = {
//   path: '/*',
//   redirect: '/home'
// };

const Login = {
  path: '/login',
  component: () => import('../views/Login')
};

const About = {
  path: '/about',
  component: () => import('../views/About')
};

const Record = {
  path: '/record',
  component: () => import('../views/Record')
};

const Person = {
  path: '/person',
  component: () => import('../views/Person')
};

const routes = [
  DefaultPage,
  Home,
  Login,
  About,
  Record,
  Person
  // NotFound,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
