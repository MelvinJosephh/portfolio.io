import './App.css';

import HireTalentFlow from './Components/HireTalent/HireTalentFlow.jsx';
import Header from "./Components/Layout/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Blogs from './Components/Blogs';
import Services from './Components/Services';
import Footer from "./Components/Layout/Footer.jsx";
import Forms from "./Components/contactUs"
import Industries from './Pages/Industries.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import FullBlog from './Components/FullBlog.jsx';
import HireDevelopers from './Components/ModalPages/Hire-Developers.jsx';
import PricingPage from './Components/ModalPages/PricingPage.jsx';
import HowAberrangeWorks from './Components/ModalPages/HowAberrangeWorks.jsx';
import HireAssistants from './Components/ModalPages/HireAssistants.jsx';
import HireProductManagers from './Components/ModalPages/ProductManagers.jsx';
import HireProjectManagers from './Components/ModalPages/ProjectManagers.jsx';
import HireDesigners from './Components/ModalPages/HireDesigners.jsx';
import Overview from './Components/ModalPages/Overview.jsx';
import FindWork from './Components/ModalPages/FindWork.jsx';
import JobListings  from './Components/Freelancers/JobListings.jsx';
import ConfirmationPage  from './Components/Freelancers/ConfirmationPage';
import ApplicationForm  from './Components/Freelancers/ApplicationForm';
import JobDetails  from './Components/Freelancers/JobDetails';
import FreelancerRegistration from './Components/Freelancers/Registration.jsx';
import WhatWeDo from './Components/WhatWeDo.jsx';




import { StepProvider  } from './Context/StepContext.js';
import OurSolutions from './Components/ModalPages/OurSolutions.jsx';

function App() {
  return (
    <>
      <Router>
        <StepProvider >
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Homepage />} />
          <Route path="/hire-talent/*" element={<HireTalentFlow />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<WhatWeDo />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Forms />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/hire-developers' element={<HireDevelopers/>} />
          <Route path='/hire-designers' element={<HireDesigners/>} />
          <Route path='/hire-project-managers' element={<HireProjectManagers/>} />
          <Route path='/hire-product-managers' element={<HireProductManagers/>} />
          <Route path='/hire-assistants' element={<HireAssistants/>} />
          <Route path='/how-it-works' element={<HowAberrangeWorks/>} />
          <Route path='/pricing' element={<PricingPage/>} />
          <Route path='/find-work' element={<FindWork/>} />
          <Route path='/our-solutions' element={<OurSolutions/>} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path='/register' element={<FreelancerRegistration/>} />
          <Route path='/overview' element={<Overview/>} />
          <Route path="/blogs/:permalink" element={<FullBlog />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/job-details/:jobId" element={<JobDetails />} />
          <Route path="/apply/:jobId" element={<ApplicationForm />} />
         
          

        </Routes>
        <Footer />  
        </StepProvider >
      </Router>
    </>
  );
}

export default App;
