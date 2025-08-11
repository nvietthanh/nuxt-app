<template>
  <div class="paginate">
    <el-pagination
      :current-page="currentPage"
      :page-size="Number(paginate.per_page)"
      :pager-count="5"
      layout="prev, pager, next"
      :total="paginate.total"
      :background="paginateBackground"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  paginate: {
    type: Object as () => { per_page?: number; total?: number },
    default: () => ({}),
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  paginateBackground: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits<(e: 'page-change', page: number) => void>()

function handleCurrentChange(page: number) {
  emits("page-change", page);
}
</script>
<style scoped>
::v-deep(.el-pagination.is-background .el-pager li.is-active) {
  background-color: #d0011b;
}
</style>
