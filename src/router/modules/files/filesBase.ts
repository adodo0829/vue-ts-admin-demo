import { RouteConfig } from 'vue-router'

// 基础素材/信息二级
const filesBaseRouter: RouteConfig = {
  name: 'FilesBase',
  path: 'files-base',
  redirect: '/files/files-base/files-base-label',
  component: () => import('@/views/files/files-base/files-base.vue'),
  meta: {
    title: '基础素材/信息'
  },
  children: [
    {
      name: 'FilesBaseLabel',
      path: 'files-base-label',
      component: () => import('@/views/files/files-base/label.vue'),
      meta: {
        title: '标签'
      }
    },
    {
      name: 'FilesBaseTag',
      path: 'files-base-tag',
      component: () => import('@/views/files/files-base/tag.vue'),
      meta: {
        title: '角标'
      }
    },
    {
      name: 'FilesBaseResource',
      path: 'files-base-resource',
      component: () => import('@/views/files/files-base/resource.vue'),
      meta: {
        title: '资源分组'
      }
    }
  ]
}

export default filesBaseRouter
