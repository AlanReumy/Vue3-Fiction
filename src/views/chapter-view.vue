<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ChapterItem from '../components/chapter/chapter-item.vue'
import ChapterHeader from '../components/chapter/chapter-header.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

onMounted(() => {
  document.documentElement.scrollTop = '0rem'
  store.dispatch('getChapterData', route.params.fictionId)
})

const goContentView = (item, index) => {
  router.push({ name: 'content', params: { chapterId: item.chapterId, title: item.title, index } })
}
</script>

<template>
  <div class="chapter-view">
    <a href="#" class="back">返回首页</a>
    <ChapterHeader/>
    <h2 style="font-size:2.5rem;margin:1.5rem 0;">章节：</h2>
    <div
      v-for="(item, index) in store.state.chapterStore.chapterList"
      :key="item.chapterId"
    >
      <chapter-item :data="item" @click="goContentView(item, index)"/>
    </div>
  </div>
</template>

<style scoped>
.chapter-view {
  width: 100%;
  margin-bottom: 2rem;
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
</style>
