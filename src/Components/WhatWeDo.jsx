import React from "react";
import '../Styles/components/About.scss';
import whatWeDoData from "../Assets/data/AboutData";


const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <section className="intro">
        <h1>{whatWeDoData.title}</h1>
        <p>{whatWeDoData.missionStatement}</p>
      </section>

      <section className="smart-solutions">
        <h2>{whatWeDoData.solutionsSection.title}</h2>
        <p>{whatWeDoData.solutionsSection.description}</p>
      </section>

      <section className="innovation">
        <h2>{whatWeDoData.innovationSection.title}</h2>
        <p>{whatWeDoData.innovationSection.description}</p>
      </section>

      <section className="sustainability">
        <h2>{whatWeDoData.sustainabilitySection.title}</h2>
        <p>{whatWeDoData.sustainabilitySection.description}</p>
      </section>

      <section className="relationships">
        <h2>{whatWeDoData.relationshipsSection.title}</h2>
        <p>{whatWeDoData.relationshipsSection.description}</p>
      </section>

      <section className="difference">
        <h2>{whatWeDoData.differenceSection.title}</h2>
        <ul>
          {whatWeDoData.differenceSection.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="transformation">
        <h2>{whatWeDoData.transformationSection.title}</h2>
        <p>{whatWeDoData.transformationSection.description}</p>
      </section>

      <section className="why-choose-us">
        <h2>{whatWeDoData.whyChooseUs.title}</h2>
        <ul>
          {whatWeDoData.whyChooseUs.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="call-to-action">
        <h2>{whatWeDoData.callToAction.title}</h2>
        <p>{whatWeDoData.callToAction.description}</p>
      </section>
    </div>
  );
};

export default WhatWeDo;