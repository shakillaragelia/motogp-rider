<template>
  <div>
    <div class="class-filter">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', { active: selectedCategory === cat }]"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>
    <div class="riders-grid">
      <div
        class="rider-card"
        v-for="card in filteredCards"
        :key="card.title"
        @click="goToDetail(card)"
        tabindex="0"
        role="button"
      >
        <div class="rider-img-bg" :style="{ background: card.bg }">
          <img :src="card.img" :alt="card.alt" class="rider-img" />
          <div class="rider-rank">{{ card.rank }}</div>
          <div class="rider-bg-number">{{ card.bgNumber }}</div>
        </div>
        <div class="rider-info">
          <h3 class="rider-name">{{ card.title }}</h3>
          <div class="rider-country-team">
            <img :src="card.flag" :alt="card.country" class="rider-flag" />
            <span class="rider-country">{{ card.country }}</span>
            <span class="rider-team">| {{ card.team }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const categories = ['MotoGP', 'Moto2', 'Moto3']
const selectedCategory = ref('MotoGP')


//for dummy data before fetch from API
const cards = [
  {
    img: '/img/rider/jorgemartin.webp',
    alt: 'Jorge Martin',
    title: 'JORGE MARTIN',
    rank: 1,
    flag: '/img/flag/spain.png',
    country: 'Spain',
    team: 'Aprilia Racing',
    bg: 'linear-gradient(135deg, #23243a 80%, #23243a 100%)',
    bgNumber: '1',
    category: 'MotoGP'
  },
  {
    img: '/img/rider/johanzarco.webp',
    alt: 'Johan Zarco',
    title: 'JOHAN ZARCO',
    rank: 5,
    flag: '/img/flag/france.png',
    country: 'France',
    team: 'CASTROL Honda LCR',
    bg: 'linear-gradient(135deg, #2c3137 80%, #2c3137 100%)',
    bgNumber: '5',
    category: 'MotoGP'
  },
  {
    img: '/img/rider/lucamarini.webp',
    alt: 'Luca Marini',
    title: 'LUCA MARINI',
    rank: 10,
    flag: '/img/flag/italy.png',
    country: 'Italy',
    team: 'Honda HRC Castrol',
    bg: 'linear-gradient(135deg, #3a2323 80%, #3a2323 100%)',
    bgNumber: '10',
    category: 'MotoGP'
  },
  {
    img: '/img/rider/marquez.webp',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    rank: 93,
    flag: '/img/flag/spain.png',
    country: 'Spain',
    team: 'DUCATI LENOVO TEAM',
    bg: 'linear-gradient(135deg, #3a2323 80%, #3a2323 100%)',
    bgNumber: '93',
    category: 'MotoGP'
  },
  // Tambahkan data Moto2, Moto3, MotoE di bawah ini
  {
    img: '/img/rider/moto2rider.webp',
    alt: 'Moto2 Rider',
    title: 'MOTO2 RIDER',
    rank: 22,
    flag: '/img/flag/italy.png',
    country: 'Italy',
    team: 'SAG TEAM',
    bg: 'linear-gradient(135deg, #1a2a3a 80%, #1a2a3a 100%)',
    bgNumber: '22',
    category: 'Moto2'
  },
  {
    img: '/img/rider/moto3rider.webp',
    alt: 'Moto3 Rider',
    title: 'MOTO3 RIDER',
    rank: 7,
    flag: '/img/flag/spain.png',
    country: 'Spain',
    team: 'REDOX PRUSTELGP',
    bg: 'linear-gradient(135deg, #2a1a3a 80%, #2a1a3a 100%)',
    bgNumber: '7',
    category: 'Moto3'
  },
  {
    img: '/img/rider/motoerider.webp',
    alt: 'MotoE Rider',
    title: 'MOTOE RIDER',
    rank: 11,
    flag: '/img/flag/france.png',
    country: 'France',
    team: 'AVINTIA ESPONSORAMA',
    bg: 'linear-gradient(135deg, #23243a 80%, #d60000 100%)',
    bgNumber: '11',
    category: 'MotoE'
  }
]

const filteredCards = computed(() =>
  cards.filter(card => card.category === selectedCategory.value)
)

function goToDetail(card) {
  router.push(`/rider/${card.title.toLowerCase().replace(/\s+/g, '')}`)
}
</script>

<style scoped>
.class-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 32px; 
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
.riders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding-left: 20px;   
  padding-right: 20px;  
}
.rider-card {
  background: transparent;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  min-height: 420px;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.rider-img-bg {
  position: relative;
  width: 100%;
  height: 320px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.rider-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  z-index: 2;
}
.rider-rank {
  position: absolute;
  top: 18px;
  left: 18px;
  background: transparent;
  color: #cedff4;
  font-weight: 800;
  font-size: 1.4rem;
}
.rider-flag {
  width: 24px;   
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
  margin-right: 4px;
}
.rider-bg-number {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 10rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.15);
  z-index: 1;
}
.rider-name {
  font-family: 'Audiowide', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
}

.rider-team {
  font-family: 'Audiowide', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin: 0;
}

.rider-country {
  font-family: 'Audiowide', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin: 0;
}
</style>
 