<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const route = useRoute()
const slug = ref(route.params.slug)

// Data semua rider
const riders = [
  {
    slug: 'marcmarquez',
    name: 'Marc Marquez Alenta',
    team: 'MotoGP Ducati Lenovo Team Rider',
    bio: 'Marc Márquez Alentà is a Spanish Grand Prix motorcycle road racer who races for the Ducati Lenovo Team. Widely considered as one of the greatest motorcycle racers of all time, he previously raced for the Ducati satellite team Gresini in 2024 and Honda factory team from his MotoGP debut in 2013 until 2023.',
    images: [
      '/img/rider/marcmarquez.jpeg',
      '/img/rider/marcmarquez.jpeg',
      '/img/rider/marcmarquez.jpeg'
    ]
  },
 
]

const rider = computed(() => riders.find(r => r.slug === slug.value))
const riderStats = [
  { label: 'WORLD CHAMPIONSHIPS', value: 8 },
  { label: 'VICTORIES', value: 99 },
  { label: 'PODIUMS', value: 164 },
  { label: 'POLES', value: 102 },
  { label: 'RACES', value: 283 }
]

// Tabs untuk stats
const statTabs = [
  { label: 'TOTAL', value: 'total' },
  { label: 'MotoGP™', value: 'motogp' },
  { label: 'Moto2™', value: 'moto2' },
  { label: '125cc', value: 'cc125' }
]
const activeTab = ref('total')

// Slider logic
const currentImage = ref(0)
let intervalId = null

function goToImage(idx) {
  if (!rider.value) return
  if (idx === currentImage.value) return
  currentImage.value = idx
}
function nextImage() {
  if (!rider.value) return
  currentImage.value = (currentImage.value + 1) % rider.value.images.length
}

onMounted(() => {
  intervalId = setInterval(nextImage, 3000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})

// Data team (dummy, bisa kamu sesuaikan)
const team = [
  {
    name: "James Wilson",
    role: "Vice Principal",
    photo: '/img/rider/marcmarquez.jpeg',
    description: "Nunc dignissim risus id metus molestie tempor. Cras vestibulum bibendum augue praesent mattis.",
  },
  {
    name: "Elena Rodriguez",
    role: "Academic Coordinator",
    photo: '/img/rider/marcmarquez.jpeg',
    description: "Praesent sapien massa convallis a pellentesque nec egestas non nisi cras adipiscing.",
  },
  {
    name: "Michael Chen",
    role: "Student Affairs Director",
    photo: '/img/rider/marcmarquez.jpeg',
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    name: "Sarah Mitchell",
    role: "Curriculum Head",
    photo: '/img/rider/marcmarquez.jpeg',
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    name: "David Kumar",
    role: "Operations Manager",
    photo: '/img/rider/marcmarquez.jpeg',
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    name: "Lisa Anderson",
    role: "Admissions Director",
    photo: '/img/rider/marcmarquez.jpeg',
    description: "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
]
</script>

<template>
  <section id="leadership" class="leadership section">
    <div class="container">
      <!-- Intro -->
      <div class="intro-section">
        <div class="content-wrapper">
          <span class="intro-label">{{ rider?.name || 'Rider Not Found' }}</span>
          <!-- Rider Stats Tabs -->
          <div class="rider-stats-tabs">
            <button
              v-for="tab in statTabs"
              :key="tab.value"
              :class="['rider-tab', { active: activeTab === tab.value }]"
              @click="activeTab = tab.value"
            >
              <span v-if="tab.value === 'cc125'">125<sub>cc</sub></span>
              <span v-else v-html="tab.label"></span>
            </button>
          </div>
          <!-- Rider Stats Bar -->
          <div class="stats-grid rider-stats-custom">
            <div class="stat-item" v-for="stat in riderStats" :key="stat.label">
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Leader with Slider -->
      <div class="leadership-grid">
        <div class="featured-leader">
          <div class="leader-image-large slider-container">
            <div class="slider-img-wrapper">
              <transition name="slide" mode="out-in">
                <img
                  v-if="rider"
                  :src="rider.images[currentImage]"
                  :key="currentImage"
                  :alt="rider.name"
                  class="img-fluid slider-img"
                />
              </transition>
            </div>
            <div class="slider-indicators" v-if="rider">
              <span
                v-for="(img, idx) in rider.images"
                :key="idx"
                :class="['indicator', { active: idx === currentImage }]"
                @click="goToImage(idx)"
              ></span>
            </div>
          </div>
          <div class="leader-details">
            <h3>{{ rider?.name || 'Rider Not Found' }}</h3>
            <span class="leader-title">{{ rider?.team }}</span>
            <p class="leader-bio">
              {{ rider?.bio }}
            </p>
            <div class="leader-stats">
              <div class="stat-item">
                <span class="stat-number">15</span>
                <span class="stat-label">Years Leading</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">250+</span>
                <span class="stat-label">Graduates</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">PhD</span>
                <span class="stat-label">Education</span>
              </div>
            </div>
            <!-- <div class="social-connect">
              <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-link"><i class="bi bi-envelope"></i></a>
              <a href="#" class="social-link"><i class="bi bi-globe"></i></a>
            </div> -->
          </div>
        </div>

        <!-- Team Members -->
        <div class="leadership-team-grid">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="team-member">
            <div class="member-photo">
              <img :src="member.photo" :alt="member.role" class="img-fluid" />
              <div class="member-overlay">
                <div class="member-social">
                  <a href="#"><i class="bi bi-linkedin"></i></a>
                  <a href="#"><i class="bi bi-envelope"></i></a>
                </div>
              </div>
            </div>
            <div class="member-info">
              <h4>{{ member.name }}</h4>
              <span class="member-role">{{ member.role }}</span>
              <p class="member-description">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.leader-image-large.slider-container {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.slider-img-wrapper {
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
}

/* Animasi slide */
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s cubic-bezier(.55,0,.1,1);
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slider-indicators {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
}
.indicator {
  display: block;
  width: 32px;
  height: 4px;
  background: #ccc;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.3s;
}
.indicator.active {
  background: #222;
}

/* Rider Stats Custom Style (seperti students-life) */
.rider-stats-custom {
  display: flex;
  gap: 32px;
  margin: 32px 0 24px 0;
  justify-content: center;
  flex-wrap: nowrap;                 
}
.rider-stats-custom .stat-item {
  background: #fff;
  border-radius: 12px;
  padding: 24px 32px;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.rider-stats-custom .stat-item:not(:first-child) {
  border-left: 2px solid #222;
}

.rider-stats-custom .stat-label {
  color: #888;
  font-size: 1.1rem;
  margin-top: 8px;
  font-weight: 500;
  letter-spacing: 1px;
}
.rider-stats-custom .stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 4px;
}

/* Rider Stats Tabs Style */
.rider-stats-tabs {
  display: flex;
  gap: 18px;
  margin: 32px 0 18px 0;
  justify-content: center;
}
.rider-tab {
  background: #fff;
  border: none;
  border-radius: 24px;
  padding: 10px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: 1.5px solid #eee;
}
.rider-tab.active {
  background: #c00;
  color: #fff;
  border: 1.5px solid #c00;
}
.rider-tab sub {
  font-size: 0.8em;
  bottom: 0;
  position: relative;
}
</style>