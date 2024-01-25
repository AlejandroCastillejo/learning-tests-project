import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useTestContext } from "../../../context/TestContext";

import { Guideline, RedButton } from "../../atoms";
import { TrueFalseQuestion } from "../../molecules/";

import "./TestForm.scss";

const TestForm = ({ testType, guideline, questions }) => {
  const navigate = useNavigate();

  const { setUserAnswers } = useTestContext();

  const [answers, setAnswers] = useState({});

  const isCompleted =
    Object.keys(questions)?.length === Object.keys(answers)?.length || false;

  const addAnswer = useCallback(
    (questionId, value) =>
      setAnswers((prevValues) => ({ ...prevValues, [questionId]: value })),
    []
  );

  const handleSubmit = () => {
    if (isCompleted) {
      setUserAnswers(answers);
      navigate("/");
    }
  };

  return (
    <div className="test-form">
      <Guideline text={guideline} />

      <div className="questions">
        {questions &&
          testType === "trueFalse" &&
          Object.keys(questions).map((key) => (
            <TrueFalseQuestion
              key={key}
              questionId={key}
              questionText={questions[key]}
              addAnswer={addAnswer}
              isTrue={answers?.[key]}
            />
          ))}
      </div>

      <div className="button-container">
        <RedButton active={isCompleted} onClick={handleSubmit}>
          Finalizar
        </RedButton>
      </div>
    </div>
  );
};

TestForm.propTypes = {
  testType: PropTypes.string,
  questions: PropTypes.object,
};

export default TestForm;
