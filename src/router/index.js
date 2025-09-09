import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsView from '@/views/TeamsView.vue'
import RidersView from '@/views/RidersView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
//import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
     // component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/',
      name: 'team',
      component: TeamsView,
    },

    {
      path: '/',
      name: 'rider',
      component: RidersView,
    },

    {
      path: '/',
      name: 'schedule',
      component: ScheduleView,
    },

  ],
})

export default router
