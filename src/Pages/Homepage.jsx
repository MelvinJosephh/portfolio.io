import React from 'react'
import Homes from "../Components/Layout/Homes"
import Branding from "../Components/Layout/Branding"
import Services from "../Components/Services"
import Wrapper from "../Components/Layout/Wrapper"
import Skill from "../Components/Skill"
import WrapperOne from '../Components/Layout/WrapperOne'
import Blogs from "../Components/Blogs"

const Homepage = () => {
  return (
    <>
      <Homes/>
      {/* <Branding/> */}
      <Services/>
      <Wrapper/>
      <Skill/>
      <WrapperOne/>
      <Blogs/>
    </>
  )
}

export default Homepage
