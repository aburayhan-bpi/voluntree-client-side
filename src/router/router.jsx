import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllVolunteers from "../components/pages/AllVolunteers";
import Home from "../components/pages/Home";
import AddVolunteer from "../components/pages/AddVolunteer";
import ManagePost from "../components/pages/ManagePost";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import { fetchPostsData } from "../utils/fetchPostsData";
import PostDetails from "../components/pages/PostDetails";
import { fetchSinglePostData } from "../utils/fetchSinglePostData";
import MyRequestPosts from "../components/pages/MyRequestPosts";
import MyVolunteerPosts from "../components/pages/MyVolunteerPosts";
import ErrorPage from "../components/pages/ErrorPage";
import UpdatePostPage from "../components/pages/UpdatePostPage";
import { singlePostToUpdate } from "../utils/fetchSinglePostToUpdate";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: fetchPostsData,
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
        path: "/post-details/:id",
        element: (
          <PrivateRoute>
            <PostDetails></PostDetails>
          </PrivateRoute>
        ),
        // loader: fetchSinglePostData,
      },
      {
        path: "/add-volunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-posts",
        element: (
          <PrivateRoute>
            <ManagePost></ManagePost>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/manage-posts",
            element: (
              <PrivateRoute>
                <MyVolunteerPosts></MyVolunteerPosts>
              </PrivateRoute>
            ),
          },
          {
            path: "/manage-posts/my-request-post",
            element: (
              <PrivateRoute>
                <MyRequestPosts></MyRequestPosts>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/posts/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePostPage></UpdatePostPage>
          </PrivateRoute>
        ),
        // loader: singlePostToUpdate,
      },
    ],
  },
]);

export default router;
