import React from 'react'


const Skill = () => {
    const Progress = ({done, title})=> {
        return (
            <div className="progress">
                <div className="progress-done" style={{opacity: 1, width: "${done}%" }}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }
const data = [
    {
        title: "Supporting Innovative dreams in Tech",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua",
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua",
    },
]

  return (
    <>
      <section className="skill">
        <div className="container">
            <div className="heading">
                <h3>Why Choose Us</h3>
                <h1>Some of our best selling skills</h1>
            </div>
            <div className="content flex">
                <div className="left topMargin">
                    <Progress done="70" title="HTML"/>
                    <Progress done="80" title="PHP"/>
                    <Progress done="90" title="CSS"/>
                    <Progress done="90" title="JAVASCRIPT"/>
                    <Progress done="70" title="REACT JS"/>
                </div>
                <div className="right topMargin">
                    {data.map((val) =>{
                        return (
                            <>
                            <h1>{val.title}</h1>
                            <p>{val.para}</p>
                            <p>{val.para1}</p>
                            <button className="primary-btn">Hire Me</button> 
                            </>
                        )

                    })}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Skill
