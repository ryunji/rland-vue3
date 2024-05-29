<script setup>
import { GoogleLogin } from 'vue3-google-login';

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
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
            <GoogleLogin/>
            <a href="">구글 로그인</a>
        </div> 
    </form>
</template>