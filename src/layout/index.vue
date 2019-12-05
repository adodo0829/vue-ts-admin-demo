<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header" :class="{showTitle: showTitle}">
        <navbar />
        <nav-title
          :title="title"
          :show-title="showTitle"
        />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AppModule } from '../store/modules/app'
import { AppMain, Navbar, Sidebar, NavTitle } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    NavTitle
  }
})
export default class extends Vue {
  get title() {
    return this.$route.meta.title ? this.$route.meta.title : '页面标题'
  }

  get showTitle() {
    // 展示 showTitle 属性为 true 的路由
    return this.$route.meta.showTitle
  }

  get sidebar() {
    return AppModule.sidebar
  }

  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;
}

.main-container {
	min-height: 100%;
	min-width: 1300px;
	transition: margin-left 0.28s;
	margin-left: $sideBarWidth;
	position: relative;
}

.fixed-header {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9;
	width: calc(100% - #{$sideBarWidth});
	transition: width 0.28s;
}

.sidebar-container {
	transition: width 0.28s;
	width: $sideBarWidth !important;
	height: 100%;
	position: fixed;
	font-size: 0px;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1001;
	overflow: hidden;
}

.hideSidebar {
	.main-container {
		margin-left: 54px;
	}

	.sidebar-container {
		width: 54px !important;
	}

	.fixed-header {
		width: calc(100% - 54px);
	}
}

.withoutAnimation {
	.main-container,
	.sidebar-container {
		transition: none;
	}
}
</style>
