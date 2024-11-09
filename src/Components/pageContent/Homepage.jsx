import React from 'react'
import Homes from "../Home/Homes"
import Branding from "../Home/Header/homes/Branding"
import Services from "../Services/Services"
import Wrapper from "../Home/Wrapper"
import Skill from "../Services/Skill"
import WrapperOne from '../Home/WrapperOne'
import Blogs from "../Blogs/Blogs"

const Homepage = () => {
  return (
    <>
      <Homes/>
      <Branding/>
      <Services/>
      <Wrapper/>
      <Skill/>
      <WrapperOne/>
      <Blogs/>
    </>
  )
}

export default Homepage
