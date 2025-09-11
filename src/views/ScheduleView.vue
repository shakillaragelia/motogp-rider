<template>
  <section id="featured-programs" class="featured-programs section">
    <!-- Section Title -->
    <div class="container section-title">
      <h2>Featured Programs</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="featured-programs-wrapper">
        <div class="programs-overview">
          <div class="overview-content">
            <h2>Discover Excellence in Education</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore.
            </p>
            <div class="overview-stats">
              <div
                v-for="(stat, index) in stats"
                :key="index"
                class="stat-item"
              >
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <div class="overview-image">
            <img
              src="@/assets/img/education/showcase-7.webp"
              alt="Education"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedPrograms",
  data() {
    return {
      stats: [
        { number: "2,500+", label: "Active Students" },
        { number: "98%", label: "Graduate Rate" },
        { number: "50+", label: "Programs Offered" },
      ],
    };
  },
};
</script>

<style scoped>
/* kamu bisa tambahin styling section featured-programs di sini */
</style>
