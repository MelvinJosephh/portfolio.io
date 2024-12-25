// src/components/StyledComponents.js
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";


// Styled Button using CSS variables
export const StyledButton = styled(Button)(({ theme }) => ({
  padding: "15px 40px",
  backgroundColor: "var(--primary-color)", // Using CSS variable for primary color
  "&:hover": {
    backgroundColor: "var(--secondary-color)", // Using CSS variable for secondary color
    boxShadow: "0 13px 27px 0 rgb(245 78 162 / 25%)",
  },
}));

// Styled TextField using CSS variables
export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--primary-color)", // Default border color using CSS variable
    },
    "&:hover fieldset": {
      borderColor: "var(--secondary-color)", // Border color on hover using CSS variable
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary-color)", // Border color when focused using CSS variable
    },
  },
}));
