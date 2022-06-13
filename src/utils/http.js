import axios from 'axios'

const defaultConfig = {
  baseURL: 'https://api.pingcc.cn',
  timeout: 5000
}

export class Http {
  constructor (defaultConfig) {
    this.axiosInstance = axios.create(defaultConfig)
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  /**
 * 请求拦截
 */
  httpInterceptorsRequest () {
    this.axiosInstance.interceptors.request.use((config) => {
      return config
    }, (err) => {
      return Promise.reject(err)
    })
  }

  /**
   * 响应拦截
   */
  httpInterceptorsResponse () {
    this.axiosInstance.interceptors.response.use((response) => {
      return response.data
    }, (err) => {
      return Promise.reject(err)
    })
  }

  /**
   * GET请求
   */
  get (url, params) {
    return this.axiosInstance.get(url, { params }).then(res => res).catch(err => Promise.reject(err))
  }

  /**
   * POST请求
   */
  post (url, data) {
    return this.axiosInstance.post(url, data).then(res => res).catch(err => Promise.reject(err))
  }
}

export const http = new Http(defaultConfig)
