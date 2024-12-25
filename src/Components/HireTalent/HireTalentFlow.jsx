import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProgressIndicator from "./shared/ProgressIndicator";
import "../../Styles/HireTalent/HireTalent.scss";

// Import step components dynamically
import Step1WhoToHire from "../HireTalent/steps/Step1-WhoToHire";
import Step2CompanySize from "../HireTalent/steps/Step2-CompanySize";
import Step3ProjectType from "../HireTalent/steps/Step3-ProjectType";
import Step4ProjectLength from "../HireTalent/steps/Step4-ProjectLength";
import Step5Commitment from "../HireTalent/steps/Step5-Commitment";
import Step6Skills from "../HireTalent/steps/Step6-Skills";
import Step7StartDate from "../HireTalent/steps/Step7-StartDate";
import Step8Success from "../HireTalent/steps/Step8-Success";

const steps = [
  { path: "step1", component: Step1WhoToHire },
  { path: "step2", component: Step2CompanySize },
  { path: "step3", component: Step3ProjectType },
  { path: "step4", component: Step4ProjectLength },
  { path: "step5", component: Step5Commitment },
  { path: "step6", component: Step6Skills },
  { path: "step7", component: Step7StartDate },
  { path: "step8", component: Step8Success },
];

const HireTalentFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formState, setFormState] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Derive current step from URL path
  React.useEffect(() => {
    const path = location.pathname.split("/").pop();
    const step = parseInt(path.replace("step", ""), 10);
    if (!isNaN(step)) setCurrentStep(step);
  }, [location]);

  // Navigation Handlers
  const handleNext = (data) => {
    setFormState((prevState) => ({ ...prevState, ...data }));
    navigate(`/hire-talent/step${currentStep + 1}`);
  };

  const handleBack = () => {
    navigate(`/hire-talent/step${currentStep - 1}`);
  };

  return (
    <div className="hire-talent-flow">
      <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} />
      <Routes>
        {steps.map((step, index) => (
          <Route
            key={index}
            path={step.path}
            element={
              <step.component
                onNext={handleNext}
                onBack={index > 0 ? handleBack : undefined}
                formState={formState}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default HireTalentFlow;
