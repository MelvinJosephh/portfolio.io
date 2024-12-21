import React from 'react';
import '../../Styles/layout/Wrapper.scss'

const Wrapper = () => {
    const data = [
        {
            title: "LOOKING FOR EXCLUSIVE SERVICES?",
            heading: "Get The Best For Your Business",
            desc: "Get familiar with modern developments as soon as the touch the market. I will upgrade your system and perform efficient maintenance for better customer experience."
        },
    ]
  return (
    <>
      <section className="branding wrapper">
        <div className="container">
            {data.map((val)=> {
                return (
                    <div className="box">
                        <h3>{val.title}</h3>
                        <h2>{val.heading}</h2>
                        <p>{val.desc}</p>
                        <button className="primary-btn">Contact Us</button>
                    </div>
                )

            })

            }
        </div>
      </section>
    </>
  )
}

export default Wrapper
