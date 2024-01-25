import { memo } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ children, color, active, onClick }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: color,
        ...(active !== undefined && {
          cursor: active ? "pointer" : "not-allowed",
        }),
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

export const RedButton = memo((props) => {
  return <Button {...props} color={props.active ? "red" : "lightcoral"} />;
});
RedButton.propTypes = {
  active: PropTypes.bool.isRequired,
};

export const GreenButton = (props) => {
  return <Button {...props} color={props.active ? "#89DE5E" : "#B1DC9C"} />;
};
GreenButton.propTypes = {
  active: PropTypes.bool.isRequired,
};
