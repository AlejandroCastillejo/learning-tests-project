import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { TestContextProvider } from "./context/TestContext";

import { MainPage, ResultPage, TestPage } from "./pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

function App() {
  return (
    <>
      <TestContextProvider>
        <RouterProvider router={router} />
      </TestContextProvider>
    </>
  );
}

export default App;
