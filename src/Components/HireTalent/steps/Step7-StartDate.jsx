import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step7StartDate = ({ onNext, onBack }) => {
  const options = [
    "Immediately",
    "In 1 to 2 weeks",
    "More than 2 weeks from now",
    "I'll decide later"
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ startDate: selectedOption }); // Pass selected option to onNext
    }
  };

  return (
    <StepTemplate
      title="When do you need the developer?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step7StartDate;
