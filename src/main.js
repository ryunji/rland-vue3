//설정만 하는 곳.
import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia';
import { useUserDetailsStore } from './components/store/UserDetails';
import './assets/css/icon.css';

import App from './App.vue'
import Index      from './components/Index.vue'
import MenuList   from './components/menu/List.vue'
import MenuDetail from './components/menu/Detail.vue'
import AdminIndex from './components/admin/Index.vue'
import Layout from './components/inc/Layout.vue'
import AdminLayout from './components/admin/inc/Layout.vue'
import vue3GoogleLogin from 'vue3-google-login'
import UserLogin   from './components/user/Login.vue'
const pinia = createPinia();
const app = createApp(App)
app.use(pinia)        //pinia를 router 밑에 설정해야 함?


const userDetails = useUserDetailsStore();

const router = createRouter({
    //history: createMemoryHistory()
      history: createWebHistory()
    , routes:[
              {
                path:"/", redirect:"index", children:[            //root(/)에서는 main 영역 출력이 되지 않기 때문에
                    {path:"index",      component:Index}           //main이 포함된 index를 redirect 하도록 함.
                  , {path:"menu/list",  component:MenuList} 
                  , {path:"user/login", component:UserLogin} 
                /*, {path:"menu",  children:[
                           {path:"list",   component:MenuList}
                         , {path:"detail", component:MenuDetail}
                        ]
                    }
                */
                ], component:Layout
              }
            , {
                path:"/admin", children:[
                  {path:"index",component:AdminIndex}
                ]
                , component:AdminLayout
                , beforeEnter:(to, from, next)=>{ //라이팅 전에 실행될게 있니/ 필터 역할.
                
                  //userDetails
                  console.log("before...hehe");
                  if(!userDetails.isAuthenticated())
                    next("user/login");
                } 
              }
      ]
})

app.use(vue3GoogleLogin, {
  clientId: '663368504469-j5jg45a0815k4t0co8cj45mjevlr5m88.apps.googleusercontent.com'
})
app.use(router)        //router 장착

app.mount('#app')

/*
  , routes:[
              {path : "/",            component:Index}        component:Layout
            , {path : "/index",       component:Index}
            , {path : "/menu/list",   component:MenuList}
            , {path : "/menu/detail", component:MenuDetail}
            , {path : "/admin/index", component:AdminIndex}
           ] 
    ]
*/    