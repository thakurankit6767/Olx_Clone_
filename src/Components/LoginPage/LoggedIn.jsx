import React from 'react'
import styles from './LoggedIn.module.css';

export const LoggedIn = () => {
    const user="Sayyad Gul Mohammad";
  return (
    <div className={styles.main_div}>
    <div className={styles.userInfo}>
    <div><img className={styles.userImage} src='./loginEntryPointChat.webp' alt='userimage' /></div>
    <div><span style={{color:"gray",margin:"5px"}}>Hello,</span>
    <p className={styles.name}>{`${user}`}</p>
    <a href='#abc' className={styles.anchor_tag}>View and edit your profile</a></div>
    </div>
    <hr/>
    <div className='userFeatures'>
    <a href='#abc'className={styles.anchor_div}><img className={styles.icons} src='https://cdn-icons-png.flaticon.com/512/6601/6601673.png' alt='ads'/><div>My ADS</div></a>
    <a href='#abc'><div>Buy Business Packages</div></a>
    <a href='#abc'><div>Bought Packages and Billings</div></a>
    <hr/>
    <a href='#abc'><div>Help</div></a>
    <a href='#abc'><div>Settings</div></a>
    <hr/>
    <a href='#abc'><div>Install OLX Lite app</div></a>
    <hr/>
    <a href='#abc'><div>Logout</div></a>
    </div>
    </div>
  )
}
