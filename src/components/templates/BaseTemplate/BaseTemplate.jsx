import React from "react";
import PropTypes from "prop-types";

import "./BaseTemplate.scss";

const Header = ({ children, style }) => (
  <div className="header" style={style}>
    {children}
  </div>
);

const Body = ({ children, style }) => (
  <div className="body" style={style}>
    {children}
  </div>
);

const BaseTemplate = ({ children, style }) => {
  return (
    <div className="base-template" style={style}>
      {children}
    </div>
  );
};

BaseTemplate.Header = Header;
BaseTemplate.Body = Body;

Header.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};
Body.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};
BaseTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  style: PropTypes.object,
};

export default BaseTemplate;
