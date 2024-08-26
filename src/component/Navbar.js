import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
// import styles from "../styles/Navbar1.module.css"
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logo} alt='logo'/>
        <div className={styles.logo_content}><h4>Family Dental Care</h4> <p>Dentistry and Orthadontics</p></div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <Link><h3>About Us</h3></Link>
        </div>
        <div className={styles.content}>
          <Link to="#"><h3>About Us</h3></Link>
        </div>
        <div className={styles.content}>
        <Link to="#"><h3>About Us</h3></Link>
        </div>
        <div className={styles.content}>
        <Link to="#"><h3>About Us</h3></Link>
        </div>
        <div className={styles.content}>
          <Link to="#"><h3>Make an Appointment</h3></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar