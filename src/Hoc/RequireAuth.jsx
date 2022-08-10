import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const isAuth=useSelector((state)=>state.AuthReducer.isAuth);
    const location =useLocation()
    console.log(isAuth);
    if(isAuth){
        return children
    }
    else{
      return  <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
}

export default RequireAuth