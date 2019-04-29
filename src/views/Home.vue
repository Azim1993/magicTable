<template>
  <div class="home">
      <data-table
        :columns="columns"
        :tableData="data"></data-table>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import { columns, data } from "../assets/data.js";
export default {
  name: 'home',
  components: {
    DataTable
  },
  data() {
      return {
          columns: columns,
          data: data
      }
  },
}
</script>
