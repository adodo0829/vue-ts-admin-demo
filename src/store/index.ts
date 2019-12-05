import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUserState
}

// 声明空的 store, 在 module 中动态导入
export default new Vuex.Store<IRootState>({})
