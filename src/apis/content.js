import { http } from '../utils/http'

export const getContentApi = (chapterId) => {
  return http.get(`fictionContent/search/${chapterId}`)
}
