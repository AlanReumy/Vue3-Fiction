<script setup>
</script>

<template>
  <div class="container">
    <router-view>
    </router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body {
  font-size: 62.5% !important;
}
::-webkit-scrollbar{
  width: 0rem;
}
.container {
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
