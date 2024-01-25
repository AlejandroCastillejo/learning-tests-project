import { useEffect } from "react";
import { MainTemplate } from "../../components/templates";
import { useTestContext } from "../../context/TestContext";

const MainPage = () => {
  const { testData, userAnswers } = useTestContext();

  const answersAvailable = !!testData && !!userAnswers;

  return (
    <>
      <MainTemplate answersAvailable={answersAvailable} />
    </>
  );
};

export default MainPage;
