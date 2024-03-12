import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const login = () => {
    if (!username.trim()) {
      toast.error("Please enter your username.");
      return;
    }
    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    const user = {
      id: "001",
      username: username,
      email: "user@example.com",
    };

    toast.success("Login successful!");
    console.log("Logged in with", { username, password });

    dispatch(setUser(user));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", "true");
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold">Welcome to Our Blogging System</h2>
      <div className="mt-8 flex items-center justify-center w-16 h-16 bg-gray-400 rounded-full cursor-pointer">
        <Icon icon="ooui:user-active" width="32" height="32" />
      </div>
      <div className="mt-4">
        <div className="relative mt-4">
          <div className="absolute top-0 left-0 mt-2.5 ml-3">
            <Icon icon="fa-solid:user-shield" width={20} height={20} />
          </div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="pl-10 pr-4 py-2 w-80 rounded-full outline-none ring-1 ring-gray-300 focus:ring-gray-500"
            placeholder="Username"
          />
        </div>
        <div className="relative mt-4">
          <div className="absolute top-0 left-0 mt-2.5 ml-3">
            <Icon icon="carbon:password" width={20} height={20} />
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            className="pl-10 pr-4 py-2 w-80 rounded-full outline-none ring-1 ring-gray-300 focus:ring-gray-500"
            placeholder="Password"
          />
          <div
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={togglePasswordVisibility}
            onKeyUp={() => {}}
          >
            <Icon
              icon={showPassword ? "basil:eye-solid" : "basil:eye-closed-solid"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-around w-80">
        <button
          className="w-32 rounded-full bg-blue-500 text-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-gray-500 hover:opacity-80 hover:shadow-lg transition-opacity duration-150 ease-in-out"
          onClick={login}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              login();
            }
          }}
          type="submit"
        >
          Login
        </button>
        <button
          className="w-32 rounded-full bg-gray-300 text-black px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-gray-500 hover:opacity-80 hover:shadow-lg transition-opacity duration-150 ease-in-out"
          onClick={() => navigate("/auth/signup")}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              navigate("/auth/signup");
            }
          }}
          type="button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
