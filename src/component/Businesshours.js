import React from "react";
import styles from "../styles/Businesshour.module.css";
import Days from "./Days";
import { Calendar } from "@natscale/react-calendar";
// import appointmentimg from "../images/appointmentimg.png";

const Businesshour = () => {
  const hours = [
    { day: "Monday", time: "10:00 AM - 10:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 10:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { day: "Thursday", time: "10:00 AM - 10:00 PM" },
    { day: "Friday", time: "10:00 AM - 10:00 PM" },
    { day: "Saturday", time: "10:00 AM - 10:00 PM" },
    { day: "Sunday", time: "10:00 AM - 10:00 PM" },
  ];
  const data = {
    h3: "Appointments & Business Hours",
    h1: "Book Appointments & Business hours ",
    business_p:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa.",
    img1: require("../images/Businessimg.png"),
    img2: require("../images/appointmentimg.png"),
    btn_text: "Make An Appointment",
  };

  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.head__container}>
          <div className={styles.heading__container}>
            <h3>{data.h3}</h3>
            <h1>{data.h1}</h1>
            <p>{data.business_p}</p>
          </div>
        </div>
        <div className={styles.shadow__container}>
          <div className={styles.Business__container}>
            <div className={styles.content}>
              <div className={styles.img__container}>
                <img src={data.img1} alt="Business Hours" />
              </div>
              <div className={styles.days__container}>
                <div className={styles.Business__days}>
                  {hours.map((hour, index) => (
                    <Days key={index} day={hour.day} time={hour.time} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.appointment__container}>
            <div className={styles.appointment__content}>
              <div className={styles.appointment__calendar__container}>
                <Calendar className={styles.appointment__calendar} />
              </div>
              <div className={styles.appointment__datetime__content}>
                <div className={styles.appointment__date}>
                  <p>Date Selected</p>
                  <p>29/07/2024</p>
                </div>
                <div className={styles.appointment__hour}>
                  <p>Hour Selected</p>
                  <p>10:00 AM - 10:15 AM</p>
                </div>
                <div className={styles.appointment__btn__container}>
                  <button className={styles.appointment__btn}>
                    {data.btn_text}
                  </button>
                </div>
              </div>
              <div className={styles.appointment__image}>
                <img src={data.img2} alt="gymImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Businesshour;
