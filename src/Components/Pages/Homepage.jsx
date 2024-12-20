import React from 'react'
import Homes from "../Layout/Homes/Homes"
import Branding from "../Layout/Branding/Branding"
import Services from "../Features/Services/Services"
import Wrapper from "../Layout/Wrapper/Wrapper"
import Skill from "../Features/Services/Skill"
import WrapperOne from '../Layout/Wrapper/WrapperOne'
import Blogs from "../Features/Blogs/Blogs"

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
