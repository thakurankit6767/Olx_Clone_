import { Button } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Productlist from '../Components/Productlist'
import "./Homepage.css"
const Homepage = () => {
const navigate=useNavigate()
  return (
    <div>
      <div className='head'> 
        <Button className='bt' onClick={()=>navigate("/sell")}>Sell Car</Button>
      </div>
      <div className='ho'>
      <div className='listview'>
        <Productlist/>
      </div>
      </div>
    </div>
  )
}

export default Homepage


