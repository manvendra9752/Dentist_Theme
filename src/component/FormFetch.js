import React, { Fragment } from "react";
import styles from "../styles/Formfetch.module.css";
const data = {
  h1: "Become The Next Our",
  h3: "Contact Us",
  p: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  btn_text: "Contact Us",
  img: require("../images/formimg.png"),
};
const Formfetch = () => {
  return (
    <>
      <div className={styles.form__background__container}>
        <div className={styles.form__background}>
          <div className={styles.form__details}>
            <div className={styles.heading__text}>
              <h3>{ data.h3}</h3>
              <h1>{ data.h1}</h1>
              <p>{ data.p}</p>
            </div>
            <div className={styles.form}>
              <form className={styles.forminput}>
                <div className={styles.form__name__mob}>
                  <input type="text" placeholder="Name" />
                  <input type="tel" placeholder="Mobile" />
                </div>
                <div className={styles.form__textarea}>
                  <input type="email" placeholder="Email" />
                  <input type="textarea" placeholder="Message" />
                </div>
                <button className={styles.button}>{data.btn_text}</button>
              </form>
            </div>
          </div>
          <div className={styles.image__container}>
            <img src={data.img} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formfetch;
