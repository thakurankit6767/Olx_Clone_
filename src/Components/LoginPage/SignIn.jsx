import { useState } from 'react';
import {Modal} from './Modal';

function SignIn() {
  const [show,setShow]=useState(false);
  const handleClose=()=>{
    setShow(false);
  }
  return (
    <div>
      <button onClick={()=>setShow(true)}>Login</button>
      <Modal show={show} handleClose={handleClose}/>
    </div>
  );
}

export default SignIn;
