import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step2CompanySize = ({ onNext, onBack }) => {
  const options = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201+ Employees"
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ companySize: selectedOption });
    }
  };

  return (
    <StepTemplate
      title="How many people are employed at your company?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step2CompanySize;
