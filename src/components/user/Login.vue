<script setup>
import { GoogleLogin, googleTokenLogin } from 'vue3-google-login';
//import userDetail from '../store/UserDetail';
//디폴트가 아니라 중괄호 함
import {useUserDetailsStore} from '../store/UserDetails';
import { useRoute, useRouter } from 'vue-router';

//저장소에서 꺼내써야 한다.
const userDetails = useUserDetailsStore();
const router      = useRouter();

const loginHandler = () => {

     googleTokenLogin()
    .then((response) =>{

        console.log("Handle the response", response)
        let token = response.access_token;
        console.log(token);

        let url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`;
         fetch(url)
        .then(resp=>resp.json())
        .then(userinfo=>{
            
            let url =`http://localhost:8080/api/`
            fetch()
            
            console.log(userinfo);
            userDetails.email    = userinfo.email;
            userDetails.userName = userinfo.name;
            console.log(userDetails);
            router.push("/");
        })
    });
}
</script>

<template>
    <form>
        <div>
            <label>
                아아디
                <input class="icon icon:user" type="text" value="">
            </label>
        </div> 
        <div>
            <label>
                비밀번호
                <input type="password" value="">
            </label>
        </div> 
        <div>
            <button>로그인</button>
        </div> 
        <div>
            <!-- <GoogleLogin/> -->
            <a href="" class="btn btn-google" @click.prevent="loginHandler">구글 로그인</a>
        </div> 
    </form>
</template>