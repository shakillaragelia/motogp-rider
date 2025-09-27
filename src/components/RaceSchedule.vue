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
      <!-- (opsional) List view bisa ditambah sendiri -->
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
    location: 'THAILAND'
  },
  {
    id: 2,
    flag: '/img/flag/brazil.png',
    country: 'Brazil',
    date: '20 MAR - 22 MAR',
    round: 2,
    location: 'BRAZIL'
  },
  // ...tambahkan data race lain sesuai kebutuhan
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
.race-card {
  background: #fff;
  border-radius: 12px;
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