import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //get user from the state -> auth
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="navbar bg-gradient-to-r from-indigo-900 to-purple-900 py-2  md:flex justify-between">
      <button
        onClick={() => navigate("/")}
        className="block btn btn-ghost font-bold text-xl "
      >
        Helpdesk Hero
      </button>

      <button
        onClick={() => navigate("/about")}
        className="hidden md:block btn btn-ghost font-bold text-xl "
      >
        About
      </button>

      {user ? (
        <>
          <button
            className=" md:block text-center btn font-bold text-xl btn-ghost flex items-center justify-center"
            onClick={onLogout}
          >
            Logout
          </button>
          <h2 className="hidden md:block font-bold text-xl mr-2">
            Hello, {user.name}!
          </h2>
        </>
      ) : (
        <>
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block btn btn-ghost font-bold text-xl"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="md:block btn btn-ghost font-bold text-xl"
          >
            Register
          </button>
        </>
      )}
    </div>
  );
}

export default Navbar;
