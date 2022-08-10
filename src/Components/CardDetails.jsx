import styles from "./CardDetails.module.css";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";
import avatar from "./Images/avatar.png";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CardDetails=({content:{
  img,
  brand,
  year,
  model,
  distance,
  price,
  address,
  postDate,
  product_desc,
  sellerName,
  memeberSince,
  fuel,
  totalOwners,
}})=> {
  const[page,setPage]=useState(1);
  const [data,setData]=useState([]);
  const [total,setTotal]=useState(0);
  const{type}=useParams()
  useEffect(()=>{
    const getData=async()=>{
      let r= await axios.get(`https://olx-server-alll.herokuapp.com/${type}?_page=${page}&_limit=4`);
         setData(r.data);
          setTotal(Number(r.headers["x-total-count"]))
      }
   getData()
 },[type,page]);
  return (
    <div className={styles.mcontainer}>
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div style={{ border: "1px solid #CCD5D6" }} className={styles.custom}>
          <img objectFit="content" src={img} alt="content" />
        </div>
        <div style={{ textAlign: "left", border: "1px solid #CCD5D6" }}>
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "black",
              marginBottom: "2%",
            }}
          >
            Details
          </div>
          <div className={styles.spanCont}>
            <span style={{ color: "rgba(0,47,52,.64)", marginBottom: "2%" }}>
              Brand
            </span>
            <span style={{ color: "black" }}>{brand}</span>
            <span style={{ color: "rgba(0,47,52,.64)" }}>Model</span>
            <span style={{ color: "black" }}>{model}</span>
            <span style={{ color: "rgba(0,47,52,.64)" }}>Year</span>
            <span style={{ color: "black" }}>{year}</span>
            <span style={{ color: "rgba(0,47,52,.64)", marginBottom: "2%" }}>
              KM driven
            </span>
            <span style={{ color: "black" }}>{distance} km</span>
            <span style={{ color: "rgba(0,47,52,.64)" }}>No. of Owners</span>
            <span style={{ color: "black" }}>{totalOwners}</span>
          </div>
          <hr />
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "#002f34",
              marginBottom: "2%",
              marginTop: "2%",
            }}
          >
            Description
          </div>
          <div style={{ color: "black" }}>{product_desc}</div>
        </div>
      </div>
      <div className={styles.subContainer}>
        <div style={{ border: "1px solid #CCD5D6" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginLeft: "2%",
            }}
          >
            <div
              style={{ flexBasis: "50%", textAlign: "left", color: "black" }}
            >
              {" "}
              <h1> ₹ {price}</h1>{" "}
            </div>
            <div style={{ flexGrow: "1" }}></div>
            <div className={styles.hover} style={{ flexBasis: "8%" }}>
              <ShareAltOutlined />
            </div>
            <div className={styles.hover} style={{ flexBasis: "8%" }}>
              <HeartOutlined />
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              marginLeft: "2%",
              color: "rgba(0,47,52,.64)",
            }}
          >
            {year} - {distance} km
          </div>
          <div style={{ marginLeft: "2%", color: "rgba(0,47,52,.64)" }}>
            {" "}
            <h3>
              {brand} {model}, {year} {fuel}
            </h3>{" "}
          </div>

          <div className={styles.left_right}>
            <div
              style={{
                color: "rgba(0,47,52,.64)",
                fontSize: "12px",
                marginLeft: "2%",
              }}
            >
              {address}
            </div>
            <div></div>
            <div style={{ color: "rgba(0,47,52,.64)", fontSize: "12px" }}>
              {postDate}
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid #CCD5D6" }} className={styles.bold}>
          <p style={{ marginLeft: "2%", color: "black" }}>
            Seller Description
          </p>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={avatar}
                alt=""
                style={{ height: "70px", width: "70px" }}
              />
            </div>
            <h4
              style={{
                textAlign: "left",
                marginLeft: "3%",
                marginRight: "3%",
                color: "black",
              }}
            >
              {sellerName}
            </h4>
            <h6 style={{ color: "rgba(0,47,52,.64)" }}>
              Member since {memeberSince}
            </h6>
            <div></div>
          </div>
          <button style={{ cursor: "pointer" }}>Chat with seller</button>
          <button style={{ cursor: "pointer" }}>Make an offer</button>
          </div>
          <div>
            <p className={styles.pa}>{address}</p>
            <img src="https://www.sparxsys.com/sites/default/files/sampleMap.JPG" alt="" />
          </div>
      </div>
    </div>
    <div className={styles.c1}>
      <div className={styles.cb}>
         <button className={styles.cb1} disabled={page<=1} onClick={()=>setPage(page-1)}>{"<"}</button>
      </div>
      <div className={styles.cd}>
      {data.length>0 && data.map((data)=>(
           <Link to={`/${data.type}/${data.id}`}>
            <Card key={data.id} image={data.img} price={data.price} description={data.product_desc} 
               address={data.address} postDate={data.postDate} type={data.type} id={data.id} />
          </Link>
        ))}
        </div>
        <div className={styles.cb}>
          <button className={styles.cb1} disabled={total<=page*4} onClick={()=>setPage(page+1)}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;