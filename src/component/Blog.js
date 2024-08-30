import React from 'react';
import Slider from 'react-slick';
import img1 from "../images/services.png";
import styles from "../styles/Blog.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

// Define the content array with unique keys for each item
const content = [
  {
    id: 1,
    heading: "Oral Cancer Awareness: Signs, Symptoms and Prevention",
    para: "Leverage years of expertise to offer top-notch services and solutions",
  },
  {
    id: 2,
    heading: "The Dos and Don’ts of Teeth Whitening: Expert Advice",
    para: "Leverage years of expertise to offer top-notch services and solutions",
  },
  {
    id: 3,
    heading: "Oral Health for All Ages: Tips for Kids, Teens, and Adults",
    para: "Leverage years of expertise to offer top-notch services and solutions.",
  },
  {
    id: 4,
    heading: "The Dos and Don’ts of Teeth Whitening: Expert Advice",
    para: "Leverage years of expertise to offer top-notch services and solutions.",
  },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Adjust this value based on how many slides you want to show at once
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
const main_para = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa."

const Blog = () => {
  return (
    <>
      <div className={styles.services}>
      <div className={styles.main_data}>
          <h3>Our Blogs</h3>
          <h1>Blog</h1>
          <p>{main_para}
          </p>
        </div>
        <Slider {...sliderSettings} className={styles.slider}>
          {content.map(service => (
            <div key={service.id} className={styles.services_1}>
              <img src={img1} alt={`image_${service.id}`} />
              <h2>{service.heading}</h2>
              <p>{service.para}</p>
              <button className={styles.button1}>Read More <FaArrowRightLong style={{marginLeft: "4px"}}/> </button>
            </div>
          ))}
        </Slider>
        {/* <div className={styles.line}>
          <hr className={styles.liner}></hr>
          <button className={styles.button1}>
            View All
            <FaArrowRightLong style={{ marginLeft: "4px", marginTop: "2.5px" }} />
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Blog;
