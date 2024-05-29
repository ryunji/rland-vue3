<script setup>
//import cafe
</script>

<template>
    <header class="n-header">
        <h1>Rland</h1>
        <nav>
            <h1 class="d:none">메인메뉴</h1>
            <ul>
                <li><RouterLink class="icon icon:list       md:d:none"                to="/mobile-menu">숨김메뉴</RouterLink></li> <!-- RouterLink는 a태그로 변환 됨. -->
                <li><RouterLink class="icon icon:house      md:d:inline-block"        to="/index">home</RouterLink></li>          
                <li><RouterLink class="icon icon:local_cafe md:d:inline-block"        to="/menu/list">메뉴</RouterLink></li>        
                <li><RouterLink class="icon icon:user       d:none md:d:inline-block" to="/admin/index">관리자</RouterLink></li>
                <li><RouterLink class="icon icon:user       d:none md:d:inline-block" to="/user/login">로그인</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style>
</style>

