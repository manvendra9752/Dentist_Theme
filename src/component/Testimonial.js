import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Testimonial.module.css";

const data = {
  h3: "Our Testimonial",
  h1: "The Honest Review From Our Client",
  p: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",
  btn_text: "See All Review",
};
const testimonials = [
  {
    name: "José Correia",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    designation: "Marketing Manager",
  },
  {
    name: "Agathe Dufour",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
    designation: "Company CEO",
  },
  {
    name: "José Correia",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    designation: "Marketing Manager",
  },
  {
    name: "Agathe Dufour",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
    designation: "Company CEO",
  },
];

const getInitials = (name) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = useRef(null);
  return (
    <>
      <div className={styles.testimonial__container}>
        <div className={styles.section1}>
          <h3>{data.h3}</h3>
          <h1>{data.h1}</h1>
          <p>{data.p}</p>
          <button>{data.btn_text}</button>
        </div>
        <div className={styles.slider} style={{width:"50%"}}>
          <Slider ref={slider} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className={styles.main__container}>
                <div key={index} className={styles.testimonial__slide}>
                  <div className={styles.details}>
                    <div className={styles.testimonial__content}>
                      <p>{testimonial.text}</p>
                      <div className={styles.name__designation}>
                        <h4>{testimonial.name}</h4>
                        <i>{testimonial.designation}</i>
                      </div>
                    </div>
                    <div className={styles.testimonial__image}>
                      <div>
                        <span>{getInitials(testimonial.name)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.details} ${styles.second}`}>
                    <div className={styles.testimonial__content}>
                      <p>{testimonial.text}</p>
                      <div className={styles.name__designation}>
                        <h4>{testimonial.name}</h4>
                        <i>{testimonial.designation}</i>
                      </div>
                    </div>
                    <div className={styles.testimonial__image}>
                      <div>
                        <span>{getInitials(testimonial.name)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
