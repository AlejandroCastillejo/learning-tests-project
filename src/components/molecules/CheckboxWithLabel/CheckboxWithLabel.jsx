import React from "react";
import PropTypes from "prop-types";

import { RoundCheckbox } from "../../atoms";

import "./CheckboxWithLabel.scss";

const CheckboxWithLabel = ({
  label,
  checked,
  onClick,
  clickable,
  underlineColor,
}) => {
  return (
    <div
      className="checkbox-with-label"
      onClick={onClick}
      style={{
        ...(!clickable && { pointerEvents: "none" }),
        ...(underlineColor && { borderBottom: `3px solid ${underlineColor}` }),
      }}
    >
      <RoundCheckbox checked={checked} />
      <p>{label}</p>
    </div>
  );
};

CheckboxWithLabel.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
};

export default CheckboxWithLabel;
