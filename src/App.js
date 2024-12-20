import './App.css';
import Header from "./Components/Layout/Header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/Pages/Homepage';
import Blogs from './Components/Features/Blogs/Blogs';
import About from './Components/Features/About/About';
import Services from './Components/Features/Services/Services';
import Footer from "./Components/Layout/Footer/Footer.jsx";
import Forms from "./Components/Features/Contact/contactUs"
import Talent from './Components/Pages/Hire-Talent/Hire-Talent.jsx';
import Industries from './Components/Pages/Industries/Industries.jsx';
import Portfolio from './Components/Pages/Portfolio/Portfolio.jsx';
import FullBlog from './Components/Features/Blogs/FullBlog.jsx';

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
          <Route path='/hire-talent' element={<Talent />} />
          <Route path='/industries' element={<Industries />} />
          <Route path="/blogs/:permalink" element={<FullBlog />} />
        </Routes>
        <Footer />  
      </Router>
    </>
  );
}

export default App;
