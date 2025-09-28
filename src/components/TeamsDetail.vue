<template>
  <section class="teams-section">
    <div class="container">
      <h2 class="teams-title">/ <span>OFFICIAL</span></h2>
      <div class="teams-grid">
        <div class="team-card" v-for="team in teams" :key="team.name">
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
const teams = [
  {
    name: 'APRILIA RACING',
    img: '/img/bike/aprilia.png',
    riders: ['Jorge Martin', 'Marco Bezzecchi']
  },
  {
    name: 'BK8 GRESINI RACING MOTOGP',
    img: '/img/bike/gresini.png',
    riders: ['Fermin Aldeguer', 'Alex Marquez']
  },
  {
    name: 'DUCATI LENOVO TEAM',
    img: '/img/bike/ducati.png',
    riders: ['Francesco Bagnaia', 'Marc Marquez']
  },
  {
    name: 'HONDA HRC CASTROL',
    img: '/img/bike/honda.png',
    riders: ['Luca Marini', 'Joan Mir']
  }
]
</script>

<style scoped>
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
  background: linear-gradient(135deg, #23243a 80%, #23243a 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  min-height: 420px;
  position: relative;
}
.team-image img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  display: block;
  background: transparent;
}
.team-info {
  padding: 1.5rem;
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
  margin-bottom: 0.3rem;
}
</style>