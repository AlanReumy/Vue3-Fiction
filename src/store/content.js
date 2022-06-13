import { getContentApi } from '../apis/content'

const contentStore = {
  state: () => ({
    content: ''
  }),
  actions: {
    getContentData (ctx, chapterId) {
      getContentApi(chapterId).then(res => {
        ctx.commit('changeContent', res.data)
      })
    }
  },
  mutations: {
    changeContent (state, payload) {
      state.content = payload
    }
  }
}

export default contentStore
