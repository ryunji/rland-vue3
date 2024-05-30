<script setup>
//import userDetail from '../store/UserDetails';
  import {useUserDetailsStore} from '../store/UserDetails';
  import{useRoute, useRouter} from 'vue-router';

  const router = useRouter();
//저장소에서 꺼내써야 한다.
const userDetails   = useUserDetailsStore();
const logoutHandler = () =>{
    
    userDetails.invalidate();

    //어디로 가나요? 어떻게 가나요? 코드로?
    //location.href는 새로고침이므로 바람직하지 않다.
    //주소 사용시에는 push
    router.push("/index");

}
</script>

<template>
    <header class="n-header">
        <h1>Rland {{ userDetails.userName }}</h1>
        <nav>
            <h1 class="d:none">메인메뉴</h1>
            <ul>
                <li><RouterLink class="icon icon:list       md:d:none"                to="/mobile-menu">숨김메뉴</RouterLink></li> <!-- RouterLink는 a태그로 변환 됨. -->
                <li><RouterLink class="icon icon:house      md:d:inline-block"        to="/index">home</RouterLink></li>          
                <li><RouterLink class="icon icon:local_cafe md:d:inline-block"        to="/menu/list">메뉴</RouterLink></li>        
                <li><RouterLink class="icon icon:eye        md:d:inline-block"        to="/admin/index">관리자</RouterLink></li>
                
                <li v-if="!userDetails.isAuthenticated()"><RouterLink class="icon icon:user       d:none md:d:inline-block" to="/user/login">로그인</RouterLink></li>
                <li v-else>
                    <a class="icon icon:sign_out   d:none md:d:inline-block" 
                    @click.prevent="logoutHandler()"
                    href="/user/logout">로그아웃</a>
                </li>
               <!-- @click.prevent="userDetails.invalidate()" -->
            </ul>
        </nav>
    </header>
</template>

<style>
</style>

