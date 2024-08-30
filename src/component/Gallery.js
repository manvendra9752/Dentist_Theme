import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Gallery.module.css";
import img1 from "../images/gallery2.png";
import img3 from "../images/gallery1.png";

const main_para = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa.";

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  // centerPadding: '10%',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 0.8,
        // centerPadding: '15%',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 0.5,
        // centerPadding: '20%',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '25%',
      }
    }
  ]
};

const Gallery = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.main_data}>
        <h3>Our Gallery</h3>
        <h1>Gallery</h1>
        <p>{main_para}</p>
      </div>
      <div className={styles.slider}>
        <Slider {...sliderSettings}>
          <div className={styles.gallery__container}>
            <div className={styles.imageContainer1}>
              <img src={img3} alt="Gallery 3" className={styles.image} />
              <img src={img3} alt="Gallery 4" className={styles.image} />
              <img src={img3} alt="Gallery 3" className={styles.image} />
              <img src={img3} alt="Gallery 4" className={styles.image} />
            </div>
            <div className={styles.imageContainer1}>
              <img src={img3} alt="Gallery 3" className={styles.image} />
              <img src={img3} alt="Gallery 4" className={styles.image} />
              <img src={img1} alt="Gallery 1" className={styles.image} />
              <img src={img1} alt="Gallery 1" className={styles.image} />
            </div>
          </div>
          <div className={styles.gallery__container}>
            <div className={styles.imageContainer1}>
              <img src={img3} alt="Gallery 3" className={styles.image} />
              <img src={img3} alt="Gallery 4" className={styles.image} />
              <img src={img3} alt="Gallery 3" className={styles.image} />
              <img src={img3} alt="Gallery 4" className={styles.image} />
            </div>
            <div className={styles.imageContainer1}>
              <img src={img3} alt="Gallery 3" className={styles.image} />
              <img src={img3} alt="Gallery 4" className={styles.image} />
              <img src={img1} alt="Gallery 1" className={styles.image} />
              <img src={img1} alt="Gallery 1" className={styles.image} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
