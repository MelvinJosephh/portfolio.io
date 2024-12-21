import React from "react";
import '../Styles/components/About.scss';
import aboutData from "../Assets/data/AboutData";


const About = () => {
  
  return (
    <>
      <section className="about">
        <div className="container flex">
          {aboutData.map((val, index) => (
            <React.Fragment key={index}>
              <div className="right">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
              </div>
              <div className="left mtop">
                <div className="heading">
                  <h1>{val.title}</h1>
                </div>
                <p>{val.desc1}</p>
                <p>{val.desc2}</p>
                <p>{val.desc3}</p>
                <button className="primary-btn">Contact Us</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
