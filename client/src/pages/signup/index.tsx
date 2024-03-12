import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { setUser } from "../../redux/features/auth/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const signup = () => {
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!username.trim()) {
      toast.error("Username is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (!showPassword && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const user = {
      id: "001",
      username: username,
      email: email,
    };

    toast.success("Sign up successful!");
    console.log("Signed up with", { email, username, password });

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
            <Icon icon="entypo:email" width={20} height={20} />
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="pl-10 pr-4 py-2 w-80 rounded-full outline-none ring-1 ring-gray-300 focus:ring-gray-500"
            placeholder="Email"
          />
        </div>
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
        {!showPassword && (
          <div className="relative mt-4">
            <div className="absolute top-0 left-0 mt-2.5 ml-3">
              <Icon icon="codicon:check-all" width={20} height={20} />
            </div>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="pl-10 pr-4 py-2 w-80 rounded-full outline-none ring-1 ring-gray-300 focus:ring-gray-500"
              placeholder="Confirm Password"
            />
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-2">
        <Icon icon="fa6-brands:cc-paypal" height="32" />
        <Icon icon="fa6-brands:cc-stripe" height="32" />
        <Icon icon="fa6-brands:cc-visa" height="32" />
        <Icon icon="fa6-brands:bitcoin" height="32" />
        <Icon icon="fa6-brands:cc-amazon-pay" height="32" />
        <Icon icon="fa6-brands:cc-apple-pay" height="32" />
      </div>
      <div className="mt-8 flex justify-around w-80">
        <button
          className="w-32 rounded-full bg-gray-300 text-black px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-gray-500 hover:opacity-80 hover:shadow-lg transition-opacity duration-150 ease-in-out"
          onClick={() => navigate("/auth/login")}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              navigate("/auth/login");
            }
          }}
          type="button"
        >
          Back
        </button>
        <button
          className="w-32 rounded-full bg-blue-500 text-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-gray-500 hover:opacity-80 hover:shadow-lg transition-opacity duration-150 ease-in-out"
          onClick={signup}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              signup();
            }
          }}
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
