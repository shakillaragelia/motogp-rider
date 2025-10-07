<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Tanggal">
        <template slot-scope="{row}">
          <span>{{ row.createdAt | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150px" label="Nama">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" label="Email">
        <template slot-scope="{row}">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Pesan">
        <template slot-scope="{row}">
          <span>{{ row.message }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{row, $index}">
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteContact(row.id, $index)"
          >
            Hapus
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import { parseTime } from '@/utils'

export default {
  name: 'ContactTable',
  filters: {
    parseTime
  },
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      try {
        const { data } = await axios.get('http://localhost:5001/contact')
        this.list = data
      } finally {
        this.listLoading = false
      }
    },
    async deleteContact(id, index) {
      try {
        await axios.delete(`http://localhost:5001/contact/${id}`)
        this.list.splice(index, 1)
        this.$message({
          message: 'Pesan berhasil dihapus',
          type: 'success'
        })
      } catch {
        this.$message.error('Gagal menghapus pesan')
      }
    }
  }
}
</script>

<style scoped>
</style>