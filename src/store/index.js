import { createStore } from 'vuex'
import homeStore from './home'
import chapterStore from './chapter'
import contentStore from './content'

export default createStore({
  state: () => ({
  }),
  modules: {
    homeStore,
    chapterStore,
    contentStore
  }
})
