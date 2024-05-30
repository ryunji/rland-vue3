<script setup>
    import{computed, onMounted, reactive , ref, watch} from 'vue'
    import BasketStatus from './BasketStatus.vue';
    import Filter from './Filter.vue';
    import Pager from '../inc/Pager.vue';
    //import userDetail from '../store/UserDetails';
    import {useUserDetailsStore} from '../store/UserDetails';

//저장소에서 꺼내써야 한다.
const userDetails = useUserDetailsStore();
    const  model = reactive({

          list : [{}, {}]
        , count : 0
      //, query : ""
    }); 
    
    //const query = ref(""); 참조하는걸 대체하면 안돼. 속성값으로 넣고 대체해야 함.
    

   const query = ref("");
          //query.value = 2;
    const state = reactive({query:""});

    watch(query, ()=>{

        console.log("hehe");
    });

    const x = ref(0);
    //const y = computed();
    const y = computed(()=> x.value+3); // computed(()=> x.value+3); //x.value+3;

    const basketInfo = reactive({
          
        //계산을 장바구니에게 책임을 넘기겠다.
       /*   price  : 0
        , amount : 0*/
    });
    


    // -- Event Handelr --
    function addCartClickHandler(menu){

        //basketInfo.price += menu.price;
        basketInfo.price = menu.price;
    }

    //Life Cycle Handler : 라이프사이클, 이벤트 영역 
    onMounted(()=>{
        
        fetch("http://localhost:8080/menus")
        .then((resp)=> resp.json())
        .then((json)=>{
            model.list = json;                  //equal은 대체
                        
            // json.forEach((item) => {
            //     model.list.push(item);
            // });
        });
    });

    function test(value){
        query.value = value;
        console.log("test : " , value);
    }

    function test2(value){
        console.log("test2 : ", value);
    }
</script>
<template>
    <div class="n-main">                                    <!-- 이렇게 써주어야 영역이 펼쳐져 차지함.-->
        <main>                                              <!-- main은 섹션 아니다, 섹션은 4개 종류가 있다. -->
            <section class="menu-list">
            <h1 class="d:none">메뉴 검색 목록</h1>
            <div>
                <!-- 필터 영역 -->
                <Filter @queryClick="test" @categoryChange="test2"/>
                <!-- ------------------------------------------------------ -->
                <div></div>
                <section class="menu-card-list" id="menu-card-list">
                    <div><input type="text" v-model.number="x"/><sapn>{{y}}</sapn>{{ userDetails.userName }}</div>
                    <h1 class="d:none">메뉴 목록</h1>
                    <div class="content fade">
                        <section class="menu-card" v-for="m of model.list">
                            <h1>
                                <a class="heading-3" href="detail.html"> {{ m.korName }}</a></h1>
                            <h2 class="heading-2 font-weight:normal color:base-5">{{ m.engName }}</h2>
                            <div class="price-block d:flex align-items:flex-end"><span class="font-weight:bold">{{m.price}}</span>원<span class="soldout-msg ml:auto mr:auto md:d:none">SOLD OUT</span></div>
                            <div class="img-block">
                                <a href="detail.html?id=1">
                                    <img src=""/>               
                                </a>
                            </div>
                            <div class="like-block d:flex justify-content:flex-end">
                                <a class="icon icon-heart icon-color:base-4"                                
                                 href="">좋아요</a>
                                <span class="font-weight:bold ml:1">2</span>                                
                            </div>
                            <div>
                                <button>삭제</button>
                            </div>
                            <div class="pay-block d:flex">
                                <!-- <a class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text" href="">담기</a> -->
                                <form action="/cart/add-menu" method="post">
                                    <input type="hidden" name="id">
                                    
                                    <button @click.prevent="addCartClickHandler(m)"                                                                            
                                        class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text">
                                        담기
                                    </button>
                                </form>
                                <a class="icon md:icon:none icon-card icon-color:base-0 color:base-0 btn-type:icon btn-card md:btn-type:text" href="">주문하기</a>
                            </div>
                        </section>                        
                    </div>
                </section>
            </div>
            </section>
            <!-- Pager -->
            <Pager/>
            <!-- basket status -->
       <!-- <BasketStatus :price="basketInfo.price"/> -->
            <BasketStatus :list="basketInfo.list"/>
        </main>
    </div>
</template>

<style scoped>
    @import url(@/assets/css/menu/card.css);
    @import url(@/assets/css/menu/list.css);
    @import url(@/assets/css/menu/rcmd-menu-list.css);
    /* .n-list {
        background-color: aqua;
    } */
</style>