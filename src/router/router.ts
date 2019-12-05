import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

// 路由模块
import filesRouter from './modules/files/files'

Vue.use(Router)

// 路由配置项说明:
/*
  redirect: 设置'noredirect'时不会重定向
  meta: {
    title: 'title'      标题: 必传
    icon: 'svg-name'    侧栏 icon 名: 默认无
    breadcrumb: true    是否展示面包屑: 默认展示
    hidden: false        是否隐藏侧边栏: 默认展示
    showTitle: true     是否隐藏标题: 默认不传
  }
*/

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    // 登录
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
      meta: { hidden: true }
    },
    // 重定向
    {
      path: '/redirect',
      component: Layout,
      meta: { hidden: true },
      children: [
        {
          path: '/redirect/:path*',
          component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/redirect.vue')
        }
      ]
    },
    // 404页面
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
      meta: { hidden: true }
    },
    // 首页
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
          meta: {
            breadcrumb: false,
            title: '首页',
            icon: 'menu-home'
          }
        }
      ]
    },
    // 文件信息
    filesRouter,
    // 未知路由
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})
