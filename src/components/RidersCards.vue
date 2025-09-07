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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    img: 'assets/img/education/activities-7.webp',
    alt: 'Leadership Programs',
    title: 'Leadership Development',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed'
  },
  {
    img: 'assets/img/education/activities-9.webp',
    alt: 'Cultural Events',
    title: 'Cultural Diversity',
    desc: 'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit'
  },
  {
    img: 'assets/img/education/activities-3.webp',
    alt: 'Innovation Hub',
    title: 'Innovation Hub',
    desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam'
  }
]
</script>