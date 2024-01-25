import { useEffect } from "react";

import { getTestData } from "../../services/tests-api";
import { useTestContext } from "../../context/TestContext";

import { TestTemplate } from "../../components/templates";
import { Loading } from "../../components/organisms";

const TestPage = () => {
  const { testData, setTestData } = useTestContext();

  useEffect(() => {
    //ToDo: get testId from URL param
    getTestData("struc3").then((res) => {
      setTestData(res.data);
    });
  }, []);

  return (
    <>
      {testData?.questions ? <TestTemplate testData={testData} /> : <Loading />}
    </>
  );
};

export default TestPage;
