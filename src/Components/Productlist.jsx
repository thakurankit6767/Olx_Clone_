import { Box,Button, Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { getProducts } from '../Redux/AppReducer/action';
import { Card } from './Card';
import "./Productcard.css"
const Productlist = () => {

    const dispatch=useDispatch();
    const [page,setpage]=useState(1);
    const [Data,setData]=useState([]);
    const [Total,setTotal]=useState([]);
    const [limit,setLimit]=useState(12)

  const Products = useSelector((state)=>state.AppReducer.Products);
  useEffect(()=>{
           dispatch(getProducts(limit))
  },[dispatch,Products.length,limit]);

  useEffect(()=>{
    const getData=async()=>{
      let r= await axios.get(`https://olx-server-alll.herokuapp.com/cars?_page=${page}&_limit=4`);
         setData(r.data);
          setTotal(Number(r.headers["x-total-count"]))
      }
   getData()
 },[page]);
  return (
    <div>
      <div className='car' >
          <p className='p'>More on cars</p>
        <div className='car1'>
            <div className='btn'>
                <button className='btb' hidden={page<=1} onClick={()=>setpage(page-1)}>{"<"}</button>
            </div>
            <div className='car2'>
            {Data.map((data)=>(
              <Link to={`/${data.type}/${data.id}`}>
                <Card key={data.id} image={data.img} price={data.price} description={data.product_desc} 
                  address={data.address} postDate={data.postDate} type={data.type} id={data.id} />
              </Link>
              ))}
            </div>
            <div className='btn'>
              <button className='btb' hidden={Total<=page*4} onClick={()=>setpage(page+1)}>{">"}</button>
            </div>
          </div>
        <div>
      </div>
    </div>
    <div>
      <p className='p'>Fresh Recomentation</p>
    </div> 
    <Box> 
    <Grid templateColumns='repeat(4, 1fr)' gap={6} >
         {Products.length>0 && Products.map((data)=>(<div key={data.id}>
            <Link to={`/${data.type}/${data.id}`}>
             <GridItem  height="100%">
                <Card key={data.id} image={data.img} price={data.price} description={data.product_desc} 
               address={data.address} postDate={data.postDate} type={data.type} id={data.id} />
              </GridItem> 
            </Link>
        </div>))}
    </Grid>
    </Box> 
    <Box margin="40px">
    <Button className='bl' onClick={()=>setLimit(limit+4)} border="1px solid black" _hover={{border:"4px solid black"}}>Load More</Button>
    </Box>
    </div>
  )
}

export default Productlist