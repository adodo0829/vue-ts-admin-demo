import { RouteConfig } from 'vue-router'

// 应用信息二级
const filesAppRouter: RouteConfig = {
  name: 'FilesApp',
  path: 'files-app',
  redirect: '/files/files-app/files-app-ios',
  component: () => import('@/views/files/files-app/files-app.vue'),
  meta: {
    title: '应用信息'
  },
  children: [
    {
      name: 'FilesAppIos',
      path: 'files-app-ios',
      component: () => import('@/views/files/files-app/ios.vue'),
      meta: {
        title: 'iOS'
      }
    },
    {
      name: 'FilesAppAndroid',
      path: 'files-app-android',
      component: () => import('@/views/files/files-app/android.vue'),
      meta: {
        title: 'Android'
      }
    },
    // 应用详情
    {
      name: 'IosDetail',
      path: 'ios-detail',
      component: () => import('@/views/files/files-app/ios-detail.vue'),
      meta: {
        title: '应用详情页',
        showTitle: true
      }
    }
  ],
}

export default filesAppRouter
