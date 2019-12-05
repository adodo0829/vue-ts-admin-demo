import { RouteConfig } from 'vue-router'

// 搜索二级
const filesSearchRouter: RouteConfig = {
  name: 'FilesSearch',
  path: 'files-search',
  redirect: '/files/files-search/files-search-ios',
  component: () => import('@/views/files/files-search/files-search.vue'),
  meta: {
    title: '搜索'
  },
  children: [
    {
      name: 'FilesSearchIos',
      path: 'files-search-ios',
      component: () => import('@/views/files/files-search/ios.vue'),
      meta: {
        title: 'iOS'
      }
    },
    {
      name: 'FilesSearchAndroid',
      path: 'files-search-android',
      component: () => import('@/views/files/files-search/android.vue'),
      meta: {
        title: 'Android'
      }
    }
  ]
}

export default filesSearchRouter
