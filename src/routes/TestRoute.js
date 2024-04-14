// import TestApi from "../views/test/TestApi";
import TestSimple from "../views/test/TestSimple";

const route = {
  // element: <DashboardLayout />,
  path: "/test",
  children: [
    // TestCoSportSchoolInfoCard
    { path: "simple", element: <TestSimple /> },
    // { path: "api", element: <TestApi /> },

  ],
};

export default route;
