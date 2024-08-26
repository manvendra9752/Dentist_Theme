import React from "react";
// import heroimglogo from "../images/CTA Button.png";
import styles from "../styles/Hero.module.css"
const Hero = () => {
  return (
    <div className={styles.background}>
      <div className={styles.displayText}>
        <div className={styles.contain}>
          <h4 style={{ padding: "2px" }}>
            Make your home <br />
            an ode to joy
          </h4>
        </div>
        {/* <img src={heroimglogo} style={{ width: "20%" }} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
