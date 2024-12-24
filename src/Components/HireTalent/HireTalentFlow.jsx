import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Step1WhoToHire from "../HireTalent/steps/Step1-WhoToHire";
import Step2CompanySize from "../HireTalent/steps/Step2-CompanySize";
import Step3ProjectType from "../HireTalent/steps/Step3-ProjectType";
import Step4ProjectLength from "../HireTalent/steps/Step4-ProjectLength";
import Step5Commitment from "../HireTalent/steps/Step5-Commitment";
import Step6Skills from "../HireTalent/steps/Step6-Skills";
import Step7StartDate from "../HireTalent/steps/Step7-StartDate";
import Step8Success from "../HireTalent/steps/Step8-Success";
import ProgressIndicator from "./shared/ProgressIndicator";
import "../../Styles/HireTalent/HireTalent.scss";

const HireTalentFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Track the current step, starting at 1
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({});

  // Dynamically update current step from the path
  React.useEffect(() => {
    const path = location.pathname.split("/");
    const step = parseInt(path[path.length - 1], 10);
    if (!isNaN(step)) setCurrentStep(step);
  }, [location.pathname]);

  const handleNext = (data) => {
    setFormState({ ...formState, ...data });
    setCurrentStep((prevStep) => prevStep + 1);
    navigate(`/hire-talent/step${currentStep + 1}`);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    navigate(`/hire-talent/step${currentStep - 1}`);
  };

  return (
    <div className="hire-talent-flow">
      {/* Pass currentStep and totalSteps to ProgressIndicator */}
      <ProgressIndicator currentStep={currentStep} totalSteps={8} />
      <Routes>
        <Route path="step1" element={<Step1WhoToHire onNext={handleNext} />} />
        <Route
          path="step2"
          element={<Step2CompanySize onNext={handleNext} onBack={handleBack} />}
        />
        <Route
          path="step3"
          element={<Step3ProjectType onNext={handleNext} onBack={handleBack} />}
        />
        <Route
          path="step4"
          element={<Step4ProjectLength onNext={handleNext} onBack={handleBack} />}
        />
        <Route
          path="step5"
          element={<Step5Commitment onNext={handleNext} onBack={handleBack} />}
        />
        <Route
          path="step6"
          element={<Step6Skills onNext={handleNext} onBack={handleBack} />}
        />
        <Route
          path="step7"
          element={<Step7StartDate onNext={handleNext} onBack={handleBack} />}
        />
        <Route path="step8" element={<Step8Success formState={formState} />} />
      </Routes>
    </div>
  );
};

export default HireTalentFlow;
