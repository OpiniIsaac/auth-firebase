import { createBrowserRouter } from "react-router-dom";
import LogInPage from "../Pages/LogInPage";
import Dashboard from "../Pages/Dashboard";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
     path: "/signUp",
     element: <SignUp />,
   },
]);

export default router;
