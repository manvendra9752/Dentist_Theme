import React from "react";
import styles from "../styles/Hero.module.css"
import image from "../images/hero.png"
import heyimg from "../images/hey.png"
const data = {
  greeting: "Hey! We Are Dentist’s",
  heading: "Helping You to Bring Back Your Happy Smile",
  img: image,
  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",

}
const Hero = () => {
  return (
      <div className={styles.about}>
        <div className={styles.textdata}>
        <div className={styles.greet}>
          <img src={heyimg} alt="heyimage" />
          {data.greeting}
        </div>
          <h4>{data.heading}</h4>
          <p>{data.para}</p>
        </div>
        <div className={styles.about_main}>
          <img src={data.img} alt="heroImg" />
        </div>
      </div>
  );
};

export default Hero;
