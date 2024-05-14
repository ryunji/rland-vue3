<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<!-- root header -->
<template>
     <Header/>
<!-- <aside>사이드</aside> -->
     <RouterView/>              <!-- 변경이 될 부분에 넣는다  -->
     <Footer/>
</template>
 <style scoped>                      
    .n-list {
        background-color: blue;
    }
</style>