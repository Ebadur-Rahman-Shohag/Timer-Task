import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import FormPage from "./pages/FormPage";
import ResultPage from "./pages/ResultPage";
import Error from "./components/Error";
import ErrorElement from "./components/ErrorElement";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      /*An index route can be thought of as a default child route. In React Router, if no children match a parent route, it will display an index route if one is defined. An index route has no path and instead has an index Boolean property*/
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "form",
        element: <FormPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "result",
        element: <ResultPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*Create a simulated web application running a random timer using service worker which returns a boolean. In case of true, open a new window where a timer runs until the window is closed. When closed, store the last timer value in the local storage. While the timer window is opened, the main window should open a new route/page containing two form field and a submit button but you should also be able to navigate to other route as wish. Clicking on the submit button will close the other window if opened and show the entered form field and timer values in a new route.
 */
