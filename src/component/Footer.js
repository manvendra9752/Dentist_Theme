import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const data = {
    section1: {
      img: require("../images/logo1.png")
    },
    section2: {
      h1: "UTILITY PAGES",
      p1: "About",
      p2: "Serives"
    },
    section3: {
      h1: "EXTRA LINKS",
      p1: "Privacy Policy",
      p2: "Terms & Conditions"
    },
    section4: {
      h1: "CONTACT US",
      p1: "E-mail",
      p2: "Phone",
      p3: "Address"
    },
    copywrite: {
      p1: "Dental",
      p2: `Copyright © ${currentYear}. All rights reserved`
    }

  }
  const socialmedia = [
    {
      image: require("../images/facebook.png"),
      url: "https://www.facebook.com/?_rdr",
    },
    {
      image: require("../images/twitter.png"),
      url: "https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D",
    },
    {
      image: require("../images/google.png"),
      url: "www.google.com",
    },
  ];

  return (
    <>
      <div className={styles.footer__container}>
        <div className={styles.section__container}>
          <div className={styles.footer__logosection}>
            <div className={styles.footerimage__container}>
              <img src={data.section1.img} alt="logoimage" />
            </div>
            <div className={styles.footer__socialLogoConatiner}>
              {socialmedia.map((media, index) => (
                <a key={index} href={media.url}>
                  <img src={media.image} alt="logoimages" />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.section2}>
            <h2>{data.section2.h1}</h2>
            <p>{data.section2.p1}</p>
            <p>{data.section2.p2}</p>
          </div>
          <div className={styles.section3}>
            <h2>{data.section3.h1}</h2>
            <p>{data.section3.p1}</p>
            <p>{data.section3.p2}</p>
          </div>
          <div className={styles.section1}>
            <div>
              <h2>{ data.section4.h1}</h2>
              <p>{data.section4.p1 }</p>
              <p>{ data.section4.p2}</p>
              <p>{ data.section4.p3}</p>
            </div>
          </div>
        </div>
        <div className={styles.hr}>
          <hr />
        </div>
        <div className={styles.copywrite}>
          <p>{data.copywrite.p1}</p>
          <p>{ data.copywrite.p2}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
