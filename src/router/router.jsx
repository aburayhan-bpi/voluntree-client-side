import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllVolunteers from "../components/pages/AllVolunteers";
import Home from "../components/pages/Home";
import AddVolunteer from "../components/pages/AddVolunteer";
import ManagePost from "../components/pages/ManagePost";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import { fetchPostsData } from "../utils/dataLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-volunteers",
        element: <AllVolunteers></AllVolunteers>,
        loader: fetchPostsData,
      },
      {
        path: "/add-volunteer",
        element: <AddVolunteer></AddVolunteer>,
      },
      {
        path: "/manage-posts",
        element: <ManagePost></ManagePost>,
      },
    ],
  },
]);

export default router;
