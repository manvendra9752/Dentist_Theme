import React from "react";
import Navbar from './component/Navbar';
import './App.css';
import Hero from './component/Hero';
import About from './component/About';
import Services from './component/Services';
import Gallery from './component/Gallery';
import Blog from './component/Blog';
import Businesshour from "./component/Businesshours";
import Testimonial from "./component/Testimonial";
import Formfetch from "./component/FormFetch";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Blog/>
      <Businesshour />
      <Testimonial />
      <Formfetch />
       <Footer />
    </>
  );
}

export default App;
