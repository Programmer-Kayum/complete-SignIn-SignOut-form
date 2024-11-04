import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SignIn from "./components/SignIn.jsx";
import Register from "./components/Register.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Courses from "./components/Courses.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/reg",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
