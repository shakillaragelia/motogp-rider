<template>
  <div class="race-class-form-container">
    <el-form ref="raceClassForm" :model="raceClass" :rules="rules" label-width="120px" style="width: 400px; margin: 0 auto;">
      <el-form-item label="ID" prop="id">
        <el-input v-model="raceClass.id" placeholder="ID Kelas Balap" type="number" />
      </el-form-item>
      <el-form-item label="Nama Kelas" prop="name">
        <el-input v-model="raceClass.name" placeholder="Nama Kelas Balap (contoh: MotoGP)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitRaceClass">Tambah Kelas Balap</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RaceClassForm',
  data() {
    return {
      raceClass: {
        id: '',
        name: ''
      },
      rules: {
        id: [{ required: true, message: 'ID wajib diisi', trigger: 'blur' }],
        name: [{ required: true, message: 'Nama kelas wajib diisi', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitRaceClass() {
      this.$refs.raceClassForm.validate(valid => {
        if (valid) {
          axios.post('http://localhost:5001/race-classes', this.raceClass)
            .then(() => {
              this.$message.success('Kelas balap berhasil ditambahkan!')
              this.$refs.raceClassForm.resetFields()
            })
            .catch(() => {
              this.$message.error('Gagal menambah kelas balap')
            })
        }
      })
    }
  }
}
</script>