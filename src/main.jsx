import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./app/error/Page.jsx";
import AboutPage from "./app/about/Page.jsx";
import LegalPage from "./app/legal/Page.jsx";
import ResourcesPage from "./app/resources/Page.jsx";
import ResourceItem from "./app/resources/Resource.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ResourcesPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/legal",
        element: <LegalPage />,
      },
      {
        path: "/resources/:slug",
        element: <ResourceItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
