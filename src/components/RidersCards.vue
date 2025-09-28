<template>
  <div class="riders-grid">
    <div class="rider-card" v-for="card in cards" :key="card.title">
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
</template>

<script setup>
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
    bgNumber: '01'
  },
  {
    img: '/img/rider/johanzarco.webp',
    alt: 'Johann Zarco',
    title: 'JOHANN ZARCO',
    rank: 5,
    flag: '/img/flag/france.png',
    country: 'France',
    team: 'CASTROL Honda LCR',
    bg: 'linear-gradient(135deg, #2c3137 80%, #2c3137 100%)',
    bgNumber: '125'
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
    bgNumber: '21'
  },
  {
    img: '/img/rider/maverick-vinales.png',
    alt: 'Maverick Vinales',
    title: 'MAVERICK VINALES',
    rank: 12,
    flag: '/img/flag/spain.png',
    country: 'Spain',
    team: 'Red Bull KTM Tech3',
    bg: 'linear-gradient(135deg, #23243a 80%, #23243a 100%)',
    bgNumber: '12'
  }
]
</script>

<style scoped>
.riders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
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
  background: #fff;
  color: #181d23;
  font-weight: 800;
  font-size: 1.4rem;
}
.rider-flag {
  width: 24px;    /* lebih kecil dari sebelumnya */
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
  margin-right: 4px;
}
</style>
 