import React, { Profiler } from 'react'
import img from "./images/Profile.jpg";
const About = () => {
  const data = [
    {
        title: "Who I am and What I Do",
        desc1: "I am well versed in front-end and back-end web development and fitted to customer needs, intentions, and motivations.",
        desc2: "I intend to continue offering up-to-date solutions using the best technologies in the market.",
        desc3: "Every day is an opportunity to offer consistent, innovative, timeless, and strategic marketing designs with a combination of developed digital technologies and skills.",
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
