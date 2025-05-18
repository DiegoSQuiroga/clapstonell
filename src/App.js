import './App.css';
import './styles.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Specials from './Components/Specials';
import Testimonials from './Components/Testimonials';
import Calendar from './Components/Calendar';
import Footer from './Components/Footer';
import ConfirmedBooking from './Components/ConfirmedBooking';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Specials />
                <Testimonials />
                <Calendar />
              </>
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;