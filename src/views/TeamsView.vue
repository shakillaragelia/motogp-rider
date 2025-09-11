<template>
  <div class="programs-showcase">
    <div
      class="program-card featured-program"
      v-for="(program, index) in programs"
      :key="index"
    >
      <div class="card-image">
        <img :src="program.image" :alt="program.title" class="img-fluid" />
        <div v-if="program.badge" class="program-badge">
          <i :class="program.badge.icon"></i>
          <span>{{ program.badge.text }}</span>
        </div>
      </div>

      <div class="card-content">
        <div class="program-category">{{ program.category }}</div>
        <h3>{{ program.title }}</h3>
        <p>{{ program.description }}</p>

        <div class="program-meta">
          <div class="meta-item">
            <i class="bi bi-clock"></i>
            <span>{{ program.duration }}</span>
          </div>
          <div class="meta-item">
            <i class="bi bi-award"></i>
            <span>{{ program.degree }}</span>
          </div>
        </div>

        <div class="card-footer">
          <a :href="program.link" class="learn-more">Learn More</a>
          <div class="enrollment">
            <i class="bi bi-people"></i>
            <span>{{ program.enrolled }} enrolled</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramsShowcase",
  data() {
    return {
      programs: [
        {
          image: "@/assets/img/education/courses-8.webp",
          badge: { icon: "bi bi-star-fill", text: "Top Rated" },
          category: "Engineering",
          title: "Computer Science & AI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          duration: "4 Years",
          degree: "Bachelor's",
          link: "#",
          enrolled: 320,
        },
        // contoh tambahan program
        {
          image: "@/assets/img/education/courses-9.webp",
          badge: null,
          category: "Business",
          title: "International Business",
          description:
            "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat.",
          duration: "3 Years",
          degree: "Bachelor's",
          link: "#",
          enrolled: 210,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
