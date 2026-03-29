import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Zulfa from "./pages/zulfa.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/zulfa",
    element: <Zulfa/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);