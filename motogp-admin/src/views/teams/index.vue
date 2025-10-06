<template>
  <div class="app-container">
    <el-card>
      <div class="header">
        <h3>Teams</h3>
        <el-button type="primary" @click="openDialog">+ Add Team</el-button>
      </div>

      <el-table :data="teams" style="width: 100%" v-loading="loading">
        <el-table-column prop="id" label="ID" width="60" />
        <el-table-column prop="name" label="Team Name" />
        <el-table-column prop="raceClass" label="Race Class" />
        <el-table-column label="Actions">
          <template #default="scope">
            <el-button size="small" @click="editTeam(scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="deleteTeam(scope.row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="Team Form" v-model="dialogVisible">
        <el-form :model="form">
          <el-form-item label="Name"><el-input v-model="form.name" /></el-form-item>
          <el-form-item label="Race Class"><el-input v-model="form.raceClass" /></el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="saveTeam">Save</el-button>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import request from '@/utils/request'
import { ElMessage } from 'element-plus'

const teams = ref([])
const loading = ref(false)
const dialogVisible = ref(false)
const form = ref({ id: null, name: '', raceClass: '' })

const fetchTeams = async () => {
  loading.value = true
  const res = await request.get('/team')
  teams.value = res.data
  loading.value = false
}

const openDialog = () => {
  form.value = { id: null, name: '', raceClass: '' }
  dialogVisible.value = true
}

const saveTeam = async () => {
  if (form.value.id) await request.put(`/team/${form.value.id}`, form.value)
  else await request.post('/team', form.value)
  ElMessage.success('Saved successfully!')
  dialogVisible.value = false
  fetchTeams()
}

const editTeam = (t) => {
  form.value = { ...t }
  dialogVisible.value = true
}

const deleteTeam = async (id) => {
  await request.delete(`/team/${id}`)
  ElMessage.success('Deleted successfully!')
  fetchTeams()
}

onMounted(fetchTeams)
</script>
