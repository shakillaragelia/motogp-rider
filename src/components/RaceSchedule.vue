<template>
  <section class="race-schedule section">
    <div class="container">
      <!-- Header: View Switch & Calendar Buttons -->
      <div class="race-header">
        <div class="view-switch">
          <button :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">GRID VIEW</button>
          <button :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">LIST VIEW</button>
        </div>
        <div class="calendar-actions">
          <button class="calendar-btn">2026 CALENDAR</button>
          <button class="calendar-btn">SYNC CALENDAR</button>
          <button class="calendar-btn sync-red"><i class="bi bi-calendar"></i> SYNC CALENDAR</button>
        </div>
      </div>

      <!-- Race Grid -->
      <div v-if="viewMode === 'grid'" class="race-grid">
        <div
          v-for="(race, idx) in races"
          :key="race.id"
          :class="['race-card', { 'up-next': idx === 0 }]"
        >
          <div class="race-flag">
            <img :src="race.flag" :alt="race.country" />
            <span v-if="idx === 0" class="race-upnext">UP NEXT</span>
          </div>
          <div class="race-date">{{ race.date }}</div>
          <div class="race-number">{{ race.round }} <span class="race-country">{{ race.country.toUpperCase() }}</span></div>
          <div class="race-location">{{ race.location }}</div>
        </div>
      </div>

      <div v-else-if="viewMode === 'list'" class="race-list">
  
  <div  v-for="(race, idx) in races"
    :key="race.id"
    :class="['race-list-card', { 'up-next': idx === 0 }]">
    <div class="race-list-info">
      <div v-if="idx === 0" class="race-list-upnext">UP NEXT</div>
      <div class="race-list-flag-date">
        <img :src="race.flag" :alt="race.country" class="race-list-flag" />
        <span class="race-list-date">{{ race.date }}</span>
      </div>
      <div class="race-list-title">
        <span class="race-list-round">{{ race.round }}</span>
        <span class="race-list-country">{{ race.country.toUpperCase() }}</span>
      </div>
      <div class="race-list-location">{{ race.location }}</div>
    </div>
    <div class="race-list-img">
      <img :src="race.circuitImg" :alt="race.country + ' circuit'" />
    </div>
  </div>
</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const viewMode = ref('grid')

// Dummy data, nanti bisa dari backend
const races = [
  {
    id: 1,
    flag: '/img/flag/thailand.png',
    country: 'Thailand',
    date: '27 FEB - 01 MAR',
    round: 1,
    location: 'THAILAND',
    circuitImg: '/img/circuit/buriram.jpg'
  },
  {
    id: 2,
    flag: '/img/flag/brazil.png',
    country: 'Brazil',
    date: '20 MAR - 22 MAR',
    round: 2,
    location: 'BRAZIL',
    circuitImg: '/img/circuit/aytonsenna.jpg'
  },
]
</script>

<style scoped>
.race-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}
.view-switch button {
  background: #eee;
  border: none;
  border-radius: 20px;
  padding: 8px 22px;
  font-weight: 700;
  margin-right: 8px;
  color: #222;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
}
.view-switch button.active {
  background: #222;
  color: #fff;
}
.calendar-actions {
  display: flex;
  gap: 12px;
}
.calendar-btn {
  background: #fff;
  border: 1.5px solid #eee;
  border-radius: 20px;
  padding: 8px 22px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.calendar-btn.sync-red {
  background: #e00;
  color: #fff;
  border: 1.5px solid #e00;
}
.race-grid {
  display: grid;
  border-radius: 12px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
.race-card {
  background: #fff;
  border-radius: 12px;
  border: 0.5px solid #222;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  padding: 24px 28px 18px 28px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 120px;
  transition: box-shadow 0.2s;
}
.race-card.up-next {
  background: #222;
  color: #fff;
}
.race-card.up-next .race-country,
.race-card.up-next .race-location,
.race-card.up-next .race-date {
  color: #fff;
  box-shadow: #222;
}
.race-flag {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.race-flag img {
  width: 28px;
  height: 18px;
  border-radius: 2px;
  object-fit: cover;
}
.race-upnext {
  background: #e00;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 10px;
  margin-left: 10px;
}
.race-date {
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: #888;
}
.race-number {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 2px;
}
.race-country {
  font-size: 1.15rem;
  font-weight: 800;
  margin-left: 6px;
}
.race-location {
  font-size: 1.05rem;
  color: #888;
  font-weight: 500;
}

.race-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.race-list-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  border: 2px solid rgb(176, 157, 157);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  min-height: 120px;
  overflow: hidden;
  position: relative;
}
.race-list-card.up-next {
  background: #222;
  color: #fff;
}
.race-list-info {
  flex: 1;
  padding: 24px 28px 18px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.race-list-upnext {
  background: #e00;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 4px 14px;
  margin-bottom: 10px;
  display: inline-block;
}
.race-list-flag-date {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.race-list-flag {
  width: 28px;
  height: 18px;
  border-radius: 2px;
  object-fit: cover;
}
.race-list-date {
  font-size: 1.05rem;
  font-weight: 500;
  color: #888;
}
.race-list-card.up-next .race-list-date,
.race-list-card.up-next .race-list-location {
  color: #fff;
}
.race-list-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.race-list-round {
  font-size: 1.2rem;
  font-weight: 700;
}
.race-list-country {
  font-size: 1.3rem;
  font-weight: 800;
}
.race-list-location {
  font-size: 1.05rem;
  color: #888;
  font-weight: 500;
}
.race-list-img {
  width: 260px;
  min-width: 180px;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  overflow: hidden;
}
.race-list-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 12px 12px 0;
}
@media (max-width: 900px) {
  .race-list-card {
    flex-direction: column;
  }
  .race-list-img {
    width: 100%;
    min-width: 0;
    height: 160px;
    border-radius: 0 0 12px 12px;
  }
  .race-list-img img {
    border-radius: 0 0 12px 12px;
  }
}

@media (max-width: 900px) {
  .race-grid {
    grid-template-columns: 1fr;
  }
  .race-header {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }
}
</style>