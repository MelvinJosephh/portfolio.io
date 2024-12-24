import React from "react";
import "../../../Styles/HireTalent/StepTemplate.scss";

const StepTemplate = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  onNext,
  onBack,
  children,
}) => {
  return (
    <div className="step-template">
      <h2>{title}</h2>

      {/* Only render the options list if options are provided */}
      {options && options.length > 0 ? (
        <ul>
          {options.map((option) => (
            <li
              key={option}
              className={selectedOption === option ? "selected" : ""}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : (
        children 
      )}

      <div className="actions">
        {/* Render the Back button only if onBack exists */}
        {onBack && <button onClick={onBack}>Back</button>}
        <button onClick={onNext} disabled={!selectedOption}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTemplate;
