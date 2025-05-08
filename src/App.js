import './App.css';
import './styles.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Specials from './Components/Specials';
import Testimonials from './Components/Testimonials';
import Calendar from './Components/Calendar';
import Footer from './Components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <HeroSection/>
      <Specials/>
      <Testimonials/>
      <Calendar/>
      <Footer/>
    </div>
  );
}

export default App;
