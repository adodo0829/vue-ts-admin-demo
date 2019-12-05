<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <!-- 主题内容子级路由容器 -->
      <router-view />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
  overflow: auto;
  background-color: #F0F2F5;
}
.fixed-header.showTitle+.app-main {
  padding-top: 100px;
}
</style>
