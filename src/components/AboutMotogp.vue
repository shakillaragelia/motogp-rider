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
    img: '/img/rider/marcmarquez.jpeg',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    desc: 'Marc Marquez || DUCATI LENOVO TEAM',
    link: '/rider/marcmarquez'
  },
  {
    img: '/img/rider/marcmarquez.jpeg',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    desc: 'Marc Marquez || DUCATI LENOVO TEAM',
    link: '/rider/marcmarquez'
  }
]
</script>