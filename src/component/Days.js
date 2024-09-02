import React from "react";
import styles from "../styles/Days.module.css";
import calLogo from "../images/calendar__logo.png";

const Days = ({ day, time }) => {
  return (
    <>
      <div className={styles.days__content}>
        <div className={styles.days__logoCal}>
          <img
            className={styles.day__calendar}
            src={calLogo}
            alt="calendarLogo"
          />
        </div>
        <div className={styles.day__name}>
          <p  className={styles.days__particularDay}>{day}</p>
          <h4>{time}</h4>
        </div>
      </div>
    </>
  );
};

export default Days;
