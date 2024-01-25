import React from "react";
import PropTypes from "prop-types";

import "./TestHeader.scss";

const TestHeader = ({ testName, courseName }) => {
  return (
    <div className="test-header">
      <p className="course-name">{courseName}</p>
      <p className="test-name">{testName}</p>
    </div>
  );
};

TestHeader.propTypes = {
  testName: PropTypes.string.isRequired,
  courseName: PropTypes.string,
};

export default TestHeader;
