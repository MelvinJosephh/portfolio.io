import React from 'react'
import Homes from "../Home/Header/homes/Homes"
import Branding from "../Home/Header/homes/Branding"
import About from "../Home/About/About"
import Services from "../Services/Services"
import Wrapper from "../Home/Wrapper"
import Skill from "../Services/Skill"
import WrapperOne from '../Home/WrapperOne'
import Forms from "../Registration/validation"
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
      <Blogs/>
      <Forms/>
    </>
  )
}

export default Homepage
