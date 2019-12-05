import request from '@/utils/request'

const MOCK_URL: string = 'http://localhost:3000'
// IOS - 列表
export const getIosList = (data: any) =>
  request({
    url: `${MOCK_URL}/ios/info`,
    method: 'get',
    params: data
  })
