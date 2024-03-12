import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";
import NewBlog from "./pages/newBlog";
import BlogPost from "./pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        element: <BlogPost />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
]);

export default router;
