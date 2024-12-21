import React from "react";
import '../Styles/components/About.scss'
// import { FaUserCircle } from "react-icons/fa";

const About = () => {
  const data = [
    {
      title: "Smart, Smiple, Seamless",
      desc1:
        "We are a company determined to embrace innovation, Solve Software problems and enhance sustainability through Sustainable and reliable Tech solutions.",
      desc2:
        "We aim to offer Smart, Simple and Seamless solutions using the best technologies in the market.",
      desc3:
        "Every day is an opportunity to provide consistent, innovative, timeless, and strategic marketing designs with a combination of advanced digital technologies and skills.",
      cover: "./images/aber-thirteen.gif",
    },
  ];

  return (
    <>
      <section className="about">
        <div className="container flex">
          {data.map((val, index) => (
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
