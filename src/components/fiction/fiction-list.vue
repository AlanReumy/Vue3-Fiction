<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import FictionItem from './fiction-item.vue'
const store = useStore()
const router = useRouter()

const goDetail = (item) => {
  router.push(`/chapter/${item.fictionId}`)
}
const isSearchFinish = computed(() => {
  return store.state.homeStore.searchFinish
})

const searchData = computed(() => {
  return store.state.homeStore.searchData
})
</script>

<template>
  <div class="fiction-list">
    <h3 class="list-header" v-if="isSearchFinish">搜索结果</h3>
    <div class="list-data">
      <div v-if="isSearchFinish && searchData === null" class="result">暂无搜索结果</div>
      <fiction-item v-for="item in searchData" :key="item.fictionId" :data="item" @click="goDetail(item)"/>
    </div>
  </div>
</template>

<style scoped>
.fiction-list{
  width: 75vw;
}
.list-header {
  margin-top: 1.3rem;
  font-size: 1.8rem;
  line-height: 4rem;
  border-bottom: 2px solid #eee;
}
.list-data {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.list-data .result{
  width:  100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: rgb(146, 146, 146);
}

</style>
