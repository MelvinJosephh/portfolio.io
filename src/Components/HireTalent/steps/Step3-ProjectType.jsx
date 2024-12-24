import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step3ProjectType = ({ onNext, onBack }) => {
  const options = [
    "New idea or project",
    "Existing project that needs more resources",
    "None of the above, I'm just looking to learn more about Aberrange"
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ projectType: selectedOption });
    }
  };

  return (
    <StepTemplate
      title="What type of project are you hiring for?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step3ProjectType;
