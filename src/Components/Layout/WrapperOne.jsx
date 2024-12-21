import React from 'react';
import '../../Styles/layout/Wrapper.scss';
import wrapperData from '../../Assets/data/wrapperData';

const WrapperOne = () => {

  return (
    <>
    <section class="branding WrapperOne">
        <div className="container grid1">
        {wrapperData.map((val) => {
        return (
            <>
            <div className="box">
                <h1>{val.num}</h1>
                <p>{val.text}</p>
            </div>
            </>
        )
    })}
        </div>    
    </section>
    </>
  )
}

export default WrapperOne
