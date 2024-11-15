import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1" id="footer">
                <div className="box">
                    <p>Connect with me and Get the best for your firm</p>
                    <div className="socialIcons">
                    <i className='fab fa-facebook-f '></i>
                    <i className='fab fa-instagram '></i>
                    <i className='fab fa-twitter '></i>
                    <i className='fab fa-youtube '></i>
                    <i className='fab fa-pinterest '></i>
                    <i className='fab fa-dribbble '></i>
                    </div>
                </div>
                <div className="box">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Recent Posts</h2>
                    <div className="text">
                        <p>Why BillGates Visits Kenya</p>
                        <span>28 Feb 2022</span>
                        <div className="text">
                        <p>Why BillGates Visits Kenya</p>
                        <span>28 Feb 2022</span>
                    </div>
                    <div className="text">
                        <p>Why BillGates Visits Kenya</p>
                        <span>28 Feb 2022</span>
                    </div>
                    </div>       
                </div>
                    <div className="box">
                        <h2>Get in Touch</h2>
                
                        <div className="icon">
                        <i class="fa fa-map-marker"></i>
                            <label htmlFor='/'>Location: 87 Division, Kikuyu Sub, Kiambu County, Nairobi, Kenya</label>
                        </div>
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                            <label htmlFor='/'>+254702035351</label>
                        </div>
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                            <label htmlFor='/'>Email: Essayacademy@gmail.com</label>
                        </div>
                    </div>  
       </div>
                    <div className="legal container">
                                    <p>Copyright @2023. All rights reserved.</p>
                                    <label htmlFor=''>
                                        Design and Developed by <span>MelvinDev</span>
                                    </label>
                        </div>
      </footer>
    </>
  )
}

export default Footer
