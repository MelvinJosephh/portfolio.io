import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../Styles/layout/Wrapper.scss';
import brandingWrapper from '../../Assets/data/brandingWrapper';

const Wrapper = () => {

  return (
    <>
      <section className="branding wrapper">
        <div className="container">
            {brandingWrapper.map((val)=> {
                return (
                    <div className="box">
                        <h3>{val.title}</h3>
                        <h2>{val.heading}</h2>
                        <p>{val.desc}</p>
                       <Link to="/contact" className="primary-btn">
                                         Contact Us
                                         </Link>
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
