import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const StyledButton = styled(Button)({
  padding: '15px 40px',
  backgroundColor: '#38d16a',
  '&:hover': {
    backgroundColor: '#f54ea2',
    boxShadow: '0 13px 27px 0 rgb(245 78 162 / 25%)',
  },
});

// Create a styled TextField with custom border and focus color
const StyledTextField = styled(TextField)( {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#38d16a', // Default border color
    },
    '&:hover fieldset': {
      borderColor: '#f54ea2', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#38d16a', // Border color when focused
    },
  },
});

function Forms() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: 0, message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Please enter your name.';
      } else if (value.length < 3) {
        error = 'Name should be at least three characters long.';
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        error = 'Name should contain only letters and spaces.';
      }
    } else if (name === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Please enter a valid email address.';
      }
    }  else if (name === 'phone') {
      if (!/^\d+$/.test(value)) {
        error = 'Phone number should contain only digits.';
      } else if (value.length < 7 || value.length > 15) {
        error = 'Phone number should be between 7 and 15 digits long.';
      }
    }
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  
    const validationErrors = validateForm();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {

        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "cors", // Optional: Ensures CORS mode for the request
        });
  
        // Log the raw response received
        console.log("Response received:", response);
  
        const result = await response.json();
        // Log the parsed result data
        console.log("Result data:", result);
  
        if (response.ok) {
          console.log(result.message); // "Message sent successfully"
          // Reset form data on successful submission
          setFormData({ name: "", email: "", phone: 0, message: "" });
        } else {
          console.error("Error:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form has errors:", validationErrors);
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'phone' ? parseInt(value) : value; // Convert phone input to number
    setFormData({ ...formData, [name]: newValue });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.name && touched.name}
              helperText={touched.name ? errors.name : ''}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email && touched.email}
              helperText={touched.email ? errors.email : ''}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Phone Number"
              name="phone"
              variant="outlined"
              type="number"  
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.phone && touched.phone}
              helperText={touched.phone ? errors.phone : ''}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Your Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Box>

          <StyledButton type="submit" variant="contained" fullWidth disabled={isSubmitting}>
            Send Message
          </StyledButton>
        </form>
      </Box>
    </Container>
  );
}

export default Forms;
