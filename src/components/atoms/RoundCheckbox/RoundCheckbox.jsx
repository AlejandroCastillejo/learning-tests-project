import React from "react";
import PropTypes from "prop-types";

import "./RoundCheckbox.scss";

const RoundCheckbox = ({ checked }) => {
  return (
    <div className="round-checkbox">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        onClick={(e) => e.preventDefault()}
      />
      <label htmlFor="checkbox"></label>
    </div>
  );
};

RoundCheckbox.propTypes = { checked: PropTypes.bool };

export default RoundCheckbox;
