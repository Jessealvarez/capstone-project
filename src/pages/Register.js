import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import LoadingSpinner from "../components/LoadingSpinner";

function Register() {
  //single form data object instead of multiple fields
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
  });

  const { name, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
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
    console.log("Testing onSubmit for /register");
    if (password !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        password,
      };
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form
      className="w-full max-w-lg pl-20"
      id="register-form"
      onSubmit={onSubmit}
    >
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-name"
            type="text"
            name="name"
            placeholder="******************"
            value={name}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="******************"
            name="password"
            value={password}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
      </div>
      {/* PASSWORD CONFIRM */}
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Re-Type Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="******************"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-200 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="btn btn-ghost hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
