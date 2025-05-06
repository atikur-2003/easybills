import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Bills from "../components/Bills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "bills",
        Component: Bills
      }
    ],
  },
  
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "signin",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "*",
    element: <h2>404 not found</h2>,
  },
]);

export default router;
