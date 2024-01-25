import { useEffect } from "react";

import { getTestResult } from "../../services/tests-api";
import { useTestContext } from "../../context/TestContext";

import { Loading } from "../../components/organisms";
import { ResultTemplate } from "../../components/templates";

const ResultPage = () => {
  const { testData, userAnswers, testAnswers, setTestAnswers } =
    useTestContext();

  useEffect(() => {
    //ToDo: get testId from URL param
    getTestResult("struc3").then((res) => {
      setTestAnswers(res.data.answers);
    });
  }, []);

  return (
    <>
      {testData?.questions && userAnswers && testAnswers ? (
        <ResultTemplate
          testData={testData}
          testAnswers={testAnswers}
          userAnswers={userAnswers}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ResultPage;
