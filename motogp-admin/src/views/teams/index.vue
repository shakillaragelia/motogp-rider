<template>
  <div class="app-container">
    <h2>Teams Management Page</h2>
    <el-form ref="teamForm" :model="team" :rules="rules" label-width="140px" style="width: 500px; margin: 0 auto;">
      <el-form-item label="ID" prop="id">
        <el-input v-model="team.id" placeholder="ID Team" type="number" />
      </el-form-item>
      <el-form-item label="Nama Team" prop="name">
        <el-input v-model="team.name" placeholder="Nama Team" />
      </el-form-item>
      <el-form-item label="Kelas Balap" prop="raceClassId">
        <el-select v-model="team.raceClassId" placeholder="Pilih Kelas Balap">
          <el-option v-for="kelas in raceClasses" :key="kelas.id" :label="kelas.name" :value="kelas.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="Pembalap" prop="riderIds">
        <el-select v-model="team.riderIds" multiple placeholder="Pilih Pembalap">
          <el-option v-for="rider in riders" :key="rider.id" :label="rider.name" :value="rider.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="Gambar Motor" prop="image">
        <el-upload
          class="upload-demo"
          action=""
          :show-file-list="false"
          :before-upload="handleImageUpload"
        >
          <el-button slot="trigger" type="primary">Pilih Gambar</el-button>
          <div v-if="team.image" style="margin-top: 10px;">
            <img :src="team.image" alt="Motor" style="max-width: 200px;" />
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitTeam">Tambah Team</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TeamsManagement',
  data() {
    return {
      team: {
        id: '',
        name: '',
        raceClassId: null,
        riderIds: [],
        image: ''
      },
      raceClasses: [],
      riders: [],
      rules: {
        id: [{ required: true, message: 'ID wajib diisi', trigger: 'blur' }],
        name: [{ required: true, message: 'Nama team wajib diisi', trigger: 'blur' }],
        raceClassId: [{ required: true, message: 'Kelas balap wajib dipilih', trigger: 'change' }],
        riderIds: [{ required: true, message: 'Pembalap wajib dipilih', trigger: 'change' }]
      }
    }
  },
  created() {
    this.fetchRaceClasses()
    this.fetchRiders()
  },
  methods: {
    fetchRaceClasses() {
      axios.get('http://localhost:5001/race-classes').then(res => {
        this.raceClasses = res.data
      })
    },
    fetchRiders() {
      axios.get('http://localhost:5001/riders').then(res => {
        this.riders = res.data
      })
    },
    handleImageUpload(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.team.image = e.target.result
      }
      reader.readAsDataURL(file)
      return false // prevent auto upload
    },
    submitTeam() {
      this.$refs.teamForm.validate(valid => {
        if (valid) {
          axios.post('http://localhost:5001/teams', this.team)
            .then(() => {
              this.$message.success('Team berhasil ditambahkan!')
              this.$refs.teamForm.resetFields()
              this.team.image = ''
            })
            .catch(() => {
              this.$message.error('Gagal menambah team')
            })
        }
      })
    }
  }
}
</script>