import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step4ProjectLength = ({ onNext, onBack }) => {
  const options = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months"
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ projectLength: selectedOption });
    }
  };

  return (
    <StepTemplate
      title="How long do you need the developer?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step4ProjectLength;
