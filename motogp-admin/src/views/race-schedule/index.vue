<template>
  <div class="race-schedule-form-container">
    <el-form ref="raceScheduleForm" :model="raceSchedule" :rules="rules" label-width="140px" style="width: 500px; margin: 0 auto;">
      <el-form-item label="Nama Sirkuit" prop="circuit">
        <el-input v-model="raceSchedule.circuit" placeholder="Nama Sirkuit" />
      </el-form-item>
      <el-form-item label="Tanggal Balap" prop="date">
        <el-date-picker v-model="raceSchedule.date" type="date" placeholder="Pilih Tanggal Balap" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="Negara" prop="country">
        <el-input v-model="raceSchedule.country" placeholder="Negara" />
      </el-form-item>
      <el-form-item label="Foto Sirkuit" prop="image">
        <el-upload
          class="upload-demo"
          action=""  <!-- Kosongkan jika ingin upload manual -->
          :show-file-list="false"
          :before-upload="handleImageUpload"
        >
          <el-button slot="trigger" type="primary">Pilih Gambar</el-button>
          <div v-if="raceSchedule.image" style="margin-top: 10px;">
            <img :src="raceSchedule.image" alt="Sirkuit" style="max-width: 200px;" />
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitRaceSchedule">Tambah Jadwal Balap</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RaceScheduleForm',
  data() {
    return {
      raceSchedule: {
        circuit: '',
        date: '',
        country: '',
        image: ''
      },
      rules: {
        circuit: [{ required: true, message: 'Nama sirkuit wajib diisi', trigger: 'blur' }],
        date: [{ required: true, message: 'Tanggal balap wajib diisi', trigger: 'change' }],
        country: [{ required: true, message: 'Negara wajib diisi', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleImageUpload(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.raceSchedule.image = e.target.result
      }
      reader.readAsDataURL(file)
      return false // prevent auto upload
    },
    submitRaceSchedule() {
      this.$refs.raceScheduleForm.validate(valid => {
        if (valid) {
          axios.post('http://localhost:5001/race-schedule', this.raceSchedule)
            .then(() => {
              this.$message.success('Jadwal balap berhasil ditambahkan!')
              this.$refs.raceScheduleForm.resetFields()
              this.raceSchedule.image = ''
            })
            .catch(() => {
              this.$message.error('Gagal menambah jadwal balap')
            })
        }
      })
    }
  }
}
</script>