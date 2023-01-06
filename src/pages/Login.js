import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const { name, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    //redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative flex flex-col justify-center md:min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-indigo-900 rounded-md shadow-lg lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white ">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-white">
              Name
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="inline-name"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-white">
              Password
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="inline-password"
              type="password"
              name="password"
              placeholder="******************"
              value={password}
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
          <a
            href="localhost:3000/register"
            className="text-xs text-white hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-white">
          {" "}
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-700 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
