import { valueToPercent } from '@mui/base'
import React from 'react'

const Branding = () => {
  const data = [
  {
      id: "01",
    heading: "Digital Branding",
    desc: "I intend to continue offering up-to-date solutions using the best technologies in the market. Every day is an opportunity to offer consistent, innovative, timeless, and strategic marketing designs with a combination of developed digital technologies and skills.",
  },
  {
    id: "02",
  heading: "Team Management",
  desc: "I value teamwork and work best when around innovative minds. With teamwork comes improved team efficiency, better code quality, and accountability.",
},
{
  id: "03",
heading: "Creative mind",
desc: "Creativity at its best provides an atmosphere that is idea for problem-solving, collaboration and innovation. Given an opportunity, I embrace stronger cohesion, morale, enthusiasm and passion.",
}
  ]
  return (
    <>
        <section className="branding">
          <div className="container grid"> 
            {data.map((value) => {
                return (
                  <div className="box flex">
                    <div className="text">
                      <h1>{value.id}</h1>
                    </div>
                    <div className="para">
                      <h2>{value.heading}</h2>
                      <p>{value.desc}</p>
                    </div>
                  </div>
                )

            })

            }
          </div>
        </section>
    </>
  )
}

export default Branding