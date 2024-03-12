import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { logout } from "../redux/features/auth/authSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="h-[10vh] w-screen bg-gray-200 flex items-center justify-between px-10">
      <div className="flex items-center gap-4">
        {/* Title */}
        <Icon icon="simple-icons:microdotblog" width={32} height={32} />
        <h1 className="text-2xl ">Blogging System using MERN</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            className="w-80 pl-10 pr-4 py-2 rounded-full outline-none ring-1 ring-gray-300 focus:ring-gray-500"
            placeholder="Search..."
          />
          <div className="absolute top-0 left-0 mt-2 ml-3">
            <Icon
              icon="lets-icons:search-duotone-line"
              width="24"
              height="24"
            />
          </div>
        </div>

        {/* User Avatar */}
        <div className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full cursor-pointer relative">
          <Icon icon="ooui:user-active" width="16" height="16" />
        </div>

        {/* Logout Button */}
        <div className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full cursor-pointer relative">
          <Icon
            onClick={handleLogout}
            icon="icon-park:logout"
            width="16"
            height="16"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
