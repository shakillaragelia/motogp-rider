<template>
  <!-- Students Life Block Section -->
  <section id="students-life-block" class="students-life-block section">
    <!-- Section Title -->
    <div class="container section-title">
      <h2>Students Life</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="content-wrapper">
            <div class="section-tag">
              Student Life
            </div>
            <h2>Excepteur sint occaecat cupidatat non proident sunt in culpa</h2>
            <p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.</p>

            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-number">85+</span>
                <span class="stat-label">Student Organizations</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">150+</span>
                <span class="stat-label">Annual Events</span>
              </div>
            </div>

            <div class="action-links">
              <a href="student-life.html" class="primary-link">Explore Student Life</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="visual-grid">
            <div class="main-visual">
              <img src='/img/rider/marcmarquez.jpeg' alt="Campus Life" class="img-fluid">
              <div class="overlay-badge">
                <i class="bi bi-heart-fill"></i>
                <span>Campus Community</span>
              </div>
            </div>

            <div class="secondary-visuals">
              <div class="small-visual">
                <img src='/img/rider/marcmarquez.jpeg' alt="Student Activities" class="img-fluid">
                <div class="visual-caption">
                  <span>Student Activities</span>
                </div>
              </div>

              <div class="small-visual">
                <img src='/img/rider/marcmarquez.jpeg' alt="Academic Excellence" class="img-fluid">
                <div class="visual-caption">
                  <span>Academic Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- HIGHLIGHT SECTION WILL USE FOR RIDER CARD (COMPONENT) AT HOME (VIEW) -->
      <div class="highlights-section">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="highlight-card">
              <div class="highlight-image">
                <img src='/img/rider/marcmarquez.jpeg' alt="Leadership Programs" class="img-fluid">
              </div>
              <div class="highlight-content">
                <h5>Leadership Development</h5>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="highlight-card">
              <div class="highlight-image">
                <img src='/img/rider/marcmarquez.jpeg' alt="Cultural Events" class="img-fluid">
              </div>
              <div class="highlight-content">
                <h5>Cultural Diversity</h5>
                <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="highlight-card">
              <div class="highlight-image">
                <img src='/img/rider/marcmarquez.jpeg' alt="Innovation Hub" class="img-fluid">
              </div>
              <div class="highlight-content">
                <h5>Innovation Hub</h5>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam</p>
              </div>
            </div>
          </div>
        </div>
      </div>  <!-- END HIGHLIGHT SECTION -->
    </div>
  </section>
</template>

<script setup>
// Tidak ada script khusus
</script>

<style scoped>
.rider-detail {
  padding: 2rem;
}
</style>