import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer draggable />
  </>
);

export default App;
