import React from 'react';
import './Wrapper.scss'

const WrapperOne = () => {
    const data = [
        {
            num: "64%",
            text: "AWARDS WINNING",
        },
        {
            num: "99%",
            text: "SATISFIED CLIENTS",
        },
        {
            num: "35",
            text: "CREATIVE PROJECTS",
        },
        {
            num: "500",
            text: "LINES OF CODE",
        },
    ]
  return (
    <>
    <section class="branding WrapperOne">
        <div className="container grid1">
        {data.map((val) => {
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
