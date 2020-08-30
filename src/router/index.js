import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Graph from '@/views/Graph';
import Test from '@/views/Test';
import Modifiers from '@/views/Modifiers';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/modifiers',
      name: 'Modifiers',
      component: Modifiers
    }
  ]
});
