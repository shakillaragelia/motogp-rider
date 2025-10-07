<template>
  <div class="rider-form-container">
    <el-form ref="riderForm" :model="rider" :rules="rules" label-width="150px" style="width: 500px; margin: 0 auto;">
      <el-form-item label="Nama" prop="name">
        <el-input v-model="rider.name" placeholder="Nama Pembalap" />
      </el-form-item>
      <el-form-item label="Tempat, Tanggal Lahir" prop="birthPlaceDate">
        <el-input v-model="rider.birthPlaceDate" placeholder="Contoh: Madrid, 29 Januari 1998" />
      </el-form-item>
      <el-form-item label="Negara" prop="country">
        <el-input v-model="rider.country" placeholder="Negara" />
      </el-form-item>
      <el-form-item label="Team" prop="teamId">
        <el-select v-model="rider.teamId" placeholder="Pilih Team">
          <el-option v-for="team in teams" :key="team.id" :label="team.name" :value="team.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="Kelas Balap" prop="raceClass">
        <el-select v-model="rider.raceClass" placeholder="Pilih Kelas Balap">
          <el-option v-for="kelas in raceClasses" :key="kelas" :label="kelas" :value="kelas" />
        </el-select>
      </el-form-item>
      <el-form-item label="Biodata" prop="bio">
        <el-input type="textarea" v-model="rider.bio" placeholder="Biodata Pembalap" :autosize="{ minRows: 2, maxRows: 4 }" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitRider">Tambah Pembalap</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RiderForm',
  data() {
    return {
      rider: {
        name: '',
        birthPlaceDate: '',
        country: '',
        teamId: null,
        raceClass: '',
        bio: ''
      },
      teams: [],
      raceClasses: ['MotoGP', 'Moto2', 'Moto3', 'MotoE'],
      rules: {
        name: [{ required: true, message: 'Nama wajib diisi', trigger: 'blur' }],
        birthPlaceDate: [{ required: true, message: 'Tempat, tanggal lahir wajib diisi', trigger: 'blur' }],
        country: [{ required: true, message: 'Negara wajib diisi', trigger: 'blur' }],
        teamId: [{ required: true, message: 'Team wajib dipilih', trigger: 'change' }],
        raceClass: [{ required: true, message: 'Kelas balap wajib dipilih', trigger: 'change' }],
        bio: [{ required: true, message: 'Biodata wajib diisi', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.fetchTeams()
  },
  methods: {
    fetchTeams() {
      axios.get('http://localhost:5001/teams').then(res => {
        this.teams = res.data
      })
    },
    submitRider() {
      this.$refs.riderForm.validate(valid => {
        if (valid) {
          axios.post('http://localhost:5001/riders', this.rider)
            .then(() => {
              this.$message.success('Pembalap berhasil ditambahkan!')
              this.$refs.riderForm.resetFields()
            })
            .catch(() => {
              this.$message.error('Gagal menambah pembalap')
            })
        }
      })
    }
  }
}
</script>