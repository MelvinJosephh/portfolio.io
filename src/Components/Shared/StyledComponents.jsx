import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Button using global CSS variables
export const StyledButton = styled(Button)(({ theme }) => ({
  padding: "15px 40px", // Adjust padding as needed
  backgroundColor: "var(--primary-color)", // Primary color from global variables
  color: "#fff", // White text color
  textTransform: "none", // Ensure text is not capitalized
  "&:hover": {
    backgroundColor: "var(--secondary-color)", // Hover state with secondary color
    boxShadow: "0 13px 27px 0 rgb(245 78 162 / 25%)", // Hover shadow effect
  },
  "&:focus": {
    backgroundColor: "var(--primary-color)", // Maintain primary color for focused state
  },
  "&:disabled": {
    backgroundColor: "var(--disabled-color)", // Disabled state color from global variables
    color: "var(--disabled-text-color)", // Disabled text color
  },
}));

// Styled TextField using global CSS variables
export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--primary-color)", // Border color from global variables
    },
    "&:hover fieldset": {
      borderColor: "var(--secondary-color)", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary-color)", // Border color when focused
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "16px", // Adjust font size as needed
    padding: "10px", // Adjust input padding
  },
  "& .MuiFormLabel-root": {
    fontSize: "14px", // Adjust label size
    color: "var(--primary-color)", // Label color using global primary color
  },
}));
