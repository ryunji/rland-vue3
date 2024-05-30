import { defineStore } from "pinia";

//export const userDetailsStore = defineStore('userDetails',{
//함수형태로 변수를 선언하면서 디폴트는 안된다.
export const useUserDetailsStore = defineStore('userDetails',{

    //약속된 속성 watch같은거
    state:()=>{
        return {
              id       : null
            , userName : null
            , emial    : null
        }
    }
    , actions:{
        isAuthenticated(){
            
            if(this.userName)
                return true;

            return false;
        }
        , invalidate(){

            this.id       = null;
            this.userName = null;
            this.emial    = null;
        }
        , setAuth(userInfo){

        }
    }
});

//export default{}
/* class UserDetails{

    constructor(){
        this.id       = 1;
        this.userName = "newlec";
        this.email    = "newlec@newlecture.com";
    }
}

export default new UserDetails(); */