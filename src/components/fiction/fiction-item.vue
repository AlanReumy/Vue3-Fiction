<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="fiction-item">
    <div class="cover-wrap">
      <img class="cover" :src="data.cover" alt="" />
    </div>
    <div class="title">{{ data.title }}</div>
    <div class="author">{{ data.author }}</div>
    <div class="descs">{{ data.descs }}</div>
    <div class="fictionType">{{ data.fictionType }}</div>
    <div class="updateTime">{{ data.updateTime.substring(0, 10) }}</div>
  </div>
</template>

<style scoped>
.fiction-item {
  transition: all 0.4s;
  border: 2px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  flex-basis: 29%;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
}
.fiction-item:hover{
  cursor: pointer;
  box-shadow: 4px 2px 1px 2px  #eee;
}
@media (min-height: 60px) and (max-width:1120px){
  .fiction-item{
    flex-basis: 100%;
  }
}
.cover-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover {
  width: 15rem;
  height: 20rem;
  background-size: contain;
  border-radius: 5%;
  margin-bottom: 1rem;
}
.title,
.author {
  margin-bottom: 0.5rem;
  text-align: center;
}
.title {
  font-size: 1.7rem;
}
.author {
  font-size: 1.3rem;
  color: #666;
}
.descs {
  height: 10rem;
  text-indent: 2em;
  line-height: 2.5rem;
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-bottom: 0.5rem;
}
.fictionType {
  font-size: 1.2rem;
  color: rgb(132, 132, 132);
  margin-bottom: 0.5rem;
}
.updateTime {
  font-size: 1.2rem;
  color: rgb(132, 132, 132);
}
</style>
