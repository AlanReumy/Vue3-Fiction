import { getChapterApi } from '../apis'

const chapterStore = {
  state: () => ({
    fictionId: '',
    title: '',
    descs: '',
    cover: '',
    author: '',
    fictionType: '',
    updateTime: '',
    chapterList: []
  }),
  actions: {
    getChapterData (ctx, fictionId) {
      getChapterApi(fictionId).then(res => {
        ctx.commit('changeChapterData', res.data)
      })
    }
  },
  mutations: {
    changeChapterData (state, payload) {
      for (const ele in state) {
        state[ele] = payload[ele]
      }
      localStorage.setItem('fictionId', state.fictionId)
    }
  }
}

export default chapterStore
