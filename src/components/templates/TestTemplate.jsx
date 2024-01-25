import React from "react";
import PropTypes from "prop-types";

import BaseTemplate from "./BaseTemplate/BaseTemplate";
import { TestHeader, TestForm } from "../organisms";

const TestTemplate = ({ testData }) => {
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
        <TestForm
          testType={test_type}
          guideline={test_info?.guideline}
          questions={questions}
        />
      </BaseTemplate.Body>
    </BaseTemplate>
  );
};

TestTemplate.propTypes = { testData: PropTypes.object };

export default TestTemplate;
