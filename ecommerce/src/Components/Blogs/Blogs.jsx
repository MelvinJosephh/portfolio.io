import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import blogdata from "../Blogs/Blog"
const Blogs = () => {
  return (
    <>
    <section className="blog services">
      <div className="container topMargin">
        <div className="heading">
          <h3>LATEST BLOG</h3>
          <h1>Read Inspirational Story Every Week</h1>
        </div>
        <div className="contain grid topMargin">
          {blogdata.map((val)=>{
            return (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt=""/>
                </div>
                <div className="text">
                  <span>{val.Date}</span>
                  <h2>{val.title}</h2>
                  <a href="/">Read More
                  <KeyboardDoubleArrowRightIcon className="icon"/>
                  </a>
                </div>
               </div> 

            )
          })

          }
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Blogs
