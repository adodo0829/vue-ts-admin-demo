import { IStringObj } from '@/typings/global'

// 去除对象不需要的键值对: 有点暴力
export const omit = (obj: IStringObj, uselessKeys: string[]) => {
  uselessKeys.forEach(key => {
    delete obj[key]
  })
  return obj
}
