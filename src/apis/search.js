import { http } from '../utils/http'

export const getSearchDataApi = (params) => {
  return http.get(`/fiction/search/title/${params.key}/${params.from}/${params.size}`)
}
