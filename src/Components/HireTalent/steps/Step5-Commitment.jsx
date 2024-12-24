import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step5Commitment = ({ onNext, onBack }) => {
  const options = [
    "Full-time",
    "Part-time",
    "Contract",
    "Hourly/Project-based"
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ commitment: selectedOption });
    }
  };

  return (
    <StepTemplate
      title="What level of commitment will you require from the developer?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step5Commitment;
