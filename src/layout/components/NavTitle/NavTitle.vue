<template>
  <div v-if="showTitle" class="nav-title">
    <!-- <transition name="navTitleFade"> -->
    <h3>
      {{ title }}
    </h3>
    <!-- </transition> -->
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'NavTitle'
})
export default class extends Vue {
  // 子组件prop声明: @Prop({ type: String, ... }) ts类型声明(非空断言) pravite title!: string
  @Prop({ type: String }) private title!: string
  @Prop({ type: Boolean, default: false }) private showTitle!: boolean
}
</script>

<style lang="scss" scoped>
.nav-title {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  border-top: 1px solid #cccccc45;
  background-color: #fff;
  h3 {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 15px;
      left: -8px;
      z-index: 2;
      display: block;
      width: 3px;
      height: 20px;
      background-color: $main-color;
    }
  }
}
</style>
