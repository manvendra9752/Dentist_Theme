
import Navbar from './component/Navbar';
import './App.css';
import Hero from './component/Hero';
import About from './component/About';
import Services from './component/Services';
import Gallery from './component/Gallery';
import Blog from './component/Blog';

// import Businesshour from './component/Businesshours';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Blog/>
      {/* <Businesshour/> */}
    </>
  );
}

export default App;
