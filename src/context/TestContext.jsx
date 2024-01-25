import { createContext, useContext, useState } from "react";

export const TestContext = createContext({});

export const TestContextProvider = ({ children }) => {
  const [testData, setTestData] = useState(null);
  const [userAnswers, setUserAnswers] = useState(null);
  const [testAnswers, setTestAnswers] = useState(null);

  return (
    <TestContext.Provider
      value={{
        testData,
        userAnswers,
        testAnswers,
        setTestData,
        setUserAnswers,
        setTestAnswers,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => useContext(TestContext);
