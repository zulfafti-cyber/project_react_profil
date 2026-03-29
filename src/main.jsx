import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Zulfa from "./pages/zulfa.jsx"
import Lanika from "./pages/lanika.jsx"
import Kayla from "./pages/kayla.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/zulfa",
    element: <Zulfa/>
  },
  {
    path: "/lanika",
    element: <Lanika/>
  },
  {
    path: "/kayla",
    element: <Kayla/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);