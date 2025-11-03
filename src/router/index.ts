import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
  ],
})

export default router
