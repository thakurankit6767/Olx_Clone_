import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./ActionType"

const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case USER_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case USER_LOGIN_SUCCESS:{
            return {
                ...state,
                isAuth:true,
                isLoading:false,
                isError:false,
                token:payload
            }
        }
        case USER_LOGIN_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true,
                token:""
            }
        }
        default:{
            return {...state}
        }
    }
}