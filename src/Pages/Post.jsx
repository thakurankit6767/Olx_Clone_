import React,{useState} from "react";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from 'react';
import {useDispatch} from "react-redux";
import {postData} from "../Redux/AppReducer/action";
import { POSTDATA_SUCCESS } from "../Redux/AppReducer/actionType";
const initialState={
    name:"",
    price:"",
    year:"",
    distance:"",
    fuel:"",
    address:"",
    postDate:Date().toString().substr(3,15),
    totalOwners:"",
    state:"",
    category:"cars",
    brand:"",
    model:"",
    transmission:"",
    product_desc:"",
    img:""
}
function reducer(state,{type,payload}){
    switch(type){
      case "name":return {...state,name:payload}
      case "price":return {...state,price:payload} 
      case "year":return {...state,year:payload}
      case "distance":return {...state,distance:payload}
      case "fuel":return {...state,fuel:payload}
      case "address":return {...state,address:payload}
      case "postDate":return {...state,postDte:payload} 
      case "totalOwners":return {...state,totalOwners:payload}
      case "state":return {...state,state:payload}
      case "category":return {...state,category:payload}
      case "brand":return {...state,brand:payload}
      case "model":return {...state,model:payload}
      case "transmission":return {...state,transmission:payload}
      case "product_desc":return {...state,product_desc:payload}
      case "img":return {...state,img:payload}
      default:return state;
    }
    }
export const Post=()=>{
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [state,setter]=useReducer(reducer,initialState);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
        console.log(e.target.files[0]);
        setter({type:"img",payload:e.target.files[0].webkitRelativePath});
      }
    };
  
    const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
  
      await fetch("YOUR_URL", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(postData(state)).then((r)=>{
            if(r===POSTDATA_SUCCESS){
                alert("Congratulations! Your Ad is Live!");
                
                navigate("/",{replace:true});
            }
        });

    };

    return <>
     <Heading fontSize={"24px"} fontWeight="700" color="#002f34">POST YOUR AD</Heading>
     <Box className={styles.box}>
     <Heading fontSize={"20px"} fontWeight="700" color="#002f34" marginLeft="-520px" marginBottom="20px">SELECTED CATEGORY</Heading>
     <Breadcrumb marginLeft="-590px" marginTop="20px" fontSize={"12px"} color="#5c7b80">
     <BreadcrumbItem>
     <BreadcrumbLink as={Link} to="/sell">OLX Auto (cars)</BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink>Cars</BreadcrumbLink>
    </BreadcrumbItem>
     </Breadcrumb>
     <hr/>
     <Heading fontSize={"20px"} fontWeight="700" color="#002f34" marginLeft="-520px" marginBottom="20px" marginTop="20px">INCLUDE SOME DETAILS</Heading>
     
     {/* {form entries} */}
     <Box className={styles.formbox}>
     <form onSubmit={handleSubmit}>
        <label>Brand *</label><br/>
        <select className={styles.inputbox} onChange={(e)=>setter({type:"brand",payload:e.target.value})} required>
            <option value=""></option>
            <option value="Maruti">Maruti Suzuki</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Tata">Tata</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Honda">Honda</option>
            <option value="Bajaj">Bajaj</option>
        </select>
        <br/><br/>
        <label>Model *</label><br/>
        <input className={styles.inputbox} onChange={(e)=>setter({type:"model",payload:e.target.value})} required/>
        <br/><br/>
        <label>Variant *</label><br/>
        <input className={styles.inputbox} required/>
        <br/><br/>
        <label>Year *</label><br/>
        <input className={styles.inputbox} onChange={(e)=>setter({type:"year",payload:e.target.value})} required/>
        <br/><br/>
        <label>Fuel *</label>
        <br/>
        <select className={styles.inputbox} onChange={(e)=>setter({type:"fuel",payload:e.target.value})} required>
            <option value=""></option>
            <option value="cng">CNG {"&"} Hybrid</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="lpg">LPG</option>
            <option value="petrol">Petrol</option>
        </select>
        <br/><br/>
        <label>Transmission *</label>
        <br/>
        <select className={styles.inputbox} onChange={(e)=>setter({type:"transmission",payload:e.target.value})} required>
            <option value=""></option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            
        </select>
        <br/><br/>
        <label>KM Driven *</label><br/>
        <input className={styles.inputbox} type="number" onChange={(e)=>setter({type:"distance",payload:e.target.value})} required/>
        <br/><br/>
        <label>No. of Owners *</label>
        <br/>
        <select className={styles.inputbox} onChange={(e)=>setter({type:"totalOwners",payload:e.target.value})} required>
            <option value=""></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="4+">4+</option>
        </select>
        <br/><br/>
        <label>Ad Title *</label><br/>
        <input className={styles.inputbox} type="text" onChange={(e)=>setter({type:"name",payload:e.target.value})} required/>
        <br/><br/>
        <label>Description *</label><br/>
        <textarea className={styles.inputbox} type="text" onChange={(e)=>setter({type:"product_desc",payload:e.target.value})} required/>
        <br/><br/>
        <hr/>
        <h1 className={styles.formheading}>SET A PRICE</h1>
        <br/><br/>
        <label>Price *</label><br/>
        <input className={styles.inputbox} type="number" placeholder=" ₹ |" onChange={(e)=>setter({type:"price",payload:e.target.value})} required/>
        <br/><br/>
        <hr/>
        <h1 className={styles.formheading}>UPLOAD UPTO 20 PHOTOS</h1>
        <br/>

        {/* {photo uploading here} */}
        <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="200" height="200" />
        ) : (
          <>
          <Box className={styles.imagebox}>
          <FontAwesomeIcon icon={faCamera} className={styles.icon}/>
          </Box>  
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        webkitdirectory="true" accept="image/*"
        style={{ display: "none" }}
        onChange={handleChange} required
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
      <br/>
      <hr/>
      <h1 className={styles.formheading}>CONFIRM YOUR LOCATION</h1>
      <br/>
      <br/>
      <label>State *</label><br/>
        <input className={styles.inputbox} type="text" onChange={(e)=>setter({type:"state",payload:e.target.value})} required/>
        <br/><br/>
        <label>City *</label><br/>
        <input className={styles.inputbox} type="text" onChange={(e)=>setter({type:"address",payload:e.target.value})} required/>
        <br/><br/>
        <label>Neighborhood *</label><br/>
        <input className={styles.inputbox} type="text" required/>
        <br/><br/>
        <hr/>
        <button type="submit" className={styles.button}>Post now</button>
     </form>
    </Box>
    </Box>
    </>
}