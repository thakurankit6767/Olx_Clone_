import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./ActionType"

export const login=(payload)=>(dispatch)=>{
dispatch({type:USER_LOGIN_REQUEST});

return axios({
    method:"post",
    url:"http://localhost:8080/data",
    data:payload
}).then((r)=>dispatch({type:USER_LOGIN_SUCCESS,payload:r.data}))
.catch((err)=>dispatch({type:USER_LOGIN_FAILURE}))
}

