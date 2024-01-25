import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import BaseTemplate from "./BaseTemplate/BaseTemplate";

import { GreenButton } from "../atoms";
import { ButtonsGroup } from "../organisms";

const MainTemplate = ({ answersAvailable = false }) => {
  const navigate = useNavigate();

  return (
    <BaseTemplate style={{ justifyContent: "flex-end" }}>
      <BaseTemplate.Body style={{ paddingBottom: "20vh" }}>
        <ButtonsGroup>
          <GreenButton
            active={!answersAvailable}
            onClick={() => navigate("/test")}
          >
            Realizar prueba
          </GreenButton>
          <GreenButton
            active={answersAvailable}
            onClick={() => navigate("/result")}
          >
            Resultado test
          </GreenButton>
        </ButtonsGroup>
      </BaseTemplate.Body>
    </BaseTemplate>
  );
};

MainTemplate.propTypes = { answersAvailable: PropTypes.bool };

export default MainTemplate;
