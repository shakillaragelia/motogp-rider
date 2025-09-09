<template>
  <div class="highlights-section">
    <div class="row g-4">
      <div class="col-lg-4" v-for="(card, idx) in cards" :key="idx">
        <div class="highlight-card">
          <div class="highlight-image">
            <img :src="card.img" :alt="card.alt" class="img-fluid" />
          </div>
          <div class="highlight-content">
            <h5>{{ card.title }}</h5>
            <p>{{ card.desc }}</p>
            <RouterLink :to="card.link" class="btn btn-primary mt-2">View More</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const cards = [
  {
    img: '/img/rider/marcmarquez.jpeg',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    desc: 'Marc Marquez || DUCATI LENOVO TEAM',
    link: '/rider/marcmarquez'
  },
  {
    img: '/assets/img/education/activities-9.webp',
    alt: 'Cultural Events',
    title: 'Cultural Diversity',
    desc: 'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit',
    link: '/rider/cultural-diversity'
  },
  {
    img: '/assets/img/education/activities-3.webp',
    alt: 'Innovation Hub',
    title: 'Innovation Hub',
    desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam',
    link: '/rider/innovation-hub'
  }
]
</script>