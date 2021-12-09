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

// 当前用电量
const Current = {
  path: '/current',
  component: () => import('../views/Current')
};

// 历史用电量
const History = {
  path: '/history',
  component: () => import('../views/History')
};

// 历史账单
const Bill = {
  path: '/bill',
  component: () => import('../views/Bill')
};

// 在线充值
const Topup = {
  path: '/topup',
  component: () => import('../views/Topup')
};

// 电表事件列表
const Event = {
  path: '/event',
  component: () => import('../views/Event')
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
  Person,
  Current,
  History,
  Bill,
  Topup,
  Event,
  // NotFound,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
