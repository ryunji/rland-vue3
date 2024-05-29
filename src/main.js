//설정만 하는 곳.
import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import './assets/css/icon.css';

import App from './App.vue'
import Index      from './components/Index.vue'
import MenuList   from './components/menu/List.vue'
import MenuDetail from './components/menu/Detail.vue'
import AdminIndex from './components/admin/Index.vue'
import Layout from './components/inc/Layout.vue'
import AdminLayout from './components/admin/inc/Layout.vue'

const router = createRouter({
    //history: createMemoryHistory()
      history: createWebHistory()
    , routes:[
              {
                path:"/", redirect:"index", children:[            //root(/)에서는 main 영역 출력이 되지 않기 때문에
                    {path:"index",     component:Index}           //main이 포함된 index를 redirect 하도록 함.
                  , {path:"menu/list", component:MenuList} 
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
                ], component:AdminLayout
              }
      ]
})

createApp(App)
.use(router)        //router 장착
.mount('#app')

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