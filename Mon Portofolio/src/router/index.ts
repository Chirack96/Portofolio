import ContactView from '@/views/ContactView.vue';
import FormationsView from '@/views/FormationsView.vue';
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: { name: 'home' }
    },
  
    {
      path: '/formations',
      name: 'formations',
      component: FormationsView
    },
    
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
]
})

export default router
