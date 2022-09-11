import { http } from '../utils/http'
export const getChapterApi = (fictionId) => {
  return http.get(`/fictionChapter/search/${fictionId}`)
}

export const getContentApi = (chapterId) => {
  return http.get(`fictionContent/search/${chapterId}`)
}

export const getSearchDataApi = (params) => {
  return http.get(`/fiction/search/title/${params.key}/${params.from}/${params.size}`)
}
