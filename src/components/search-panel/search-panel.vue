<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const inputData = ref('')
const emits = defineEmits(['changePageSize', 'changePageNum'])

const handleSearch = () => {
  // 搜索 并重置 pageNum 和 pageSize
  if (!inputData.value) {
    alert('搜索内容不能为空')
    return
  }
  store.commit('changeSearchFinish', true)
  store.commit('changeSearchInput', inputData.value)
  store.dispatch('getSeachDataAction', { key: store.state.homeStore.searchInput, size: 10, from: 1 })
  emits('changePageNum', 1)
  emits('changePageSize', 10)
}
</script>

<template>
  <div class="search-panel">
    <input
      class="search-input"
      type="text"
      v-model="inputData"
      placeholder="输入要搜索的小说"
    />
    <button class="search-btn" @click="handleSearch">搜索</button>
  </div>
</template>

<style scoped>
.search-panel {
  width: 100%;
  display: flex;
  margin-left: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.search-input {
  font-size: 1.3rem;
  width: 20rem;
  height: 2.2rem;
  line-height: 2rem;
  padding-left: 1rem;
  margin-right: 0.5rem;
  outline: none;
  color: rgb(136, 136, 136);
  border: 2px solid rgb(207, 207, 207);
  transition: all 0.4s;
  border-radius: 5px;
}

.search-input:focus {
  border: 2px solid #df3e3b;
}

.search-btn {
  background-color:#d63835;
  width: 5rem;
  height: 2.6rem;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: all 0.4s;
}

.search-btn:hover{
  background-color: #bd3432;
  cursor: pointer;
}
</style>
