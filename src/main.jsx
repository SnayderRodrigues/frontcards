import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MainPage from "./app/main/Page.jsx";
import ErrorPage from "./app/error/Page.jsx";
import FavoritesPage from "./app/favorites/Page.jsx";
import AboutPage from "./app/about/Page.jsx";
import LegalPage from "./app/legal/Page.jsx";
import ResourcePage from "./app/resources/Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
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
        element: <ResourcePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
