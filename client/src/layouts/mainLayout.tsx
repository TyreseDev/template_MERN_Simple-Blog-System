import { Outlet } from "react-router-dom";
import Header from "../components/header";

const MainLayout: React.FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default MainLayout;
