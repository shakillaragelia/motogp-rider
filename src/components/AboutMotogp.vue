<template>
    <!-- History Section -->
    <section id="history" class="history section">
      <div class="container">
        
        <!-- Values Section -->
        <div class="values-section mb-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="values-header text-center mb-4">
                <span class="section-badge">Race Class</span>
                <h2 class="section-heading">Race Class &amp; Teams</h2>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-4">
              <div class="value-block">
                <div class="value-number">01</div>
                <h3>MotoGP</h3>
                <p>MotoGP adalah kelas tertinggi dalam kejuaraan dunia balap motor. Di kelas ini, para pembalap terbaik dunia bersaing menggunakan motor prototipe khusus dengan mesin 1000cc yang mampu menghasilkan tenaga lebih dari 250 hp dan melaju hingga kecepatan di atas 350 km/jam. MotoGP menjadi puncak dari teknologi, kecepatan, dan skill pembalap.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="value-block">
                <div class="value-number">021</div>
                <h3>Moto2</h3>
                <p>Moto2 merupakan kelas menengah yang menjadi jenjang penting sebelum menuju MotoGP. Seluruh motor menggunakan mesin seragam 765cc dari Triumph, sehingga yang membedakan adalah pengembangan sasis, pengaturan elektronik, serta kemampuan pembalap. Kelas ini sering disebut sebagai gerbang utama menuju MotoGP.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="value-block">
                <div class="value-number">03</div>
                <h3>Moto3</h3>
                <p>Moto3 adalah kelas dasar yang diperuntukkan bagi pembalap muda untuk memulai karier di level dunia. Motor yang digunakan memiliki mesin 250cc dengan bobot lebih ringan, sehingga balapan sering berlangsung sangat ketat dan penuh aksi saling salip. Moto3 menjadi ajang pembinaan awal sebelum naik ke Moto2 dan MotoGP.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Accomplishments Section -->
        <div class="accomplishments-section">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="campus-visual">
                <img :src="allTeamImg" alt="Campus Facilities" class="main-image img-fluid" style="width:100%; max-width:900px; height:auto;">
                <div class="floating-stats">
                  <div class="stat-card">
                    <span class="stat-number">76+</span>
                    <span class="stat-label">Years Of Adrenaline</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="accomplishments-content">
                <span class="section-badge">Our History</span>
                <h2 class="section-heading">Adrenaline Run In Our Blood.</h2>
                <p class="section-text">MotoGP berawal dari kejuaraan dunia balap motor yang digelar FIM pada tahun 1949, menjadikannya ajang balap motor tertua di dunia. Awalnya terdiri dari beberapa kelas mesin kecil hingga 500cc, lalu berevolusi menjadi kelas utama MotoGP pada 2002 dengan mesin prototipe empat-tak. Hingga kini, MotoGP dikenal sebagai puncak kompetisi balap roda dua, melahirkan legenda-legenda besar dan menjadi simbol kecepatan serta teknologi tertinggi di dunia motor.</p>
                <div class="achievements-grid">
                  <div class="achievement-item">
                    <span class="achievement-number">15,000+</span>
                    <span class="achievement-desc">Successful Graduates</span>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-number">98%</span>
                    <span class="achievement-desc">Employment Rate</span>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-number">45</span>
                    <span class="achievement-desc">International Partners</span>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-number">300+</span>
                    <span class="achievement-desc">Expert Faculty</span>
                  </div>
                </div>
                <div class="credentials">
                  <div class="credential-item">
                    <i class="bi bi-patch-check"></i>
                    <span>Nationally Accredited Institution</span>
                  </div>
                  <div class="credential-item">
                    <i class="bi bi-award"></i>
                    <span>Excellence in Teaching Award 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<script setup>
import allTeamImg from '../assets/image/all.jpg'
</script>

<style scoped>
.main-image {
  width: 100%;
  max-width: 1000px; 
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

