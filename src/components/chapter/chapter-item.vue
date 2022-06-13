<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="chapter-item">
    <div class="chapter-title">
      {{ data.title }}
    </div>
  </div>
</template>

<style scoped>
.chapter-item {
  height: 4rem;
  line-height: 4rem;
  border-bottom: 1px solid #eee;
  transition: all 0.4s;
}
.chapter-item:hover {
  background-color: #eee;
}
.chapter-title {
  font-size: 1.4rem;
  color: rgb(98, 98, 98);
}
</style>
