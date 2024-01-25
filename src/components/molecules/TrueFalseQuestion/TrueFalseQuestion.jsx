import React, { memo } from "react";
import PropTypes from "prop-types";

import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";

import "./TrueFalseQuestion.scss";

const TrueFalseQuestion = ({
  questionId,
  questionText,
  addAnswer,
  isTrue,
  underlineTrue,
  underlineFalse,
}) => {
  return (
    <div className="true-false-question">
      <p>{questionText}</p>
      <div className="choices">
        <CheckboxWithLabel
          label={"Verdadero"}
          checked={isTrue === true}
          clickable={!!addAnswer}
          onClick={() => addAnswer && addAnswer(questionId, true)}
          underlineColor={underlineTrue}
        />
        <CheckboxWithLabel
          label={"Falso"}
          checked={isTrue === false}
          clickable={!!addAnswer}
          onClick={() => addAnswer && addAnswer(questionId, false)}
          underlineColor={underlineFalse}
        />
      </div>
    </div>
  );
};

TrueFalseQuestion.propTypes = {
  questionId: PropTypes.string,
  questionText: PropTypes.string,
  addAnswer: PropTypes.func,
  isTrue: PropTypes.bool,
  underlineTrue: PropTypes.string,
  underlineFalse: PropTypes.string,
};

export default memo(TrueFalseQuestion);
