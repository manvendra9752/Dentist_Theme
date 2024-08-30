import React from "react";
import styles from "../styles/About.module.css";
import img2 from "../images/about.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const para = [
  {
    id: "para1",
    text: "We are dedicated, compassionate, and highly skilled professionals here to ensure your dental experience is comfortable and stress-free. Our Mission at 57Dentcare is to promote optimal oral health and create lasting, confident smiles."
  },
  {
    id: "para2",
    text: "At 57Dentcare, our mission is to promote optimal oral health and create lasting, confident smiles."
  }
];

const About = () => {
  return (
    <div className={styles.about_root}>
      <div className={styles.about}>
      <div className={styles.about_main}>
          <img src={img2} alt="main-image" />
        </div>
        <div className={styles.textdata}>
          <h3>Our About</h3>
          <h1>ABOUT US</h1>

          <div className={styles.sub_content}>
            <p>
             {para[0].text}
            </p>
            <h4>Our Mission</h4>
            <p>
            {para[1].text}
            </p>
          </div>
          <button className={styles.btn}>Learn More <MdOutlineArrowOutward className={styles.arr} />
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default About;
