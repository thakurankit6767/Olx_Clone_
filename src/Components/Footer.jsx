import React from 'react'
import Styles from "./Footer.module.css";
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    
        <div className={Styles.fm}>
        <div className={Styles.fm1}>
            <div className={Styles.fm1a}>
                <img src="https://statics.olx.in/external/base/img/phone-app.webp" alt="" />
            </div>
            <div className={Styles.fm1b}>
                <h1>TRY THE OLX APP</h1>
                <p>Buy sell and find just about anything using the app on your mobile</p>
            </div>
            <div className={Styles.fm1c}>
                <h3>GET YOUR APP TODAY</h3>
                <div className={Styles.fm1cimg}>
                <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="" />
                <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="" />
                </div>
            </div>

        </div>
        <div className={Styles.fm2}>
        <div>
            <h4>POPULAR LOCATIONS</h4>
            <p><a href="#">Kolkata</a></p>
           <p><a href="#">Mumbai</a></p>
           <p><a href="#">Pune</a></p>
           <p><a href="#">Chennai</a></p>
        </div>
        <div>
        <h4>TRENDING LOCATIONS</h4>
            <p><a href="#">Bhuwaneshwar</a></p>
           <p><a href="#">Hyderabad</a></p>
           <p><a href="#">Chandigarh</a></p>
           <p><a href="#">Nasik</a></p>
        </div>
        <div>
        <h4>ABOUT US</h4>
            <p><a href="#">About OLX Group</a></p>
           <p><a href="#">Careers</a></p>
           <p><a href="#">Contact Us</a></p>
           <p><a href="#">OLX People</a></p>
           
        </div>
        <div><h4>OLX</h4>
            <p><a href="#">Help</a></p>
           <p><a href="#">Sitemap</a></p>
           <p><a href="#">Legal & Privacy information</a></p>
           <p><a href="#">Blog</a></p></div>
            <div className={Styles.fm2e}>
               <div><h4>FOLLOW US</h4></div> 
                <div className={Styles.social}>
                    <p><a href="https://www.facebook.com/olxindia/" target="blank"><RiFacebookCircleLine /></a></p>
                    <p><a href="https://www.instagram.com/olx_india/" target="blank"><RiInstagramLine /></a></p>
                    <p><a href="https://twitter.com/OLX_India" target="blank"><TiSocialTwitterCircular /></a></p>
                    <p><a href="https://www.youtube.com/user/OLXInTv" target="blank"><AiOutlineYoutube /></a></p>
                </div>
                    <div className={Styles.fimg}>
                <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="" width="90px" height="30px" marginRight="10px"/>
                <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="" width="90px" height="30px"/>
                    </div>
        </div>

        </div>
        <div className={Styles.fm3}>
        <div>Other Countries Pakistan-South Africa-Indinesia</div>
        <div>Free Classifieds in India .@2006-2022 OLX</div>

        </div>

        
        </div>
    
  )
}

export default Footer