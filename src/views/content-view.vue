<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()

const initData = () => {
  document.documentElement.scrollTop = '0rem'
  store.dispatch('getChapterData', localStorage.getItem('fictionId'))
  store.dispatch('getContentData', route.params.chapterId)
}

onMounted(() => {
  initData()
})

watch(route, () => {
  initData()
}, {
  deep: true
})

// 前进页面
const goPage = (e, type) => {
  e.preventDefault()
  const index = type === 'prev' ? --route.params.index : ++route.params.index
  const item = store.state.chapterStore.chapterList[index]
  router.push({ name: 'content', params: { chapterId: item.chapterId, title: item.title, index } })
  document.documentElement.scrollTop = '0rem'
}

const isEndPage = computed(() => {
  return parseInt(route.params.index) + 1 === store.state.chapterStore.chapterList.length
})

const isStartPage = computed(() => {
  return parseInt(route.params.index) === 0
})

const currentPage = computed(() => {
  return parseInt(route.params.index) + 1
})

const pageCount = computed(() => {
  return store.state.chapterStore.chapterList.length
})

const goChapterView = (e) => {
  e.preventDefault()
  router.replace({ name: 'chapter', params: { fictionId: localStorage.getItem('fictionId') } })
}
</script>

<template>
  <div class="content-view">
    <a href="#" class="back" @click="goChapterView">返回章节页面</a>
    <h3 class="title">{{route.params.title}}</h3>
    <p v-for="item in store.state.contentStore.content" :key="item">
      {{item}}
    </p>
    <div class="control">
      <a class="disable" v-if="isStartPage">
        已经第一页了哦
      </a>
      <a href="#" v-else @click="goPage($event, 'prev')">
        上一页
      </a>
      <span>
        第 {{currentPage}} 页，共 {{pageCount}} 页
      </span>
      <a class="disable" v-if="isEndPage">
        已经最后一页了噢
      </a>
      <a href="#" v-else @click="goPage($event, 'next')">
        下一页
      </a>
    </div>
  </div>
</template>

<style scoped>
.content-view {
  width: 100%;
  margin-bottom: 2rem;
}
.content-view p {
  line-height: 3rem;
  margin: 1rem 0;
  font-size: 1.6rem;
}
.back {
  display: inline-block;
  margin: 1rem 0;
  transition: all 0.4s;
  font-size: 1.4rem;
  color: black;
}
.back:hover{
  color: #d43431;
}
.title {
  font-size: 2.3rem;
  margin: 2rem 0;
  margin-top: 1rem;
}
.control {
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
}
.control > a {
  font-size: 1.3rem;
  color: rgb(122, 122, 122);
  text-decoration: underline;
  transition: all 0.4s;
}
.control > a:hover {
  color: #d43431;
}

.control > .disable {
  text-decoration:wavy;
}

.control > .disable:hover {
  cursor: not-allowed;
  color: rgb(93, 93, 93);
}
</style>
