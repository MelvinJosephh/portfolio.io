import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; 

const About = () => {
  const data = [
    {
      title: "Who I am and What I Do",
      desc1: "I am well-versed in front-end and back-end web development, tailored to customer needs, intentions, and motivations.",
      desc2: "I aim to continue offering up-to-date solutions using the best technologies in the market.",
      desc3: "Every day is an opportunity to provide consistent, innovative, timeless, and strategic marketing designs with a combination of advanced digital technologies and skills.",
    }
  ];

  return (
    <>
      <section className="about topMargin">
        <div className="container flex">
          {data.map((val, index) => (
            <React.Fragment key={index}>
              <div className="left mtop">
                <div className="heading">
                  <h3>About Us</h3>
                  <h1>{val.title}</h1>
                </div>
                <p>{val.desc1}</p>
                <p>{val.desc2}</p>
                <p>{val.desc3}</p>
                <button className="primary-btn">Contact Us</button>
              </div>
              <div className="right">
                <div className="icon">
                  <FaUserCircle /> {/* User-based icon */}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
