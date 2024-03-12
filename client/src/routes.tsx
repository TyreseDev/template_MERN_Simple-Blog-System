import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";
import NewBlog from "./pages/newBlog";
import BlogPage from "./pages/blog";
import Login from "./pages/login";
import Signup from "./pages/signup";
import RequireAuth from "./components/requireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/new-blog",
        element: <NewBlog />,
      },
      {
        path: "/blog/:bid",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
