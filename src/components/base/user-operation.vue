<template>
  <div class="user-operation">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'user-operation'
})
export default class extends Vue {}
</script>

<style lang="scss">
.user-operation {
  display: flex;
  .left {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      align-items: center;
      margin-right: 16px;
      margin-bottom: 20px;
      span {
        margin-right: 8px;
      }
    }
  }
  .right {
    width: 430px;
    text-align: right;
    .r-b {
      display: inline-block;
      margin-left: 12px;
      &.create {
        margin-left: 146px;
      }
    }
  }
}
</style>
