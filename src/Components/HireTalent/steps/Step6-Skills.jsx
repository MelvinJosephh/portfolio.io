import React, { useState } from "react";
import StepTemplate from "../shared/StepTemplate";

const Step6Skills = ({ onNext, onBack }) => {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "AWS",
    "Machine Learning",
    "UI/UX Design",
    "Project Management",
    "SQL",
    "Mobile Development"
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.includes(skill)
        ? prevSelectedSkills.filter((item) => item !== skill)
        : [...prevSelectedSkills, skill]
    );
  };

  const handleNext = () => {
    onNext({ skills: selectedSkills });
  };

  return (
    <StepTemplate
      title="What skills would you like to see in your new hire?"
      options={skills}
      selectedOption={selectedSkills}
      setSelectedOption={handleSkillToggle}
      isMultiSelect={true}
      onNext={handleNext}
      onBack={onBack}
      showSkipButton={true}
    />
  );
};

export default Step6Skills;
