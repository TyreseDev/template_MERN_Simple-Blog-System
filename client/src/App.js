import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./pages/home";
import NewBlog from "./pages/newBlog";
import BlogPost from "./pages/blogPost";
import "./index.css";
import Header from "./components/header";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
};

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
    element: <Navigate to="/home" />,
  },
]);

function App() {
  return (
    <React.Fragment>
      <Provider template={AlertTemplate} {...options}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </React.Fragment>
  );
}

export default App;
