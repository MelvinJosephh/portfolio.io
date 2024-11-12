import './App.css';
import Header from "./Components/Home/Header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/pageContent/Homepage';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/Home/About/About';
import Services from './Components/Services/Services';
import Footer from "./Components/Home/Footer";
import Forms from "./Components/Contact/contactUs.jsx"
import Developers from './Components/Hire-Developers/Hire-Developers.js';
import Talent from './Components/Hire-Talent/Hire-Talent.js';
import Industries from './Components/Industries/Industries.js';
import Portfolio from './Components/Portfolio/Portfolio.js';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Homepage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Forms />} />
          <Route path='/hire-developers' element={<Developers />} />
          <Route path='/hire-talent' element={<Talent />} />
          <Route path='/industries' element={<Industries />} />
        </Routes>
        <Footer />  
      </Router>
    </>
  );
}

export default App;
