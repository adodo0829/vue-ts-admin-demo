<template>
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noredirect' || index === breadcrumbs.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a
          v-else
          @click.prevent="handleLink(item)"
        >{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import pathToRegexp from 'path-to-regexp'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { RouteRecord, Route } from 'vue-router'

// 面包屑
@Component({
  name: 'Breadcrumb'
})
export default class extends Vue {
  private breadcrumbs: RouteRecord[] = [];

  @Watch('$route')
  private onRouteChange(route: Route) {
    // 监听路由,重复点击不改变
    if (route.path.startsWith('/redirect/')) {
      return
    }
    this.getBreadcrumb()
  }

  created() {
    this.getBreadcrumb()
  }

  private getBreadcrumb() {
    let matched = this.$route.matched.filter(
      item => item.meta && item.meta.title
    )
    const first = matched[0]
    if (!this.isHome(first)) {
      matched = [
        { path: '/home', meta: { title: '首页' } } as RouteRecord
      ].concat(matched)
    }
    this.breadcrumbs = matched.filter(item => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
  }
  // 是否首页
  private isHome(route: RouteRecord) {
    const name = route && route.meta && route.meta.title
    return name === 'Home'
  }
  // 提取路径
  private pathCompile(path: string) {
    const { params } = this.$route
    const toPath = pathToRegexp.compile(path)
    return toPath(params)
  }

  private handleLink(item: any) {
    const { redirect, path } = item
    if (redirect) {
      this.$router.push(redirect)
      return
    }
    this.$router.push(this.pathCompile(path))
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
