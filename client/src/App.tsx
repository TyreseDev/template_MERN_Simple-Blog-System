import type React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import NewBlog from "./pages/newBlog";
import BlogPost from "./pages/blogPost";
import Header from "./components/header";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/new-blog",
    element: <NewBlog />,
  },
  {
    path: "/blog-post/:bid",
    element: <BlogPost />,
  },
  {
    path: "/*",
    element: <Navigate to="/home" replace />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <ToastContainer draggable />
    </>
  );
};

export default App;
