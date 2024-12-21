import './App.css';
import Header from "./Components/Layout/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Services from './Components/Services';
import Footer from "./Components/Layout/Footer.jsx";
import Forms from "./Components/contactUs"
import Talent from './Pages/Hire-Talent.jsx';
import Industries from './Pages/Industries.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import FullBlog from './Components/FullBlog.jsx';

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
