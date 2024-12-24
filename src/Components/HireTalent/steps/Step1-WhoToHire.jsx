import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step1WhoToHire = ({ onNext }) => {
  console.log('Step 1 rendered');
  const options = ["Developer", "Designer", "Project Manager", "Product Manager"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ hire: selectedOption });
    }
  };

  return (
    <StepTemplate
      title="Who would you like to hire?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onNext={handleNext}
    />
  );
};

export default Step1WhoToHire;
