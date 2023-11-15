import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import NewStudent from "./features/students/NewStudent";
// import Student from "./features/students/Student";
import AllStudents from "./features/students/AllStudents";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <AuthForm /> },
      { path: "/students", element: <AllStudents /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/NewStudent", element: <NewStudent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
