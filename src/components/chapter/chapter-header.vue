<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <div class="chapter-header">
    <div class="cover-wrap">
      <img :src="store.state.chapterStore.cover" alt="" />
    </div>
    <div class="info">
      <div class="title">{{ store.state.chapterStore.title }}</div>
      <div class="descs">{{ store.state.chapterStore.descs }}</div>
      <div class="author">作者：{{ store.state.chapterStore.author }}</div>
      <div class="fictionType">类型：{{ store.state.chapterStore.fictionType }}</div>
      <div class="updateTime">更新时间：{{ store.state.chapterStore.updateTime.substring(0,10) }}</div>
    </div>
  </div>
</template>

<style scoped>
.chapter-header{
  margin-top: 1rem;
  display: flex;
}
.cover-wrap img {
  width: 19rem;
  height: 25rem;
  background-size: cover;
  border-radius: 0.5rem;
}
.info {
  margin-left: 2.5rem;
}
.info > div {
  margin-bottom: 0.5rem;
}

.title {
  text-indent: 1rem;
  margin-left: 1rem;
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.descs {
  height: 14.4rem;
  text-indent: 2rem;
  font-size: 1.3rem;
  line-height: 2.5rem;
  color: rgb(121, 121, 121);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.author,.fictionType,.updateTime {
  color: rgb(147, 147, 147);
  font-size: 1.4rem;
}

@media (min-height: 60px) and (max-width:1120px){
  .cover-wrap img{
    width: 11rem;
    height: 14rem;
  }
  .cover-wrap{
    flex: 0.41;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.8rem;
  }
  .descs {
    height: 5.1rem;
    -webkit-line-clamp: 2;
  }
  .author,.fictionType,.updateTime {
    font-size: 1.1rem;
  }
}
</style>
