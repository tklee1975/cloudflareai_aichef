import { Navigate, useRoutes } from "react-router-dom";
/** Layout */
// import DashboardLayout from "../layouts/dashboard";
import SimpleLayout from "../layouts/simple";
/** Auth */

// import DemoPage from "../views/DemoPage";
import TestRoutes from "./TestRoute";

// ----------------------------------------------------------------------

export default function Router() {

  const routes = useRoutes([
    TestRoutes,
  ]);

  return routes;
}
