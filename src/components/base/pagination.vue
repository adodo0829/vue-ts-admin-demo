<template>
  <div class="pagination-container">
    <el-pagination
      background
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'
import { scrollTo } from '@/utils/scroll-to'

@Component({
  name: 'pagination'
})
export default class extends Vue {
  // Props
  @Prop({ required: true }) private total!: number // 总条目数
  @PropSync('page', { default: 1 }) currentPage!: number // 页码 :page.sync="xxx"
  @PropSync('limit', { default: 10 }) pageSize!: number // 分页量 :limit.sync="yyy"
  @Prop({ default: () => [10, 20, 30, 40] }) private pageSizes!: number[] // 分页量选项
  @Prop({ default: 'total, sizes, prev, pager, next, jumper' }) private layout!: string // 布局
  @Prop({ default: true }) private autoScroll!: boolean
  // computed
  // get currentPage() {
  //   return this.page
  // }
  // set currentPage(value) {
  //   this.$emit('update:page', value)
  // }
  // methods
  handleSizeChange(value: number) {
    // @pagination="func"
    this.$emit('pagination', { page: this.currentPage, limit: value })
    if (this.autoScroll) {
      scrollTo(0, 0)
    }
  }

  handleCurrentChange(value: number) {
    this.$emit('pagination', { page: value, limit: this.pageSize })
    if (this.autoScroll) {
      scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  text-align: right;
  background: #fff;
  padding: 20px 16px;
}
</style>
