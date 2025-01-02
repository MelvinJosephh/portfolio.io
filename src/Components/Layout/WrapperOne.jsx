import React, { useState, useEffect } from 'react';
import '../../Styles/layout/Wrapper.scss';
import wrapperData from '../../Assets/data/wrapperData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WrapperOne = () => {
  const [counts, setCounts] = useState(wrapperData.map(() => 0));  // State for tracking each counter separately

  const animateCount = (index, targetNum) => {
    let current = 0;
    const increment = Math.ceil(targetNum / 100);  // Calculate incremental step
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        clearInterval(interval);
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = targetNum;
          return newCounts;
        });
      } else {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = current;
          return newCounts;
        });
      }
    }, 30); // Adjust speed of animation (30ms interval)
  };

  useEffect(() => {
    wrapperData.forEach((item, index) => {
      if (typeof item.num === 'number') {
        animateCount(index, item.num); // For numbers like 35, 500, etc.
      } else {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = item.num; // Directly set percentages or static text
          return newCounts;
        });
      }
    });

    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Reinitialize AOS after count updates
    AOS.refresh();
  }, []);  // Empty dependency array ensures it runs once when the component is mounted

  return (
    <section className="branding WrapperOne">
      <div className="container">
        {wrapperData.map((val, index) => (
          <div className="box" key={index} data-aos="zoom-in-up"> {/* Add the animation to each box */}
            <h1>{typeof val.num === 'number' ? counts[index] : val.num}</h1>
            <p>{val.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WrapperOne;
