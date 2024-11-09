import './App.css';
import Header from "./Components/Home/Header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/pageContent/Homepage';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/Home/About/About';
import Services from './Components/Services/Services';
import Footer from "./Components/Home/Footer";
import Forms from "./Components/Contact/contactUs.jsx"

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
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Forms />} />
        </Routes>
        <Footer />  
      </Router>
    </>
  );
}

export default App;
