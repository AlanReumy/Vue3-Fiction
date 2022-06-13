import { http } from '../utils/http'

export const getChapterApi = (fictionId) => {
  return http.get(`/fictionChapter/search/${fictionId}`)
}
