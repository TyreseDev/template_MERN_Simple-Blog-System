import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";
import NewBlog from "./pages/newBlog";
import BlogPost from "./pages/blogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "new-blog",
        element: <NewBlog />,
      },
      {
        path: "blog-post/:bid",
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
