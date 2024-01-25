import React from "react";
import PropTypes from "prop-types";

import "./Guideline.scss";

const Guideline = ({ text }) => {
  return (
    <div className="guideline">
      <p>{text}</p>
    </div>
  );
};

Guideline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Guideline;
