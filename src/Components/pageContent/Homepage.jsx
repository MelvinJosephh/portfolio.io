import React from 'react'
import Homes from "../Home/Header/homes/Homes"
import Branding from "../Home/Header/homes/Branding"
import About from "../Home/About/About"
import Services from "../Services/Services"
import Wrapper from "../Home/Wrapper"
import Skill from "../Services/Skill"
import WrapperOne from '../Home/WrapperOne'
// import Works from "../Works/Works"
import Blogs from "../Blogs/Blogs"

const Homepage = () => {
  return (
    <>
      <Homes/>
      <Branding/>
      <About/>
      <Services/>
      <Wrapper/>
      <Skill/>
      <WrapperOne/>
      {/* <Works/> */}
      <Blogs/>
    
    </>
  )
}

export default Homepage
