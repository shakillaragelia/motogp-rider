<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// Ambil slug dari URL
const route = useRoute()
const slug = ref(route.params.slug)

// Data team
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
      <!-- Rider slug tampil di sini -->
     <!--<h2> {{ slug }}</h2> --> 

      <!-- Intro -->
      <div class="intro-section">
        <div class="content-wrapper">
          <span class="intro-label">Leadership Excellence</span>
          <h2 class="intro-title">
            Visionary Leaders Shaping Tomorrow's Education
          </h2>
          <p class="intro-description">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae
            ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam
            egestas semper.
          </p>
        </div>
      </div>

      <!-- Featured Leader -->
      <div class="leadership-grid">
        <div class="featured-leader">
          <div class="leader-image-large">
            <img src='/img/rider/marcmarquez.jpeg' alt="Principal" class="img-fluid" />
          </div>
          <div class="leader-details">
            <h3>Dr. Margaret Thompson</h3>
            <span class="leader-title">Principal &amp; Educational Director</span>
            <p class="leader-bio">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus
              venenatis. Etiam consectetur aliquam lorem quis viverra.
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
            <div class="social-connect">
              <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-link"><i class="bi bi-envelope"></i></a>
              <a href="#" class="social-link"><i class="bi bi-globe"></i></a>
            </div>
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

      <!-- Philosophy -->
      <div class="leadership-philosophy">
        <div class="philosophy-content">
          <h3>Our Leadership Philosophy</h3>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Donec rutrum congue leo eget malesuada. Nulla
            porttitor accumsan tincidunt.
          </p>
          <div class="philosophy-points">
            <div class="point">
              <i class="bi bi-lightbulb"></i>
              <span>Innovation-driven educational approach</span>
            </div>
                        <div class="point">
                          <i class="bi bi-people"></i>
                          <span>Student-centered leadership practices</span>
                        </div>
                        <div class="point">
                          <i class="bi bi-graph"></i>
                          <span>Data-driven decision making</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </template>