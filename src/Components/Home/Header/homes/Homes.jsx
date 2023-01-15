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
                I AM A <br/>
                WEB DESIGNER
              </h1>
              <div className="socialIcon">
                <i className='fab fa-facebook-f facebook'></i>
                <i className='fab fa-instagram instagram'></i>
                <i className='fab fa-twitter twitter'></i>
                <i className='fab fa-youtube youtube'></i>
                <i className='fab fa-pinterest pinterest'></i>
                <i className='fab fa-dribbble dribbble'></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                 fugiat nulla pariatur.</p>
                
            <button className="primary-btn">Contact US</button>
       </div>
        </div>
      </section>
      </>
  
  )
}

export default Homes
