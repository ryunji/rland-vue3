<!-- 1. App.vue 내 코드는 바로 사용되지 못하는 소스코드로, vue는 이 소스코드를
     변환해주는 변환기를 내장하고 있다.
-->

<!-- 2.component 영역 : composition만 쓰겠다. -->
<script setup>
    import { ref } from "vue";
    let x = ref(50);
    let y = 30;
    
    function btnClickHandler(){

        console.log("click after x :", x);
    }
</script>

<!-- <script>
        import { ref } from "vue";
        export default{
            setup(){
                
                let x = ref(50);
            }
            , data(){
                    return{
                        //x:30 얘는 리액티브한
                    };
            }
            , methods:{ 
                btnClickHandler(){

                }
            }
        }
</script> -->

<template>
    <section>
        <h1>하하하{{x}}</h1>
    </section>
    <div>
        <input v-model="x">
        <button @click="btnClickHandler">클릭</button>
    </div>
</template>