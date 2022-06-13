<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const emits = defineEmits(['changePageSize', 'changePageNum'])
const props = defineProps({
  // 一页的数量
  pageSize: {
    type: Number,
    default: 10
  },
  // 当前页数
  pageNum: {
    type: Number,
    default: 1
  }
})

const store = useStore()

const changePageSize = (e) => {
  store.dispatch('getSeachDataAction', { key: store.state.homeStore.searchInput, size: parseInt(e.target.value), from: 1 })
  emits('changePageSize', parseInt(e.target.value))
  emits('changePageNum', 1)
  document.documentElement.scrollTop = '0rem'
}
const changePageNum = (type) => {
  const pageNum = type === 'prev' ? props.pageNum - 1 : props.pageNum + 1
  store.dispatch('getSeachDataAction', { key: store.state.homeStore.searchInput, size: props.pageSize, from: pageNum })
  emits('changePageNum', pageNum)
  document.documentElement.scrollTop = '0rem'
}

const hasNextPage = computed(() => {
  return (store.state.homeStore.count - props.pageNum * props.pageSize) / props.pageSize < 0
})

const hasPrevPage = computed(() => {
  return props.pageNum > 1
})
</script>

<template>
  <div class="pagination-component">
    <div
      v-if="hasPrevPage"
      @click="changePageNum('prev')"
      class="control-btn"
    >
      上一页
    </div>
    <a class="disable" v-else>前面没有了噢</a>
    <div class="control">
      <div class="result">
        <div>共 {{store.state.homeStore.count}} 个结果</div>
      </div>
      <div class="info">
        <div>当前页数: {{pageNum}}</div>
        <span>每页:&nbsp;</span>
        <select :value="pageSize" @change="changePageSize">
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="20">20</option>
        </select>
      </div>
    </div>
    <div
      class="control-btn"
      v-if="!hasNextPage"
      @click="changePageNum('next')"
    >
      下一页
    </div>
    <a
      class="disable"
      v-else
    >
      后面没有了噢
    </a>
  </div>
</template>

<style scoped>
.pagination-component {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.control {
  text-align: center;
}
.control-btn {
  font-size: 1.1rem;
  text-decoration: none;
  color: black;
  transition: all 0.4s;
}
.result {
  margin-bottom: 0.5rem;
}
.info {
  display: flex;
}
.info > div {
  margin-right: 2rem;
}
.disable {
  color: rgb(135, 134, 134);
}
.control-btn:hover {
  cursor: pointer;
  color: #d63835;
}
.disable:hover {
  cursor: not-allowed;
}
</style>
