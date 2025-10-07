<template>
  <div class="components-container">
    <aside>
      Halaman ini untuk mengelola konten "About MotoGP".  
      Silakan isi deskripsi, sejarah, atau informasi lain tentang MotoGP di bawah ini.
    </aside>
    <div>
      <tinymce v-model="about.content" :height="300" />
    </div>
    <el-form ref="aboutForm" :model="about" label-width="120px" style="width: 600px; margin: 30px auto 0;">
      <el-form-item label="Gambar Banner">
        <el-upload
          class="upload-demo"
          action=""
          :show-file-list="false"
          :before-upload="handleImageUpload"
        >
          <el-button slot="trigger" type="primary">Pilih Gambar</el-button>
          <div v-if="about.image" style="margin-top: 10px;">
            <img :src="about.image" alt="Banner" style="max-width: 300px;" />
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAbout">Simpan About</el-button>
      </el-form-item>
    </el-form>
    <div class="editor-content" v-html="about.content" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import axios from 'axios'

export default {
  name: 'AboutEditor',
  components: { Tinymce },
  data() {
    return {
      about: {
        content: '',
        image: ''
      }
    }
  },
  methods: {
    handleImageUpload(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.about.image = e.target.result
      }
      reader.readAsDataURL(file)
      return false // prevent auto upload
    },
    submitAbout() {
      axios.post('http://localhost:5001/about', this.about)
        .then(() => {
          this.$message.success('Konten About berhasil disimpan!')
        })
        .catch(() => {
          this.$message.error('Gagal menyimpan konten About')
        })
    }
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>