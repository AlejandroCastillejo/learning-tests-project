import React from "react";
import PropTypes from "prop-types";

import { Guideline } from "../../atoms";
import { TrueFalseQuestion } from "../../molecules";

import "./TestResult.scss";

const TestResult = ({
  testType,
  guideline,
  questions,
  testAnswers,
  userAnswers,
}) => {
  return (
    <div className="test-result">
      <Guideline text={guideline} />

      <div className="questions">
        {questions &&
          testType === "trueFalse" &&
          Object.keys(questions).map((key) => (
            <TrueFalseQuestion
              key={key}
              questionId={key}
              questionText={questions[key]}
              isTrue={userAnswers?.[key]}
              underlineTrue={
                !!userAnswers?.[key]
                  ? userAnswers[key] === testAnswers[key]
                    ? "lightgreen"
                    : "red"
                  : undefined
              }
              underlineFalse={
                !userAnswers?.[key]
                  ? userAnswers[key] !== testAnswers[key]
                    ? "lightgreen"
                    : "red"
                  : undefined
              }
            />
          ))}
      </div>
    </div>
  );
};

TestResult.propTypes = {
  testType: PropTypes.string,
  questions: PropTypes.object,
};

export default TestResult;
