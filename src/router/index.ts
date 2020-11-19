import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Config from '@/views/Config.vue';
import Project from '@/views/Project.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/config',
    name: 'Config',
    component: Config,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
