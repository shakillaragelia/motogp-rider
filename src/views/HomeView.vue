<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import RidersCards from '../components/RidersCards.vue'
import AboutMotogp from '../components/AboutMotogp.vue'
//import RiderDetail from '../components/RiderDetail.vue'
import TeamsDetail from '../components/TeamsDetail.vue'
import RaceSchedule from '../components/RaceSchedule.vue'
import ContactInfo from '../components/ContactInfo.vue'

const router = useRouter()

const sections = [
  { id: 'home', path: '/' },
  { id: 'about', path: '/about' },
  { id: 'riders', path: '/riders' },
  { id: 'teams', path: '/teams' },
  { id: 'schedule', path: '/race-schedule' },
  { id: 'contact', path: '/contact' }
]

let observer

onMounted(async () => {
  await nextTick()
  observer = new window.IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .map(entry => ({
        id: entry.target.id,
        diff: Math.abs(entry.boundingClientRect.top)
      }))
      .sort((a, b) => a.diff - b.diff)
    if (visible.length > 0) {
      const id = visible[0].id
      const section = sections.find(s => s.id === id)
      if (section && router.currentRoute.value.path !== section.path) {
        router.replace(section.path)
      }
    }
  },
  {
    root: null,
    rootMargin: '-50px 0px -60% 0px',
    threshold: 0.5
  }
)
  sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="home">
    <RidersCards />
  </section>
  <section id="about">
    <AboutMotogp />
  </section>
  <section id="teams">
    <TeamsDetail />
  </section>
  <section id="schedule">
    <RaceSchedule />
  </section>
  <section id="contact">
    <ContactInfo />
  </section>
</template>

<style scoped>
section {
  padding: 16px 0;      /* Lebih rapat antar section */
  min-height: auto;
  scroll-margin-top: 100px; 
}
</style>
