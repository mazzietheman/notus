import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Index from "./pages/index";

import Admin from "./layouts/Admin";
import Dashboard from "./pages/admin/dashboard";
import Settings from "./pages/admin/settings";
import Tables from "./pages/admin/tables";
import Maps from "./pages/admin/maps";
import Users from "./pages/admin/users";
import UserForm from "./pages/admin/userForm";
import Auth from "./layouts/Auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Landing from "./pages/landing";
import Profile from "./pages/profile";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import ProfileForm from "./pages/profileForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "tables",
        element: <Tables />,
      },
      {
        path: "maps",
        element: <Maps />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "userform",
        element: <UserForm />,
      },

      {
        path: "userform/:id",
        element: <UserForm />,
      },
    ],
  },

  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile_form",
  },
  element,
  <ProfileForm />,
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
