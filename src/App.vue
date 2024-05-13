<script setup>
  import Layout from './components/inc/Layout.vue';
  import Header from './components/inc/Header.vue';
</script>

<template>
  <RouterView/>
</template>

<!-- scoped 키워드 : 고립화 -->
<style scoped>
    .n-list {
  background-color: red;
} 
</style>