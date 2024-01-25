import React from "react";
import PropTypes from "prop-types";

import BaseTemplate from "./BaseTemplate/BaseTemplate";
import { TestHeader, TestResult } from "../organisms";

const ResultTemplate = ({ testData, testAnswers, userAnswers }) => {
  const { test_type, test_info, questions } = testData;

  return (
    <BaseTemplate style={{}}>
      <BaseTemplate.Header>
        <TestHeader
          courseName={test_info?.course}
          testName={test_info?.test_name}
        />
      </BaseTemplate.Header>
      <BaseTemplate.Body>
        <TestResult
          testType={test_type}
          guideline={test_info?.guideline}
          questions={questions}
          testAnswers={testAnswers}
          userAnswers={userAnswers}
        />
      </BaseTemplate.Body>
    </BaseTemplate>
  );
};

ResultTemplate.propTypes = {
  testData: PropTypes.object,
  testAnswers: PropTypes.object,
  userAnswers: PropTypes.object,
};

export default ResultTemplate;
