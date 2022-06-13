<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import SearchPanel from '../components/search-panel/search-panel.vue'
import FictionList from '../components/fiction/fiction-list.vue'
import PaginationComponent from '../components/pagination-component/pagination-component.vue'

const store = useStore()
const pageNum = ref(1)
const pageSize = ref(10)

const changePageSize = (newPageSize) => {
  pageSize.value = newPageSize
}
const changePageNum = (newPageNum) => {
  pageNum.value = newPageNum
}
</script>

<template>
  <div class="home-view">
    <h2 class="welcome">Vue3-Fiction</h2>
    <search-panel
      @change-page-num="changePageNum"
      @change-page-size="changePageSize"
    />
    <fiction-list/>
    <pagination-component
      v-if="store.state.homeStore.searchFinish"
      :page-num="pageNum"
      :page-size="pageSize"
      @change-page-num="changePageNum"
      @change-page-size="changePageSize"
    />
  </div>
</template>

<style scoped>
.home-view {
  margin-bottom: 2rem;
}
.welcome {
  color: #d63835;
  margin-top: 2rem;
  font-size: 3rem;
  text-align: center;
}
</style>
