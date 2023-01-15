import React, { Profiler } from 'react'
import img from "./images/Profile.jpg";
const About = () => {
  const data = [
    {
        title: "Who I am and What I Do",
        desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./images/profile2.jpg",
    }
]
  return (
    <>
      <section className="about topMargin">
            <div className="container flex">
              {data.map((val) => {
                  return (
                        <>
                              <div className="left mtop">
                                      <div className="heading">
                                        <h3>About Me</h3>
                                        <h1>{val.title}</h1>
                                      </div>
                                  <p>{val.desc1}</p>
                                  <p>{val.desc2}</p>
                                  <p>{val.desc3}</p>
                                  <button className="primary-btn">Contact me</button>
                              </div>
                              <div className="right">
                                        <div className="img">
                                          <img src= {val.cover} alt=""/>
                                        </div>
                              </div>
                              
                      </>
                  )
              }

              )}
            </div>
      </section>
    </>
  )
}

export default About
