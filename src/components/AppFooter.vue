<template>
  <footer id="footer" class="footer-16 footer position-relative dark-background">
    <div class="container">
      <div class="footer-main">
        <div class="row align-items-start">
          <div class="col-lg-5">
            <div class="brand-section">
              <RouterLink to="/" class="logo d-flex align-items-center mb-4">
                <span class="sitename">Riders</span>
              </RouterLink>
              <p class="brand-description">
                Crafting exceptional digital experiences through thoughtful design and innovative solutions that elevate your brand presence.
              </p>
              <div class="contact-info mt-5">
                <div class="contact-item">
                  <i class="bi bi-geo-alt"></i>
                  <span>123 Creative Boulevard, Design District, NY 10012</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-telephone"></i>
                  <span>+1 (555) 987-6543</span>
                </div>
                <div class="contact-item">
                  <i class="bi bi-envelope"></i>
                  <span>hello@designstudio.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="footer-nav-wrapper">
              <div class="row">
                <div class="col-6 col-lg-3">
                  <div class="nav-column">
                    <h6>Studio</h6>
                    <nav class="footer-nav">
                      <a href="#">Our Story</a>
                      <a href="#">Design Process</a>
                      <a href="#">Portfolio</a>
                      <a href="#">Case Studies</a>
                      <a href="#">Awards</a>
                    </nav>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="nav-column">
                    <h6>Services</h6>
                    <nav class="footer-nav">
                      <a href="#">Brand Identity</a>
                      <a href="#">Web Design</a>
                      <a href="#">Mobile Apps</a>
                      <a href="#">Digital Strategy</a>
                      <a href="#">Consultation</a>
                    </nav>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="nav-column">
                    <h6>Resources</h6>
                    <nav class="footer-nav">
                      <a href="#">Design Blog</a>
                      <a href="#">Style Guide</a>
                      <a href="#">Free Assets</a>
                      <a href="#">Tutorials</a>
                      <a href="#">Inspiration</a>
                    </nav>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="nav-column">
                    <h6>Connect</h6>
                    <nav class="footer-nav">
                      <a href="#">Start Project</a>
                      <a href="#">Schedule Call</a>
                      <a href="#">Join Newsletter</a>
                      <a href="#">Follow Updates</a>
                      <a href="#">Partnership</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-social">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="newsletter-section">
              <h5>Stay Inspired</h5>
              <p>Subscribe to receive design insights and creative inspiration delivered monthly.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="social-section">
              <div class="social-links">
                <a href="#" aria-label="Dribbble" class="social-link">
                  <i class="bi bi-dribbble"></i>
                  <span>Dribbble</span>
                </a>
                <a href="#" aria-label="Behance" class="social-link">
                  <i class="bi bi-behance"></i>
                  <span>Behance</span>
                </a>
                <a href="#" aria-label="Instagram" class="social-link">
                  <i class="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a href="#" aria-label="LinkedIn" class="social-link">
                  <i class="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="copyright">
                <p>© <span class="sitename">Ragel</span>. All rights reserved.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
                <div class="credits">
                  <!-- All the links in the footer should remain intact. -->
                  <!-- You can delete the links only if you've purchased the pro version. -->
                  <!-- Licensing information: https://bootstrapmade.com/license/ -->
                  <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <button v-if="showButton" @click="scrollToTop" class="back-to-top" aria-label="Back to top" title="Back to top">
    <i class="bi bi-arrow-up-circle"></i>
  </button>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const showButton = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>