import React, { useState, useEffect } from 'react';

function Forms() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (formData.name.length < 3) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Name must be at least 3 characters' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, name: null }));
    }
  }, [formData.name]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <section className="validation topMargin">
            <div className="container">
                      <form onSubmit={handleSubmit}>
                                  <div className="form">
                                    <label>Name:</label>
                                    <input
                                      type="text"
                                      value={formData.name}
                                      onChange={event => setFormData({ ...formData, name: event.target.value })}
                                    />
                                    {errors.name && <div>{errors.name}</div>}
                                  </div>
                                    <div className="form">
                                      <label>Email:</label>
                                      <input type="email" value={formData.email}
                                        onChange={event => setFormData({ ...formData, email: event.target.value })}
                                      />
                                    </div>
                                  <div className="form">
                                    <label>Phone number:</label>
                                    <input
                                      type="text"
                                      value={formData.password}
                                      onChange={event => setFormData({ ...formData, password: event.target.value })}
                                    />
                                  </div>
                                  <div className="form">
                                    <textarea id="message" row="8"></textarea>
                                    <label>Your message</label>
                                      
                                  </div>
                              <button className="primary-btn" type="submit">Send message</button>
                      </form>
            </div>
  </section>
 </>
  );
}

export default Forms;
