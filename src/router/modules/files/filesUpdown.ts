import { RouteConfig } from 'vue-router'

// 上/下架应用二级
const filesUpdownRouter: RouteConfig = {
  name: 'FilesUpdown',
  path: 'files-updown',
  redirect: '/files/files-updown/files-updown-ios',
  component: () => import('@/views/files/files-updown/files-updown.vue'),
  meta: { title: '上/下架应用' },
  children: [
    {
      name: 'FilesUpdownIos',
      path: 'files-updown-ios',
      redirect: '/files/files-updown/files-updown-ios/uping',
      component: () => import('@/views/files/files-updown/ios/files-updown-ios.vue'),
      meta: { title: 'iOS' },
      children: [
        {
          name: 'FilesUpdownIosUping',
          path: 'files-updown-ios-uping',
          component: () => import('@/views/files/files-updown/ios/uping.vue'),
          meta: { title: '待上架应用' }
        },
        {
          name: 'FilesUpdownIosSignature',
          path: 'files-updown-ios-signature',
          component: () => import('@/views/files/files-updown/ios/signature.vue'),
          meta: { title: '签名队列' }
        },
        {
          name: 'FilesUpdownIosManage',
          path: 'files-updown-ios-manage',
          component: () => import('@/views/files/files-updown/ios/manage.vue'),
          meta: { title: '上下架管理' }
        },
        {
          name: 'FilesUpdownIosDowning',
          path: 'files-updown-ios-downing',
          component: () => import('@/views/files/files-updown/ios/downing.vue'),
          meta: { title: '待下架应用' }
        },
        {
          name: 'FilesUpdownIosDowned',
          path: 'files-updown-ios-downed',
          component: () => import('@/views/files/files-updown/ios/downed.vue'),
          meta: { title: '已下架应用' }
        },
        {
          name: 'FilesUpdownIosUpdate',
          path: 'files-updown-ios-update',
          component: () => import('@/views/files/files-updown/ios/update.vue'),
          meta: { title: '待更新应用' }
        },
        {
          name: 'FilesUpdownIosRecord',
          path: 'files-updown-ios-record',
          component: () => import('@/views/files/files-updown/ios/record.vue'),
          meta: { title: '应用更新记录' }
        }
      ]
    },
    {
      name: 'FilesUpdownAndroid',
      path: 'files-updown-android',
      redirect: '/files/files-updown/files-updown-android/uping',
      component: () => import('@/views/files/files-updown/android/files-updown-android.vue'),
      meta: {
        title: 'Android'
      },
      children: [
        {
          name: 'FilesUpdownAndroidUping',
          path: 'files-updown-android-uping',
          component: () => import('@/views/files/files-updown/android/uping.vue'),
          meta: { title: '待上架应用' }
        },
        {
          name: 'FilesUpdownAndroidUped',
          path: 'files-updown-android-uped',
          component: () => import('@/views/files/files-updown/android/uped.vue'),
          meta: { title: '已上架应用' }
        },
        {
          name: 'FilesUpdownAndroidDowning',
          path: 'files-updown-android-downing',
          component: () => import('@/views/files/files-updown/android/downing.vue'),
          meta: { title: '待下架应用' }
        },
        {
          name: 'FilesUpdownAndroidDowned',
          path: 'files-updown-android-downed',
          component: () => import('@/views/files/files-updown/android/downed.vue'),
          meta: { title: '已下架应用' }
        },
        {
          name: 'FilesUpdownAndroidUpdate',
          path: 'files-updown-android-update',
          component: () => import('@/views/files/files-updown/android/update.vue'),
          meta: { title: '待更新应用' }
        },
        {
          name: 'FilesUpdownAndroidRecord',
          path: 'files-updown-android-record',
          component: () => import('@/views/files/files-updown/android/record.vue'),
          meta: { title: '应用更新记录' }
        }
      ]
    }
  ]
}

export default filesUpdownRouter
