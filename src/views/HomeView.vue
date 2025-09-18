<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import RidersCards from '../components/RidersCards.vue'
import AboutMotogp from '../components/AboutMotogp.vue'
import TeamsDetail from '../components/TeamsDetail.vue'
import RaceSchedule from '../components/RaceSchedule.vue'
import ContactInfo from '../components/ContactInfo.vue'

const router = useRouter()

const sections = [
  { id: 'home', path: '/' },
  { id: 'about', path: '/about' },
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
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length > 0) {
        const id = visible[0].target.id
        const section = sections.find(s => s.id === id)
        if (section && router.currentRoute.value.path !== section.path) {
          router.replace(section.path)
        }
      }
    },
    {
      root: null,
      rootMargin: '-50% 0px -49% 0px',
      threshold: [0.1, 0.5, 1.0]
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