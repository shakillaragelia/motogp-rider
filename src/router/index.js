import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RidersView from '../views/RidersView.vue'
import TeamsView from '../views/TeamsView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import ContactView from '../views/ContactView.vue'
import RiderDetailView from '../views/RiderDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/riders', component: RidersView },
  { path: '/teams', component: TeamsView },
  { path: '/race-schedule', component: ScheduleView },
  { path: '/contact', component: ContactView },
  { path: '/rider/:slug', component: RiderDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router