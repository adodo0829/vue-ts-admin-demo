<template>
  <div class="router-container">
    <nav v-show="showNav" class="router-nav">
      <router-link
        :to="{path: '/files/files-app/files-app-ios'}"
      >
        <svg-icon
          name="ios"
        />
        <span>iOS</span>
      </router-link>
      <router-link :to="{path: '/files/files-app/files-app-android'}">
        <svg-icon
          name="android"
        />
        <span>Android</span>
      </router-link>
    </nav>
    <section class="router-content-view">
      <router-view />
    </section>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'FilesApp'
})
export default class extends Vue {
  showNav: boolean = true
}
</script>

<style lang="scss" scoped>
.router-container {
  @include router-layout
}
</style>
