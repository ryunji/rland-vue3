<script setup>
import { GoogleLogin, googleTokenLogin } from 'vue3-google-login';

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
            console.log(userinfo);
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