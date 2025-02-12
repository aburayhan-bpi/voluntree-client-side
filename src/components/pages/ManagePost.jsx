import { NavLink, Outlet } from "react-router-dom";

const ManagePost = () => {
  // document.title = "Manage Posts | Voluntree";
  return (
    <div className="md:flex min-h-screen rounded-r-2xl">
      {/* Sidebar */}
      <div className="md:w-72 bg-green-600 text-white p-4 shadow-md rounded-l-lg">
        <h2 className="text-2xl font-bold mb-6">Manage Posts</h2>
        <ul className="menu space-y-2">
          <li>
            <NavLink
              to="/manage-posts"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Volunteer Need Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-posts/my-request-post"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Volunteer Request Posts
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <Outlet /> {/* This will render child routes */}
      </div>
    </div>
  );
};

export default ManagePost;
