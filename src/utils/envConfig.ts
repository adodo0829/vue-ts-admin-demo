/**
 * @description 环境变量: 接口基地址配置
 */

let buildEnv = process.env.VUE_APP_ENV as string

const K_V_MAP = new Map<string, string>([
  ['development', 'https://vue-typescript-admin-mock-server.armour.now.sh/mock-api/v1/'],
  ['test', 'http://192.168.8.32'],
  ['production', 'https://adminapi.feng.com/']
])

export default K_V_MAP.get(buildEnv)
