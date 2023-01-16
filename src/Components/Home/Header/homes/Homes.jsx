import React from 'react'
import img from "./assets/profile2.png";

const Homes = () => {
  return (

      <>
      <section className="home">
        <div className="container flex">
            <div className="left">
                <div className="img">
                    <img src= {img} alt=""/>
                </div>
            </div>
            <div className="right topMargin">
              <h1>
                Hey! I'm Melvin <br/>
                I Solve Problems.
              </h1>
              <div className="socialIcon">
                <i className='fab fa-facebook-f facebook'></i>
                <i className='fab fa-instagram instagram'></i>
                <i className='fab fa-twitter twitter'></i>
                <i className='fab fa-youtube youtube'></i>
                <i className='fab fa-pinterest pinterest'></i>
                <i className='fab fa-dribbble dribbble'></i>
              </div>
              <p>I am a creative designer with a can-do attitude, motivated to offer solutions 
                and integrate tech knowledge to solve problems. I value active communication, and collaboration
                 is everything. Would you like to build value with me through Dev?</p>
                
            <button className="primary-btn">Contact Me</button>
       </div>
        </div>
      </section>
      </>
  
  )
}

export default Homes
