import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsView from '@/views/TeamsView.vue'
import RidersView from '@/views/RidersView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

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
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/teams',
      name: 'teams',
      component: TeamsView,
    },

    {
      path: '/riders',
      name: 'riders',
      component: RidersView,
    },

    {
      path: '/race-schedule',
      name: 'race-schedule',
      component: ScheduleView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router