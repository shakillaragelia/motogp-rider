<template>
  <section class="teams-section">
    <div class="container">
      <div class="class-filter">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-btn', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat">
          {{ cat }}
        </button>
      </div>
      <h2 class="teams-title">/ <span>OFFICIAL</span></h2>
      <div class="teams-grid">
        <div
          class="team-card"
          v-for="team in filteredTeams"
          :key="team.name"
          :style="{ background: team.bg }">
          <div class="team-bg-name">{{ team.name }}</div>
          <div class="team-image">
            <img :src="team.img" :alt="team.name" />
          </div>
          <div class="team-info">
            <h3 class="team-name">{{ team.name }}</h3>
            <ul class="team-riders">
              <li v-for="rider in team.riders" :key="rider">{{ rider }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['MotoGP', 'Moto2', 'Moto3']
const selectedCategory = ref('MotoGP')

const teams = [
  {
    name: 'APRILIA RACING',
    img: '/img/team/apriliaracing.webp',
    riders: ['Jorge Martin', 'Marco Bezzecchi'],
    category: 'MotoGP',
    bg: 'linear-gradient(135deg, #23243a 80%, #23243a 100%)'
  },
  {
    name: 'BK8 GRESINI RACING MOTOGP',
    img: '/img/team/gresini.webp',
    riders: ['Fermin Aldeguer', 'Alex Marquez'],
    category: 'MotoGP',
    bg: 'linear-gradient(135deg, #2c3137 80%, #2c3137 100%)'
  },
  {
    name: 'DUCATI LENOVO TEAM',
    img: '/img/team/ducati.webp',
    riders: ['Francesco Bagnaia', 'Marc Marquez'],
    category: 'MotoGP',
    bg: 'linear-gradient(135deg, #3a2323 80%, #3a2323 100%)'
  },
  {
    name: 'SAG TEAM',
    img: '/img/team/sag.png',
    riders: ['Rider Moto2 A', 'Rider Moto2 B'],
    category: 'Moto2',
    bg: 'linear-gradient(135deg, #1a2a3a 80%, #1a2a3a 100%)'
  },
  {
    name: 'REDOX PRUSTELGP',
    img: '/img/team/prustel.png',
    riders: ['Rider Moto3 A', 'Rider Moto3 B'],
    category: 'Moto3',
    bg: 'linear-gradient(135deg, #2a1a3a 80%, #2a1a3a 100%)'
  }
]

const filteredTeams = computed(() =>
  teams.filter(team => team.category === selectedCategory.value)
)
</script>

<style scoped>
.class-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.filter-btn {
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  border: none;
  background: #f5f5f5;
  color: #181d23;
  font-family: 'Audiowide', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.filter-btn.active {
  background: #d60000;
  color: #fff;
}
.teams-section {
  padding: 2rem 0;
}
.teams-title {
  font-family: 'Audiowide', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: #181d23;
}
.teams-title span {
  color: #d60000;
}
.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
}
.team-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  min-height: 420px;
  position: relative;
}
.team-bg-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Audiowide', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(255,255,255,0.08);
  z-index: 1;
  pointer-events: none;
  user-select: none;
  text-align: center;
  white-space: pre-line;
  width: 90%;
}
.team-image img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  display: block;
  background: transparent;
  z-index: 2;
  position: relative;
  margin-top: 32px; 
}
.team-info {
  padding: 1.5rem;
  z-index: 3;
  position: relative;
}
.team-name {
  font-family: 'Audiowide', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}
.team-riders {
  list-style: none;
  padding: 0;
  margin: 0;
}
.team-riders li {
  color: #cedff4;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>