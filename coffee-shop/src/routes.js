import Home from "./pages/Home";
import Details from "./pages/Details";
import Order from "./pages/Order";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);
export default router;
