import React,{useRef} from 'react';
import Slider from 'react-slick';
import img1 from "../images/services.png";
import img2 from "../images/services1.png";
import img3 from "../images/services2.png";
import img4 from "../images/gallery1.png";

import styles from "../styles/Services.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import teeth_1 from "../images/teeth1.png";
import teeth_2 from "../images/teeth2.png";
import teeth_3 from "../images/teeth3.png";

// import { motion } from "framer-motion";
// Define the content array with unique keys for each item
const main_para = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa."
const content = [
  {
    id: 1,
    heading: "Teeth Whitening",
    para: "Leverage years of expertise to offer top-notch services and solutions",
    image: teeth_1,
    img1: img1
  },
  {
    id: 2,
    heading: "Teeth Braces",
    para: "Leverage years of expertise to offer top-notch services and solutions",
    image: teeth_2,
    img1: img2

  },
  {
    id: 3,
    heading: "Teeth Checkup",
    para: "Leverage years of expertise to offer top-notch services and solutions.",
    image: teeth_3,
    img1: img3

  },
  {
    id: 4,
    heading: "Teeth Cleaning",
    para: "Leverage years of expertise to offer top-notch services and solutions.",
    image: teeth_1,
    img1: img4

  },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '2%',
  responsive: [
   
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:  430,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const Services = () => {
  const slider = useRef(null);

  return (
    <>
      <div
        className={styles.services}>
        <div className={styles.main_data}>
          <h3>Our Services</h3>
          <h1>Service</h1>
          <p>{main_para}
          </p>
        </div>
        <Slider ref={slider} {...sliderSettings} className={styles.slider}>
          {content.map(service => (
          <div key={service.id} className={styles.services_1}>
              <img src={service.img1} alt={`image_${service.id}`} />
            <div className={styles.content_1}>
                <div className={styles.content_heading}>
                  <img src={service.image} alt='teethImg' />
                  <h2>{service.heading}</h2>
                </div>
              <p>{service.para}</p>
              <button className={styles.button1}>Learn More <FaArrowCircleRight style={{margin: "0rem 0.5rem"}}/></button>
            </div>
          </div>
          ))}
        </Slider>
        <div className={styles.btn__container}>
                    <button className={styles.prevarrow} onClick={() => slider?.current?.slickPrev()}><IoArrowBackCircleOutline />
          </button>
          <div className={styles.hr}></div>
                    <button className={styles.nextarrow} onClick={() => slider?.current?.slickNext()}><IoArrowForwardCircleOutline />
                    </button>
            </div>
      </div>
    </>
  );
}

export default Services;
