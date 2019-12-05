import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import baseUrl from './envConfig'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    if (UserModule.token) {
      config.headers['X-Access-Token'] = UserModule.token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

interface IStatus {
  accessTokenState?: string
  code: number
  message: string
  time: string
}

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data
    const status: IStatus = res.status
    if (status.code !== 0) {
      Message({
        message: status.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // token异常
      // if (status.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm(
      //     'You have been logged out, try to login again.',
      //     'Log out',
      //     {
      //       confirmButtonText: 'Relogin',
      //       cancelButtonText: 'Cancel',
      //       type: 'warning'
      //     }
      //   ).then(() => {
      //     UserModule.ResetToken()
      //     location.reload() // To prevent bugs from vue-router
      //   })
      // }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response.data
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
