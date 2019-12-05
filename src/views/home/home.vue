<template>
  <div class="home-container">
    <div class="add">
      <i class="el-icon-plus" />
      <p>点击添加快捷入口～</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.home-container {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 24px;
  .add {
    position: relative;
    width: 100px;
    height: 100px;
    border: 2px dashed #c5c5c5;
    border-radius: 20px;
    @include flex-center;
    cursor: pointer;
    p {
      width: 200px;
      text-align: center;
      position: absolute;
      bottom: -60px;
      color: #939393;
    }
    i {
      font-size: 20px;
      font-weight: 600;
      color: #c5c5c5
    }
  }
}
</style>
