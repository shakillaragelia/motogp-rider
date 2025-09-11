<template>
  <main class="main">

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">Contact</h1>
              <p class="mb-0">
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
                odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
                debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
                ipsum dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li class="current">Contact</li>
          </ol>
        </div>
      </nav>
    </div>

    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <div class="container">

        <div class="row gy-4 mb-5">
          <div class="col-lg-4" v-for="(info, index) in contactInfo" :key="index">
            <div class="info-card">
              <div class="icon-box">
                <i :class="info.icon"></i>
              </div>
              <h3>{{ info.title }}</h3>
              <p v-html="info.desc"></p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="form-wrapper">
              <form @submit.prevent="submitForm" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-person"></i></span>
                      <input type="text" v-model="form.name" class="form-control" placeholder="Your name*" required>
                    </div>
                  </div>
                  <div class="col-md-6 form-group">
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                      <input type="email" v-model="form.email" class="form-control" placeholder="Email address*" required>
                    </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6 form-group">
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-phone"></i></span>
                      <input type="text" v-model="form.phone" class="form-control" placeholder="Phone number*" required>
                    </div>
                  </div>
                  <div class="col-md-6 form-group">
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-list"></i></span>
                      <select v-model="form.subject" class="form-control" required>
                        <option value="">Select service*</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group mt-3">
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-chat-dots"></i></span>
                      <textarea v-model="form.message" class="form-control" rows="6" placeholder="Write a message*" required></textarea>
                    </div>
                  </div>

                  <div class="my-3">
                    <div v-if="loading" class="loading">Loading</div>
                    <div v-if="error" class="error-message">{{ error }}</div>
                    <div v-if="sent" class="sent-message">Your message has been sent. Thank you!</div>
                  </div>

                  <div class="text-center">
                    <button type="submit">Submit Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script>
export default {
  data() {
    return {
      contactInfo: [
        { icon: 'bi bi-geo-alt', title: 'Our Address', desc: '2847 Rainbow Road, Springfield, IL 62701, USA' },
        { icon: 'bi bi-telephone', title: 'Contact Number', desc: 'Mobile: +1 (555) 123-4567<br>Email: info@example.com' },
        { icon: 'bi bi-clock', title: 'Opening Hour', desc: 'Monday - Saturday: 9:00 - 18:00<br>Sunday: Closed' }
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      loading: false,
      error: '',
      sent: false
    }
  },
  methods: {
    submitForm() {
      this.loading = true
      this.error = ''
      this.sent = false

  
      setTimeout(() => {
        if(this.form.name && this.form.email) {
          this.sent = true
          this.form = { name:'', email:'', phone:'', subject:'', message:'' }
        } else {
          this.error = 'Please fill all required fields!'
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
</style>
