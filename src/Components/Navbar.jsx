import React from 'react'
import Styles from "./Navbar.module.css";
import search_logo from "../NavLogos/search.png"
import arrow from "../NavLogos/arrow.png";
import search2 from "../NavLogos/download.png";
import msg from "../NavLogos/msg.png";
import bell from "../NavLogos/bell.png";
import sell from "../NavLogos/sell.png";
import {Link, useNavigate} from "react-router-dom"
import Dropdown from './Dropdown';
import SignIn from './LoginPage/SignIn';
const Navbar = () => {
  const navigate=useNavigate();

  // const handlHome=()=>{
  //   navigate("/");
  // }
  return (
    <div className={Styles.navbar}>
        <div className={Styles.nav1}>
            <div className={Styles.n1}>
                <img width='50px' height='35px'
                src="https://olx-webclone.web.app/static/media/olx%20logo.f23ad0c1.png" alt="" 
                onClick={()=>navigate("/")} />
            </div>
              <div className={Styles.inp1}>
                <div className={Styles.slogo}>
                  <img width='30px' height='30px'
                  src={search_logo}  />
                </div>
                <input className={Styles.s1}   />
                <select>
                  <option><h5>India</h5></option>
                  <option><h5>Kerala</h5></option>
                  <option><h5>Bihar</h5></option>
                  <option><h5>Punjab</h5></option>
                  </select>
                {/* <img width='30px' height='30px' src={arrow} /> */}
             </div>
            <div className={Styles.inp2}>
              <input className={Styles.s2} placeholder='Find Cars, Mobile Phones and more...'/>
              <div className={Styles.slogo2}>
                <img src={search2} width='40px' height='100%'/>
              </div>
            </div>
            <div className={Styles.last}>
              <div>
                <select>
                  <option><h5>ENGLISH</h5></option>
                  <option><h5>HINDI</h5></option>

                </select>
                </div>
            {/* <div className={Styles.a}><img width='30px' height='30px' src={arrow} /></div> */}
            <div className={Styles.b}><img width='30px' height='30px' src={msg} /></div>
            <div className={Styles.c}><img width='30px' height='30px' src={bell} /></div>
            <div className={Styles.d}><h5 src={SignIn} onClick={()=>navigate("./signin")}>LOGIN</h5></div>
            <div className={Styles.a}><img width='40px' height='30px' src={arrow} /></div>
            <div className={Styles.e}><img src={sell} onClick={()=>navigate("/sell")} width='90px' height='70px'/></div>
            </div>
        </div>
            <div className={Styles.nav2}>
            <div className={Styles.nav2a}>
            <div className={Styles.nav2a1}><h6>ALL CATEGORIES</h6></div>
            <div className={Styles.a}>
            <img width='40px' height='30px' src={arrow }onClick={()=>navigate("/dropdown")}/>
            <Link to ="/">.</Link>

            
            </div>
              </div>
              <div className={Styles.nav2b}>
         <Link to ="/cars">Cars</Link>
         <Link to ="/motarcycles">Motarcycles</Link>
        
         <Link to ="/forsale">For Sale: Houses & Apartments</Link>
         <Link to ="/scooters">Scooters</Link>
         <Link to ="/commercial">Commercial & Others Vehicles</Link>       
         <Link to ="/forrent">For Rent: Houses & Apartments</Link>


              </div>
            </div>
    </div>
  )
}

export default Navbar