// 应用信息
import { IResIosApp } from '../src/api/files/files-app/res'
let Mock =  require('mockjs')
let Random = Mock.Random

let iosInfoList: IResIosApp[] = []
let total: number = 100

// 准备 100 条专题列表数据
for (let index = 0; index < total; index++) {
  iosInfoList.push(
    Mock.mock({
      id: Random.integer(1, 10000),
      icon: 'https://news-1255531212.image.myqcloud.com/resource/h070/h99/img201911101228110.jpg?imageMogr2/thumbnail/320x/format/jpg/interlace/0/quality/100',
      name: Random.csentence(4),
      developer: Random.csentence(3),
      category: Random.csentence(2),
      source: Random.csentence(4),
      version: 'v1.2.3',
      price: '$4.5',
      socre: Random.integer(1, 1000),
      status: Random.csentence(4),
      editor: Random.csentence(3),
      updateDate: Random.now('day', 'yyyy-MM-dd HH:mm')
    })
  )
}

module.exports = {
  getIosInfoList: (config: any) => {
    let { page, pageCount } = config.query
    let dataList
    dataList = iosInfoList.filter(
      (item, index) => index < page * pageCount && index >= (page - 1) * pageCount
    )
    return {
      status: {
        code: 0,
        message: 'success',
        time: Random.now('day', 'yyyy-MM-dd HH:mm:ss')
      },
      data: {
        dataList: dataList,
        pageInfo: {
          totalCount: total,
          totalPage: 99,
          pageCount: +pageCount
        }
      }
    }
  }
}
