import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Bills from "../components/Bills";
import PayBill from "../components/PayBill";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";

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
        element: (
          <PrivateRoute>
            <Bills></Bills>
          </PrivateRoute>
        ),
      },
      {
        path: "payBill/:id",
        element: (
          <PrivateRoute>
            <PayBill></PayBill>
          </PrivateRoute>
        ),
      },
      {
        path:'profile',
        Component: MyProfile

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
    Component: ErrorPage
  },
]);

export default router;
