import mockData from "../mock-data/test-execise.json";
import { delay } from "../utils/delay";

// mock API requests
export const getTestData = async (testId) => {
  await delay(2000);

  try {
    const testData = mockData[testId];
    return {
      data: {
        test_type: testData?.test_type,
        test_info: testData?.test_info,
        questions: testData?.questions,
      },
    };
  } catch {
    //ToDo: catch errors
  }
};

export const getTestResult = async (testId) => {
  await delay(2000);

  try {
    const testData = mockData[testId];
    return {
      data: {
        answers: testData?.answers,
      },
    };
  } catch {
    //ToDo: catch errors
  }
};
