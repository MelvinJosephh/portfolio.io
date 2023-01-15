import { valueToPercent } from '@mui/base'
import React from 'react'

const Branding = () => {
  const data = [
  {
      id: "01",
    heading: "Digital Branding",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "02",
  heading: "Team Management",
  desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
},
{
  id: "03",
heading: "Creative mind",
desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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