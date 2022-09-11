import { getSearchDataApi } from '../apis'

const homeStore = {
  state: () => ({
    searchInput: '',
    searchFinish: false,
    searchData: [],
    count: 0
  }),
  actions: {
    getSeachDataAction (ctx, payload) {
      const { key, size, from } = payload
      getSearchDataApi({
        key,
        size,
        from
      }).then(res => {
        ctx.commit('changeSearchDataMutation', res.data)
        ctx.commit('changeCount', res.count)
      })
    }
  },
  mutations: {
    changeSearchDataMutation (state, payload) {
      state.searchData = payload
    },
    changeCount (state, payload) {
      state.count = payload
    },
    changeSearchInput (state, payload) {
      state.searchInput = payload
    },
    changeSearchFinish (state, payload) {
      state.searchFinish = payload
    }
  }
}

export default homeStore
